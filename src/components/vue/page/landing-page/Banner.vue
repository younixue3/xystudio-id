<script>
export default {
  data() {
    return {
      currentSlide: 0,
      autoPlayInterval: null,
      SLIDE_INTERVAL: 5000, // 5 seconds
      heroSlides: [
        {
          title: 'Capturing Your Best Moments',
          subtitle: 'Professional Photography & Videography for Every Occasion',
          ctaText: 'View Portfolio',
          ctaLink: '#gallery',
          bgImage:
            'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80'
        },
        {
          title: 'Creative Visual Storytelling',
          subtitle: 'Let us tell your story through our lens',
          ctaText: 'Our Services',
          ctaLink: '#services',
          bgImage:
            'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=80'
        },
        {
          title: 'Book Your Session Today',
          subtitle: 'Contact us for personalized packages',
          ctaText: 'Contact Us',
          ctaLink: '#contact',
          bgImage:
            'https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=1920&q=80'
        }
      ]
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.heroSlides.length) %
        this.heroSlides.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
      this.resetAutoPlay();
    },
    startAutoPlay() {
      this.autoPlayInterval = setInterval(this.nextSlide, this.SLIDE_INTERVAL);
    },
    resetAutoPlay() {
      if (this.autoPlayInterval) {
        clearInterval(this.autoPlayInterval);
        this.startAutoPlay();
      }
    }
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeUnmount() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }
};
</script>

<template>
  <section
    id="banner"
    class="relative h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden"
  >
    <div class="absolute inset-0">
      <transition name="fade" mode="out-in">
        <img
          :src="heroSlides[currentSlide].bgImage"
          :key="currentSlide"
          :alt="`${heroSlides[currentSlide].title} background`"
          class="w-full h-full object-cover opacity-30 grayscale transition-all duration-700"
          @load="$event.target.classList.add('loaded')"
        />
      </transition>
    </div>
    <div class="relative w-full h-full z-10">
      <div class="relative h-full">
        <transition-group name="slide" tag="div" class="flex h-full">
          <div
            v-for="(slide, idx) in heroSlides"
            :key="idx"
            class="absolute w-full h-full flex flex-col items-center justify-center px-4 md:px-8"
            :class="{ 'opacity-0 pointer-events-none': idx !== currentSlide }"
            :aria-hidden="idx !== currentSlide"
          >
            <div
              class="max-w-4xl text-center transform transition-all duration-700"
              :class="{
                'translate-y-0 opacity-100': idx === currentSlide,
                'translate-y-8 opacity-0': idx !== currentSlide
              }"
            >
              <h1
                class="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl"
              >
                {{ slide.title }}
              </h1>
              <p
                class="text-lg sm:text-xl md:text-2xl text-white mb-8 drop-shadow-xl max-w-2xl mx-auto leading-relaxed"
              >
                {{ slide.subtitle }}
              </p>
              <a
                :href="slide.ctaLink"
                class="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-black rounded-full font-bold text-base sm:text-lg shadow-xl hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-white/50"
              >
                {{ slide.ctaText }}
              </a>
            </div>
          </div>
        </transition-group>
      </div>
      <!-- Carousel Controls -->
      <button
        @click="prevSlide"
        class="absolute left-4 cursor-pointer md:left-8 top-1/2 -translate-y-1/2 rounded-full p-3 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <i class="fas fa-chevron-left text-3xl text-white"></i>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-4 cursor-pointer md:right-8 top-1/2 -translate-y-1/2 rounded-full p-3 bg-black/20 backdrop-blur-sm transition-all duration-300 hover:bg-black/40 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <i class="fas fa-chevron-right text-3xl text-white"></i>
      </button>
      <!-- Dots -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center space-x-4 z-20"
      >
        <button
          v-for="(_, idx) in heroSlides"
          :key="idx"
          @click="goToSlide(idx)"
          :class="[
            'w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50',
            currentSlide === idx
              ? 'bg-white scale-125'
              : 'bg-white/40 hover:bg-white/60'
          ]"
          :aria-label="`Go to slide ${idx + 1}`"
          :aria-current="currentSlide === idx"
        ></button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.05);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

img {
  opacity: 0;
  transition: opacity 0.5s ease-in;
}

img.loaded {
  opacity: 0.3;
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active,
  .slide-enter-active,
  .slide-leave-active {
    transition: none;
  }
}
</style>

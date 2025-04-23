<template>
  <div>
    <Header />
    <main>
      <!-- 1. Hero Banner Section with Carousel -->
      <section id="banner" class="relative h-screen w-full flex flex-col justify-center items-center bg-black">
        <div class="absolute inset-0">
          <transition name="fade" mode="out-in">
            <img :key="currentSlide" :src="heroSlides[currentSlide].bgImage" alt="Hero Background" class="w-full h-full object-cover opacity-30 grayscale transition-all duration-700" />
          </transition>
        </div>
        <div class="relative w-full h-full z-10">
          <div class="relative h-full overflow-hidden">
            <div class="flex h-full transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
              <div v-for="(slide, idx) in heroSlides" :key="idx" class="min-w-full h-full flex flex-col items-center justify-center px-4 md:px-8">
                <div class="max-w-4xl text-center">
                  <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl animate-fade-in">{{ slide.title }}</h1>
                  <p class="text-xl md:text-2xl text-white mb-8 drop-shadow-xl max-w-2xl mx-auto leading-relaxed">{{ slide.subtitle }}</p>
                  <a :href="slide.ctaLink" class="inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 active:scale-95">{{ slide.ctaText }}</a>
                </div>
              </div>
            </div>
            <!-- Carousel Controls -->
            <button @click="prevSlide" class="absolute left-4 cursor-pointer md:left-8 top-1/2 -translate-y-1/2 rounded-full p-3 transition-all duration-300 scale-150 hover:scale-200 focus:outline-none">
              <span class="material-icons text-3xl text-white">chevron_left</span>
            </button>
            <button @click="nextSlide" class="absolute right-4 cursor-pointer md:right-8 top-1/2 -translate-y-1/2 rounded-full p-3 transition-all duration-300 scale-150 hover:scale-200 focus:outline-none">
              <span class="material-icons text-3xl text-white">chevron_right</span>
            </button>
            <!-- Dots -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center space-x-4 z-20">
              <button 
                v-for="(slide, idx) in heroSlides" 
                :key="idx" 
                @click="goToSlide(idx)" 
                :class="[
                  'w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50',
                  currentSlide === idx ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
                ]"
                :aria-label="`Go to slide ${idx + 1}`"
              ></button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 2. Service Card Section -->
      <section class="py-32 bg-white" id="services">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-20 text-black">Our Services</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div v-for="(service, idx) in services" :key="idx" class="bg-black rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:scale-105 transition-all duration-500 hover:shadow-2xl group">
              <span class="text-7xl mb-8 text-white transform group-hover:scale-110 transition-transform duration-300">{{ service.icon }}</span>
              <h3 class="text-2xl font-bold mb-4 text-white">{{ service.title }}</h3>
              <p class="text-gray-300 text-center text-lg leading-relaxed">{{ service.desc }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- 3. Gallery Section with Random Col Span -->
      <section class="py-32 bg-black" id="gallery">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl md:text-5xl font-bold text-center mb-20 text-white">Gallery</h2>
          <div class="grid grid-cols-2 md:grid-cols-6 gap-8 auto-rows-[250px]">
              <iframe
                class="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-2xl w-full h-full"
                src="https://www.youtube.com/embed/8ui9umU0C2g?mute=1&controls=0&loop=1&playlist=8ui9umU0C2g"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            <div
              v-for="(img, idx) in gallery"
              :key="idx"
              :class="['rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transform hover:scale-105 transition-all duration-500', img.colSpan, img.rowSpan]"
            >
              <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
  
      <!-- 4. Contact Us Section -->
      <section class="py-32 bg-white" id="contact">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 class="text-4xl md:text-5xl font-bold text-black text-center mb-8">Get in touch with us</h2>
          <p class="text-center text-gray-700 mb-16 max-w-3xl mx-auto text-lg">
            Thanks for stopping by! Whether you have a question, comment, or just want to say hi, don't be a stranger. We're here to help, and we love connecting with our clients.
          </p>
          
          <div class="flex flex-col md:flex-row gap-8">
            <!-- Contact Form -->
            <div class="flex-1 bg-gray-50 rounded-3xl shadow-lg p-8">
              <form @submit.prevent class="space-y-6">
                <div class="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    required
                    class="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-black focus:outline-none focus:border-black text-lg transition-all placeholder-gray-500" 
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    required
                    class="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-black focus:outline-none focus:border-black text-lg transition-all placeholder-gray-500" 
                  />
                  <textarea 
                    placeholder="Your Message" 
                    rows="6" 
                    required
                    class="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-white text-black focus:outline-none focus:border-black text-lg transition-all placeholder-gray-500 resize-none"
                  ></textarea>
                </div>
                <button type="submit" class="w-full py-4 bg-black text-white text-lg font-bold rounded-xl hover:bg-gray-900 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl">Send message</button>
              </form>
            </div>
            
            <!-- Contact Info -->
            <div class="md:w-96 space-y-8">
              <!-- Chat to us -->
              <div class="mb-8">
                <h3 class="text-2xl font-bold mb-2">Chat to us</h3>
                <p class="text-gray-600 mb-1">Our friendly team is here to help.</p>
                <a href="mailto:info@xystudio.com" class="text-black font-medium hover:underline">info@xystudio.com</a>
              </div>
              
              <!-- Call us -->
              <div class="mb-8">
                <h3 class="text-2xl font-bold mb-2">Call us</h3>
                <p class="text-gray-600 mb-1">Mon-Fri from 9am to 5pm</p>
                <a href="tel:+6281234567890" class="text-black font-medium hover:underline">+62 812-3456-7890</a>
              </div>
              
              <!-- Visit us -->
              <div class="mb-8">
                <h3 class="text-2xl font-bold mb-2">Visit us</h3>
                <p class="text-gray-600 mb-1">Come say hello at our office</p>
                <address class="text-black font-medium not-italic">
                  123 Photography St.<br>
                  Jakarta, Indonesia
                </address>
              </div>
              
              <!-- Hours -->
              <div>
                <h3 class="text-2xl font-bold mb-2">Hours</h3>
                <p class="text-gray-600">Monday-Friday: 9am-5pm</p>
                <p class="text-gray-600">Saturday: 10am-4pm</p>
                <p class="text-gray-600">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Header from './Header.vue'
import Footer from './Footer.vue'

// Hero Carousel Data
const heroSlides = [
  { 
    title: 'Capturing Your Best Moments',
    subtitle: 'Professional Photography & Videography for Every Occasion',
    ctaText: 'View Portfolio',
    ctaLink: '#gallery',
    bgImage: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=80'
  },
  {
    title: 'Creative Visual Storytelling',
    subtitle: 'Let us tell your story through our lens',
    ctaText: 'Our Services',
    ctaLink: '#services',
    bgImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=80'
  },
  {
    title: 'Book Your Session Today',
    subtitle: 'Contact us for personalized packages',
    ctaText: 'Contact Us',
    ctaLink: '#contact',
    bgImage: 'https://images.unsplash.com/photo-1516724562728-afc824a36e84?auto=format&fit=crop&w=1920&q=80'
  }
]

const currentSlide = ref(0)
let slideInterval = null

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % heroSlides.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + heroSlides.length) % heroSlides.length
}

function goToSlide(idx) {
  currentSlide.value = idx
  resetAutoSlide()
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 6000)
}

function stopAutoSlide() {
  if (slideInterval) clearInterval(slideInterval)
}

function resetAutoSlide() {
  stopAutoSlide()
  startAutoSlide()
}

onMounted(() => {
  startAutoSlide()
  // Preload images
  heroSlides.forEach(slide => {
    const img = new Image()
    img.src = slide.bgImage
  })
})

onUnmounted(stopAutoSlide)

// Services Data
const services = [
  { 
    icon: '📸', 
    title: 'Photography', 
    desc: 'Portraits, weddings, events, and commercial photography with a creative touch.' 
  },
  { 
    icon: '🎬', 
    title: 'Videography', 
    desc: 'Professional video production for events, promos, and storytelling.' 
  },
  { 
    icon: '🖥️', 
    title: 'Editing & Retouch', 
    desc: 'High-end photo and video editing to make every shot perfect.' 
  }
]

// Gallery Data with optimized image loading
const gallery = [
  { 
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80', 
    alt: 'Portrait Photography', 
    colSpan: '', 
    rowSpan: '' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1920&q=80', 
    alt: 'Event Photography', 
    colSpan: '', 
    rowSpan: '' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1920&q=80', 
    alt: 'Nature Photography', 
    colSpan: 'col-span-2', 
    rowSpan: '' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=1920&q=80', 
    alt: 'Studio Photography', 
    colSpan: '', 
    rowSpan: 'row-span-2' 
  },
  { 
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80', 
    alt: 'Product Photography', 
    colSpan: '', 
    rowSpan: '' 
  }
]
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

@keyframes fade-in {
  from { 
    opacity: 0; 
    transform: translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateY(0); 
  }
}

.animate-fade-in {
  animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
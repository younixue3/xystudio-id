<script>
  import { onMount, onDestroy } from 'svelte';

  export let slides;

  let currentSlide = 0;
  let slideInterval;

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  }

  function goToSlide(idx) {
    currentSlide = idx;
    resetAutoSlide();
  }

  function startAutoSlide() {
    slideInterval = setInterval(nextSlide, 6000);
  }

  function stopAutoSlide() {
    if (slideInterval) clearInterval(slideInterval);
  }

  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }

  onMount(() => {
    startAutoSlide();
    // Preload images
    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.bgImage;
    });
  });

  onDestroy(stopAutoSlide);
</script>

<div
  class="relative h-screen w-full flex flex-col justify-center items-center bg-black"
>
  <div class="absolute inset-0">
    {#key currentSlide}
      <img
        src={slides[currentSlide].bgImage}
        alt="Hero Background"
        class="w-full h-full object-cover opacity-30 grayscale transition-all duration-700"
      />
    {/key}
  </div>
  <div class="relative w-full h-full z-10">
    <div class="relative h-full overflow-hidden">
      <div
        class="flex h-full transition-transform duration-700 ease-in-out"
        style="transform: translateX(-{currentSlide * 100}%)"
      >
        {#each slides as slide, idx}
          <div
            class="min-w-full h-full flex flex-col items-center justify-center px-4 md:px-8"
          >
            <div class="max-w-4xl text-center">
              <h1
                class="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl animate-fade-in"
              >
                {slide.title}
              </h1>
              <p
                class="text-xl md:text-2xl text-white mb-8 drop-shadow-xl max-w-2xl mx-auto leading-relaxed"
              >
                {slide.subtitle}
              </p>
              <a
                href={slide.ctaLink}
                class="inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-lg shadow-xl hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 active:scale-95"
                >{slide.ctaText}</a
              >
            </div>
          </div>
        {/each}
      </div>
      <!-- Carousel Controls -->
      <button
        on:click={prevSlide}
        class="absolute left-4 cursor-pointer md:left-8 top-1/2 -translate-y-1/2 rounded-full p-3 transition-all duration-300 scale-150 hover:scale-200 focus:outline-none"
      >
        <span class="material-icons text-3xl text-white">chevron_left</span>
      </button>
      <button
        on:click={nextSlide}
        class="absolute right-4 cursor-pointer md:right-8 top-1/2 -translate-y-1/2 rounded-full p-3 transition-all duration-300 scale-150 hover:scale-200 focus:outline-none"
      >
        <span class="material-icons text-3xl text-white">chevron_right</span>
      </button>
      <!-- Dots -->
      <div
        class="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center space-x-4 z-20"
      >
        {#each slides as _, idx}
          <button
            on:click={() => goToSlide(idx)}
            class="w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 {currentSlide ===
            idx
              ? 'bg-white scale-125'
              : 'bg-white/40 hover:bg-white/60'}"
            aria-label="Go to slide {idx + 1}"
          ></button>
        {/each}
      </div>
    </div>
  </div>
</div>

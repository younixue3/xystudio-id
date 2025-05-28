<script>
export default {
  data() {
    return {
      gallery: [
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
    };
  }
};
</script>

<template>
  <section class="py-32 bg-black" id="gallery">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-20 text-white">
        Gallery
      </h2>
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
          v-for="img in gallery"
          :key="img.src"
          :class="[
            'rounded-2xl overflow-hidden shadow-2xl group cursor-pointer transform hover:scale-105 transition-all duration-500',
            img.colSpan,
            img.rowSpan
          ]"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>

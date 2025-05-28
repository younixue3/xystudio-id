<script>
export default {
  data() {
    return {
      services: [
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
    };
  }
};
</script>

<template>
  <section class="py-32 bg-white" id="services">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-4xl md:text-5xl font-bold text-center mb-20 text-black">
        Our Services
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          v-for="service in services"
          :key="service.title"
          class="bg-black rounded-3xl shadow-2xl p-10 flex flex-col items-center hover:scale-105 transition-all duration-500 hover:shadow-2xl group"
        >
          <span
            class="text-7xl mb-8 text-white transform group-hover:scale-110 transition-transform duration-300"
            >{{ service.icon }}</span
          >
          <h3 class="text-2xl font-bold mb-4 text-white">
            {{ service.title }}
          </h3>
          <p class="text-gray-300 text-center text-lg leading-relaxed">
            {{ service.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

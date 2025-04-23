<template>
  <header 
    class="fixed top-0 left-0 w-full z-50 transition-transform duration-300"
    :class="{ '-translate-y-full': isHidden }"
  >
    <!-- Logo -->
    <div class="bg-white py-4">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
        <a href="#" class="text-black text-2xl font-bold">XYStudio</a>
      </div>
    </div>

    <!-- Top Bar with Contact Info -->
    <div class="bg-gray-800 text-white py-2">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <!-- Contact Info -->
        <div class="flex items-center text-sm">
          <span class="flex items-center">
            <span class="material-icons text-sm mr-1">schedule</span>
            24/7 
          </span>
          <span class="mx-2">|</span>
          <span class="flex items-center">
            <span class="material-icons text-sm mr-1">phone</span>
            087-3339-0875
          </span>
        </div>
        
        <!-- Right Side Options -->
        <div class="flex items-center space-x-4 text-sm">
          <div class="flex items-center">
            <span>EN</span>
            <span class="material-icons text-sm">expand_more</span>
          </div>
          <div class="flex items-center">
            <span>USD</span>
            <span class="material-icons text-sm">expand_more</span>
          </div>
          <div class="flex items-center space-x-2">
            <span class="material-icons">notifications_none</span>
            <span class="material-icons">person_outline</span>
            <span>LOG IN</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Main Navigation Bar -->
    <div class="bg-white py-4 shadow-md">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8 mx-auto">
          <a 
            v-for="(item, index) in navItems" 
            :key="index" 
            :href="`#${item.id}`"
            class="text-black hover:text-gray-600 uppercase text-sm font-medium transition-colors"
            :class="{ 'text-gray-600': activeSection === item.id }"
          >
            {{ item.label }}
          </a>
        </nav>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="md:hidden text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          <span class="material-icons">{{ isMobileMenuOpen ? 'close' : 'menu' }}</span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div 
      v-if="isMobileMenuOpen" 
      class="md:hidden bg-white absolute w-full py-4 px-4 shadow-lg transition-all duration-300"
    >
      <nav class="flex flex-col space-y-4">
        <a 
          v-for="(item, index) in navItems" 
          :key="index" 
          :href="`#${item.id}`"
          class="text-black hover:text-gray-600 uppercase text-sm font-medium transition-colors"
          :class="{ 'text-gray-600': activeSection === item.id }"
          @click="isMobileMenuOpen = false"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

// Navigation items with section IDs
const navItems = [
  { label: 'Banner', id: 'banner' },
  { label: 'Services', id: 'services' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Contact', id: 'contact' }
];

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Header visibility state
const isHidden = ref(false);
let lastScrollY = 0;

// Active section tracking
const activeSection = ref('home');

// Handle scroll event to show/hide header and update active section
const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  // Show header at the top of the page
  if (currentScrollY < 50) {
    isHidden.value = false;
  } 
  // Hide when scrolling down, show when scrolling up
  else {
    isHidden.value = currentScrollY > lastScrollY;
  }
  
  lastScrollY = currentScrollY;

  // Update active section based on scroll position
  const sections = navItems.map(item => document.getElementById(item.id));
  const currentSection = sections.find(section => {
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    return rect.top <= 100 && rect.bottom >= 100;
  });

  if (currentSection) {
    activeSection.value = currentSection.id;
  }
};

// Add and remove scroll event listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
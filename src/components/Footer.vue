<template>
  <footer class="bg-black text-white py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Logo and About -->
        <div class="col-span-1 md:col-span-2">
          <h2 class="text-2xl font-bold mb-4">XYStudio</h2>
          <p class="text-gray-300 mb-6 max-w-md">
            Professional photography and videography services capturing your most precious moments with creativity and precision.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-gray-300 transition-colors" aria-label="Facebook">
              <span class="material-icons">facebook</span>
            </a>
            <a href="#" class="text-white hover:text-gray-300 transition-colors" aria-label="Instagram">
              <span class="material-icons">instagram</span>
            </a>
            <a href="#" class="text-white hover:text-gray-300 transition-colors" aria-label="YouTube">
              <span class="material-icons">youtube</span>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="(item, index) in navItems" :key="index">
              <a :href="item.href" class="text-gray-300 hover:text-white transition-colors">{{ item.label }}</a>
            </li>
          </ul>
        </div>
        
        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Contact Us</h3>
          <ul class="space-y-2 text-gray-300">
            <li class="flex items-start">
              <span class="material-icons mr-2 text-white">email</span>
              <a href="mailto:info@xystudio.com" class="hover:text-white transition-colors">info@xystudio.com</a>
            </li>
            <li class="flex items-start">
              <span class="material-icons mr-2 text-white">phone</span>
              <a href="tel:+6281234567890" class="hover:text-white transition-colors">+62 812-3456-7890</a>
            </li>
            <li class="flex items-start">
              <span class="material-icons mr-2 text-white">location_on</span>
              <span>123 Photography St.<br>Jakarta, Indonesia</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>&copy; {{ new Date().getFullYear() }} XYStudio. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Navigation items (same as header for consistency)
const navItems = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
];
</script>
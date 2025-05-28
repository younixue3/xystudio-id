<template>
  <div class="flex h-full bg-gradient-to-br from-gray-50 to-gray-100">
    <!-- Sidebar -->
    <div
      class="relative transition-all ease-in-out duration-300"
      :class="[
        sidebarIsCollapsed ? 'w-64 md:w-20 md:hover:w-64' : 'w-0 md:w-64'
      ]"
    >
      <aside
        class="fixed bg-gradient-to-b from-gray-900 to-gray-800 text-white transition-all duration-300 ease-in-out shadow-xl z-50 h-screen backdrop-blur-lg group"
        :class="[
          sidebarIsCollapsed ? 'w-64 md:w-20 md:hover:w-64' : 'w-0 md:w-64'
        ]"
      >
        <div
          class="flex relative items-center justify-between p-6 backdrop-blur-sm"
        >
          <div class="flex">
            <img
              src="/favicon.svg"
              alt="Logo"
              class="h-12 transition-all duration-300 hover:rotate-12"
            />
            <div
              class="my-auto text-xl font-bold whitespace-nowrap overflow-hidden transition-all ease-in-out duration-300"
              :class="
                sidebarIsCollapsed ? 'w-0 md:group-hover:w-32' : 'w-0 md:w-32'
              "
            >
              XY Studio
            </div>
          </div>
          <button
            @click="toggleSidebar"
            class="rounded-lg bg-gray-700 hover:bg-gray-600 transition-all duration-200 hover:scale-110 w-10 h-10 absolute -right-5 backdrop-blur-sm shadow-lg"
            :title="sidebarIsCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'"
          >
            <i
              class="fas transition-transform duration-300"
              :class="sidebarIsCollapsed ? 'fa-bars' : 'fa-xmark'"
            ></i>
          </button>
        </div>
        <nav class="py-6">
          <ul class="space-y-2 px-4">
            <li v-for="item in sidebarMenuItems" :key="item.path">
              <a
                :href="item.path"
                :title="sidebarIsCollapsed ? item.label : ''"
                class="grid grid-cols-12 items-center gap-4 px-4 py-3 w-full rounded-xl transition-all duration-300 backdrop-blur-sm overflow-hidden"
                :class="
                  isCurrentRoute(item.path)
                    ? 'bg-white text-gray-800'
                    : 'text-gray-400 hover:text-white hover:bg-white/10 hover:translate-x-2'
                "
              >
                <i
                  :class="[
                    item.icon,
                    'md:group-hover:scale-110 transition-transform duration-200'
                  ]"
                ></i>
                <span
                  class="font-medium whitespace-nowrap col-start-3 col-span-10"
                >
                  {{ item.label }}
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col transition-all duration-300">
      <!-- Header -->
      <header
        class="sticky top-0 bg-transparent backdrop-blur-lg z-40 h-24 bg-gradient-to-b from-black/20 to-transparent"
      >
        <div class="flex justify-end items-center px-8 h-full">
          <div class="relative" ref="userMenu">
            <div
              class="flex items-center gap-4 p-3 rounded-2xl hover:bg-gray-100/80 transition-all duration-200"
            >
              <img
                :src="userAvatar"
                :alt="username"
                @error="handleAvatarError"
                class="w-12 h-12 rounded-xl object-cover border-2 border-white shadow-lg hover:scale-105 transition-all duration-200 hover:rotate-3"
              />
              <span class="font-semibold text-gray-700 hidden md:block">{{
                username
              }}</span>
              <button
                @click="toggleUserMenu"
                class="p-2 text-gray-500 hover:text-gray-900 transition-all duration-200 hover:scale-110"
              >
                <i
                  class="fas fa-chevron-down transition-transform duration-300"
                  :class="{ 'rotate-180': isUserMenuOpen }"
                ></i>
              </button>
            </div>

            <!-- Dropdown Menu -->
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-200 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div
                v-show="isUserMenuOpen"
                class="absolute right-0 mt-4 w-64 rounded-2xl bg-white/80 backdrop-blur-lg shadow-xl ring-1 ring-black/5 divide-y divide-gray-100 focus:outline-none overflow-hidden"
              >
                <div class="py-2">
                  <a
                    href="/profil"
                    class="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50/80 transition-all duration-200"
                  >
                    <i
                      class="fas fa-user mr-3 md:group-hover:scale-110 transition-transform"
                    ></i>
                    Profile
                  </a>
                  <a
                    href="/settings"
                    class="group flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50/80 transition-all duration-200"
                  >
                    <i
                      class="fas fa-cog mr-3 md:group-hover:scale-110 transition-transform"
                    ></i>
                    Settings
                  </a>
                </div>
                <div class="py-2">
                  <button
                    @click="handleLogout"
                    class="flex w-full items-center px-4 py-3 text-sm text-red-600 hover:bg-red-50/80 group transition-all duration-200"
                  >
                    <i
                      class="fas fa-sign-out-alt mr-3 md:group-hover:scale-110 transition-transform"
                    ></i>
                    Logout
                  </button>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </header>

      <!-- Content Area -->
      <main class="flex-1 p-3 bg-gradient-to-br from-gray-50 to-gray-100">
        <transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 translate-y-4"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition-all duration-300"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 translate-y-4"
        >
          <slot></slot>
        </transition>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Master',
  props: {
    currentPath: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isUserMenuOpen: false,
      isMobile: false,
      sidebarIsCollapsed: false,
      username: 'John Doe',
      userAvatar: 'https://via.placeholder.com/40',
      fallbackAvatar: '/default-avatar.png',
      sidebarMenuItems: [
        {
          path: '/dashboard',
          icon: 'fas fa-tachometer-alt',
          label: 'Dashboard'
        },
        { path: '/blog', icon: 'fas fa-newspaper', label: 'Blog' },
        { path: '/settings', icon: 'fas fa-cog', label: 'Settings' }
      ]
    };
  },
  computed: {
    currentPageTitle() {
      if (typeof document !== 'undefined') {
        return document.title || 'Dashboard';
      }
      return 'Dashboard';
    }
  },
  methods: {
    isCurrentRoute(path) {
      return this.currentPath === path;
    },
    toggleSidebar() {
      this.sidebarIsCollapsed = !this.sidebarIsCollapsed;
    },
    toggleUserMenu(event) {
      event.stopPropagation();
      this.isUserMenuOpen = !this.isUserMenuOpen;
    },
    closeUserMenu(event) {
      if (!event.target.closest('.user-menu')) {
        this.isUserMenuOpen = false;
      }
    },
    closeSidebarOnClickOutside(event) {
      if (this.isMobile && !event.target.closest('.sidebar')) {
        this.sidebarIsCollapsed = true;
      }
    },
    handleAvatarError(e) {
      e.target.src = this.fallbackAvatar;
    },
    async handleLogout() {
      try {
        // Implement your logout logic here
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      } catch (error) {
        console.error('Logout failed:', error);
      }
    }
  },
  mounted() {
    document.addEventListener('click', this.closeUserMenu);
    document.addEventListener('click', this.closeSidebarOnClickOutside);
  },
  unmounted() {
    if (typeof window !== 'undefined') {
      document.removeEventListener('click', this.closeUserMenu);
      document.removeEventListener('click', this.closeSidebarOnClickOutside);
    }
  }
};
</script>

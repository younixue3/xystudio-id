import { defineStore } from 'pinia';

export const useSidebarStore = defineStore('sidebar', {
  state: () => ({
    isSidebarCollapsed: false
  }),
  actions: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
      localStorage.setItem('sidebarState', JSON.stringify(this.isSidebarCollapsed));
    },
    setSidebarCollapsed(value) {
      this.isSidebarCollapsed = value;
      localStorage.setItem('sidebarState', JSON.stringify(value));
    },
    loadSidebarState() {
      const saved = localStorage.getItem('sidebarState');
      this.isSidebarCollapsed = saved !== null ? JSON.parse(saved) : false;
    }
  }
});
import { defineStore } from 'pinia'
import pb from '../pbase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null,
    isAuthenticated: false
  }),

  getters: {
    currentUser: (state) => state.user,
    authToken: (state) => state.token,
    isLoggedIn: (state) => state.isAuthenticated
  },

  actions: {
    async login(email, password) {
      try {
        if (!email || !password) {
          throw new Error('Email and password are required')
        }

        const authData = await pb.collection('users').authWithPassword(email, password)
        
        if (!authData) {
          throw new Error('Authentication failed')
        }

        this.user = pb.authStore.record
        this.token = pb.authStore.token
        this.isAuthenticated = true
        
        return authData
      } catch (error) {
        this.user = null
        this.token = null
        this.isAuthenticated = false
        throw error
      }
    },

    logout() {
      try {
        pb.authStore.clear()
        this.user = null 
        this.token = null
        this.isAuthenticated = false
      } catch (error) {
        console.error('Logout failed:', error)
      }
    },

    async checkAuth() {
      try {
        const isValid = pb.authStore.isValid
        this.isAuthenticated = isValid
        if (isValid) {
          this.user = pb.authStore.record
          this.token = pb.authStore.token
        }
        return isValid
      } catch (error) {
        this.isAuthenticated = false
        return false
      }
    }
  }
})
import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { useAuthStore } from './auth'

export const useLogoutStore = defineStore('logout', () => {
  const router = useRouter()
  const authStore = useAuthStore()

  const logout = async () => {
    try {
      // Clear auth store
      authStore.$reset()
      
      // Redirect to login page
      router.push('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  return {
    logout
  }
})

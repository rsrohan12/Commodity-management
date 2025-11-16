import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  email: string
  role: 'manager' | 'storekeeper'
}

interface AuthStore {
  user: User | null
  isHydrated: boolean
  login: (user: User) => void
  logout: () => void
  restoreFromCookie: () => void
  setHydrated: () => void
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isHydrated: false,
      login: (user: User) => set({ user }),
      logout: () => {
        set({ user: null })
        document.cookie = 'user=; path=/; max-age=0'
      },
      restoreFromCookie: () => {
        const userCookie = document.cookie
          .split('; ')
          .find(row => row.startsWith('user='))
          ?.split('=')[1]
        
        if (userCookie) {
          try {
            const user = JSON.parse(decodeURIComponent(userCookie))
            set({ user, isHydrated: true })
          } catch (error) {
            console.error('Failed to restore user from cookie:', error)
            set({ isHydrated: true })
          }
        } else {
          set({ isHydrated: true })
        }
      },
      setHydrated: () => set({ isHydrated: true }),
    }),
    {
      name: 'auth-store',
    }
  )
)

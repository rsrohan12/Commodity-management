'use client'

import { useEffect } from 'react'
import { useAuthStore } from '@/lib/auth-store'

export function AuthInitializer() {
  useEffect(() => {
    useAuthStore.getState().restoreFromCookie()
  }, [])

  return null
}

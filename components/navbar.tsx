'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/lib/auth-store'
import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  const router = useRouter()
  const { user, logout } = useAuthStore()

  const handleLogout = () => {
    logout()
    router.push('/login')
  }

  return (
    <nav className="border-b bg-card">
      <div className="flex items-center justify-between h-16 px-6">
        <h1 className="font-semibold text-lg dark:text-white">Commodities Management System</h1>
        <div className="flex items-center gap-4">
          {user && <span className="text-sm text-muted-foreground">{user.email}</span>}
          <ThemeToggle />
          <Button variant="outline" className='cursor-pointer dark:text-white' size="sm" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>
    </nav>
  )
}

'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuthStore } from '@/lib/auth-store'
import { cn } from '@/lib/utils'

export function Sidebar() {
  const pathname = usePathname()
  const { user } = useAuthStore()

  const links = [
    {
      href: '/products',
      label: 'Products',
      visible: true,
    },
    {
      href: '/dashboard',
      label: 'Dashboard',
      visible: user?.role === 'manager',
    },
  ]

  return (
    <aside className="w-64 border-r bg-card">
      <div className="p-6">
        <h2 className="font-semibold text-lg mb-8 dark:text-white">Navigation</h2>
        <nav className="space-y-2">
          {links.map(
            (link) =>
              link.visible && (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'block px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                    pathname === link.href
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:bg-muted'
                  )}
                >
                  {link.label}
                </Link>
              )
          )}
        </nav>
      </div>
    </aside>
  )
}

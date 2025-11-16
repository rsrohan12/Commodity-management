'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { ProductForm } from '@/components/product-form'
import { useAuthStore } from '@/lib/auth-store'

export default function AddProductPage() {
  const router = useRouter()
  const { user } = useAuthStore()

  useEffect(() => {
    if (!user) {
      router.push('/login')
    }
  }, [user, router])

  if (!user) return null

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-2xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Add Product</h1>
              <p className="text-muted-foreground mt-1">Create a new commodity</p>
            </div>
            <ProductForm />
          </div>
        </main>
      </div>
    </div>
  )
}

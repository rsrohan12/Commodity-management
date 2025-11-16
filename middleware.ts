import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const role = request.cookies.get('role')?.value
  const pathname = request.nextUrl.pathname

  // Check if user is trying to access protected routes
  if (pathname === '/dashboard' && role !== 'manager') {
    return NextResponse.redirect(new URL('/products', request.url))
  }

  // Allow both roles to access /products and /products/*
  if ((pathname.startsWith('/products') || pathname.startsWith('/dashboard')) && !role) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/products/:path*'],
}

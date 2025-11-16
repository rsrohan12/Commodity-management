import { NextRequest, NextResponse } from 'next/server'
import { products } from '@/lib/products'

let productList = [...products]

export async function GET() {
  return NextResponse.json(productList)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const newProduct = {
      id: Math.max(...productList.map((p) => p.id), 0) + 1,
      ...body,
    }
    productList.push(newProduct)
    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return NextResponse.json({ message: 'Failed to create product' }, { status: 500 })
  }
}

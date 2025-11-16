import { NextRequest, NextResponse } from 'next/server'
import { products } from '@/lib/products'

let productList = [...products]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const product = productList.find((p) => p.id === parseInt(params.id))
  if (!product) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 })
  }
  return NextResponse.json(product)
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const body = await request.json()
    const index = productList.findIndex((p) => p.id === parseInt(params.id))
    if (index === -1) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 })
    }
    productList[index] = { ...productList[index], ...body }
    return NextResponse.json(productList[index])
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update product' }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  const index = productList.findIndex((p) => p.id === parseInt(params.id))
  if (index === -1) {
    return NextResponse.json({ message: 'Product not found' }, { status: 404 })
  }
  productList.splice(index, 1)
  return NextResponse.json({ message: 'Product deleted' })
}

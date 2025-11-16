export interface Product {
  id: number
  name: string
  price: number
  stock: number
  category: string
  description: string
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Wheat',
    price: 200,
    stock: 50,
    category: 'Cereals',
    description: 'High quality wheat for flour production',
  },
  {
    id: 2,
    name: 'Rice',
    price: 150,
    stock: 100,
    category: 'Grains',
    description: 'Premium quality white rice',
  },
  {
    id: 3,
    name: 'Corn',
    price: 180,
    stock: 15,
    category: 'Cereals',
    description: 'Yellow corn for animal feed',
  },
  {
    id: 4,
    name: 'Soybeans',
    price: 280,
    stock: 30,
    category: 'Legumes',
    description: 'Certified organic soybeans',
  },
  {
    id: 5,
    name: 'Barley',
    price: 120,
    stock: 75,
    category: 'Grains',
    description: 'Malting barley for breweries',
  },
  {
    id: 6,
    name: 'Lentils',
    price: 250,
    stock: 8,
    category: 'Legumes',
    description: 'Red lentils for cooking',
  },
  {
    id: 7,
    name: 'Oats',
    price: 140,
    stock: 60,
    category: 'Cereals',
    description: 'Rolled oats for breakfast',
  },
  {
    id: 8,
    name: 'Chickpeas',
    price: 220,
    stock: 25,
    category: 'Legumes',
    description: 'Dried chickpeas for hummus',
  },
]

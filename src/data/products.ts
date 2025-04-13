import { Product } from '../contexts/CartContext'

export const products: Product[] = [
  {
    id: 1,
    name: 'Classic Wooden Frame',
    price: 1200,
    image: '/wooden-frame.jpg',
    description:
      'Elegant wooden frame with a natural finish, perfect for displaying your cherished memories. Made from premium quality wood with precision craftsmanship.',
    category: 'wooden',
    featured: true,
  },
  {
    id: 2,
    name: 'Minimalist Metal Frame',
    price: 1500,
    image: '/metal-frame.jpg',
    description:
      'Sleek and modern metal frame with a slim profile that puts the focus on your photos. Available in matte black finish.',
    category: 'metal',
    featured: true,
  },
  {
    id: 3,
    name: 'Rustic Bamboo Frame',
    price: 950,
    image: '/bamboo-frame.jpg',
    description:
      'Eco-friendly bamboo frame with natural grain patterns, adding warmth and character to your displayed photos.',
    category: 'wooden',
    featured: false,
  },
  {
    id: 4,
    name: 'Ornate Gold Frame',
    price: 2500,
    image: '/gold-frame.jpg',
    description:
      'Luxurious gold-finished frame with intricate detailing, perfect for wedding photos or special occasions.',
    category: 'premium',
    featured: true,
  },
  {
    id: 5,
    name: 'Modern Acrylic Frame',
    price: 1800,
    image: '/acrylic-frame.jpg',
    description:
      'Contemporary acrylic frame with a floating effect that gives your photos a gallery-like presentation.',
    category: 'modern',
    featured: false,
  },
  {
    id: 6,
    name: 'Collage Photo Frame',
    price: 2200,
    image: '/collage-frame.jpg',
    description:
      'Multi-photo frame to display your collection of memories in one elegant arrangement. Fits 5 standard-sized photos.',
    category: 'specialty',
    featured: false,
  },
  {
    id: 7,
    name: 'Vintage Wooden Frame',
    price: 1400,
    image: '/vintage-frame.jpg',
    description:
      'Distressed wooden frame with an antique finish, adding a touch of nostalgia to your displayed photos.',
    category: 'wooden',
    featured: true,
  },
  {
    id: 8,
    name: 'Square Metal Frame',
    price: 1300,
    image: '/square-frame.jpg',
    description:
      'Modern square metal frame, perfect for Instagram prints and square format photos.',
    category: 'metal',
    featured: false,
  },
]

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id)
}

export const getFeaturedProducts = (): Product[] => {
  return products.filter((product) => product.featured)
}

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((product) => product.category === category)
}

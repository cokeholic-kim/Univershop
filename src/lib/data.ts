// This is a mock data service that would be replaced with actual API calls
// to your backend server in a real application

export async function getProducts({ featured = false, limit = 10 } = {}) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 100))

  const allProducts = [
    {
      id: 1,
      name: "Modern Desk Lamp",
      description: "A sleek, adjustable desk lamp with multiple brightness settings.",
      price: 49.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Home & Kitchen",
      stock: 45,
      featured: true,
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      description: "Premium wireless earbuds with noise cancellation and long battery life.",
      price: 129.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electronics",
      stock: 28,
      featured: true,
    },
    {
      id: 3,
      name: "Cotton T-Shirt",
      description: "Soft, breathable cotton t-shirt available in multiple colors.",
      price: 19.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Clothing",
      stock: 150,
      featured: false,
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      description: "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      price: 34.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Home & Kitchen",
      stock: 75,
      featured: true,
    },
    {
      id: 5,
      name: "Leather Wallet",
      description: "Genuine leather wallet with multiple card slots and RFID protection.",
      price: 59.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Accessories",
      stock: 32,
      featured: false,
    },
    {
      id: 6,
      name: "Smart Watch",
      description: "Feature-packed smartwatch with health tracking and notifications.",
      price: 199.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Electronics",
      stock: 18,
      featured: true,
    },
    {
      id: 7,
      name: "Yoga Mat",
      description: "Non-slip, eco-friendly yoga mat with carrying strap.",
      price: 29.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Sports & Outdoors",
      stock: 60,
      featured: false,
    },
    {
      id: 8,
      name: "Ceramic Coffee Mug",
      description: "Handcrafted ceramic coffee mug with unique design.",
      price: 14.99,
      image: "/placeholder.svg?height=300&width=300",
      category: "Home & Kitchen",
      stock: 90,
      featured: true,
    },
  ]

  let filteredProducts = allProducts

  if (featured) {
    filteredProducts = filteredProducts.filter((product) => product.featured)
  }

  return filteredProducts.slice(0, limit)
}

export async function getCategories() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 100))

  return [
    {
      name: "Clothing",
      slug: "clothing",
      image: "/placeholder.svg?height=300&width=300",
      productCount: 120,
      description: "Discover the latest fashion trends and styles",
    },
    {
      name: "Electronics",
      slug: "electronics",
      image: "/placeholder.svg?height=300&width=300",
      productCount: 85,
      description: "Explore cutting-edge technology and gadgets",
    },
    {
      name: "Home & Kitchen",
      slug: "home-kitchen",
      image: "/placeholder.svg?height=300&width=300",
      productCount: 210,
      description: "Everything you need to make your house a home",
    },
    {
      name: "Beauty",
      slug: "beauty",
      image: "/placeholder.svg?height=300&width=300",
      productCount: 150,
      description: "Premium beauty products and skincare essentials",
    },
    {
      name: "Sports & Outdoors",
      slug: "sports-outdoors",
      image: "/placeholder.svg?height=300&width=300",
      productCount: 95,
      description: "Gear up for your active lifestyle",
    },
    {
      name: "Accessories",
      slug: "accessories",
      image: "/placeholder.svg?height=300&width=300",
      productCount: 180,
      description: "Complete your look with our stylish accessories",
    },
  ]
}

export async function getCategory(slug) {
  const categories = await getCategories()
  return categories.find((category) => category.slug === slug) || null
}

export async function getProductsByCategory(categorySlug) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 100))

  const allProducts = await getProducts({ limit: 100 })
  const category = await getCategory(categorySlug)

  if (!category) {
    return []
  }

  return allProducts.filter((product) => product.category.toLowerCase() === category.name.toLowerCase())
}


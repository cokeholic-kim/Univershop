// This is a mock data service that would be replaced with actual API calls
// to your backend server in a real application

export async function getDashboardData() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 300))

  return {
    totalRevenue: 45231.89,
    salesCount: 621,
    productCount: 36,
    customerCount: 1240,
    recentSales: [
      {
        id: 1,
        user: {
          name: "John Smith",
          email: "john.smith@example.com",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        amount: 125.99,
      },
      {
        id: 2,
        user: {
          name: "Sarah Johnson",
          email: "sarah.j@example.com",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        amount: 89.5,
      },
      {
        id: 3,
        user: {
          name: "Michael Brown",
          email: "m.brown@example.com",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        amount: 245.0,
      },
      {
        id: 4,
        user: {
          name: "Emily Davis",
          email: "emily.d@example.com",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        amount: 154.25,
      },
      {
        id: 5,
        user: {
          name: "Robert Wilson",
          email: "r.wilson@example.com",
          avatar: "/placeholder.svg?height=32&width=32",
        },
        amount: 312.75,
      },
    ],
    salesData: [
      {
        name: "Jan",
        total: 4500,
      },
      {
        name: "Feb",
        total: 3800,
      },
      {
        name: "Mar",
        total: 5200,
      },
      {
        name: "Apr",
        total: 4900,
      },
      {
        name: "May",
        total: 5800,
      },
      {
        name: "Jun",
        total: 7200,
      },
      {
        name: "Jul",
        total: 6800,
      },
      {
        name: "Aug",
        total: 7900,
      },
      {
        name: "Sep",
        total: 8100,
      },
      {
        name: "Oct",
        total: 9200,
      },
      {
        name: "Nov",
        total: 10500,
      },
      {
        name: "Dec",
        total: 12000,
      },
    ],
  }
}

export async function getProducts() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 200))

  return [
    {
      id: 1,
      name: "Modern Desk Lamp",
      description: "A sleek, adjustable desk lamp with multiple brightness settings.",
      price: 49.99,
      image: "/placeholder.svg?height=40&width=40",
      category: "Home & Kitchen",
      stock: 45,
      featured: true,
    },
    {
      id: 2,
      name: "Wireless Earbuds",
      description: "Premium wireless earbuds with noise cancellation and long battery life.",
      price: 129.99,
      image: "/placeholder.svg?height=40&width=40",
      category: "Electronics",
      stock: 28,
      featured: true,
    },
    {
      id: 3,
      name: "Cotton T-Shirt",
      description: "Soft, breathable cotton t-shirt available in multiple colors.",
      price: 19.99,
      image: "/placeholder.svg?height=40&width=40",
      category: "Clothing",
      stock: 150,
      featured: false,
    },
    {
      id: 4,
      name: "Stainless Steel Water Bottle",
      description: "Insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
      price: 34.99,
      image: "/placeholder.svg?height=40&width=40",
      category: "Home & Kitchen",
      stock: 75,
      featured: true,
    },
    {
      id: 5,
      name: "Leather Wallet",
      description: "Genuine leather wallet with multiple card slots and RFID protection.",
      price: 59.99,
      image: "/placeholder.svg?height=40&width=40",
      category: "Accessories",
      stock: 32,
      featured: false,
    },
    {
      id: 6,
      name: "Smart Watch",
      description: "Feature-packed smartwatch with health tracking and notifications.",
      price: 199.99,
      image: "/placeholder.svg?height=40&width=40",
      category: "Electronics",
      stock: 18,
      featured: true,
    },
    {
      id: 7,
      name: "Yoga Mat",
      description: "Non-slip, eco-friendly yoga mat with carrying strap.",
      price: 29.99,
      image: "/placeholder.svg?height=40&width=40",
      category: "Sports & Outdoors",
      stock: 60,
      featured: false,
    },
    {
      id: 8,
      name: "Ceramic Coffee Mug",
      description: "Handcrafted ceramic coffee mug with unique design.",
      price: 14.99,
      image: "/placeholder.svg?height=40&width=40",
      category: "Home & Kitchen",
      stock: 90,
      featured: true,
    },
  ]
}

export async function addProduct(productData) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // In a real application, this would send the data to your backend
  console.log("Product added:", productData)

  return {
    success: true,
    message: "Product added successfully",
  }
}

export async function getSalesData() {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 300))

  return {
    charts: {
      daily: [
        { name: "12AM", revenue: 400, profit: 200 },
        { name: "4AM", revenue: 300, profit: 150 },
        { name: "8AM", revenue: 500, profit: 250 },
        { name: "12PM", revenue: 1200, profit: 600 },
        { name: "4PM", revenue: 1800, profit: 900 },
        { name: "8PM", revenue: 1400, profit: 700 },
      ],
      weekly: [
        { name: "Mon", revenue: 4000, profit: 2000 },
        { name: "Tue", revenue: 3500, profit: 1750 },
        { name: "Wed", revenue: 5000, profit: 2500 },
        { name: "Thu", revenue: 4800, profit: 2400 },
        { name: "Fri", revenue: 6000, profit: 3000 },
        { name: "Sat", revenue: 7500, profit: 3750 },
        { name: "Sun", revenue: 5500, profit: 2750 },
      ],
      monthly: [
        { name: "Week 1", revenue: 18000, profit: 9000 },
        { name: "Week 2", revenue: 22000, profit: 11000 },
        { name: "Week 3", revenue: 19500, profit: 9750 },
        { name: "Week 4", revenue: 24000, profit: 12000 },
      ],
      yearly: [
        { name: "Jan", revenue: 65000, profit: 32500 },
        { name: "Feb", revenue: 59000, profit: 29500 },
        { name: "Mar", revenue: 80000, profit: 40000 },
        { name: "Apr", revenue: 78000, profit: 39000 },
        { name: "May", revenue: 90000, profit: 45000 },
        { name: "Jun", revenue: 102000, profit: 51000 },
        { name: "Jul", revenue: 110000, profit: 55000 },
        { name: "Aug", revenue: 120000, profit: 60000 },
        { name: "Sep", revenue: 115000, profit: 57500 },
        { name: "Oct", revenue: 130000, profit: 65000 },
        { name: "Nov", revenue: 140000, profit: 70000 },
        { name: "Dec", revenue: 160000, profit: 80000 },
      ],
    },
    transactions: [
      { id: "ORD-1234", customer: "John Smith", date: "2023-06-01", status: "completed", amount: 125.99 },
      { id: "ORD-1235", customer: "Sarah Johnson", date: "2023-06-01", status: "processing", amount: 89.5 },
      { id: "ORD-1236", customer: "Michael Brown", date: "2023-06-02", status: "completed", amount: 245.0 },
      { id: "ORD-1237", customer: "Emily Davis", date: "2023-06-02", status: "pending", amount: 154.25 },
      { id: "ORD-1238", customer: "Robert Wilson", date: "2023-06-03", status: "completed", amount: 312.75 },
      { id: "ORD-1239", customer: "Jennifer Lee", date: "2023-06-03", status: "processing", amount: 78.5 },
      { id: "ORD-1240", customer: "David Miller", date: "2023-06-04", status: "completed", amount: 189.99 },
      { id: "ORD-1241", customer: "Lisa Anderson", date: "2023-06-04", status: "pending", amount: 45.75 },
      { id: "ORD-1242", customer: "James Taylor", date: "2023-06-05", status: "completed", amount: 210.5 },
      { id: "ORD-1243", customer: "Patricia Moore", date: "2023-06-05", status: "processing", amount: 132.25 },
    ],
  }
}


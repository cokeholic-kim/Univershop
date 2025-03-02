export interface Product {
    id: number
    name: string
    description: string
    price: number | string
    image?: string
    category: string
    stock: number
    featured?: boolean
  }
  
  export interface Category {
    name: string
    slug: string
    image?: string
    productCount: number
    description?: string
  }
  
  export interface ProductFormData {
    name: string
    description: string
    price: string | number
    category: string
    stock: string | number
    featured: boolean
    images: string
  }
  
  export interface User {
    name: string
    email: string
    avatar: string
  }
  
  export interface RecentSale {
    id: number
    user: User
    amount: number
  }
  
  export interface SalesDataPoint {
    name: string
    total: number
  }
  
  export interface ChartDataPoint {
    name: string
    revenue: number
    profit: number
  }
  
  export interface Transaction {
    id: string
    customer: string
    date: string
    status: string
    amount: number
  }
  
  export interface DashboardData {
    totalRevenue: number
    salesCount: number
    productCount: number
    customerCount: number
    recentSales: RecentSale[]
    salesData: SalesDataPoint[]
  }
  
  export interface SalesData {
    charts: {
      daily: ChartDataPoint[]
      weekly: ChartDataPoint[]
      monthly: ChartDataPoint[]
      yearly: ChartDataPoint[]
    }
    transactions: Transaction[]
  }
  
  
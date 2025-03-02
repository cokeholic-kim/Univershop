"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getCategory, getProductsByCategory } from "../lib/data"
import ProductGrid from "../components/ProductGrid"
import CategoryHeader from "../components/CategoryHeader"
import type { Category, Product } from "../types"

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const [category, setCategory] = useState<Category | null>(null)
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        if (!slug) return

        const categoryData = await getCategory(slug)
        if (!categoryData) {
          navigate("/categories")
          return
        }

        setCategory(categoryData)
        const productsData = await getProductsByCategory(slug)
        setProducts(productsData)
      } catch (error) {
        console.error("Error fetching category data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [slug, navigate])

  if (loading) {
    return (
      <div className="container px-4 py-12 md:px-6 md:py-24">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="h-8 bg-muted animate-pulse rounded w-1/3 mb-2" />
          <div className="h-4 bg-muted animate-pulse rounded w-1/2" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="aspect-square bg-muted animate-pulse rounded" />
            ))}
        </div>
      </div>
    )
  }

  if (!category) return null

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <CategoryHeader category={category} />
      <ProductGrid products={products} />
    </div>
  )
}


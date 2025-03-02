"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent } from "../components/ui/card"
import { getCategories } from "../lib/data"
import type { Category } from "../types"

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories()
        setCategories(data)
      } catch (error) {
        console.error("Error fetching categories:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">All Categories</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Browse our products by category to find exactly what you're looking for
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {loading
          ? Array(6)
              .fill(0)
              .map((_, index) => (
                <Card key={index} className="overflow-hidden h-full">
                  <div className="aspect-square bg-muted animate-pulse" />
                  <CardContent className="p-4">
                    <div className="h-4 bg-muted animate-pulse rounded mb-2" />
                    <div className="h-3 bg-muted animate-pulse rounded w-3/4" />
                  </CardContent>
                </Card>
              ))
          : categories.map((category) => (
              <Link key={category.slug} to={`/categories/${category.slug}`}>
                <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                  <div className="aspect-square relative">
                    <img
                      src={category.image || "/placeholder.svg?height=300&width=300"}
                      alt={category.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-center">{category.name}</h3>
                    <p className="text-sm text-muted-foreground text-center mt-1">{category.productCount} products</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
      </div>
    </div>
  )
}


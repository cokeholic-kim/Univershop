"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ShoppingBag, ArrowRight } from "lucide-react"

import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import ProductCard from "../components/ProductCard"
import { getProducts } from "../lib/data"
import type { Product, Category } from "../types"

const categories: Category[] = [
  { name: "Clothing", slug: "clothing", image: "/placeholder.svg?height=300&width=300", productCount: 0 },
  { name: "Electronics", slug: "electronics", image: "/placeholder.svg?height=300&width=300", productCount: 0 },
  { name: "Home & Kitchen", slug: "home-kitchen", image: "/placeholder.svg?height=300&width=300", productCount: 0 },
  { name: "Beauty", slug: "beauty", image: "/placeholder.svg?height=300&width=300", productCount: 0 },
]

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts({ featured: true, limit: 8 })
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge variant="outline" className="w-fit">
                  Summer Collection 2024
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Discover Your Style
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Shop the latest trends and find your perfect look with our curated collection of fashion, accessories,
                  and more.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/categories/all">
                  <Button size="lg">
                    Shop Now
                    <ShoppingBag className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/categories">
                  <Button variant="outline" size="lg">
                    Browse Categories
                  </Button>
                </Link>
              </div>
            </div>
            <img
              src="/images/martiniBanner.jpeg"
              alt="Hero Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Bestsellers</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Our most popular products that customers love
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {loading
              ? Array(4)
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
              : products.map((product) => <ProductCard key={product.id} product={product} />)}
          </div>
          <div className="flex justify-center mt-10">
            <Link to="/categories/all">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="w-full py-12 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Shop by Category</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Explore our wide range of products by category
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {categories.map((category) => (
              <Link key={category.slug} to={`/categories/${category.slug}`}>
                <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                  <div className="aspect-square relative">
                    <img
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-center">{category.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}


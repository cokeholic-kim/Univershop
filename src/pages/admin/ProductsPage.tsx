"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Plus } from "lucide-react"

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { ProductsTable } from "../../components/admin/ProductsTable"
import { getProducts } from "../../lib/admin-data"
import type { Product } from "../../types"

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Products</h2>
        <Link to="/admin/products/add">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </Link>
      </div>

      <div className="flex items-center py-4">
        <Input
          placeholder="Search products..."
          className="max-w-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="rounded-md border p-8 text-center">
          <p>Loading products...</p>
        </div>
      ) : (
        <ProductsTable
          products={filteredProducts}
          onDelete={async (id) => {
            // Handle delete functionality
            if (window.confirm("Are you sure you want to delete this product?")) {
              // Delete product logic would go here
              setProducts(products.filter((product) => product.id !== id))
            }
          }}
        />
      )}
    </div>
  )
}


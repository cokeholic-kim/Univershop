import { Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import type { Product } from "../types"

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product.id}`}>
      <Card className="overflow-hidden h-full transition-all hover:shadow-md">
        <div className="relative">
          <div className="aspect-square relative">
            <img
              src={product.image || "/placeholder.svg?height=300&width=300"}
              alt={product.name}
              className="object-cover w-full h-full"
            />
          </div>
          {product.featured && <Badge className="absolute top-2 right-2">Featured</Badge>}
        </div>
        <CardContent className="p-4">
          <h3 className="font-semibold">{product.name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{product.description}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <span className="font-bold">
            ${typeof product.price === "string" ? product.price : product.price.toFixed(2)}
          </span>
          {product.stock <= 5 && product.stock > 0 ? (
            <span className="text-xs text-amber-600">Only {product.stock} left</span>
          ) : product.stock === 0 ? (
            <span className="text-xs text-red-600">Out of stock</span>
          ) : null}
        </CardFooter>
      </Card>
    </Link>
  )
}


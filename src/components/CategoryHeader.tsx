import type { Category } from "../types"

interface CategoryHeaderProps {
  category: Category
}

export default function CategoryHeader({ category }: CategoryHeaderProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
      <h1 className="text-3xl font-bold tracking-tighter md:text-4xl">{category.name}</h1>
      <p className="max-w-[700px] text-muted-foreground md:text-xl">
        {category.description || `Browse our collection of ${category.name.toLowerCase()}`}
      </p>
    </div>
  )
}


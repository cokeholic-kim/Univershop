import { Link, useLocation } from "react-router-dom"
import { BarChart, Home, Package, Settings, ShoppingCart, Users } from "lucide-react"

export default function AdminSidebar() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(`${path}/`)
  }

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link to="/admin" className="flex items-center gap-2 font-semibold">
            <ShoppingCart className="h-6 w-6" />
            <span className="">ShopMall Admin</span>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-2">
          <nav className="grid items-start px-2 text-sm font-medium">
            <Link
              to="/admin"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin") && !isActive("/admin/products") && !isActive("/admin/sales")
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-primary"
              } transition-all`}
            >
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link
              to="/admin/products"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin/products")
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-primary"
              } transition-all`}
            >
              <Package className="h-4 w-4" />
              Products
            </Link>
            <Link
              to="/admin/sales"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin/sales")
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-primary"
              } transition-all`}
            >
              <BarChart className="h-4 w-4" />
              Sales & Revenue
            </Link>
            <Link
              to="/admin/customers"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin/customers")
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-primary"
              } transition-all`}
            >
              <Users className="h-4 w-4" />
              Customers
            </Link>
            <Link
              to="/admin/settings"
              className={`flex items-center gap-3 rounded-lg px-3 py-2 ${
                isActive("/admin/settings")
                  ? "bg-muted text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-primary"
              } transition-all`}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Link>
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Link to="/">
            <button className="w-full rounded-lg border px-4 py-2 text-sm font-medium">View Store</button>
          </Link>
        </div>
      </div>
    </div>
  )
}


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"

// Layouts
import MainLayout from "./layouts/MainLayout"
import AdminLayout from "./layouts/AdminLayout"

// Pages
import HomePage from "./pages/HomePage"
import LoadingSpinner from "./components/LoadingSpinner"
import LoginPage from "./pages/LoginPage"

// Lazy-loaded pages for better performance
const CategoriesPage = lazy(() => import("./pages/CategoriesPage"))
const CategoryPage = lazy(() => import("./pages/CategoryPage"))
const AdminDashboard = lazy(() => import("./pages/admin/Dashboard"))
const ProductsPage = lazy(() => import("./pages/admin/ProductsPage"))
const AddProductPage = lazy(() => import("./pages/admin/AddProductPage"))
const SalesPage = lazy(() => import("./pages/admin/SalesPage"))


function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {/* Customer-facing routes */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="categories/:slug" element={<CategoryPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/add" element={<AddProductPage />} />
            <Route path="sales" element={<SalesPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  )
}


export default App

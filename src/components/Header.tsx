"use client"

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { LogOut, Menu, Search, ShoppingBag, User, X } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { supabase } from "@/lib/supabase"

export default function Header() {
  const [isLogin,setIsLogin ] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const checkLogin = async () => {
    const authInfo = await supabase.auth.getSession();
    const session = authInfo.data.session
    console.log(session)
    if(session === null){
      setIsLogin(false)
    }else{
      setIsLogin(true)
    }
    
  }

  const signOut = async () => {
    const error = await supabase.auth.signOut();
    console.log(error);
    checkLogin();
  }

  useEffect(()=>{
   checkLogin();
  },[])
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link to="/" className="text-lg font-bold">
                ShopMall
              </Link>
              <Link to="/" className="text-sm">
                Home
              </Link>
              <Link to="/categories" className="text-sm">
                Categories
              </Link>
              <Link to="/categories/all" className="text-sm">
                All Products
              </Link>
              <Link to="/about" className="text-sm">
                About
              </Link>
              <Link to="/contact" className="text-sm">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>

        <Link to="/" className="ml-4 md:ml-0 flex items-center gap-2">
          <ShoppingBag className="h-6 w-6" />
          <span className="font-bold hidden md:inline-block">UniverShop</span>
        </Link>

        <nav className="mx-6 hidden md:flex items-center gap-4 lg:gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link to="/categories" className="text-sm font-medium transition-colors hover:text-primary">
            Categories
          </Link>
          <Link to="/categories/all" className="text-sm font-medium transition-colors hover:text-primary">
            All Products
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link to="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2 ml-auto">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input type="search" placeholder="Search..." className="w-[200px] lg:w-[300px]" autoFocus />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
                <span className="sr-only">Close search</span>
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          )}

          <Button variant="ghost" size="icon">
            <ShoppingBag className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          {isLogin ? 
            <Button variant="ghost" size="icon" onClick={signOut}>
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </Button>
          : 
            <Button variant="ghost" size="icon">
              <Link to="/login" className="text-sm font-medium transition-colors hover:text-primary">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Link>
            </Button>
          }
        </div>
      </div>
    </header>
  )
}


import { ReactNode } from 'react'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { Home, Package, ShoppingCart, User, LogOut } from 'lucide-react'

interface DashboardLayoutProps {
  children: ReactNode
  userType: 'seller' | 'buyer'
}

export function DashboardLayout({ children, userType }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="bg-white w-64 min-h-screen flex flex-col">
        <div className="p-4">
          <h1 className="text-2xl font-bold text-gray-800">AgriConnect</h1>
        </div>
        <nav className="flex-1 px-2 py-4 bg-gray-800">
          <Link href="/dashboard" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-md mb-2">
            <Home className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          {userType === 'seller' ? (
            <Link href="/products" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-md mb-2">
              <Package className="mr-3 h-5 w-5" />
              My Products
            </Link>
          ) : (
            <Link href="/marketplace" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-md mb-2">
              <ShoppingCart className="mr-3 h-5 w-5" />
              Marketplace
            </Link>
          )}
          <Link href="/profile" className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700 rounded-md mb-2">
            <User className="mr-3 h-5 w-5" />
            Profile
          </Link>
        </nav>
        <div className="p-4">
          <Button variant="ghost" className="w-full flex items-center justify-center">
            <LogOut className="mr-2 h-4 w-4" /> Sign out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  )
}


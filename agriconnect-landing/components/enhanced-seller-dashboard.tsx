'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Package, DollarSign, ShoppingCart, TrendingUp, Bell, Settings, LogOut, Search, Menu, Home, BarChart2 } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 4500 },
  { name: 'May', sales: 6000 },
  { name: 'Jun', sales: 5500 },
]

const recentOrders = [
  { id: '1', product: 'Organic Apples', quantity: 100, total: 500, status: 'Pending' },
  { id: '2', product: 'Fresh Milk', quantity: 50, total: 200, status: 'Shipped' },
  { id: '3', product: 'Free-range Eggs', quantity: 200, total: 400, status: 'Delivered' },
  { id: '4', product: 'Organic Tomatoes', quantity: 150, total: 300, status: 'Pending' },
]

export function EnhancedSellerDashboard({ children }: { children: React.ReactNode }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [newProduct, setNewProduct] = useState({ name: '', price: '', quantity: '' })
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const emailParam = urlParams.get('email')
    const nameParam = urlParams.get('name')
    if (emailParam) setEmail(decodeURIComponent(emailParam))
    if (nameParam) setName(decodeURIComponent(nameParam))
  }, [])

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically make an API call to add the product
    console.log('Adding product:', newProduct)
    setNewProduct({ name: '', price: '', quantity: '' })
  }

  const navItems = [
    { href: '/seller-dashboard', label: 'Dashboard', icon: Home },
    { href: '/seller-dashboard/products', label: 'Products', icon: Package },
    { href: '/seller-dashboard/orders', label: 'Orders', icon: ShoppingCart },
    { href: '/seller-dashboard/sales', label: 'Sales', icon: DollarSign },
    { href: '/seller-dashboard/analytics', label: 'Analytics', icon: BarChart2 },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className={`bg-white shadow-md transition-all duration-300 ease-in-out ${isSidebarOpen ? 'w-64' : 'w-20'} flex flex-col`}>
        <div className="p-4 flex items-center justify-between">
          <span className={`text-2xl font-bold text-gray-800 ${isSidebarOpen ? '' : 'hidden'}`}>AgriConnect</span>
          <Button variant="ghost" size="icon" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <nav className="flex-1 pt-5">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant="ghost"
                className={`w-full justify-start mb-2 ${pathname === item.href ? 'bg-gray-100' : ''}`}
              >
                <item.icon className="mr-2 h-5 w-5" />
                {isSidebarOpen && <span>{item.label}</span>}
              </Button>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Top navigation */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Input type="text" placeholder="Search..." className="w-64" />
                  <Button variant="ghost" size="icon" className="ml-2">
                    <Search className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="ml-4 flex items-center">
                      <Avatar className="h-8 w-8 mr-2">
                        <AvatarImage src="/placeholder-avatar.jpg" alt={name} />
                        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium text-sm">{name}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Settings</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  )
}


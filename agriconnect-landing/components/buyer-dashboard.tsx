import { DashboardLayout } from './dashboard-layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function BuyerDashboard() {
  return (
    <DashboardLayout userType="buyer">
      <h1 className="text-2xl font-semibold text-gray-900">Buyer Dashboard</h1>
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Purchases</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$8,765</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">3</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Saved Products</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
          </CardContent>
        </Card>
      </div>
      <div className="mt-8">
        <h2 className="text-lg font-medium text-gray-900">Recent Purchases</h2>
        {/* Add a table or list of recent purchases here */}
      </div>
    </DashboardLayout>
  )
}


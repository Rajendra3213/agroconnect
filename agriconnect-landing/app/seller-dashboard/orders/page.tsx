import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const orders = [
  { id: '1001', customer: 'John Doe', date: '2023-06-01', total: 150.00, status: 'Completed' },
  { id: '1002', customer: 'Jane Smith', date: '2023-06-02', total: 89.99, status: 'Processing' },
  { id: '1003', customer: 'Bob Johnson', date: '2023-06-03', total: 210.50, status: 'Shipped' },
  { id: '1004', customer: 'Alice Brown', date: '2023-06-04', total: 75.25, status: 'Pending' },
  { id: '1005', customer: 'Charlie Davis', date: '2023-06-05', total: 300.00, status: 'Completed' },
]

export default function OrdersPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Orders</h1>
      <Card>
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge variant={order.status === 'Completed' ? 'success' : 
                                    order.status === 'Processing' ? 'warning' :
                                    order.status === 'Shipped' ? 'info' : 'secondary'}>
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}


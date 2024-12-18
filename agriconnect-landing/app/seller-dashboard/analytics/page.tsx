import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const trafficData = [
  { date: '2023-06-01', visitors: 1000, conversions: 50 },
  { date: '2023-06-02', visitors: 1200, conversions: 60 },
  { date: '2023-06-03', visitors: 1500, conversions: 75 },
  { date: '2023-06-04', visitors: 1300, conversions: 65 },
  { date: '2023-06-05', visitors: 1400, conversions: 70 },
  { date: '2023-06-06', visitors: 1600, conversions: 80 },
  { date: '2023-06-07', visitors: 1800, conversions: 90 },
]

export default function AnalyticsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Website Traffic and Conversions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={trafficData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="visitors" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line yAxisId="right" type="monotone" dataKey="conversions" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Conversion Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">5.2%</div>
              <p className="text-sm text-muted-foreground">+0.5% from last week</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Average Order Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">$75.50</div>
              <p className="text-sm text-muted-foreground">-$2.30 from last week</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


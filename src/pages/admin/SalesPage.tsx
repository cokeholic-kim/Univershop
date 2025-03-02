"use client"

import { useState, useEffect } from "react"
import { Calendar } from "../../components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"
import { SalesChart } from "../../components/admin/SalesChart"
import { SalesTable } from "../../components/admin/SalesTable"
import { getSalesData } from "../../lib/admin-data"
import type { SalesData } from "../../types"

export default function SalesPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [salesData, setSalesData] = useState<SalesData>({
    charts: {
      daily: [],
      weekly: [],
      monthly: [],
      yearly: [],
    },
    transactions: [],
  })

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const data = await getSalesData()
        setSalesData(data)
      } catch (error) {
        console.error("Error fetching sales data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchSalesData()
  }, [])

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Sales & Revenue</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Order Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$59.42</div>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.2%</div>
            <p className="text-xs text-muted-foreground">+0.3% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Profit Margin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5%</div>
            <p className="text-xs text-muted-foreground">+1.2% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="daily" className="space-y-4">
        <TabsList>
          <TabsTrigger value="daily">Daily</TabsTrigger>
          <TabsTrigger value="weekly">Weekly</TabsTrigger>
          <TabsTrigger value="monthly">Monthly</TabsTrigger>
          <TabsTrigger value="yearly">Yearly</TabsTrigger>
        </TabsList>
        <TabsContent value="daily" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-5">
              <CardHeader>
                <CardTitle>Daily Sales</CardTitle>
                <CardDescription>Sales and revenue for the selected day</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                {loading ? (
                  <div className="h-[350px] flex items-center justify-center">
                    <p>Loading chart data...</p>
                  </div>
                ) : (
                  <SalesChart data={salesData.charts.daily} />
                )}
              </CardContent>
            </Card>
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>Date</CardTitle>
                <CardDescription>Select a date to view sales</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(date) => date && setDate(date)}
                  className="rounded-md border"
                />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="weekly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Sales</CardTitle>
              <CardDescription>Sales and revenue for the current week</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              {loading ? (
                <div className="h-[350px] flex items-center justify-center">
                  <p>Loading chart data...</p>
                </div>
              ) : (
                <SalesChart data={salesData.charts.weekly} />
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="monthly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monthly Sales</CardTitle>
              <CardDescription>Sales and revenue for the current month</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              {loading ? (
                <div className="h-[350px] flex items-center justify-center">
                  <p>Loading chart data...</p>
                </div>
              ) : (
                <SalesChart data={salesData.charts.monthly} />
              )}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="yearly" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Yearly Sales</CardTitle>
              <CardDescription>Sales and revenue for the current year</CardDescription>
            </CardHeader>
            <CardContent className="pl-2">
              {loading ? (
                <div className="h-[350px] flex items-center justify-center">
                  <p>Loading chart data...</p>
                </div>
              ) : (
                <SalesChart data={salesData.charts.yearly} />
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
          <CardDescription>A list of recent sales transactions</CardDescription>
        </CardHeader>
        <CardContent>
          {loading ? (
            <div className="h-[200px] flex items-center justify-center">
              <p>Loading transaction data...</p>
            </div>
          ) : (
            <SalesTable data={salesData.transactions} />
          )}
        </CardContent>
      </Card>
    </div>
  )
}


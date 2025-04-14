"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

const chartData = [
  {
    year: "2020",
    account: 20,
    // mobileMoney: 145,
    // financialInstitution: 98,
    digitalPayment: 20,
  },
  {
    year: "2021",
    account: 305,
    // mobileMoney: 225,
    // financialInstitution: 156,
    digitalPayment: 180,
  },
  {
    year: "2022",
    account: 237,
    mobileMoney: 198,
    financialInstitution: 167,
    digitalPayment: 210,
  },
  {
    year: "2023",
    account: 273,
    mobileMoney: 256,
    financialInstitution: 189,
    digitalPayment: 245,
  },
  {
    year: "2024",
    account: 309,
    mobileMoney: 278,
    financialInstitution: 234,
    digitalPayment: 280,
  },
  {
    year: "2025",
    account: 359,
    mobileMoney: 328,
    financialInstitution: 289,
    digitalPayment: 320,
  },
];

const chartConfig = {
  account: {
    label: "Account",
    color: "#2563eb",
  },
  mobileMoney: {
    label: "Mobile Money Account",
    color: "#f97316",
  },
  financialInstitution: {
    label: "Financial Institution Account",
    color: "#22c55e",
  },
  digitalPayment: {
    label: "Made or Received Digital Payment",
    color: "#dc2626",
  },
} satisfies ChartConfig;

export function FinancialInclusionTrends() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Financial Inclusion Trends in Uganda</CardTitle>
        <CardDescription>Inclusion Trends in Uganda</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 20,
            }}
            width={800}
            height={400}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="year"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              tickFormatter={(value) => value}
              label={{ value: "Year", position: "bottom", offset: 10 }}
            />
            <YAxis
              label={{
                value: "Number of Users",
                angle: -90,
                position: "left",
                offset: 15,
              }}
            />
            <Tooltip />
            <Legend verticalAlign="top" layout="vertical" />
            <Line
              dataKey="account"
              type="linear"
              stroke="#2563eb"
              strokeWidth={2}
              dot={true}
            />
            <Line
              dataKey="mobileMoney"
              type="linear"
              stroke="#f97316"
              strokeWidth={2}
              dot={true}
            />
            <Line
              dataKey="financialInstitution"
              type="linear"
              stroke="#22c55e"
              strokeWidth={2}
              dot={true}
            />
            <Line
              dataKey="digitalPayment"
              type="linear"
              stroke="#dc2626"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

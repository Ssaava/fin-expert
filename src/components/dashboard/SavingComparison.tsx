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
    mobileMoney: 20,
    banking: 98,
  },
  {
    year: "2021",
    mobileMoney: 305,
    banking: 156,
  },
  {
    year: "2022",
    mobileMoney: 237,
    banking: 167,
  },
  {
    year: "2023",
    mobileMoney: 273,
    banking: 189,
  },
  {
    year: "2024",
    mobileMoney: 309,
    banking: 234,
  },
  {
    year: "2025",
    mobileMoney: 359,
    banking: 289,
  },
];

const chartConfig = {
  mobileMoney: {
    label: "Mobile Money",
    color: "#2563eb",
  },

  banking: {
    label: "Financial Institution mobileMoney",
    color: "#22c55e",
  },
} satisfies ChartConfig;

export function SavingComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Mobile Money vs Tradition Banking Adoption in Uganda
        </CardTitle>
        <CardDescription>
          Mobile Money and traditional banking comparison
        </CardDescription>
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
              dataKey="mobileMoney"
              type="linear"
              stroke="#2563eb"
              strokeWidth={2}
              dot={true}
            />

            <Line
              dataKey="banking"
              type="linear"
              stroke="#22c55e"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

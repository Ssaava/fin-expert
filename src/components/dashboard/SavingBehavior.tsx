"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface SavingBehaviorProps {
  data?: Array<{ category: string; percentage: number }>;
  title?: string;
  description?: string;
}

const defaultChartData = [
  { category: "at a financial institution", percentage: 0.15 },
  { category: "for old age", percentage: 0.19 },
  { category: "money using a mobile money account", percentage: 0.32 },
  { category: "savings club or a person outside the family", percentage: 0.34 },
  { category: "any money", percentage: 0.71 },
];

const chartConfig = {
  percentage: {
    label: "Saving Behavior",
    color: "var(--color-primary-500)",
  },
} satisfies ChartConfig;

export function SavingBehaviorChart({
  data = defaultChartData,
  title = "Saving Behaviors in Uganda",
  description,
}: SavingBehaviorProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout="vertical"
            margin={{
              left: 20,
              right: 20,
              top: 20,
              bottom: 20,
            }}
            width={600}
            height={400}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              type="number"
              dataKey="percentage"
              label={{ value: "Percentage (%)", position: "bottom" }}
            />
            <YAxis
              dataKey="category"
              type="category"
              tickLine={false}
              width={200}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value}
            />
            {/* <Legend verticalAlign="top" height={36} /> */}
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Bar
              name="category"
              dataKey="percentage"
              fill="var(--color-primary-500)"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

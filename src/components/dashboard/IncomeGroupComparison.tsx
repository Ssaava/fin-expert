"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  Legend,
  XAxis,
  YAxis,
} from "recharts";

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

const chartConfig = {
  poorest: {
    label: "Poorest 40%",
    color: "hsl(var(--chart-1))",
  },
  richest: {
    label: "Richest 60%",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function IncomeGroupComparison({
  title,
  description,
  data,
}: {
  title?: string;
  description?: string;
  data: Array<{ category: string; poorest: number; richest: number }>;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data} margin={{ bottom: 70 }}>
            <CartesianGrid horizontal={true} vertical={true} />
            <XAxis
              dataKey="category"
              tickLine={false}
              tickMargin={0}
              axisLine={true}
              angle={-45}
              textAnchor="end"
              height={80}
            >
              <Label
                value="Financial Inclusion Category"
                position="bottom"
                offset={60}
              />
            </XAxis>
            <YAxis axisLine={true} tickLine={true}>
              <Label
                value="Percentage(%)"
                angle={-90}
                position="left"
                offset={-10}
              />
            </YAxis>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Legend verticalAlign="top" layout="vertical" />
            <Bar dataKey="poorest" fill="#0000ff" name="Poorest 40%" />
            <Bar dataKey="richest" fill="#FFA500" name="Richest 60%" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

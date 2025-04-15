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
  rural: {
    label: "Rural",
    color: "hsl(var(--chart-1))",
  },
  urban: {
    label: "Urban",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function UrbanRuralComparison({
  title,
  description,
  data,
}: {
  title?: string;
  description?: string;
  data: Array<{ category: string; rural: number; urban: number }>;
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
              tickMargin={40}
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
            <Legend verticalAlign="top" align="right" layout="vertical" />
            <Bar dataKey="rural" fill="#0000ff" radius={4} name="Rural" />
            <Bar dataKey="urban" fill="#FFA500" radius={4} name="Urban" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

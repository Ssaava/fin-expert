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
  female: {
    label: "Female",
    color: "hsl(var(--chart-1))",
  },
  male: {
    label: "Male",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function GenderComparison({
  title,
  description,
  data,
}: {
  title?: string;
  description?: string;
  data: Array<{ category: string; female: number; male: number }>;
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
            <Legend verticalAlign="top" align="right" layout="vertical" />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="female" fill="#0000ff" radius={4} name="Female" />
            <Bar dataKey="male" fill="#FFA500" radius={4} name="Male" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

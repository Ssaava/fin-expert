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
  primary: {
    label: "Primary Education or less",
    color: "hsl(var(--chart-1))",
  },
  secondary: {
    label: "Secondary Education or more",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function EducationLevelComparison({
  title,
  description,
  data,
}: {
  title?: string;
  description?: string;
  data: Array<{ category: string; primary: number; secondary: number }>;
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
            <Bar
              dataKey="primary"
              fill="#0000ff"
              name="Primary education or less"
            />
            <Bar
              dataKey="secondary"
              fill="#FFA500"
              name="Secondary Education or More"
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

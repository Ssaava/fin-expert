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
import { IoMdMore } from "react-icons/io";
const chartData = [
  { satisfaction: "Payments", rating: 4.5 },
  { satisfaction: "Lending", rating: 3.4 },
  { satisfaction: "Savings", rating: 1.5 },
  { satisfaction: "Insurance", rating: 2 },
  { satisfaction: "Investment", rating: 3 },
];

const chartConfig = {
  rating: {
    label: "Rating",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function BarChartComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <div className="flex w-full  justify-between ">
            User satisfaction rating <IoMdMore className="text-xl" />
          </div>
        </CardTitle>
        <CardDescription>
          Average user satisfaction rating by fintech type
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-10">
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            style={{ maxWidth: "100%", height: "auto" }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="satisfaction"
              tickLine={false}
              tickMargin={10}
              axisLine={true}
              tickFormatter={(value) => value}
              label={{
                value: "Fintech Type",
                position: "insideBottom",
                fill: "gray",
                offset: -20,
              }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => value}
              interval={0}
              ticks={[0, 1, 2, 3, 4, 5]}
              domain={[0, 5]}
              label={{
                value: "User Satisfaction rate",
                angle: -90,
                position: "insideLeft",
                fill: "black",
                offset: 0,
              }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="rating" fill="var(--color-primary-500)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

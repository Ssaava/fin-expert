"use client";

import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";
const chartData = [{ score: "scoreType", count: 160, fill: "#FFA72699" }];

const chartConfig = {
  count: {
    label: "Count",
  },
  scoreType: {
    label: "scoreType",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export function Score() {
  return (
    <Card className="flex flex-col xl:max-w-[27rem] h-full xl:h-auto w-full mx-auto">
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto  aspect-square max-h-[250px]" // Increased height
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={160}
            innerRadius={105} // Adjusted inner radius
            outerRadius={180} // Adjusted outer radius
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[120, 90]}
            />
            <RadialBar dataKey="count" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground font-bold text-4xl"
                        >
                          {Math.round((chartData[0].count * 100) / 360) + "%"}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-base"
                        >
                          Moderate Score
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

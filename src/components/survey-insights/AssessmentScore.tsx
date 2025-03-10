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

export function AssessmentScore() {
  return (
    <Card className="flex flex-col max-w-[17rem] h-full xl:h-auto w-full shadow-none border-0 p-0">
      <CardContent className="p-0">
        <ChartContainer
          config={chartConfig}
          className=" aspect-square max-h-[250px] "
        >
          <RadialBarChart
            data={chartData}
            startAngle={0}
            endAngle={160}
            innerRadius={105}
            outerRadius={180}
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
                          {Math.round((chartData[0].count * 100) / 360) +
                            "/100"}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground text-base"
                        >
                          High
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

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { IoMdMore } from "react-icons/io";
import { LabelList, Pie, PieChart } from "recharts";

interface PieChartData {
  fintech: string;
  distributionTypes: number;
  fill: string;
}

interface HomePieChartProps {
  data: PieChartData[];
  config: ChartConfig;
  title: string;
  className?: string;
}

export default function FinTechPieChart({
  data,
  config,
  title,
  className,
}: HomePieChartProps) {
  return (
    <Card className={`${className}`}>
      <CardHeader>
        <div className="flex w-full justify-between pb-0">
          <CardTitle>{title}</CardTitle>
          <IoMdMore className="text-xl" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square h-72 xl:h-auto"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent nameKey="distributionTypes" hideLabel />
              }
            />
            <Pie data={data} dataKey="distributionTypes">
              <LabelList
                dataKey={"fintech"}
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof config) => config[value]?.label}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

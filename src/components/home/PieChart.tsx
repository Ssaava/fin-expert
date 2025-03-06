import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { IoMdMore } from "react-icons/io";
import { LabelList, Pie, PieChart } from "recharts";
const chartData = [
  {
    fintech: "investment",
    distributionTypes: 275,
    fill: "#3366CCB2",
  },
  { fintech: "payments", distributionTypes: 200, fill: "#3366CCD9" },
  { fintech: "lending", distributionTypes: 187, fill: "#F44336CC" },
  { fintech: "savings", distributionTypes: 173, fill: "#FFA726CC" },
  { fintech: "insurance", distributionTypes: 90, fill: "#4CAF50CC" },
];

const chartConfig = {
  distributionTypes: {
    label: "Visitors",
  },
  investment: {
    label: "Investment",
    color: "hsl(var(--chart-1))",
  },
  payments: {
    label: "Payments",
    color: "hsl(var(--chart-1))",
  },
  lending: {
    label: "Lending",
    color: "hsl(var(--chart-1))",
  },
  savings: {
    label: "Savings",
    color: "hsl(var(--chart-1))",
  },
  insurance: {
    label: "Insurance",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function HomePieChart() {
  return (
    <Card className="flex flex-col w-full xl:w-80 mx-auto xl:absolute xl:top-[-3rem] xl:left-1/2 xl:-translate-x-1/2 xl:-rotate-10 pb-0">
      <CardHeader>
        <div className="flex w-full  justify-between pb-0">
          <CardTitle>Fintech types distribution</CardTitle>
          <IoMdMore className="text-xl" />
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square h-72 xl:h-auto"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent nameKey="distributionTypes" hideLabel />
              }
            />
            <Pie data={chartData} dataKey="distributionTypes">
              <LabelList
                dataKey={"fintech"}
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

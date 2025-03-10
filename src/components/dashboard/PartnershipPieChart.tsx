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
import { LabelList, Pie, PieChart } from "recharts";
const chartData = [
  {
    partnership: "localBanks",
    distributionTypes: 175,
    fill: "var(--color-primary-500)",
  },
  {
    partnership: "telecoms",
    distributionTypes: 100,
    fill: "var(--color-red-500)",
  },
  {
    partnership: "none",
    distributionTypes: 85,
    fill: "var(--color-orange-500)",
  },
];

const chartConfig = {
  distributionTypes: {
    label: "Distribution",
  },
  localBanks: {
    label: "Local Banks",
    color: "hsl(var(--chart-1))",
  },
  telecoms: {
    label: "Telecoms",
    color: "hsl(var(--chart-1))",
  },
  none: {
    label: "None",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export default function PartnershipPieChart() {
  return (
    <Card className="flex flex-col w-full pb-0">
      <CardHeader>
        <div className="flex w-full  justify-between pb-0">
          <CardTitle>partnership types distribution</CardTitle>
          <IoMdMore className="text-xl" />
        </div>
        <CardDescription>
          Fintech partnered with banks and telecoms
        </CardDescription>
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
                dataKey={"partnership"}
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

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";
const chartData = [
  { segment: "Jan", smes: 86, individuals: 40, corporates: 20 },
  { segment: "Lending", smes: 35, individuals: 20, corporates: 12 },
  { segment: "Savings", smes: 37, individuals: 32, corporates: 70 },
  { segment: "Insurance", smes: 73, individuals: 90, corporates: 52 },
  { segment: "Investment", smes: 29, individuals: 13, corporates: 60 },
];

const chartConfig = {
  smes: {
    label: "SMEs",
    color: "hsl(var(--chart-1))",
  },
  individuals: {
    label: "Individuals",
    color: "hsl(var(--chart-2))",
  },
  corporates: {
    label: "Corporates",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig;
const options = ["Custom", "12 Months", "30 days", "7 days", "24 hours"];

const TargetCustomerSegments = () => {
  const [formData, setFormData] = useState({
    date: "Custom",
  });
  console.log(formData);
  const handleInputChange = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex flex-col gap-2">
              <CardTitle>Target customer segments</CardTitle>
              <CardDescription>
                Popular customer segments among fintech types
              </CardDescription>
            </div>

            <form>
              <div className="flex flex-wrap [&>*:first-child]:rounded-l-lg [&>*:last-child]:rounded-r-lg">
                {options?.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className={`hover:border-primary-500 hover:text-primary-500 hover:bg-blue-50 duration-200 flex items-center justify-center  py-2 px-4  border ${
                      formData.date === option
                        ? "border-primary-500 text-primary-500 bg-blue-50"
                        : "border-gray-300"
                    }`}
                  >
                    <input
                      name="date"
                      onChange={handleInputChange}
                      type="radio"
                      className="hidden"
                      value={option}
                      checked={formData.date === option}
                    />
                    {option}
                  </label>
                ))}
              </div>{" "}
            </form>
          </div>
        </CardHeader>
        <CardContent className="overflow-x-scroll">
          <div className="min-w-[40rem]">
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                style={{ maxWidth: "100%", height: "auto" }}
              >
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="segment"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={true}
                  tickFormatter={(value) => value}
                  label={{
                    value: "Fintech Type",
                    position: "insideBottom",
                    fill: "gray",
                    offset: -25,
                  }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(value) => `${value}%`}
                  interval={0}
                  ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
                  label={{
                    value: "Percentage",
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

                <ChartLegend
                  content={<ChartLegendContent />}
                  className="mt-10 "
                />
                <Bar dataKey="smes" fill="#0074D4D9" radius={4} />
                <Bar dataKey="individuals" fill="#4CAF50D9" radius={4} />
                <Bar dataKey="corporates" fill="#FFA726D9" radius={4} />
              </BarChart>
            </ChartContainer>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default TargetCustomerSegments;

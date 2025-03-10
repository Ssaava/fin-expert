import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { IoMdMore } from "react-icons/io";

const GeographicalReachChart = ({
  value1 = 200,
  value2 = 160,
}: {
  value1?: number;
  value2?: number;
}) => {
  const total = value1 + value2;
  const width1 = (value1 / total) * 100;
  const width2 = (value2 / total) * 100;

  return (
    <>
      <Card className="flex flex-col w-full shadow-none border-0 pb-0">
        <CardHeader>
          <div className="flex w-full  justify-between pb-0">
            <CardTitle>Geographical Reach</CardTitle>
            <IoMdMore className="text-xl" />
          </div>
          <CardDescription>
            Number of fintechs operating locally vs. internationally{" "}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <div className="flex">
            <div
              className="h-32 md:h-56 bg-primary-500 text-white font-bold rounded-l-lg flex items-center justify-center"
              style={{ width: `${width1}%` }}
            >
              {value1}
            </div>
            <div
              className="h-32 md:h-56 bg-[#A30AA3D9] text-white font-bold rounded-r-lg flex items-center justify-center"
              style={{ width: `${width2}%` }}
            >
              {value2}
            </div>
          </div>
          <div className="flex gap-4 mt-10 items-center justify-center mb-6">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary-500 rounded"></div>
              <span>Local fintechs</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#A30AA3D9] rounded"></div>
              <span>International fintechs</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default GeographicalReachChart;

import { BarChartComponent } from "@/components/dashboard/BarChart";
import { DatePicker } from "@/components/dashboard/DatePicker";
import GeographicalReachChart from "@/components/dashboard/GeographicalReachChart";
import PartnershipPieChart from "@/components/dashboard/PartnershipPieChart";
import PieChartComponent from "@/components/dashboard/PieChartComponent";
import TargetCustomerSegments from "@/components/dashboard/TargetCustomerSegments";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { RxDownload } from "react-icons/rx";
const options = ["Custom", "12 Months", "30 days", "7 days", "24 hours"];
const Dashboard = () => {
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
      <section className="vertical-spacing pb-10">
        <div className="flex gap-4 justify-between items-center flex-wrap">
          <div>
            <h3 className="text-3xl font-bold">Welcome back, John</h3>
            <p className="text-black/70">
              Here are the current insights and activities in Uganda's fintech
              industry.
            </p>
          </div>
          <Button className="bg-primary-500 font-bold">
            <RxDownload className="text-xl" /> Export report
          </Button>
        </div>

        <form className="py-8">
          <div className="flex items-center justify-between gap-4 flex-wrap">
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
            </div>
            <div>
              <DatePicker />
            </div>
          </div>
        </form>

        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1 h-full bg-white rounded-lg shadow border ">
            <PieChartComponent />
          </div>
          <div className="lg:col-span-2">
            <BarChartComponent />
          </div>
        </div>

        <div>
          <TargetCustomerSegments />
        </div>

        <div className="grid lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 h-full shadow border rounded-lg bg-white">
            <GeographicalReachChart />
          </div>
          <div className="lg:col-span-1 ">
            <PartnershipPieChart />
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard;

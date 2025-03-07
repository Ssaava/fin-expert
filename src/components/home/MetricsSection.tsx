import MetricsCard from "@/components/home/MetricsCard";

import { RiPieChart2Fill } from "react-icons/ri";
import { BsPersonFillSlash } from "react-icons/bs";
import { PiScalesFill } from "react-icons/pi";
import Comments from "@/components/home/Comments";
const MetricsSection = () => {
  return (
    <>
      <section className="px-4 md:px-10 min-h-screen">
        <div className="gradient-blue-bg px-4 md:px-16 xl:px-56 py-10 md:py-16 rounded-3xl mt-12 flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h3 className="text-center font-medium text-3xl md:text-5xl text-white">
              Struggling to measure financial inclusivity?
            </h3>
            <p className="text-white/80 font-medium text-center max-w-[50rem] mx-auto">
              Many fintech companies often struggle to understand their
              financial inclusivity, missing out on growth opportunities and
              failing to meet evolving standards.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-center flex-wrap text-white">
            <MetricsCard title="Unclear inclusivity Metrics">
              <RiPieChart2Fill className="text-7xl" />
            </MetricsCard>
            <MetricsCard title="Missed growth Potential">
              <BsPersonFillSlash className="text-7xl" />
            </MetricsCard>
            <MetricsCard title="Compliance Challenges">
              <PiScalesFill className="text-7xl" />
            </MetricsCard>
          </div>
          {/* user reviews */}
          <Comments />
        </div>
      </section>
    </>
  );
};

export default MetricsSection;

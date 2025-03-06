import MetricsCard from "@/components/home/MetricsCard";
import HomePieChart from "@/components/home/PieChart";
import { Recommendation } from "@/components/home/Recommendation";
import { Score } from "@/components/home/Score";
import { Button } from "@/components/ui/button";
import { MdOutlineArrowOutward } from "react-icons/md";
import { RiPieChart2Fill } from "react-icons/ri";
import { BsPersonFillSlash } from "react-icons/bs";
import { PiScalesFill } from "react-icons/pi";
import Comments from "@/components/home/Comments";
const Home = () => {
  return (
    <>
      <section className="px-4 md:px-10 min-h-screen pt-28 md:pt-48">
        <div className="max-w-[60rem]  mx-auto w-full flex flex-col gap-6">
          <h2 className="text-4xl md:text-7xl text-center font-bold md:leading-24">
            Access Financial Inclusivity With Confidence
          </h2>
          <p className="text-center max-w-[30rem] text-black/50 font-medium mx-auto">
            Empower your fintech platform with insights to enhance inclusivity
            and reach more users.
          </p>
          <Button className="cursor-pointer rounded-full bg-primary-500 text-lg w-fit mx-auto py-6 !px-8 font-bold text-white">
            Get Started <MdOutlineArrowOutward className="size-5" />
          </Button>
        </div>

        <div className="grid xl:grid-cols-3 mt-10 gap-4 md:grid-cols-2">
          <div className="relative">
            <HomePieChart />
          </div>
          <div>
            <Score />
          </div>
          <div className="xl:relative flex justify-center flex-col">
            <div className="flex flex-col gap-4 xl:absolute xl:top-[-3rem] xl:left-1/2 xl:-translate-x-1/2 xl:rotate-10 w-fit mx-auto">
              <Recommendation />
              <Recommendation />
            </div>
          </div>
        </div>
      </section>

      {/* metrics */}
      <section className="px-4 md:px-10 min-h-screen">
        <div className="gradient-bg px-4 md:px-16 lg:px-32 py-10 md:py-16 rounded-3xl mt-12 flex flex-col gap-16">
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

export default Home;

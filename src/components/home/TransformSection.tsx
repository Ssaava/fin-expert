import { FaChartPie } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";
import { FaBrain } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Button } from "../ui/button";
import bgImage from "/transform.png";
const TransformSection = () => {
  return (
    <>
      <section className="relative px-4 md:px-10  min-h-screen mt-8 lg:mt-0">
        <div className="bg-primary-100  relative">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <img
              src={bgImage}
              alt="Hero bg"
              className="block w-full h-full object-cover"
            />
          </div>
          <div className="px-4 md:px-16 xl:px-56 py-10 md:py-16 rounded-3xl flex flex-col gap-16">
            <div className="flex flex-col gap-4">
              <h3 className="text-center font-medium text-3xl md:text-5xl">
                Transform your inclusivity strategy with FinExpert
              </h3>
              <p className="text-black/60 font-medium text-center max-w-[50rem] mx-auto">
                Many fintech companies often struggle to understand their
                financial inclusivity, missing out on growth opportunities and
                failing to meet evolving standards.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 lg:gap-8 ">
              <div className="flex flex-col gap-4">
                <div className="z-10 group rounded-lg p-4 md:p-10 flex flex-col gap-6 max-w-[30rem] sm:ml-auto bg-yellow-100 hover:bg-yellow-400 duration-700">
                  <button className="w-fit font-bold text-gold-400 border border-gold-400 px-4 py-2 rounded-full group-hover:border-black group-hover:text-black">
                    Confidence and clarity
                  </button>
                  <div className="flex items-center gap-4">
                    <FaChartPie className="text-4xl text-green-600" />
                    <FaChartPie className="text-green-600/0 group-hover:text-green-600 text-4xl duration-700" />
                    <FaChartPie className="text-green-600/0 group-hover:text-green-600 text-4xl duration-700" />
                  </div>
                  <h3 className="font-bold text-3xl">
                    Clear inclusivity scores
                  </h3>
                  <p className="text-black/60">
                    No more guesswork; get accurate inclusivity scores that
                    reveal where your platform stands
                  </p>
                </div>
                <Button className="mt-auto z-10 cursor-pointer rounded-full bg-primary-500 text-lg w-fit mx-auto py-6 !px-8 font-bold text-white">
                  Assess your inclusivity
                  <MdOutlineArrowOutward className="size-5" />
                </Button>
              </div>
              <div className="flex flex-col gap-4">
                <div className="z-10 group rounded-lg p-4 md:p-10 flex flex-col gap-6 max-w-[30rem] sm:mr-auto bg-pink-100 hover:bg-white duration-700">
                  <button className="w-fit font-bold text-pink-400 border border-pink-400 px-4 py-2 rounded-full ">
                    Confidence and clarity
                  </button>
                  <div className="flex items-center gap-4">
                    <TbTargetArrow className="text-4xl text-red-500" />
                    <TbTargetArrow className="text-red-500/0 group-hover:text-red-500 text-4xl duration-700" />
                    <TbTargetArrow className="text-red-500/0 group-hover:text-red-500 text-4xl duration-700" />
                  </div>
                  <h3 className="font-bold text-3xl">Personalized tips</h3>
                  <p className="text-black/60">
                    Receive tailored recommendations to expand user reach.
                  </p>
                </div>

                <div className="z-10 group rounded-lg p-4 md:p-10 flex flex-col gap-6 max-w-[30rem] sm:mr-auto bg-white hover:bg-[#0000000A] duration-700">
                  <button className="w-fit font-bold text-gray-400 border border-gray-400 px-4 py-2 rounded-full group-hover:border-black group-hover:text-black">
                    Empowerment
                  </button>
                  <div className="flex items-center gap-4">
                    <FaBrain className="text-4xl text-blue-400" />
                    <FaBrain className="text-blue-400/0 group-hover:text-blue-400 text-4xl duration-700" />
                    <FaBrain className="text-blue-400/0 group-hover:text-blue-400 text-4xl duration-700" />
                  </div>
                  <h3 className="font-bold text-3xl">Data-driven decisions</h3>
                  <p className="text-black/60">
                    Make confident decisions with actionable data insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TransformSection;

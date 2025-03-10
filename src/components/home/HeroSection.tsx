import HomePieChart from "@/components/home/PieChart";
import { Recommendation } from "@/components/home/Recommendation";
import { Score } from "@/components/home/Score";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router";
import bgImage from "/hero.png";
const HeroSection = () => {
  return (
    <>
      <section className="relative px-4 md:px-10 min-h-screen pt-28 md:pt-48">
        <div className="absolute top-0 left-0 right-0 bottom-0 mt-40">
          <img
            src={bgImage}
            alt="Hero bg"
            className="block w-full h-full object-cover"
          />
        </div>
        <div className="z-10 ">
          <div className="z-10 max-w-[60rem]  mx-auto w-full flex flex-col gap-6">
            <h2 className="text-4xl md:text-7xl text-center font-bold md:leading-24">
              Access Financial Inclusivity With Confidence
            </h2>
            <p className="text-center max-w-[30rem] text-black/50 font-medium mx-auto">
              Empower your fintech platform with insights to enhance inclusivity
              and reach more users.
            </p>
            <Link
              to={"/dashboard"}
              className="cursor-pointer z-10 rounded-full bg-primary-500 text-lg w-fit mx-auto py-3 px-8 hover:bg-black/90 duration-200 flex items-center gap-2  font-bold text-white"
            >
              Get Started <MdOutlineArrowOutward className="size-5" />
            </Link>
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
                <Recommendation
                  className="xl:w-[350px]"
                  title="Recommendation"
                  value="Improve user satisfaction: Act on feedback to boost your fintech
          business in Kampala."
                />
                <Recommendation
                  className="xl:w-[350px]"
                  title="Recommendation"
                  value="Improve user satisfaction: Act on feedback to boost your fintech
          business in Kampala."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

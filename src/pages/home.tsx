import ExpertFlowSection from "@/components/home/ExpertFlowSection";
import FaqSection from "@/components/home/FaqSection";
import HeroSection from "@/components/home/HeroSection";
import MetricsSection from "@/components/home/MetricsSection";
import TransformSection from "@/components/home/TransformSection";
import { Link } from "react-router";
import bgImage from "/inclusivity.png";
const Home = () => {
  return (
    <main className="max-w-max-width mx-auto">
      <HeroSection />
      {/* metrics */}
      <MetricsSection />
      {/* Transform Section */}
      <TransformSection />
      <ExpertFlowSection />

      <FaqSection />

      <section className="relative px-4 md:px-10 mt-8 lg:mt-0 mb-12">
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <img
            src={bgImage}
            alt="Hero bg"
            className="block w-full h-full object-cover"
          />
        </div>
        <div className="gradient-light-blue-bg px-4 md:px-16 xl:px-56 py-10 md:py-16 rounded-3xl flex flex-col gap-8 md:gap-14">
          <h3 className="max-w-[55rem] font-bold mx-auto md:leading-18 text-center text-white text-3xl md:text-6xl">
            Ready to enhance financial inclusivity?
          </h3>
          <p className="text-center text-white text-xl">
            Join FinExpert and make data-driven decisions that impact lives.
          </p>

          <Link
            to="/dashboard"
            className="rounded-full hover:text-white cursor-pointer bg-white/70 text-lg w-fit mx-auto  py-3 px-8 z-10 font-bold text-black hover:bg-black/90 duration-200"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;

import TransformSection from "@/components/home/TransformSection";
import HeroSection from "@/components/home/HeroSection";
import MetricsSection from "@/components/home/MetricsSection";
import ExpertFlowSection from "@/components/home/ExpertFlowSection";
import FaqSection from "@/components/home/FaqSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      {/* metrics */}
      <MetricsSection />
      {/* Transform Section */}
      <TransformSection />
      <ExpertFlowSection />

      <FaqSection />
    </>
  );
};

export default Home;

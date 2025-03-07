import TransformSection from "@/components/home/TransformSection";
import HeroSection from "@/components/home/HeroSection";
import MetricsSection from "@/components/home/MetricsSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      {/* metrics */}
      <MetricsSection />
      {/* Transform Section */}
      <TransformSection />
    </>
  );
};

export default Home;

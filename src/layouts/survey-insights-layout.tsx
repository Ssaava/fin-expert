import Footer from "@/components/common/Footer";
import InsightsHeader from "@/components/survey-insights/InsightsHeader";
import { Outlet } from "react-router";

const SurveyInsightsLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <InsightsHeader />
      <section className="bg-[#FAFAFA] px-6 sm:px-10 md:px-20 lg:px-28 min-h-screen pt-28 md:pt-36">
        <Outlet />
      </section>
      <Footer />
    </div>
  );
};

export default SurveyInsightsLayout;

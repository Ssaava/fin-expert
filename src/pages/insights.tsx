import { Recommendation } from "@/components/home/Recommendation";
import { AssessmentScore } from "@/components/survey-insights/AssessmentScore";
import OverviewProgress from "@/components/survey-insights/OverviewProgress";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { BsBuildingAdd } from "react-icons/bs";
import { FaChrome } from "react-icons/fa6";
import { Link } from "react-router";

const Insights = () => {
  const [isAssessmentTaken, setIsAssessmentTaken] = useState(false);
  useEffect(() => {
    setIsAssessmentTaken(true);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-2 mb-10">
        <h1 className="text-3xl font-bold">Survey & insights</h1>
        <p className="text-black/60 font-medium">
          Here's your inclusivity score and recommendations
        </p>
      </div>
      {/* logic to display the insights from fetched data here */}
      {isAssessmentTaken ? (
        <>
          <section className="vertical-spacing">
            <div className="border bg-white rounded-lg p-6 py-12 w-full">
              <div className="flex max-lg:flex-col lg:items-center justify-between gap-4 lg:justify-between">
                <div className="sm:flex md:items-center gap-4">
                  <AssessmentScore />
                  <div className="sm:flex-1 w-full  flex items-center flex-wrap gap-4">
                    <div className="max-sm:mt-4">
                      <h3 className="text-lg font-medium">Inclusive Leader</h3>
                      <p className="text-black/70 max-w-[30rem]">
                        Your platform is highly inclusive. Keep up the great
                        work and explore new ways to innovate.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  to={"/survey"}
                  className="w-fit mx-auto bg-primary-500 py-3 font-bold px-8 flex items-center gap-2 text-white group rounded-full hover:bg-black duration-200"
                >
                  <BsBuildingAdd /> Take Assessment
                </Link>
              </div>
            </div>
            <div className="border bg-white rounded-lg p-6 py-12 w-full">
              <h3 className="font-bold text-lg">Insights overview</h3>
              <div className="mt-8 vertical-spacing">
                <OverviewProgress title="Accessibility" />
                <OverviewProgress
                  title="User engagement"
                  width="70"
                  background="bg-green-700"
                />
                <OverviewProgress
                  title="Regulatory compliance"
                  width="20"
                  background="bg-red-500"
                />
              </div>
            </div>
            <div className="py-12 vertical-spacing w-full">
              <div className="flex items-center justify-between gap-4 ">
                <div>
                  <h3 className="font-medium text-lg">Recommendations</h3>
                  <p className="text-black/70">
                    Maximize your inclusivity impact
                  </p>
                </div>
                <Button className="border bg-white text-black hover:text-white  hover:border-none">
                  Learn More
                </Button>
              </div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-4">
                <Recommendation
                  title="Innovate and Expand"
                  className="lg:py-12 bg-[#D1E7FD]"
                  value="Explore new features to engage undeserved communities"
                />
                <Recommendation
                  title="Maintain user satisfaction"
                  className="lg:py-12 bg-[#D4EDDA]"
                  value="continue gathering user feedback to stay tuned"
                />
                <Recommendation
                  title="Leverage data insights"
                  className="lg:py-12 bg-[#FFF3CD]"
                  value="utilize advanced data analytics to discover growth opportunists."
                />
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="border bg-white rounded-lg p-6 py-12 flex items-center justify-center w-full">
            <div className="flex flex-col gap-6 max-w-[40rem] mx-auto">
              <FaChrome className="text-6xl border-8 border-gray-300 rounded-full mx-auto" />
              <h3 className="text-3xl text-center font-bold">
                No insights yet
              </h3>
              <p className="text-center text-black/60 font-medium">
                Take the assessment to discover your inclusivity score and
                receive personalized recommendations to maximize your impact.
              </p>
              <Link
                to={"/survey"}
                className="w-fit mx-auto bg-primary-500 py-3 font-bold px-8 flex items-center gap-2 text-white group rounded-full hover:bg-black duration-200"
              >
                <BsBuildingAdd /> Take Assessment
              </Link>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Insights;

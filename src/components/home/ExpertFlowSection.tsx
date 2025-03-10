import { Link } from "react-router";
import city from "/city.png";
import insights from "/insights.png";
import bgImage from "/transform.png";

const ExpertFlowSection = () => {
  return (
    <>
      <section className="px-4 md:px-10 min-h-screen">
        <div className="relative gradient-yellow-bg px-4 md:px-16 xl:px-56 py-10 md:py-16 rounded-3xl mt-12 flex flex-col gap-16">
          <div className="absolute top-0 left-0 right-0 bottom-0">
            <img
              src={bgImage}
              alt="Hero bg"
              className="block w-full h-full object-cover"
            />
          </div>
          <h3 className="text-center font-medium text-3xl md:text-5xl ">
            Struggling to measure financial inclusivity?
          </h3>

          <div className="grid md:grid-cols-2 justify-between gap-20">
            <div className="relative z-10 rounded-lg bg-white/70 p-6 md:p-12 flex flex-col gap-4">
              <div className="absolute md:-right-20 md:top-1/2 md:-translate-y-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:rotate-90 max-md:-bottom-12">
                <img src="/connector-line-right.png" alt="" />
              </div>
              <p>1.</p>
              <h3 className="text-2xl font-medium">Signup on the platform</h3>
              <p className="text-black/70 font-medium">
                Create your account according to your role in just a few
                minutes.
              </p>
              <div className="rounded-lg bg-gray-200 w-full flex items-center p-4 sm:py-8 lg:py-12 justify-center">
                <div className="flex items-center justify-center rounded-full bg-[#0074D4]/20 border-10 border-[#0074D4]/10  py-2 px-2">
                  <Link
                    to="/auth/create-account"
                    className="bg-primary-500 text-white rounded-full px-6 py-3 font-bold "
                  >
                    Create Account
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative z-10 rounded-lg bg-white/70 p-6 md:p-12 flex flex-col gap-4">
              <div className="absolute md:-bottom-15 md:-left-20 max-md:left-1/2 max-md:-translate-x-1/2 max-md:rotate-90 max-md:-bottom-12">
                <img
                  src="/connector-line-bottom.png"
                  alt=""
                  className="hidden md:block"
                />
                <img
                  src="/connector-line-right.png"
                  alt=""
                  className="hidden max-md:block"
                />
              </div>
              <p>2.</p>
              <h3 className="text-2xl font-medium">Complete assessment</h3>
              <p className="text-black/70 font-medium">
                Answer tailored questions to improve your financial inclusivity.
              </p>
              <div className="rounded-lg bg-gray-200 w-full flex items-center px-4 pt-4 sm:pt-8 lg:pt-12  justify-center">
                <img src={city} alt="City Image" />
              </div>
            </div>
            <div className="z-10 md:col-span-2 md:-mt-4">
              <div className="w-fit mx-auto bg-white/70 rounded-lg  p-6 md:p-12 flex flex-col gap-4">
                <p>3.</p>
                <h3 className="text-2xl font-medium">
                  Get actionable insights
                </h3>
                <p className="text-black/70 font-medium">
                  Receive your inclusivity score and personalized improvement
                  tips.
                </p>
                <div className="rounded-lg bg-gray-200 w-full flex items-center p-4 sm:py-8 lg:py-12  justify-center">
                  <img src={insights} alt="City Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpertFlowSection;

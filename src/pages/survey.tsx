import { FaPlay } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { Link } from "react-router";
import surveyIntro from "/survey-intro.png";
import { useAuthStore } from "@/store/store";
const Survey = () => {
  const user_role = useAuthStore((state) => state.user_role);
  return (
    <>
      <section className="min-h-screen w-screen bg-white px-6 sm:px-10 md:px-20 lg:px-28 py-4 sm:py-6">
        <div className="flex justify-between py-8 mb-8">
          <Link to="/dashboard/survey-insights">
            <GoArrowLeft className="text-3xl" />
          </Link>
        </div>
        <div className=" flex justify-center">
          <div className="max-w-[50rem] mx-auto flex flex-col gap-6">
            <h1 className="font-bold text-3xl text-center">
              Financial Inclusivity Assessment
            </h1>
            <p className="font-medium text-lg text-center text-black/60">
              Understand your financial standing and get personalized tips when
              to improve. this quick assessment helps you identify gaps and take
              action toward financial Inclusivity
            </p>

            <img
              src={surveyIntro}
              alt="Survey Intro"
              className="block max-w-[35rem] w-full mx-auto object-cover my-4 md:my-12"
            />
            <Link
              to={`/survey/${user_role}`}
              className="cursor-pointer rounded-full  bg-primary-500 flex items-center gap-2 text-lg w-fit mx-auto py-4 hover:bg-black duration-200 px-8 font-bold text-white"
            >
              <FaPlay className="size-4" /> Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Survey;

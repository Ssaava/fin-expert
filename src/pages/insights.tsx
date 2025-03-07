import { Button } from "@/components/ui/button";
import { BsBuildingAdd } from "react-icons/bs";
import { FaChrome } from "react-icons/fa6";
import { Link } from "react-router";

const Insights = () => {
  return (
    <>
      <section className="border bg-white rounded-lg p-6 py-12 flex items-center justify-center w-full">
        <div className="flex flex-col gap-6 max-w-[40rem] mx-auto">
          <FaChrome className="text-6xl border-8 border-gray-300 rounded-full mx-auto" />
          <h3 className="text-3xl text-center font-bold">No insights yet</h3>
          <p className="text-center text-black/60 font-medium">
            Take the assessment to discover your inclusivity score and receive
            personalized recommendations to maximize your impact.
          </p>
          <Link
            to={"survey"}
            className="w-fit mx-auto bg-primary-500 py-3 font-bold px-8 flex items-center gap-2 text-white group rounded-full hover:bg-black duration-200"
          >
            <BsBuildingAdd /> Take Assessment
          </Link>
        </div>
      </section>
    </>
  );
};

export default Insights;

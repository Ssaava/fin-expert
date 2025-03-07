import { frequentQuestions } from "@/assets/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";

const FaqSection = () => {
  return (
    <>
      <section className="px-4 md:px-10 min-h-screen">
        <div className="px-4 md:px-16 xl:px-32 py-10 md:py-16 mt-12">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h3 className="text-wrap w-fit font-extrabold text-4xl">
                Frequently Asked Questions
              </h3>
            </div>
            <div>
              <Accordion
                type="single"
                className="flex flex-col gap-6"
                collapsible
              >
                {frequentQuestions.map(({ id, question, answer }) => (
                  <>
                    <AccordionItem key={id} value={`item-${id}`}>
                      <AccordionTrigger className="border px-6 md:px-10 md:py-5 text-lg">
                        {question}
                      </AccordionTrigger>
                      <AccordionContent>{answer}</AccordionContent>
                    </AccordionItem>
                  </>
                ))}
              </Accordion>
              <div className="flex flex-col gap-4 mt-12">
                <h3 className="text-[#5C687D] font-bold">
                  Have more questions?
                </h3>
                <Button className="border w-fit border-[#E1E9F7]  rounded-lg font-bold bg-white text-black hover:text-white py-5 px-6">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GoArrowLeft } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import { Answer, Question } from "@/assets/types";

const QuestionComponents = ({ questions }: { questions: Question[] }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [answers, setAnswers] = useState<Answer>({}); // Store user answers

  // Handle input change for each question
  const handleInputChange = (
    questionIndex: number,
    value: string | string[]
  ): void => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: value,
    }));
  };

  // Handle next page
  const handleNextPage = (): void => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const handlePreviousPage = (): void => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle exit survey
  const handleExitSurvey = (): void => {
    const confirmExit = window.confirm(
      "Do you want to exit the survey and return to the dashboard?"
    );
    if (confirmExit) {
      // Redirect to dashboard or handle exit logic
      console.log("Exiting survey...");
    }
  };

  // Handle form submission
  const handleSubmit = (): void => {
    console.log("Survey Answers:", answers);
    // Add logic to submit answers to your backend or API
    alert("Survey submitted successfully!");
  };

  // Calculate total pages dynamically based on questions
  const questionsPerPage = 5; // Number of questions per page
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  // Calculate progress
  const progress: number = ((currentPage + 1) / totalPages) * 100;

  // Get questions for the current page
  const startIndex: number = currentPage * questionsPerPage;
  const endIndex: number = startIndex + questionsPerPage;
  const currentQuestions: Question[] = questions.slice(startIndex, endIndex);

  return (
    <section className="min-h-screen w-screen bg-white px-6 sm:px-10 md:px-20 lg:px-28 py-4 sm:py-6">
      <div className="flex justify-between py-8 gap-4 mb-8 items-center">
        <button onClick={handlePreviousPage}>
          <GoArrowLeft className="text-3xl" />
        </button>
        <div className="max-w-[60rem] w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-primary-500 h-2.5 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <button onClick={handleExitSurvey}>
          <RxCross1 className="text-3xl" />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="max-w-[50rem] w-full mx-auto flex flex-col gap-6">
          {currentQuestions.map((question, index) => {
            // Calculate the question number globally
            const questionNumber = startIndex + index + 1;
            return (
              <div
                key={startIndex + index}
                className="flex flex-col gap-2 mt-4"
              >
                <label className="text-lg font-medium">
                  {questionNumber}. {question.label}
                </label>
                {question.type === "text" && (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-lg p-2 "
                    value={(answers[startIndex + index] as string) || ""}
                    onChange={(e) =>
                      handleInputChange(startIndex + index, e.target.value)
                    }
                  />
                )}
                {question.type === "radio" && (
                  <div className="flex flex-col gap-2">
                    {question.options?.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className={`flex items-center gap-6 rounded-lg border px-6 py-3  ${
                          answers[startIndex + index] === option
                            ? "border-primary-500 text-primary-500 bg-blue-50"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          className="hidden"
                          name={`question-${startIndex + index}`}
                          value={option}
                          checked={answers[startIndex + index] === option}
                          onChange={() =>
                            handleInputChange(startIndex + index, option)
                          }
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
                {question.type === "checkbox" && (
                  <div className="flex flex-col gap-2">
                    {question.options?.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className={`flex items-center gap-6 flex-wr rounded-lg border px-6 py-3 ${
                          (answers[startIndex + index] as string[])?.includes(
                            option
                          )
                            ? "border-primary-500 text-primary-500 bg-blue-50"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          value={option}
                          checked={(
                            answers[startIndex + index] as string[]
                          )?.includes(option)}
                          onChange={(e) => {
                            const selectedOptions =
                              (answers[startIndex + index] as string[]) || [];
                            const updatedOptions = e.target.checked
                              ? [...selectedOptions, option]
                              : selectedOptions.filter(
                                  (item) => item !== option
                                );
                            handleInputChange(
                              startIndex + index,
                              updatedOptions
                            );
                          }}
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
                {question.type === "number-radio" && (
                  <div className="flex gap-2">
                    {question.options?.map((option, optionIndex) => (
                      <label
                        key={optionIndex}
                        className={`flex items-center justify-center size-10 rounded-lg border ${
                          answers[startIndex + index] === option
                            ? "border-primary-500 text-primary-500 bg-blue-50"
                            : "border-gray-300"
                        }`}
                      >
                        <input
                          type="radio"
                          className="hidden"
                          name={`question-${startIndex + index}`}
                          value={option}
                          checked={answers[startIndex + index] === option}
                          onChange={() =>
                            handleInputChange(startIndex + index, option)
                          }
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between mt-8">
        {/* Previous Button */}
        {currentPage > 0 && (
          <Button
            className="text-white bg-primary-500 rounded-full !px-8 !py-4"
            onClick={handlePreviousPage}
          >
            Previous
          </Button>
        )}
        {/* Next or Submit Button */}
        {currentPage < totalPages - 1 ? (
          <Button
            className="text-white bg-primary-500 rounded-full !px-8 !py-4 ml-auto"
            onClick={handleNextPage}
          >
            Next
          </Button>
        ) : (
          <Button
            className="text-white bg-primary-500 rounded-full !px-8 !py-4 ml-auto"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}
      </div>
    </section>
  );
};

export default QuestionComponents;

import { Answer } from "@/assets/types";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ApiQuestion, transformApiQuestions } from "@/lib/utils";
import { useQuestionnaireStore } from "@/store/store";
import { Dispatch, SetStateAction, useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { LoadingOverlay } from "../common/Spinner";
import { Separator } from "../ui/separator";

interface Props {
  questions: ApiQuestion[];
  answers: Answer;
  setAnswers: Dispatch<SetStateAction<Answer>>;
  isSubmitted: boolean;
  handleRetakeSurvey: () => void;
  results?: string | null;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  handleSubmit: (questions: ApiQuestion[]) => void;
  handleCloseSurvey: () => void;
  handleExitSurvey: () => void;
  isApiFormat?: boolean;
}

const QuestionComponents = ({
  questions,
  answers,
  setAnswers,
  isSubmitted,
  handleRetakeSurvey,
  results,
  currentPage,
  setCurrentPage,
  handleSubmit,
  handleCloseSurvey,
  handleExitSurvey,
  isApiFormat = false,
}: Props) => {
  const fetchingQuestionnaire = useQuestionnaireStore(
    (state) => state.fetchingQuestionnaire
  );
  const isSubmitting = useQuestionnaireStore(
    (state) => state.submittingQuestionnaire
  );

  const normalizedQuestions = isApiFormat
    ? transformApiQuestions(questions as ApiQuestion[])
    : (questions as ApiQuestion[]);

  useEffect(() => {
    const savedAnswers = localStorage.getItem("surveyAnswers");
    const savedPage = localStorage.getItem("surveyCurrentPage");

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }
  }, [setAnswers, setCurrentPage]);

  useEffect(() => {
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
    localStorage.setItem("surveyCurrentPage", currentPage.toString());
  }, [answers, currentPage]);

  const handleInputChange = (
    questionIndex: number,
    value: string | string[]
  ): void => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: value,
    }));
  };

  const handleNextPage = (): void => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = (): void => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const questionsPerPage = 5;
  const totalPages = Math.ceil(normalizedQuestions.length / questionsPerPage);
  const progress: number = ((currentPage + 1) / totalPages) * 100;
  const startIndex: number = currentPage * questionsPerPage;
  const endIndex: number = startIndex + questionsPerPage;
  const currentQuestions = normalizedQuestions.slice(startIndex, endIndex);
  // Check if all questions on the current page are answered
  const isCurrentPageComplete = currentQuestions.every((question, index) => {
    const questionIndex = startIndex + index;
    const answer = answers[questionIndex];

    if (question.type === "text") {
      return !!answer && (answer as string).trim() !== "";
    } else if (question.type === "radio" || question.type === "number-radio") {
      return !!answer;
    } else if (question.type === "checkbox") {
      return !!answer && (answer as string[]).length > 0;
    }
    return false;
  });

  return (
    <section className="min-h-screen w-screen bg-white px-6 sm:px-10 md:px-20 lg:px-28 py-4 sm:py-6">
      <div className="flex justify-between py-8 gap-4 mb-8 items-center">
        {!isSubmitted && (
          <>
            <button onClick={handlePreviousPage}>
              <GoArrowLeft className="text-3xl" />
            </button>
            <div className="max-w-[60rem] w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-primary-500 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </>
        )}

        <Dialog>
          <DialogTrigger
            className={
              isSubmitted
                ? "text-red-500 rounded-full bg-gray-100 p-2 ml-auto"
                : "text-red-500"
            }
          >
            <RxCross1 className="text-3xl" />
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Quit Survey</DialogTitle>
              <DialogDescription>
                Are you sure you want to quit the survey?
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="w-full">
              <div className="flex items-center w-full justify-between gap-4">
                <DialogClose className="bg-secondary h-9 px-4 py-2 rounded-md text-secondary-foreground shadow-xs hover:bg-secondary/80">
                  Cancel
                </DialogClose>
                <Button className="bg-red-500" onClick={handleExitSurvey}>
                  Close Survey
                </Button>
              </div>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      {fetchingQuestionnaire && (
        <LoadingOverlay text="Fetching survey data..." />
      )}
      {isSubmitted ? (
        <div className="flex justify-center">
          <div className="max-w-[50rem] w-full mx-auto flex flex-col gap-6">
            <div className="flex items-center justify-center rounded-full mx-auto size-20 md:size-28 bg-green-500">
              <IoMdCheckmark className="text-white text-4xl md:text-5xl" />
            </div>
            <h2 className="text-2xl font-bold text-center">
              Assessment Complete
            </h2>
            <p className="text-lg text-center">{results}</p>
            <Separator className="my-8 !h-[1.7px] !rounded-full" />
            <div className="flex flex-col gap-4 mt-8">
              <p className="text-center">Your inclusivity score</p>
              <h3 className="text-center font-extrabold text-4xl">78/100</h3>
              <div className="flex items-center justify-between w-full mt-12 md:mt-24 flex-wrap gap-4">
                <Button
                  className="text-black/60 hover:text-white font-bold bg-gray-100 rounded-full !px-10 !py-5"
                  onClick={handleCloseSurvey}
                >
                  Close
                </Button>
                <Button
                  className="text-white bg-primary-500 rounded-full !px-10 !py-5"
                  onClick={handleRetakeSurvey}
                >
                  Retake Survey
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Survey Questions Section
        <div className="flex justify-center">
          <div className="max-w-[50rem] w-full mx-auto flex flex-col gap-6">
            {currentQuestions.map((question, index) => {
              const questionNumber = startIndex + index + 1;
              return (
                <div
                  key={startIndex + index}
                  className="flex flex-col gap-2 mt-4"
                >
                  <label className="text-lg font-medium">
                    {questionNumber}. {question.text}
                  </label>
                  {question.type === "text" && (
                    <input
                      type="text"
                      placeholder={question.placeholder}
                      className="border border-gray-300 rounded-lg p-2 "
                      value={(answers[startIndex + index] as string) || ""}
                      onChange={(e) =>
                        handleInputChange(startIndex + index, e.target.value)
                      }
                    />
                  )}
                  {question.type === "radio" && (
                    <div className="flex flex-col gap-2">
                      {question.options?.map(({ text, value }, optionIndex) => (
                        <label
                          key={optionIndex}
                          className={`flex items-center gap-6 rounded-lg border px-6 py-3  ${
                            answers[startIndex + index] === value
                              ? "border-primary-500 text-primary-500 bg-blue-50"
                              : "border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            className="hidden"
                            name={`question-${startIndex + index}`}
                            value={value}
                            checked={answers[startIndex + index] === value}
                            onChange={() =>
                              handleInputChange(startIndex + index, value)
                            }
                          />
                          {text}
                        </label>
                      ))}
                    </div>
                  )}
                  {question.type === "checkbox" && (
                    <div className="flex flex-col gap-2">
                      {question.options?.map(({ text, value }, optionIndex) => (
                        <label
                          key={optionIndex}
                          className={`flex items-center gap-6 flex-wr rounded-lg border px-6 py-3 ${
                            (answers[startIndex + index] as string[])?.includes(
                              value
                            )
                              ? "border-primary-500 text-primary-500 bg-blue-50"
                              : "border-gray-300"
                          }`}
                        >
                          <input
                            type="checkbox"
                            className="hidden"
                            value={value}
                            checked={(
                              answers[startIndex + index] as string[]
                            )?.includes(value)}
                            onChange={(e) => {
                              const selectedOptions =
                                (answers[startIndex + index] as string[]) || [];
                              const updatedOptions = e.target.checked
                                ? [...selectedOptions, value]
                                : selectedOptions.filter(
                                    (item) => item !== value
                                  );
                              handleInputChange(
                                startIndex + index,
                                updatedOptions
                              );
                            }}
                          />
                          {text}
                        </label>
                      ))}
                    </div>
                  )}
                  {question.type === "number-radio" && (
                    <div className="flex gap-2 max-sm:flex-wrap  w-full">
                      {question.options?.map(({ text, value }, optionIndex) => (
                        <label
                          key={optionIndex}
                          className={`hover:border-primary-500 hover:text-primary-500 hover:bg-blue-50 duration-200 flex items-center justify-center sm:w-full py-2 px-4  rounded-lg border ${
                            answers[startIndex + index] === value
                              ? "border-primary-500 text-primary-500 bg-blue-50"
                              : "border-gray-300"
                          }`}
                        >
                          <input
                            type="radio"
                            className="hidden"
                            name={`question-${startIndex + index}`}
                            value={value}
                            checked={answers[startIndex + index] === value}
                            onChange={() =>
                              handleInputChange(startIndex + index, value)
                            }
                          />
                          {text}
                        </label>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      {!isSubmitted && (
        <div className="flex justify-between mt-8">
          {currentPage > 0 && (
            <Button
              className="text-white bg-primary-500 rounded-full !px-8 !py-4"
              onClick={handlePreviousPage}
            >
              Previous
            </Button>
          )}
          {currentPage < totalPages - 1 ? (
            <Button
              className="text-white bg-primary-500 rounded-full !px-8 !py-4 ml-auto"
              onClick={handleNextPage}
              disabled={!isCurrentPageComplete}
            >
              Next
            </Button>
          ) : (
            <Button
              className="text-white bg-primary-500 rounded-full !px-8 !py-4 ml-auto"
              onClick={() => handleSubmit(questions)}
              disabled={!isCurrentPageComplete}
            >
              {isSubmitting ? "...Submitting" : "Submit"}
            </Button>
          )}
        </div>
      )}
    </section>
  );
};

export default QuestionComponents;

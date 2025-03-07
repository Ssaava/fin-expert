import { userSurveyQuestions } from "@/assets/data";
import { Answer } from "@/assets/types";
import SurveyComponent from "@/components/survey/SurveyComponent";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const FintechUserSurvey = () => {
  const [answers, setAnswers] = useState<Answer>(
    localStorage.getItem("surveyAnswers")
      ? JSON.parse(localStorage.getItem("surveyAnswers") || "{}")
      : {}
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(
    localStorage.getItem("surveyCurrentPage")
      ? JSON.parse(localStorage.getItem("surveyCurrentPage") || "0")
      : 0
  );
  const [results, setResults] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const savedAnswers = localStorage.getItem("surveyAnswers");
    const savedPage = localStorage.getItem("surveyCurrentPage");

    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    if (savedPage) {
      setCurrentPage(Number(savedPage));
    }
  }, [setAnswers]);

  // Save answers and current page to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("surveyAnswers", JSON.stringify(answers));
    localStorage.setItem("surveyCurrentPage", currentPage.toString());
  }, [answers, currentPage]);

  // Handle form submission
  const handleSubmit = (): void => {
    console.log("Survey Answers:", answers);
    // Simulate backend response
    setResults(
      "   You have good financial inclusivity but can improve in accessibility and financial literacy"
    );
    setIsSubmitted(true);

    // Clear local storage after submission
    localStorage.removeItem("surveyAnswers");
    localStorage.removeItem("surveyCurrentPage");
  };

  // Handle retake survey
  const handleRetakeSurvey = (): void => {
    setAnswers({});
    setCurrentPage(0);
    setIsSubmitted(false);
    setResults(null);
  };

  // Handle exit survey
  const handleExitSurvey = (): void => {
    localStorage.removeItem("surveyAnswers");
    localStorage.removeItem("surveyCurrentPage");
    navigate("/survey-insights");
  };

  // Handle close survey
  const handleCloseSurvey = (): void => {
    localStorage.removeItem("surveyAnswers");
    localStorage.removeItem("surveyCurrentPage");
    navigate("/survey");
  };
  return (
    <>
      <section className="pb-10">
        <SurveyComponent
          questions={userSurveyQuestions}
          answers={answers}
          results={results}
          setAnswers={setAnswers}
          isSubmitted={isSubmitted}
          handleRetakeSurvey={handleRetakeSurvey}
          handleSubmit={handleSubmit}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          handleCloseSurvey={handleCloseSurvey}
          handleExitSurvey={handleExitSurvey}
        />
      </section>
    </>
  );
};

export default FintechUserSurvey;

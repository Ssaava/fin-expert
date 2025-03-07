import { regulatorSurveyQuestions } from "@/assets/data";
import { Answer } from "@/assets/types";
import SurveyComponent from "@/components/survey/SurveyComponent";
import { useState } from "react";
import { useNavigate } from "react-router";

const RegulatorSurvey = () => {
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
  const handleSubmit = (): void => {
    setResults(
      "   You have good financial inclusivity but can improve in accessibility and financial literacy"
    );
    setIsSubmitted(true);
    localStorage.removeItem("surveyAnswers");
    localStorage.removeItem("surveyCurrentPage");
  };

  const handleRetakeSurvey = (): void => {
    setAnswers({});
    setCurrentPage(0);
    setIsSubmitted(false);
    setResults(null);
  };

  const handleExitSurvey = (): void => {
    localStorage.removeItem("surveyAnswers");
    localStorage.removeItem("surveyCurrentPage");
    navigate("/survey-insights");
  };
  const handleCloseSurvey = (): void => {
    localStorage.removeItem("surveyAnswers");
    localStorage.removeItem("surveyCurrentPage");
    navigate("/survey");
  };
  return (
    <>
      <section className="pb-10">
        <SurveyComponent
          questions={regulatorSurveyQuestions}
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

export default RegulatorSurvey;

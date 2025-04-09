/* eslint-disable @typescript-eslint/no-explicit-any */
import { Answer } from "@/assets/types";
import { ApiQuestion, mapAnswersToQuestions } from "@/lib/utils";
import { useAuthStore, useQuestionnaireStore } from "@/store/store";
import { useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useSurvey = () => {
  const [answers, setAnswers] = useState<Answer>(
    localStorage.getItem("surveyAnswers")
      ? JSON.parse(localStorage.getItem("surveyAnswers") || "{}")
      : {}
  );
  const user_category = useAuthStore((state) => state.user_category);
  const token = useAuthStore((state) => state.fin_token);
  const submitQuestionnaire = useQuestionnaireStore(
    (state) => state.submitQuestionnaire
  );
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(
    localStorage.getItem("surveyCurrentPage")
      ? JSON.parse(localStorage.getItem("surveyCurrentPage") || "0")
      : 0
  );
  const [results, setResults] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (apiQuestions: ApiQuestion[]) => {
    const surveyResponse: any = {
      user_type: user_category,
      responses: [
        {
          question_id: "string",
          value: "string",
        },
      ],
      save_results: true,
    };

    surveyResponse.responses = mapAnswersToQuestions(
      apiQuestions,
      answers
    ).responses;
    const response: any = await submitQuestionnaire(surveyResponse, token);

    if (response.status == 200 || response !== undefined) {
      toast.success("Questionnaire submitted successfully");
      setIsSubmitted(true);
      setResults(
        response?.data?.recommendations[0]?.general_advice ||
          "No Big Advice Provided"
      );
      setScore(Math.round(response?.data?.overall_score));
      localStorage.removeItem("surveyAnswers");
      localStorage.removeItem("surveyCurrentPage");
    } else {
      toast.error("An Error Occurred", {
        description: response.data.detail,
      });
    }
    console.log("Submission Response: ", response);
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
    navigate("/dashboard/survey-insights");
  };

  const handleCloseSurvey = (): void => {
    localStorage.removeItem("surveyAnswers");
    localStorage.removeItem("surveyCurrentPage");
    navigate("/survey");
  };
  return {
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
    score,
  };
};

export default useSurvey;

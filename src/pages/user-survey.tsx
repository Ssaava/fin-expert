import SurveyComponent from "@/components/survey/SurveyComponent";
import useFetchQuestionnaire from "@/hooks/useFetchQuestionnaire";
import useSurvey from "@/hooks/useSurvey";
import { useAuthStore } from "@/store/store";

const UserSurvey = () => {
  const {
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
  } = useSurvey();

  const user_category = useAuthStore((state) => state.user_category);
  const { questions } = useFetchQuestionnaire(user_category as string);
  if (!questions) return <>Failed to get Questions</>;

  return (
    <>
      <section className="pb-10">
        <SurveyComponent
          questions={questions}
          isApiFormat={true}
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
          score={score}
        />
      </section>
    </>
  );
};

export default UserSurvey;

/* eslint-disable @typescript-eslint/no-explicit-any */
import SurveyComponent from "@/components/survey/SurveyComponent";
import useFetchQuestionnaire from "@/hooks/useFetchQuestionnaire";
import useSurvey from "@/hooks/useSurvey";
const FintechUserSurvey = () => {
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
  } = useSurvey();
  const { questions } = useFetchQuestionnaire("fintech_users");
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
        />
      </section>
    </>
  );
};

export default FintechUserSurvey;

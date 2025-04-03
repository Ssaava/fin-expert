import SurveyComponent from "@/components/survey/SurveyComponent";
import useFetchQuestionnaire from "@/hooks/useFetchQuestionnaire";
import useSurvey from "@/hooks/useSurvey";

const ServiceProviderSurvey = () => {
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
  const { questions } = useFetchQuestionnaire("service_providers");
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

export default ServiceProviderSurvey;

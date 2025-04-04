/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiQuestion } from "@/lib/utils";
import { useAuthStore, useQuestionnaireStore } from "@/store/store";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useFetchQuestionnaire = (user_type: string) => {
  const [questions, setQuestions] = useState<ApiQuestion[]>([]);

  const getQuestions = useQuestionnaireStore((state) => state.getQuestionnaire);
  const token = useAuthStore((state) => state.fin_token);

  useEffect(() => {
    const getFintechQuestions = async () => {
      const response: any = await getQuestions(user_type, token);
      if (response) {
        setQuestions(response.questions);
      } else {
        toast.error("Failed to fetch user Questions");
      }
    };
    getFintechQuestions();
  }, [getQuestions, token, user_type]);
  return {
    questions,
  };
};

export default useFetchQuestionnaire;

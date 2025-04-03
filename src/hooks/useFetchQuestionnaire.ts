/* eslint-disable @typescript-eslint/no-explicit-any */
import { Question } from "@/assets/types";
import { ApiQuestion } from "@/lib/utils";
import { useQuestionnaireStore } from "@/store/store";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const useFetchQuestionnaire = (user_type: string) => {
  const [questions, setQuestions] = useState<Question[] | ApiQuestion[]>([]);

  const getQuestions = useQuestionnaireStore((state) => state.getQuestionnaire);

  useEffect(() => {
    const getFintechQuestions = async () => {
      const response: any = await getQuestions(user_type);
      if (response.status == 200) {
        setQuestions(response.data);
      } else {
        toast.error("Failed to fetch user Questions");
      }
    };
    getFintechQuestions();
  }, [getQuestions, user_type]);
  return {
    questions,
  };
};

export default useFetchQuestionnaire;

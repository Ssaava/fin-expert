/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// utils/transformQuestions.ts
export interface ApiQuestion {
  id: number;
  question_id: string;
  text: string;
  type: "yes_no" | "multiple_choice" | "scale" | "open_ended";
  weight: number;
  dimension: string;
  multi_select?: boolean;
  options?:
    | {
        id: number;
        text: string;
        value: string;
      }[]
    | null;
  placeholder?: string;
}

export interface ComponentQuestion {
  type: "radio" | "checkbox" | "number-radio" | "text";
  text: string;
  options?: {
    text: string;
    value: string;
  }[];
  placeholder?: string;
}

export const transformApiQuestions = (
  apiQuestions: ApiQuestion[]
): ComponentQuestion[] => {
  return apiQuestions.map((apiQuestion) => {
    const baseQuestion = {
      text: apiQuestion.text,
      question_id: apiQuestion.question_id,
    };

    // Extract both text and value if options exist
    const getOptions = () => {
      if (!apiQuestion.options) return undefined;
      return apiQuestion.options.map((option) => ({
        text: option.text,
        value: option.value,
      }));
    };

    switch (apiQuestion.type) {
      case "yes_no":
        return {
          ...baseQuestion,
          type: "radio",
          options: [
            { text: "Yes", value: "yes" },
            { text: "No", value: "no" },
          ],
        };
      case "multiple_choice":
        return {
          ...baseQuestion,
          type: apiQuestion.multi_select ? "checkbox" : "radio",
          options: getOptions() || [],
        };
      case "scale":
        return {
          ...baseQuestion,
          type: "number-radio",
          options: Array.from({ length: 5 }, (_, i) => ({
            text: (i + 1).toString(),
            value: `${i + 1}`,
          })),
        };
      case "open_ended":
        return {
          ...baseQuestion,
          type: "text",
          placeholder: apiQuestion.placeholder || "Type your answer here",
        };
      default:
        return {
          ...baseQuestion,
          type: "text",
          placeholder: "Type your answer here",
        };
    }
  });
};

export const mapAnswersToQuestions = (questions: any[], answers: any) => {
  return {
    responses: questions.map((question, index) => {
      const answerKey = index.toString();
      const answerValue = answers[answerKey];

      // Handle different question types
      let formattedValue;

      if (question.type === "yes_no") {
        formattedValue = answerValue === "yes" ? "Yes" : "No";
      } else if (question.type === "multiple_choice") {
        if (Array.isArray(answerValue)) {
          // For multi-select, map option values to their text

          formattedValue = answerValue.join(", ");
        } else {
          // For single select
          const option = question.options?.map((opt: any) => opt.value);
          formattedValue = option?.text || answerValue;
        }
      } else if (question.type === "scale") {
        formattedValue = answerValue;
      } else {
        formattedValue = answerValue; // For open_ended and others
      }

      return {
        question_id: question.question_id,
        value: formattedValue,
      };
    }),
  };
};

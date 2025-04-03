import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// utils/transformQuestions.ts
export interface ApiQuestion {
  question_id: string;
  question: string;
  weight: number;
  type: "yes_no" | "multiple_choice" | "scale" | "open_ended";
  dimension: string;
  options?: string[];
  multi_select?: boolean;
  placeholder?: string;
}

export interface ComponentQuestion {
  type: "radio" | "checkbox" | "number-radio" | "text";
  label: string;
  options?: string[];
  placeholder?: string;
}

export const transformApiQuestions = (
  apiQuestions: ApiQuestion[]
): ComponentQuestion[] => {
  return apiQuestions.map((apiQuestion) => {
    const baseQuestion = {
      label: apiQuestion.question,
    };

    switch (apiQuestion.type) {
      case "yes_no":
        return {
          ...baseQuestion,
          type: "radio",
          options: ["Yes", "No"],
        };
      case "multiple_choice":
        return {
          ...baseQuestion,
          type: apiQuestion.multi_select ? "checkbox" : "radio",
          options: apiQuestion.options || [],
        };
      case "scale":
        return {
          ...baseQuestion,
          type: "number-radio",
          options: Array.from({ length: 5 }, (_, i) => (i + 1).toString()),
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

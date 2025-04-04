import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// utils/transformQuestions.ts
export interface ApiQuestion {
  id: number;
  question_id: string;
  label: string;
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
  label: string;
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
      label: apiQuestion.label,
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
            value: `scale_${i + 1}`,
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

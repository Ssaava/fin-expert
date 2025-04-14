/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginSchema } from "@/schemas/schema";
import { z } from "zod";

export interface Answer {
  [key: number]: string | string[];
}

export interface Question {
  type: "text" | "radio" | "checkbox" | "number-radio";
  label: string;
  placeholder?: string; // For text questions
  options?: string[]; // For radio, checkbox, and number-radio questions
}

// auth interfaces
export interface LoginState {
  fin_token: string;
  authenticating: boolean;
  user_category: string | null;
  user_email: string | null;
  loginUser: (data: z.infer<typeof LoginSchema>) => void;
  checkAuth: () => void;
}
export interface RegisterState {
  registerUser: (data: object) => void;
}

export interface LogoutState {
  logoutUser: () => void;
}

export interface GetQuestionnaireState {
  fetchingQuestionnaire: boolean;
  submittingQuestionnaire: boolean;
  questionnaireResults: QuestionnaireResults | null;
  getQuestionnaire: (user_type: string, token: string) => void;
  getUserTypes: () => void;
  submitQuestionnaire: (surveyResponse: any, token: string) => void;
  reset: () => void;
}
export type UserTypes = {
  id: "string";
  name: "string";
};
export interface QuestionnaireResults {
  submission_id: number;
  user_id: number;
  timestamp: string;
  overall_score: number;
  dimension_scores: {
    general_usage: {
      raw_score: number;
      possible_score: number;
      normalized_score: number;
      weight: number;
      weighted_score: number;
      question_count: number;
    };
    barriers: {
      raw_score: number;
      possible_score: number;
      normalized_score: number;
      weight: number;
      weighted_score: number;
      question_count: number;
    };
    affordability: {
      raw_score: number;
      possible_score: number;
      normalized_score: number;
      weight: number;
      weighted_score: number;
      question_count: number;
    };
    accessibility: {
      raw_score: number;
      possible_score: number;
      normalized_score: number;
      weight: number;
      weighted_score: number;
      question_count: number;
    };
    compliance: {
      raw_score: number;
      possible_score: number;
      normalized_score: number;
      weight: number;
      weighted_score: number;
      question_count: number;
    };
    feedback: {
      raw_score: number;
      possible_score: number;
      normalized_score: number;
      weight: number;
      weighted_score: number;
      question_count: number;
    };
    financial_literacy: {
      raw_score: number;
      possible_score: number;
      normalized_score: number;
      weight: number;
      weighted_score: number;
      question_count: number;
    };
  };
  recommendations: Array<{
    dimension: string;
    score: number;
    general_advice: string;
    specific_advice: string;
    sources: string[];
  }>;
}

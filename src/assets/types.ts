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
  getQuestionnaire: (user_type: string, token: string) => void;
  getUserTypes: () => void;
}
export type UserTypes = {
  id: "string";
  name: "string";
};

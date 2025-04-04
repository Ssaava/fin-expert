/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetQuestionnaireState } from "@/assets/types";
import axios from "axios";
import { StateCreator } from "zustand";
const SERVER_URL = import.meta.env.VITE_SERVER;
export const useQuestionnaireSlice: StateCreator<
  GetQuestionnaireState,
  [],
  [],
  GetQuestionnaireState
> = (set) => ({
  fetchingQuestionnaire: false,
  getQuestionnaire: async (user_type: string, token) => {
    set({ fetchingQuestionnaire: true });
    try {
      const response = await axios.get(
        `${SERVER_URL}/questionnaire/${user_type}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      set({ fetchingQuestionnaire: false });
      return response.data;
    } catch (error: any) {
      set({ fetchingQuestionnaire: false });
      return error.response;
    }
  },
  getUserTypes: async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/questionnaire/types`);
      return response;
    } catch (error: any) {
      return error.response;
    }
  },
});

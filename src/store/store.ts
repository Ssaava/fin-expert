import {
  GetQuestionnaireState,
  LoginState,
  RegisterState,
} from "@/assets/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  createLoginSlice,
  createRegisterSlice,
  createLogoutSlice,
} from "./slices/authSlice";
import { useQuestionnaireSlice } from "./slices/useQuestionnairSlice";

export const useAuthStore = create<RegisterState & LoginState>()(
  persist(
    (...a) => ({
      ...createRegisterSlice(...a),
      ...createLoginSlice(...a),
      ...createLogoutSlice(...a),
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        token: state.fin_token,
        user: state.user_role,
      }),
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useQuestionnaireStore = create<GetQuestionnaireState>()(
  persist(
    (...a) => ({
      ...useQuestionnaireSlice(...a),
    }),
    {
      name: "questionnaire-store",
      partialize: () => ({}),
    }
  )
);

import {
  GetQuestionnaireState,
  LoginState,
  LogoutState,
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

export const useAuthStore = create<RegisterState & LoginState & LogoutState>()(
  persist(
    (...a) => ({
      ...createRegisterSlice(...a),
      ...createLoginSlice(...a),
      ...createLogoutSlice(...a),
    }),
    {
      name: "auth-store",
      partialize: (state) => ({
        fin_token: state.fin_token,
        user_category: state.user_category,
        user_email: state.user_email,
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

import { LoginState, RegisterState } from "@/assets/types";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import {
  createLoginSlice,
  createRegisterSlice,
  createLogoutSlice,
} from "./slices/authSlice";

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
        token: state.token,
        user: state.user,
      }),
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

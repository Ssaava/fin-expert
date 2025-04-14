/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginState, LogoutState, RegisterState } from "@/assets/types";
import { LoginSchema } from "@/schemas/schema";
import axios from "axios";
import { z } from "zod";
import { StateCreator } from "zustand";

const initialState = {
  fin_token: "",
  authenticating: false,
  user_category: null,
  user_email: null,
};

const SERVER_URL = import.meta.env.VITE_SERVER;
export const createLoginSlice: StateCreator<
  LoginState & RegisterState,
  [],
  [],
  LoginState
> = (set) => ({
  ...initialState,
  loginUser: async (data: z.infer<typeof LoginSchema>) => {
    set({ authenticating: true });
    try {
      const response = await axios.post(`${SERVER_URL}/users/login`, data);
      set({
        fin_token: response.data.access_token,
        user_category: response.data.category,
        user_email: data.email,
        authenticating: false,
      });

      return response;
    } catch (error: any) {
      set({ authenticating: false });
      return error.response;
    }
  },
  checkAuth: async () => {
    try {
      const response = await axios.get("/api/auth");
      return response.data;
    } catch (error: any) {
      return error.response.data;
    }
  },
});

export const createRegisterSlice: StateCreator<
  RegisterState & LoginState,
  [],
  [],
  RegisterState
> = (set) => ({
  registerUser: async (data: object) => {
    set({ authenticating: true });
    try {
      const response = await axios.post(`${SERVER_URL}/users/register`, data);
      set({ authenticating: false });
      return response;
    } catch (error: any) {
      set({ authenticating: false });
      return error.response;
    }
  },
});

export const createLogoutSlice: StateCreator<
  RegisterState & LoginState,
  [],
  [],
  LogoutState
> = (set) => ({
  logoutUser: () => {
    set(initialState);
    // useQuestionnaireStore.getState().reset();
  },
});

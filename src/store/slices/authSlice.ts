/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoginState, LogoutState, RegisterState } from "@/assets/types";
import { StateCreator } from "zustand";
import axios from "axios";

const initialState = {
  token: "",
  authenticating: false,
  user: null,
};

const SERVER_URL = import.meta.env.VITE_SERVER;
export const createLoginSlice: StateCreator<
  LoginState & RegisterState,
  [],
  [],
  LoginState
> = (set, get) => ({
  ...initialState,
  loginUser: async (data: object) => {
    set({ authenticating: true });
    try {
      const response = await axios.post("/api/login", data);
      set({
        token: response.data.token,
        user: response.data,
        authenticating: false,
      });
      return response.data;
    } catch (error: any) {
      set({ authenticating: false });
      return error.response.data;
    }
  },
  checkAuth: async () => {
    try {
      const token = get().token;
      console.log(token);
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
  },
});

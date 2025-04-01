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
  token: string;
  authenticating: boolean;
  user: null;
  loginUser: (data: object) => void;
  checkAuth: () => void;
}
export interface RegisterState {
  registerUser: (data: object) => void;
}

export interface LogoutState {
  logoutUser: () => void;
}

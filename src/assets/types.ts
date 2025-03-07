export interface Answer {
  [key: number]: string | string[];
}

export interface Question {
  type: "text" | "radio" | "checkbox" | "number-radio";
  label: string;
  placeholder?: string; // For text questions
  options?: string[]; // For radio, checkbox, and number-radio questions
}

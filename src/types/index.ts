export type Price = {
  monthly: number;
  yearly: number;
};

export type Option = {
  label: string;
  description?: string;
  price?: Price;
};

export type InputField = {
  type: "text" | "email" | "phone" | "radio" | "checkbox";
  label: string;
  placeholder?: string;
  options?: Option[];
};

export type FormStep = {
  number: number;
  title: string;
  description: string;
  inputs: InputField[];
};

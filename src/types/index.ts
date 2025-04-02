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
  slug: string;
  description: string;
  inputs: InputField[];
};
export type FormEnding = {
  title: string;
  description: string;
  image: string;
};

export type InputOptions = {
  label: string;
  price?: { monthly: number; yearly: number };
  description?: string;
  image?: string;
};

export type InputPropsType = {
  type: string;
  label: string;
  placeholder?: string;
  options?: InputOptions [];
};
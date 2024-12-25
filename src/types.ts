export type AppType = {
  id: string;
  name: string;
  icon: string;
  description: string;
};

export type Theme = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
};

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlocked: boolean;
};
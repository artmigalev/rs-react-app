import type { components } from "./stapi";

export type ButtonProps = {
  name: string;
  className: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  // clbck: (e: React.MouseEvent<HTMLButtonElement>) => void;
};
export type SoundtrackBase = components["schemas"]["SoundtrackBase"];

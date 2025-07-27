import type { ReactNode } from "react";
import type { components } from "./stapi";

export interface FormSearchProps {
  input: ReactNode;
  button: ReactNode;
}

export interface ContainerCardsState {
  loading: boolean;
  soundtracks: components["schemas"]["SoundtrackBaseResponse"]["soundtracks"] | [];
  value: string | "";
  pageNumber: number;
  loadMore?: () => void;
}

import type { ReactNode } from "react";
import type { components } from "./stapi";

export interface FormSearchProps {
  input: ReactNode;
  button: ReactNode;
}

export interface ContainerCardsState {
  loading: boolean;
  characters: components["schemas"]["CharacterBaseResponse"]["characters"] | [];
  value: string | "";
  pageNumber: number;
  loadMore?: () => void;
}

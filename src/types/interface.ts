import type { ReactElement } from "react";
import type { components } from "./stapi";

export interface FormSearchProps {
  input: ReactElement;
  button: ReactElement;
}

export interface ContainerCardsState {
  loading: boolean;
  characters: components["schemas"]["CharacterBaseResponse"]["characters"] | [];
}

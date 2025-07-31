import type { ReactNode } from "react";
import type { components } from "./stapi";
import type { SoundtrackBase } from "./types";

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
  clickedCard: {
    data: null | components["schemas"]["SoundtrackFull"];
    isClick: boolean;
  };
}
export interface CardProps extends SoundtrackBase {
  handleClick?: () => void;
}

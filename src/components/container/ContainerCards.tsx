import { Component, type Context, type ReactNode } from "react";
import type { ContainerCardsState } from "@/types/interface";
import Loader from "../loader/Loader";
import styles from "./ContainerCards.module.scss";
import React from "react";
import { SearchValueContext, type ContextSearchValue } from "@/context/SearchContext";

export default class ContainerCards extends Component<ContainerCardsState> {
  static contextType: Context<ContextSearchValue> = SearchValueContext;

  declare context: React.ContextType<typeof SearchValueContext>;

  state: Readonly<ContainerCardsState> = {
    loading: true,
    characters: [],
  };

  render(): ReactNode {
    if (this.state.loading) return <Loader />;

    return <div className={styles.container}></div>;
  }
}

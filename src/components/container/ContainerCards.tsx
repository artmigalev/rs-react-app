import { Component, type ReactNode } from "react";
import type { ContainerCardsState } from "@/types/interface";
import Loader from "../loader/Loader";
import styles from "./ContainerCards.module.scss";
import React from "react";
import { SearchValueContext } from "@/context/SearchContext";

export default class ContainerCards extends Component<
  Record<string, unknown>,
  ContainerCardsState
> {
  static contextType = SearchValueContext;
  declare context: React.ContextType<typeof SearchValueContext>;

  state: Readonly<ContainerCardsState> = {
    loading: true,
    characters: [],
    value: "value default",
  };

  componentDidUpdate(): void {
    const { searchValue } = this.context;
    if (searchValue && searchValue !== this.state.value) {
      console.log(searchValue, "ContainerCards searchValue");
      this.setState({ value: searchValue });
    }
  }
  render(): ReactNode {
    if (this.state.loading) return <Loader />;

    return <div className={styles.container}></div>;
  }
}

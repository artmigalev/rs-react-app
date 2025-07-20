import { Component, type ReactNode } from "react";
import type { ContainerCardsState } from "@/types/interface";
import Loader from "../loader/Loader";
import styles from "./ContainerCards.module.scss";
import React from "react";
import { SearchValueContext } from "@/context/SearchContext";
import getCharacters from "@/api/Character/getCharacters";
import { Card } from "../card/Card";

export default class ContainerCards extends Component<
  Record<string, unknown>,
  ContainerCardsState
> {
  static contextType = SearchValueContext;
  declare context: React.ContextType<typeof SearchValueContext>;

  state: Readonly<ContainerCardsState> = {
    loading: true,
    characters: [],
    value: "",
    pageNumber: 1,
  };
  loadMore = () => {
    this.setState((prevState) => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  };
  async componentDidMount() {
    await this.getData();
    this.setState({ loading: false });
  }

  async componentDidUpdate(
    prevProps: Readonly<Record<string, unknown>>,
    prevState: Readonly<ContainerCardsState>
  ) {
    const { searchValue } = this.context;

    if (searchValue !== this.state.value) {
      this.setState(
        {
          value: searchValue ?? "",
          pageNumber: 1,
          characters: [],
          loading: true,
        },
        async () => {
          await this.getData();
          this.setState({ loading: false });
        }
      );
    }

    if (this.state.pageNumber !== prevState.pageNumber && searchValue === this.state.value) {
      await this.getData();
    }
  }

  async getData() {
    try {
      const response = await getCharacters(this.state.pageNumber);
      const { characters } = response;

      this.setState((prevState) => ({
        characters: [...prevState.characters, ...characters],
      }));
    } catch (error) {
      if (error instanceof Error) {
        console.error("Fetch error:", error.message);
      } else {
        console.error("Unknown fetch error");
      }
    }
  }

  render(): ReactNode {
    if (this.state.loading) return <Loader />;
    const { characters } = this.state;
    const { searchValue } = this.context;

    const lowerSearchVValue = (searchValue ?? "").trim().toLowerCase();
    const filteredCharacters = lowerSearchVValue
      ? characters.filter((character) => character.name?.toLowerCase().includes(lowerSearchVValue))
      : characters;
    return (
      <div className={styles.container}>
        {filteredCharacters.map((character) => (
          <Card key={character.uid} {...character} />
        ))}
      </div>
    );
  }
}

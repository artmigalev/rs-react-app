import { Component, type ReactNode } from "react";
import { Card } from "../card/Card";
import styles from "./index.module.scss";
import getAnimal from "@/api/animal/getAnimal";
import type { components } from "@/types/stapi";

export default class Main extends Component<components["schemas"]["AnimalFull"] | null> {
  state: { data: components["schemas"]["AnimalFull"] | null } = { data: null };
  cards: ReactNode[] | [] = [];

  setCard() {
    getAnimal().then((response) => {
      this.setState({ data: response.animals[0] });
    });

    return;
  }
  componentDidMount(): void {
    this.setCard();
  }
  render(): ReactNode {
    return (
      <>
        <div className={styles.main}>{this.state.data && <Card {...this.state.data} />}</div>
      </>
    );
  }
}

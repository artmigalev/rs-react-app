import { Component, type ReactNode } from "react";
import type { components } from "@/types/stapi";
import ContainerCards from "../container/ContainerCards";
import styles from "./index.module.scss";

export default class Main extends Component<{
  containerRef: React.RefObject<ContainerCards | null>;
}> {
  state: { data: components["schemas"]["AnimalFull"] | null } = { data: null };
  cards: ReactNode[] | [] = [];

  componentDidMount(): void {}
  render(): ReactNode {
    return (
      <div className={styles["main"]}>
        <ContainerCards ref={this.props.containerRef} />
      </div>
    );
  }
}

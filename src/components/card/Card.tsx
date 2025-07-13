import type { components } from "@/types/stapi";
import { Component } from "react";
import styles from "./Card.module.scss";

export class Card extends Component<components["schemas"]["AnimalFull"]> {
  render() {
    console.log("render");
    return (
      <>
        <div className={styles.card}>
          {
            <h2 className="">{this.props.name}</h2>
            // <span className="">{data}</span>
          }
        </div>
      </>
    );
  }
}

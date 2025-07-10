import { Component, type ReactNode } from "react";
import styles from "./Card.module.scss";

export class Card extends Component {
  render(): ReactNode {
    return (
      <>
        <div className={styles.card}>
          <h2 className={styles.title}>Card Title</h2>
          <p className={styles.content}>Card content goes here.</p>
        </div>
      </>
    );
  }
}

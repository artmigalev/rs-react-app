import { Component } from "react";
import styles from "./Card.module.scss";
export class Card extends Component {
  render() {
    console.log("render");
    return (
      <>
        <div className={styles.card}>{}</div>
      </>
    );
  }
}

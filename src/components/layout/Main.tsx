import { Component, type ReactNode } from "react";
import { Card } from "../card/Card";
import styles from "./index.module.scss";

export default class Main extends Component {
  render(): ReactNode {
    return (
      <>
        <div className={styles.main}>
          <Card />
        </div>
      </>
    );
  }
}

import { Component, type ReactNode } from "react";
import styles from "./Loader.module.scss";

export default class Loader extends Component {
  render(): ReactNode {
    return (
      <>
        <div className={styles.loader}>
          <div className={`${styles["load-inner"]} ${styles["load-one"]}`}></div>
          <div className={`${styles["load-inner"]} ${styles["load-two"]}`}></div>
          <div className={`${styles["load-inner"]} ${styles["load-three"]}`}></div>
          <span className={styles.text}>Loading...</span>
        </div>
      </>
    );
  }
}

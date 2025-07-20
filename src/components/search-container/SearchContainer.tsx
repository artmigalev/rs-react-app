import { Component, type ReactNode } from "react";
import styles from "./SearchContainer.module.scss";
import FormSearch from "@utils/form/Form";

export default class SearchContainer extends Component {
  render(): ReactNode {
    return (
      <div className={styles.container}>
        <FormSearch />
      </div>
    );
  }
}

import { Component, type ReactNode } from "react";
import type { ButtonProps } from "@/types/types";
import { Button } from "@utils/button/Button";
import Input from "@utils/input/Input";
import styles from "./SearchContainer.module.scss";
import FormSearch from "@utils/form/Form";

export default class SearchContainer extends Component {
  render(): ReactNode {
    const btnProps: ButtonProps = {
      name: "Search",
      className: "form-submit-btn",
      type: "submit",
      clbck: (e) => {
        e.preventDefault();
      },
    };

    return (
      <div className={styles.container}>
        <FormSearch input={<Input />} button={<Button {...btnProps} />} />
      </div>
    );
  }
}

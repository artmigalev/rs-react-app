import type { ButtonProps } from "@/types/types";
import { Component, type FormEvent, type ReactElement } from "react";
import { Button } from "../button/Button";
import Input from "../input/Input";
import styles from "./Form.module.scss";
import { SearchValueContext } from "@/context/SearchContext";
export default class FormSearch extends Component {
  static contextType = SearchValueContext;
  declare context: React.ContextType<typeof SearchValueContext>;

  onSubmitting = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { loadMore } = this.context;
    if (loadMore) loadMore();
  };
  render(): ReactElement {
    const btnProps: ButtonProps = {
      name: "Search",
      className: "form-submit-btn",
      type: "submit",
      // btnFunc: this.onSubmitting,
    };
    return (
      <>
        <form className={styles.form} onSubmit={this.onSubmitting}>
          <Input />
          <Button {...btnProps} />
        </form>
      </>
    );
  }
}

import type { ButtonProps } from "@/types/types";
import { useContext, type FormEvent } from "react";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import styles from "./Form.module.scss";
import { SearchValueContext } from "@/context/SearchContext";

export const FormSearch = (): React.JSX.Element => {
  const { loadMore } = useContext(SearchValueContext);
  const onSubmitting = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loadMore) loadMore();
  };
  const btnProps: ButtonProps = {
    name: "Search",
    className: "form-submit-btn",
    type: "submit",
    // btnFunc: this.onSubmitting,
  };
  return (
    <>
      <form className={styles.form} onSubmit={onSubmitting}>
        <Input />
        <Button {...btnProps} />
      </form>
    </>
  );
};

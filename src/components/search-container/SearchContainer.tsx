import type { JSX } from "react";
import type { ButtonProps } from "@/types/types";
import Button from "@utils/button/Button";
import Input from "@utils/input/Input";
import styles from "./SearchContainer.module.scss";
import { FormSearch } from "@utils/form/Form";

export default function SearchContainer(): JSX.Element {
  const btnProps: ButtonProps = {
    name: "Submit",
    className: "form-submit-btn",
    type: "submit",
  };

  return (
    <div className={styles.container}>
      <FormSearch input={<Input />} button={<Button {...btnProps} />} />
    </div>
  );
}

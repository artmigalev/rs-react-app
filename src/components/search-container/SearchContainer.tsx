import styles from "./SearchContainer.module.scss";
import { FormSearch } from "@utils/form/Form";

export const SearchContainer = () => {
  return (
    <div className={styles["container"]}>
      <FormSearch />
    </div>
  );
};

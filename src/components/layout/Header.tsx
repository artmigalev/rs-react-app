import { SearchContainer } from "@components/search-container/SearchContainer";
import styles from "./index.module.scss";

export const Header = (): React.JSX.Element => {
  return (
    <header className={styles.header}>
      <SearchContainer />
    </header>
  );
};

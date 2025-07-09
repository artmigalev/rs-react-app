import SearchContainer from "@components/search-container/SearchContainer";
import styles from "./index.module.scss";

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <SearchContainer />
      </header>
    </>
  );
}

import { SearchContainer } from "@components/search-container/SearchContainer";
import styles from "./index.module.scss";
import Navigation from "../navigation/Navigation";
import NavList from "@/utils/list/NavList";

export const Header = (): React.JSX.Element => {
  const pages = ["Soundtrack", "About"];
  return (
    <header className={styles.header}>
      <SearchContainer />
      <Navigation>
        <NavList items={pages} />
      </Navigation>
    </header>
  );
};

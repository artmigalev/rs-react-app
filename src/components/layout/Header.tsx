import SearchContainer from "@components/search-container/SearchContainer";
import styles from "./index.module.scss";
import { Component, type ReactNode } from "react";

// export default function Header() {
//   return (
//     <>
//       <header className={styles.header}>
//         <SearchContainer />
//       </header>
//     </>
//   );
// }
export default class Header extends Component {
  render(): ReactNode {
    return (
      <>
        <header className={styles.header}>
          <SearchContainer />
        </header>
      </>
    );
  }
}

import type { ReactNode } from "react";
import type React from "react";
import styles from "./Navigation.module.scss";
export default function Navigation({ children }: { children: ReactNode }): React.JSX.Element {
  return <nav className={styles["navigation"]}>{children}</nav>;
}

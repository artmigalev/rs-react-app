import Item from "../item/Item";
import styles from "./List.module.scss";
export default function NavList({ items }: { items: string[] }) {
  return (
    <ul className={styles["nav-list"]}>
      {items.map((value: string, index: number) => (
        <Item str={value} key={index} />
      ))}
    </ul>
  );
}

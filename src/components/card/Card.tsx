import type { CardProps } from "@/types/interface";
import styles from "./Card.module.scss";

const Card = (props: CardProps) => {
  return (
    <div onClick={props.handleClick} className={styles["card-bgblue"]}>
      <div key={props.uid} className={styles["card"]}>
        <ul className={styles["list"]}>
          <li>
            <span className={styles["list-item-title"]}>Title:</span>
            <span className={styles["props"]}>{props.title}</span>
          </li>
          <li>
            <span className={styles["list-item-title"]}>Length:</span>
            <span className={styles["props"]}>{props.length}</span>
          </li>
          <li>
            <span className={styles["list-item-title"]}>Release date:</span>
            <span className={styles["props"]}>{props.releaseDate ?? "19.20.1920"}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Card;

import { Card } from "../card/Card";
import styles from "./index.module.scss";
export default function Main() {
  return (
    <>
      <div className={styles.main}>
        <Card />
      </div>
    </>
  );
}

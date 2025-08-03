import styles from "./Loader.module.scss";

const Loader = (): React.JSX.Element => {
  return (
    <div className={styles.loader}>
      <div className={`${styles["load-inner"]} ${styles["load-one"]}`}></div>
      <div className={`${styles["load-inner"]} ${styles["load-two"]}`}></div>
      <div className={`${styles["load-inner"]} ${styles["load-three"]}`}></div>
      <span className={styles.text}>Loading...</span>
    </div>
  );
};

export default Loader;

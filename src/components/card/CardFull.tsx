import type { components } from "@/types/stapi";
import { SoundtrackFullNames } from "@/variables";
import styles from "./Card.module.scss";
import List from "@/utils/list/List";

export default function CardFull(
  props: components["schemas"]["SoundtrackFull"]
): React.JSX.Element {
  const {
    composers = [],
    contributors = [],
    orchestrators = [],
    title,
  } = (props as components["schemas"]["SoundtrackFull"]) || {};

  const safeComposers = Array.isArray(composers) ? composers : [];
  const safeContributors = Array.isArray(contributors) ? contributors : [];
  const safeOrchestrators = Array.isArray(orchestrators) ? orchestrators : [];

  return (
    <div className={styles["card-bgblue"]}>
      <div className={`${styles["card"]} ${styles["card-contents"]}`}>
        <h3 className={styles["title"]}>{title || "Untitled Soundtrack"}</h3>

        {safeComposers.length > 0 && (
          <>
            <h4 className={styles["list-title"]}>{SoundtrackFullNames[0]}</h4>
            <List staffBase={safeComposers} />
          </>
        )}

        {safeContributors.length > 0 && (
          <>
            <h4 className={styles["list-title"]}>{SoundtrackFullNames[1]}</h4>
            <List staffBase={safeContributors} />
          </>
        )}

        {safeOrchestrators.length > 0 && (
          <>
            <h4 className={styles["list-title"]}>{SoundtrackFullNames[2]}</h4>
            <List staffBase={safeOrchestrators} />
          </>
        )}
      </div>
    </div>
  );
}

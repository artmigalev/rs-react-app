import type { components } from "@/types/stapi";

export type FullPropsToCards = Pick<
  components["schemas"]["SoundtrackFull"],
  "composers" | "contributors" | "orchestrators" | "references"
>;

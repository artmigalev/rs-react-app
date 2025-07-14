import { Card } from "@/components/card/Card";
import type { components } from "@/types/stapi";
import { render } from "@testing-library/react";

test("render card", () => {
  const animal: components["schemas"]["AnimalFull"] = {
    uid: "uid",
    name: "animal-name",
  };

  render(<Card {...animal} />);
});

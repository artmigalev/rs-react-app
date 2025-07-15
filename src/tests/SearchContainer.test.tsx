import SearchContainer from "@/components/search-container/SearchContainer";
import type { ButtonProps } from "@/types/types";
import { render } from "@testing-library/react";

export const propsButton: ButtonProps = {
  name: "name-button",
  className: "btn-class-name",
  type: "submit",
  clbck: () => {},
};
test("render SearchContainer", () => {
  const form = document.createElement("form");

  render(<SearchContainer />, {
    baseElement: form,
  });
});

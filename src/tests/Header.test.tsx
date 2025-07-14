import Header from "@/components/layout/Header";
import { render, type RenderResult } from "@testing-library/react";

test("render <hea></hea>der", () => {
  const container = document.createElement("div");

  const header: RenderResult = render(<Header />, {
    baseElement: container,
  });
  expect(header).toBeDefined();
});

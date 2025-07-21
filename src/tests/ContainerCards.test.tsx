import ContainerCards from "@/components/container/ContainerCards";
import { render, screen } from "@testing-library/react";

describe("ContainerCards", () => {
  it("should component rendered", () => {
    render(<ContainerCards />);
    screen.debug();
  });
});

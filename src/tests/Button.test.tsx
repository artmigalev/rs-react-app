import { Button } from "@/utils/button/Button";
import { render, screen } from "@testing-library/react";
import { propsButton } from "./SearchContainer.test";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import type { ButtonProps } from "@/types/types";

describe("Button", () => {
  const props: ButtonProps = {
    name: "Search",
    className: "classname",
    type: "button",
  };
  it("should props must be", () => {
    expect(props).toBeInstanceOf(Object);
    expect(props).toHaveProperty("type", "button");
  });
  it("should button to be in document", () => {
    render(<Button {...props} />);

    // screen.debug()
    const button = screen.getByRole("button", { name: "Search" });
    const text = screen.getByText(/search/i);

    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
  it("should button have attributes", () => {
    render(<Button {...props} />);
    const button = screen.getByRole("button", { name: "Search" });
    console.log(button);

    expect(button).toHaveAttribute("type", "button");
    expect(button).not.toHaveAttribute("disabled");
    expect(button).toHaveClass("classname");
  });

  it("button", async () => {
    render(<Button {...propsButton} />);
    const user = userEvent.setup();
    await user.click(screen.getByText(/name-button/i));

    const button: HTMLElement = screen.getByText(/name-button/i);

    expect(button.textContent).toBe("name-button");
  });
});

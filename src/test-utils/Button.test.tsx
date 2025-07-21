import { Button } from "@/utils/button/Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
import type { ButtonProps } from "@/types/types";

describe("Button", () => {
  const props: ButtonProps = {
    name: "Search",
    className: "classname",
    type: "submit",
  };
  it("should props must be", () => {
    expect(props).toBeInstanceOf(Object);
    expect(props).toHaveProperty("type", "submit");
  });
  it("should button to be in document", () => {
    render(<Button {...props} />);

    const button = screen.getByRole("button", { name: "Search" });
    const text = screen.getByText(/search/i);

    expect(button).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
  it("should button have attributes", () => {
    render(<Button {...props} />);
    const button = screen.getByRole("button", { name: "Search" });

    expect(button).toHaveAttribute("type", "submit");
    expect(button).not.toHaveAttribute("disabled");
    expect(button).toHaveClass("classname");
  });

  it("should be click button", async () => {
    const props: ButtonProps = {
      name: "Search",
      className: "classname",
      type: "submit",
    };

    render(<Button className={props.className} type={props.type} name={props.name} />);
    screen.debug();
    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /search/i }));
  });
});

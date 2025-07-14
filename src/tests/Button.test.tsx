import { Button } from "@/utils/button/Button";
import { render, screen } from "@testing-library/react";
import { propsButton } from "./SearchContainer.test";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/vitest";
describe("Button", () => {
  it("button click", () => {
    const btn = render(<Button {...propsButton} />);

    expect(propsButton).toBeInstanceOf(Object);
    expect(propsButton).toHaveProperty("type", "submit");
    expect(btn.getByRole("button"));
  });
  it("button", async () => {
    render(<Button {...propsButton} />);
    const user = userEvent.setup();
    await user.click(screen.getByText(/name-button/i));

    const button: HTMLElement = screen.getByText(/name-button/i);

    expect(button.textContent).toBe("name-button");
  });
});

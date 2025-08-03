import App from "@/app/App";
import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

describe("App", () => {
  it("should text to document", () => {
    render(<App />);
    screen.debug();

    const element = screen.getByText(/search/i);

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute("type", "submit");
  });
});

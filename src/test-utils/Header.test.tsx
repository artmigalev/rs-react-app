import Header from "@/components/layout/Header";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  render(<Header />);
  it("should be render header", () => {
    const header = screen.getByRole("banner");
    const buttonSearch = screen.getByRole("button");
    const input = screen.getByRole("textbox");

    expect(header).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });
});

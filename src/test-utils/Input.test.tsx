import { SearchValueContext } from "@/context/SearchContext";
import { Input } from "@/utils/input/Input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

describe("Input", async () => {
  const mockContext = {
    searchValue: "",
    setSearchValue: vi.fn(),
  };

  it("type into an input field", async () => {
    const user = userEvent.setup();
    render(
      <SearchValueContext.Provider value={mockContext}>
        <Input />
      </SearchValueContext.Provider>
    );

    const input = screen.getByRole("textbox");
    await user.clear(input);
    await user.type(input, "hello");
    expect(mockContext.setSearchValue).toHaveBeenCalledTimes(5);
    expect(input).toHaveValue("");
    expect(mockContext.setSearchValue).toHaveBeenLastCalledWith("o");
    expect(input).toHaveAttribute("type", "text");
  });
  it("should to be", () => {
    render(
      <SearchValueContext.Provider value={mockContext}>
        <Input />
      </SearchValueContext.Provider>
    );
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });
});

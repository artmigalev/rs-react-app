import Item from "@/utils/item/Item";
import { render, screen } from "@testing-library/react";

describe("Item", () => {
  const itemProps: string = "item-props";

  it("should be in document", () => {
    render(<Item str={itemProps} />);
    screen.debug();
    const item: HTMLElement = screen.getByRole("link", { name: /ITEM-PROPS/i });
    expect(item).toBeInTheDocument();
  });
  it("should type props to string", () => {
    expect(itemProps.length).not.toBeNaN();
    expect(itemProps.length).not.toBeNull();
    expect(typeof itemProps).toBe("string");
  });
});

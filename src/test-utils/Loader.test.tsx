import Loader from "@/components/loader/Loader";
import { render, screen } from "@testing-library/react";

describe("Loader", () => {
  it("should must rendered", () => {
    render(<Loader />);
    const text = screen.getByText(/loading.../i);
    screen.debug();
    const textLength = text.innerHTML;

    expect(text).toBeInTheDocument();
    expect(textLength).toBe("Loading...");
  });
});

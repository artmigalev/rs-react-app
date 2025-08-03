import Card from "@/components/card/Card";
import type { components } from "@/types/stapi";
import { render, screen } from "@testing-library/react";
import { it } from "vitest";

describe("Card", () => {
  const mockTrack: components["schemas"]["SoundtrackBase"] = {
    uid: "mockUid",
    title: "mockTitle",
    length: 1234,
    releaseDate: "19.20.1920",
  };
  it("should props to Cards", () => {
    expect(mockTrack).toHaveProperty("title");
    expect(mockTrack).toHaveProperty("length");
    expect(mockTrack).toHaveProperty("releaseDate");
    expect(mockTrack).toHaveProperty("uid");
  });

  it("should be in the document", () => {
    render(<Card {...mockTrack} />);
    screen.debug();

    const list = screen.getByRole("list");

    const title = screen.getByText(/Title:/i);

    const length = screen.getByText(/Length:/i);
    const releaseDate = screen.getByText(/Release date:/i);

    const listItems = screen.getByRole("list");

    expect(title).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(length).toBeInTheDocument();
    expect(releaseDate).toBeInTheDocument();
    expect(listItems.childElementCount).toBe(Object.keys(mockTrack).length - 1);

    expect(list.className.includes("list")).toBe(true);
  });
});

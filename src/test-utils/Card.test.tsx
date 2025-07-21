import { Card, type CharacterProps } from "@/components/card/Card";
import { render, screen } from "@testing-library/react";
import { it } from "vitest";

describe("Card", () => {
  const mockCharacter: CharacterProps = {
    name: "",
    hologramActivationDate: "",
    hologram: true,
    hologramStatus: "",
    gender: "F",
    yearOfBirth: 1,
    monthOfBirth: 1,
    dayOfBirth: 1,
    placeOfDeath: "",
    height: 1,
    weight: 1,
  };
  it("should props must be", () => {
    expect(mockCharacter).toBeInstanceOf(Object);
    expect(mockCharacter).toHaveProperty("name");
    expect(mockCharacter).toHaveProperty("gender");
    expect(mockCharacter).toHaveProperty("hologram");
  });
  it("should be in the document", () => {
    render(<Card {...mockCharacter} />);
    screen.debug();

    const list = screen.getByRole("list");
    const title = screen.getByRole("heading", { name: "Character name" });
    const text = screen.getByText(/character name/i);
    const listItems = screen.getAllByRole("listitem");

    expect(list).toBeInTheDocument();
    expect(listItems).toHaveLength(Object.keys(mockCharacter).length - 1);
    expect(text).toBeInTheDocument();
    expect(title).toBeInTheDocument();

    expect(list.className.includes("list")).toBe(true);
  });
});

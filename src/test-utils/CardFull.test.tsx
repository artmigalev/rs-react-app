import CardFull from "@/components/card/CardFull";
import type { components } from "@/types/stapi";
import { render, screen } from "@testing-library/react";
import { it } from "vitest";

describe("CardFull", () => {
  const cardProps: components["schemas"]["SoundtrackFull"] = {
    uid: "string",
    title: "Title Soundtrack",
    releaseDate: "string",
    length: 1,
    labels: [],
    composers: [{ uid: "uid", name: "composers-name", birthName: "composers-birth-name" }],
    contributors: [],
    orchestrators: [],
    references: [],
  };
  it("should props to Card", () => {
    expect(cardProps).toHaveProperty("title");
    expect(cardProps).toHaveProperty("uid");
    expect(cardProps).toHaveProperty("releaseDate");
    expect(cardProps).toHaveProperty("composers");
  });
  it("should to be in document", () => {
    render(<CardFull {...cardProps} />);
    screen.debug();
    const titleTAg = screen.getByRole("heading", { name: /Title Soundtrack/i });
    const titleComposers = screen.getByRole("heading", { name: /Composers/i });
    const list = screen.getByRole("list");
    const listItem = screen.getByRole("listitem");
    const composersName: HTMLElement = screen.getByText(/Staff name/i);
    const composersBirthName: HTMLElement = screen.getByText(/Staff birth name/i);
    const valueComposersBirthName: HTMLElement = screen.getByText(/composers-birth-name/i);
    const valueComposersName: HTMLElement = screen.getByText(/composers-name/i);

    expect(titleTAg).toBeInTheDocument();
    expect(list).toBeInTheDocument();
    expect(composersName).toBeInTheDocument();
    expect(valueComposersName).toBeInTheDocument();
    expect(composersBirthName).toBeInTheDocument();
    expect(valueComposersBirthName).toBeInTheDocument();
    expect(listItem).toBeInTheDocument();
    expect(titleComposers).toBeInTheDocument();
  });
});

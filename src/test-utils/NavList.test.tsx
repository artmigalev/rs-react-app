import NavList from "@/utils/list/NavList";
import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

describe("NavList", () => {
  const headers: string[] = ["soundtracks", "about"];
  it("should to be in document", () => {
    render(<NavList items={headers} />);
    screen.debug();
    const linkSoundtrack: HTMLElement = screen.getByRole("link", { name: /SOUNDTRACKS/i });
    const linkAbout: HTMLElement = screen.getByRole("link", { name: /ABOUT/i });
    const list = screen.getByRole("list");
    expect(linkAbout && linkSoundtrack).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });
});

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import ContainerCards from "@/components/container/ContainerCards";
import { SearchValueContext } from "@/context/SearchContext";
import getSoundtracks from "@/api/Soundtracks/getSoundtracks";
import getTrack from "@/api/Soundtracks/getTrack";

vi.mock("@/api/Soundtracks/getSoundtracks", () => ({
  default: vi.fn(),
}));

vi.mock("@/api/Soundtracks/getTrack", () => ({
  default: vi.fn(),
}));
const mockSoundtracks = [
  { uid: "1", title: "Inception" },
  { uid: "2", title: "Interstellar" },
];

const mockTrackData = {
  uid: "1",
  title: "Inception",
  composer: "Hans Zimmer",
};

vi.mock("@/components/card/Card", () => ({
  default: ({ handleClick, title }: { handleClick: () => void; title: string }) => (
    <div role="button" onClick={handleClick}>
      {title}
    </div>
  ),
}));

vi.mock("../components/card/CardFull.tsx", () => ({
  default: ({ title }: { title: string }) => <div data-testid="card-full">{title}</div>,
}));

describe("ContainerCards", () => {
  beforeEach(() => {
    (getSoundtracks as vi.Mock).mockResolvedValue({
      soundtracks: mockSoundtracks,
    });

    (getTrack as vi.Mock).mockResolvedValue(mockTrackData);
  });

  test("renders filtered soundtracks and opens full card on click", async () => {
    const user = userEvent.setup();

    render(
      <SearchValueContext.Provider value={{ searchValue: "inception" }}>
        <ContainerCards />
      </SearchValueContext.Provider>
    );

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /inception/i })).toBeInTheDocument();
    });

    await user.click(screen.getByRole("button", { name: /inception/i }));

    expect(await screen.findByTestId("card-full")).toBeInTheDocument();
  });
});

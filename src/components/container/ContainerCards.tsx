import { useContext, useEffect, useRef, useState } from "react";
import type { CardProps, ContainerCardsState } from "@/types/interface";
import styles from "./ContainerCards.module.scss";
import React from "react";
import { SearchValueContext } from "@/context/SearchContext";
import Card from "@components/card/Card";
import getSoundtracks from "@/api/Soundtracks/getSoundtracks";
import CardFull from "../card/CardFull";
import getTrack from "@/api/Soundtracks/getTrack";
import type { components } from "@/types/stapi";

function isSoundtrackFull(data: unknown): data is components["schemas"]["SoundtrackFull"] {
  if (typeof data !== "object" || data === null) {
    return false;
  }

  const soundtrack = data as {
    uid?: unknown;
    title?: unknown;
    releaseDate?: unknown;
    length?: unknown;
    labels?: unknown;
    composers?: unknown;
    contributors?: unknown;
    orchestrators?: unknown;
    references?: unknown;
  };

  return (
    typeof soundtrack.uid === "string" &&
    typeof soundtrack.title === "string" &&
    (soundtrack.releaseDate === undefined || typeof soundtrack.releaseDate === "string") &&
    (soundtrack.length === undefined || typeof soundtrack.length === "number")
  );
}

function ContainerCards(): React.JSX.Element {
  const [state, setState] = useState<ContainerCardsState>({
    loading: true,
    soundtracks: [],
    value: "",
    pageNumber: 1,
    clickedCard: {
      data: null,
      isClick: false,
    },
  });
  const prevStateRef = useRef(state);
  const { searchValue } = useContext(SearchValueContext);

  useEffect(() => {
    getTracks();
    return;
  }, [searchValue]);
  const getTracks = () => {
    getSoundtracks().then((response) => {
      setState({
        ...prevStateRef.current,
        soundtracks: response.soundtracks,
      });
    });
  };
  const handleClick = (uid: CardProps["uid"]) => {
    getTrack(uid).then((response: components["schemas"]["SoundtrackFull"]) => {
      setState({
        ...state,

        clickedCard: {
          data: response as components["schemas"]["SoundtrackFull"],
          isClick: true,
        },
      });
    });
  };
  const { soundtracks } = state;
  const lowerSearchVAlue = searchValue?.trim().toLowerCase();
  const filterSearchedValue = lowerSearchVAlue
    ? soundtracks.filter((track) => track.title.toLowerCase().includes(lowerSearchVAlue))
    : soundtracks;
  const { clickedCard } = state;

  return (
    <>
      <div className={styles.container}>
        {filterSearchedValue.map((track) => (
          <Card key={track.uid} {...track} handleClick={() => handleClick(track.uid)} />
        ))}
      </div>
      {clickedCard.isClick && isSoundtrackFull(clickedCard.data) && (
        <CardFull {...clickedCard.data} />
      )}
    </>
  );
}

export default ContainerCards;

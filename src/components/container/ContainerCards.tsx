import { useContext, useEffect, useState } from "react";
import type { CardProps, ContainerCardsState } from "@/types/interface";
import styles from "./ContainerCards.module.scss";
import React from "react";
import { SearchValueContext } from "@/context/SearchContext";
import Card from "@components/card/Card";
import getSoundtracks from "@/api/Soundtracks/getSoundtracks";
import CardFull from "../card/CardFull";
import getTrack from "@/api/Soundtracks/getTrack";
import type { components } from "@/types/stapi";

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
  const { searchValue } = useContext(SearchValueContext);

  useEffect(() => {
    getTracks();
    return;
  }, [searchValue]);
  const getTracks = () => {
    getSoundtracks().then((response) => {
      setState((prev) => ({
        ...prev,
        soundtracks: response.soundtracks,
      }));
    });
  };
  const handleClick = (uid: CardProps["uid"]) => {
    getTrack(uid).then((response: components["schemas"]["SoundtrackFull"]) => {
      if (!response?.uid) {
        return setState((prev) => ({
          ...prev,
          loading: false,
        }));
      }

      setState((prev) => ({
        ...prev,
        clickedCard: {
          data: response,
          isClick: true,
        },
      }));
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
      {clickedCard.isClick && <CardFull {...clickedCard.data} />}
    </>
  );
}

export default ContainerCards;

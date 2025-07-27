import { useContext, useEffect, useRef, useState } from "react";
import type { ContainerCardsState } from "@/types/interface";
import styles from "./ContainerCards.module.scss";
import React from "react";
import { SearchValueContext } from "@/context/SearchContext";
import Card from "@components/card/Card";
import getSoundtracks from "@/api/Soundtracks/getSoundtracks";

function ContainerCards(): React.JSX.Element {
  const [state, setState] = useState<ContainerCardsState>({
    loading: true,
    soundtracks: [],
    value: "",
    pageNumber: 1,
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
  const { soundtracks } = state;
  const lowerSearchVAlue = searchValue?.trim().toLowerCase();
  const filterSearchedValue = lowerSearchVAlue
    ? soundtracks.filter((track) => track.title.toLowerCase().includes(lowerSearchVAlue))
    : soundtracks;

  return (
    <div className={styles.container}>
      {filterSearchedValue.map((track) => (
        <Card key={track.uid} {...track} />
      ))}
    </div>
  );
}

export default ContainerCards;

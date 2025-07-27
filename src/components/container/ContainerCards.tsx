import { useContext, useEffect, useRef, useState } from "react";
import type { ContainerCardsState } from "@/types/interface";
import styles from "./ContainerCards.module.scss";
import React from "react";
import { SearchValueContext } from "@/context/SearchContext";
import Card from "@components/card/Card";
import getSoundtracks from "@/api/Soundtracks/getSoundtracks";

// export default class ContainerCards extends Component<Record<string, unknown>, ContainerCardsState> {
//   static contextType = SearchValueContext;
//   declare context: React.ContextType<typeof SearchValueContext>;

//   state: Readonly<ContainerCardsState> = {
//     loading: true,
//     soundtracks: [],
//     value: "",
//     pageNumber: 1,
//   };
//   loadMore = () => {
//     this.setState((prevState) => ({
//       pageNumber: prevState.pageNumber + 1,
//     }));
//   };
//   async componentDidMount() {
//     await this.getData();
//     this.setState({ loading: false });
//   }

//   async componentDidUpdate(
//     _: Readonly<Record<string, unknown>>,
//     prevState: Readonly<ContainerCardsState>
//   ) {
//     const { searchValue } = this.context;

//     if (searchValue !== prevState.value) {
//       this.setState(
//         {
//           value: searchValue ?? "",
//           pageNumber: 1,
//           soundtracks: [],
//           loading: true,
//         },
//         () => {
//           this.getData().then(() => {
//             this.setState({ loading: false });
//           });
//         }
//       );
//       return;
//     }

//     if (this.state.pageNumber !== prevState.pageNumber) {
//       await this.getData();
//     }
//   }

//   async getData() {
//     try {
//       const response = await getSoundtracks(this.state.pageNumber);
//       const { soundtracks } = response;

//       this.setState((prevState) => ({
//         soundtracks: [...prevState.soundtracks, ...soundtracks],
//       }));
//     } catch (error) {
//       if (error instanceof Error) {
//         throw new Error(`Fetch error: ${error.message}`);
//       } else {
//         throw new Error("Unknown fetch error");
//       }
//     }
//   }

//   render(): ReactNode {
//     if (this.state.loading) return <Loader />;
//     const { soundtracks } = this.state;
//     const { searchValue } = this.context;

//     const lowerSearchVValue = (searchValue ?? "").trim().toLowerCase();
//     const filteredCharacters = lowerSearchVValue
//       ? soundtracks.filter((soundtrack) =>
//           soundtrack.name?.toLowerCase().includes(lowerSearchVValue)
//         )
//       : soundtracks;

//   }
// }

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

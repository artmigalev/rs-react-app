import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import "./App.css";
import React, { useRef, useState } from "react";
import { SearchValueContext } from "@/context/SearchContext";
import type ContainerCards from "@/components/container/ContainerCards";

// class App extends Component {
//   containerRef = React.createRef<ContainerCards>();
//   state = {
//     searchValue: localStorage.getItem("searchText") || "",
//   };
//   setSearchValue = (value: string) => {
//     this.setState({ searchValue: value });
//   };
//   loadMore = () => {
//     this.containerRef.current?.loadMore();
//   };
//   render(): React.ReactNode {
//     return (
//       <>
//         <SearchValueContext.Provider
//           value={{
//             searchValue: this.state.searchValue,
//             setSearchValue: this.setSearchValue,
//             loadMore: this.loadMore,
//           }}
//         >
//           <Header />
//           <Main containerRef={this.containerRef} />
//           <Footer />
//         </SearchValueContext.Provider>
//       </>
//     );
//   }
// }

const App = (): React.JSX.Element => {
  const containerRef = useRef<ContainerCards>(null);
  const [state, setState] = useState({ searchValue: localStorage.getItem("searchText") || "" });

  const setSearchValue = (value: string) => {
    setState({ searchValue: value });
  };
  const loadMore = () => {
    containerRef.current?.loadMore();
  };

  return (
    <>
      <SearchValueContext.Provider
        value={{
          searchValue: state.searchValue,
          setSearchValue: setSearchValue,
          loadMore: loadMore,
        }}
      >
        <Header />
        <Main containerRef={containerRef} />
        <Footer />
      </SearchValueContext.Provider>
    </>
  );
};

export default App;

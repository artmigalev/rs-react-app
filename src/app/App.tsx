import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import "./App.css";
import React, { Component } from "react";
import { SearchValueContext } from "@/context/SearchContext";
import type ContainerCards from "@/components/container/ContainerCards";

class App extends Component {
  containerRef = React.createRef<ContainerCards>();
  state = {
    searchValue: localStorage.getItem("searchText") || "",
  };
  setSearchValue = (value: string) => {
    this.setState({ searchValue: value });
  };
  loadMore = () => {
    this.containerRef.current?.loadMore();
  };
  render(): React.ReactNode {
    return (
      <>
        <SearchValueContext.Provider
          value={{
            searchValue: this.state.searchValue,
            setSearchValue: this.setSearchValue,
            loadMore: this.loadMore,
          }}
        >
          <Header />
          <Main containerRef={this.containerRef} />
          <Footer />
        </SearchValueContext.Provider>
      </>
    );
  }
}

export default App;

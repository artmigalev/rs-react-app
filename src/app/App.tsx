import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import "./App.css";
import React, { Component } from "react";
import { SearchValueContext } from "@/context/SearchContext";

class App extends Component {
  state = {
    searchValue: localStorage.getItem("searchText") || "",
  };
  setSearchValue = (value: string) => {
    this.setState({ searchValue: value });
  };
  render(): React.ReactNode {
    return (
      <>
        <SearchValueContext.Provider
          value={{
            searchValue: this.state.searchValue,
            setSearchValue: this.setSearchValue,
          }}
        >
          <Header />
          <Main />
          <Footer />
        </SearchValueContext.Provider>
      </>
    );
  }
}

export default App;

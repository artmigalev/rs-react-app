import Header from "@/components/layout/Header";
import Main from "@/components/layout/Main";
import Footer from "@/components/layout/Footer";
import "./App.css";
import React, { Component } from "react";
import { SearchValueContext } from "@/context/SearchContext";

class App extends Component {
  state: Readonly<{ searchValue: string; setSearchValue: (searchValue: string) => void }> = {
    searchValue: "",
    setSearchValue: (value: string) => this.setState(value),
  };

  render(): React.ReactNode {
    return (
      <>
        <SearchValueContext.Provider value={this.state}>
          <Header />
          <Main />
          <Footer />
        </SearchValueContext.Provider>
      </>
    );
  }
}

export default App;

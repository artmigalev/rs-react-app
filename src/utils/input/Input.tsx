import { SearchValueContext } from "@/context/SearchContext";
import { Component, type ChangeEvent, type ReactNode } from "react";

export default class Input extends Component {
  static contextType? = SearchValueContext;
  declare context: React.ContextType<typeof SearchValueContext>;

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.target as HTMLInputElement;

    const { setSearchValue } = this.context;
    if (setSearchValue) {
      setSearchValue(input.value);
    }
  };

  render(): ReactNode {
    const { searchValue } = this.context;
    return (
      <>
        <input
          type="text"
          required={true}
          value={searchValue}
          onChange={(e) => this.handleChange(e)}
        />
      </>
    );
  }
}

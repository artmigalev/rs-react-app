import { SearchValueContext, type ContextSearchValue } from "@/context/SearchContext";
import { Component, type ChangeEvent, type Context, type ReactNode } from "react";

export default class Input extends Component {
  state: Readonly<{ value: string }> = {
    value: localStorage.getItem("searchText") || "",
  };
  static contextType?: Context<ContextSearchValue> = SearchValueContext;
  declare context: React.ContextType<typeof SearchValueContext>;

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.target as HTMLInputElement;

    this.setState({
      value: input.value,
    });
    const { setSearchValue } = this.context;
    if (setSearchValue) {
      setSearchValue(this.state.value);
    }
    console.log(this.context.searchValue);
  };

  render(): ReactNode {
    return (
      <>
        <input
          type="text"
          required={true}
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
        />
      </>
    );
  }
}

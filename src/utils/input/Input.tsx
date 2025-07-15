import { Component, type ChangeEvent, type ReactNode } from "react";

export default class Input extends Component {
  state: Readonly<{ value: string }> = {
    value: localStorage.getItem("searchText") || "",
  };

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const input = e.target as HTMLInputElement;

    this.setState({
      value: input.value,
    });
  };

  render(): ReactNode {
    return (
      <>
        <input type="text" value={this.state.value} onChange={(e) => this.handleChange(e)} />
      </>
    );
  }
}

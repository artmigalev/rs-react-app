import type { FormSearchProps } from "@/types/interface";
import { Component, type ReactElement } from "react";

export default class FormSearch extends Component<FormSearchProps> {
  render(): ReactElement {
    return (
      <>
        <form className="form">
          {this.props.input}
          {this.props.button}
        </form>
      </>
    );
  }
}

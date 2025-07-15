import type { ButtonProps } from "@/types/types";
import { Component, type ReactNode } from "react";

export class Button extends Component<ButtonProps> {
  render(): ReactNode {
    return (
      <>
        <button className={this.props.className} onClick={() => {}} type={"button"}>
          {this.props.name}
        </button>
      </>
    );
  }
}

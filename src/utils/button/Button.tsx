import type { ButtonProps } from "@/types/types";
import { Component, type ReactNode } from "react";

export class Button extends Component<ButtonProps> {
  // handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
  //   // if (this.props.btnFunc) {
  //   //   this.props.btnFunc(e);
  //   // }
  // };

  render(): ReactNode {
    return (
      <>
        <button className={this.props.className} type={this.props.type}>
          {this.props.name}
        </button>
      </>
    );
  }
}

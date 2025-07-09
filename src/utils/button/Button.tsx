import type { ButtonProps } from "../../types/types";

export default function Button(props: ButtonProps) {
  return (
    <>
      <button className={props.className} type={"button"}>
        {props.name}
      </button>
    </>
  );
}

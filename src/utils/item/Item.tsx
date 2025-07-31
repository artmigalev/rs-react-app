import type React from "react";

export default function Item({ str }: { str: string }): React.JSX.Element {
  return (
    <>
      <li>
        <a href="http:#">{str.toUpperCase()}</a>
      </li>
    </>
  );
}

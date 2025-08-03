import type { ButtonProps } from "@/types/types";

export const Button = ({ className, name, type }: ButtonProps): React.JSX.Element => {
  return (
    <>
      <button className={className} type={type}>
        {name}
      </button>
    </>
  );
};

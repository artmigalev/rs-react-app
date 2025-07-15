export type ButtonProps = {
  name: string;
  className: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  clbck: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

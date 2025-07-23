import { SearchValueContext } from "@/context/SearchContext";
import { useContext, type ChangeEvent } from "react";

export const Input = (): React.JSX.Element => {
  const { searchValue, setSearchValue } = useContext(SearchValueContext);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target as HTMLInputElement;

    if (setSearchValue) {
      setSearchValue(input.value);
    }
  };
  return (
    <>
      <input type="text" value={searchValue ?? ""} onChange={(e) => handleChange(e)} />
    </>
  );
};

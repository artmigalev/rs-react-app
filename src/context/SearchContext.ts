import React from "react";

export type ContextSearchValue = {
  searchValue?: string;
  setSearchValue?: (value: string) => void;
};

export const SearchValueContext = React.createContext<ContextSearchValue>({});

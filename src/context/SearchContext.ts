import React from "react";

export type ContextSearchValue = {
  searchValue?: string;
  setSearchValue?: (value: string) => void;
  loadMore?: () => void;
};

export const SearchValueContext = React.createContext<ContextSearchValue>({});

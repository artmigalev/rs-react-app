import type { Animal } from "./animal";

export type ResponseAnimal = {
  page: {
    pageNumber: number;
    pageSize: number;
    numberOfElements: number;
    totalElements: number;
    totalPages: number;
    firstPage: true;
    lastPage: true;
  };
  sort: {
    clauses: [];
  };
  animals: Animal[];
};
export type RejectAnimal = {
  code: string;
  message: string;
};

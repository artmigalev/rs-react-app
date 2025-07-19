import type { components } from "@/types/stapi";
import axios from "axios";

export default async function getCharacters(
  pageNumber: number = 1
): Promise<components["schemas"]["CharacterBaseResponse"]> {
  try {
    const response = await axios.get("https://stapi.co/api/v1/rest/character/search", {
      params: {
        pageNumber: pageNumber,
        pageSize: 10,
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(`${error.message}`);
    throw new Error("Unknown error occurred while fetching animals");
  }
}

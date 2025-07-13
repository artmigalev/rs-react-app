import type { components } from "@/types/stapi";
import axios from "axios";

export default async function getAnimal(): Promise<components["schemas"]["AnimalBaseResponse"]> {
  try {
    const response = await axios.get("https://stapi.co/api/v1/rest/animal/search", {
      params: {
        pageNumber: 1,
        pageSize: 1,
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (error instanceof Error) throw new Error(`${error.message}`);
    throw new Error("Unknown error occurred while fetching animals");
  }
}

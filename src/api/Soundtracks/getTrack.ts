import type { components } from "@/types/stapi";
import axios, { type AxiosResponse } from "axios";

export default async function getTrack(
  uid: string
): Promise<components["schemas"]["SoundtrackFull"]> {
  try {
    const response: AxiosResponse = await axios.get("https://stapi.co/api/v1/rest/soundtrack", {
      params: { uid },
    });
    const { soundtrack } = response.data;

    return soundtrack;
  } catch (error: unknown) {
    if (error instanceof axios.AxiosError) {
      throw new Error(`API request failed: ${error.message}`);
    }
    if (error instanceof Error) {
      throw new Error(`Failed to fetch soundtrack: ${error.message}`);
    }
    throw new Error("Unknown error occurred while fetching soundtrack");
  }
}

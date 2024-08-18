import axios from "axios";
import { Image } from "./types";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (
  query: string,
  page: number
): Promise<Image[]> => {
  try {
    const response = await axios.get<{ results: Image[] }>(
      `/search/photos?query=${query}&page=${page}&client_id=j5gxcayFB2KaRun5-6iuyy3SI7Jm5PNTvrM1xO9A5Ho`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching images:", error);
    return [];
  }
};

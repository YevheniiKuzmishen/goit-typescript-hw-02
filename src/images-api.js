import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (query, page) => {
  const response = await axios.get(
    `/search/photos?query=${query}&page=${page}&client_id=j5gxcayFB2KaRun5-6iuyy3SI7Jm5PNTvrM1xO9A5Ho`
  );
  return response.data.results;
};

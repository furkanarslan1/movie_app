import axios from "axios";
import { toast } from "react-toastify";
import { router } from "../App";

export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const API_GENRE = "genre/movie/list";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`; //  API key’i URL’ye eklemek yerine header’a ekleme

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if there is a error working here
    if (error.response) {
      // answer came like 404,500..
      const status = error.response.status;

      switch (status) {
        case 401: {
          toast.error("Unauthorized!");
          router.navigate("/sign-in");
          break;
        }
        case 404: {
          toast.error("Not Found!");
          router.navigate("/errors/not-found");
          break;
        }
        case 500: {
          toast.error("Server Error!");
          router.navigate("/errors/server-error");
          break;
        }
        default: {
          break;
        }
      }
    } else if (error.request) {
      // request send but not came answer
      toast.error("Cannot reach the server. Check your internet connection.");
    } else {
      toast.error("Request could not be made.");
    }
    return Promise.reject(error);
  }
);

const methods = {
  get: (url) => axios.get(url).then((response) => response.data),
};

const genres = {
  //   list: () => methods.get(`${API_GENRE}?api_key=${API_KEY}`),
  list: () => methods.get(API_GENRE),

  details: (id) => methods.get(`discover/movie?with_genres=${id}`),
};

const movie = {
  detail: (id) => methods.get(`movie/${id}`),
  popular: () => methods.get(`movie/popular`),
  topRated: () => methods.get(`movie/top_rated`),
  upcoming: () => methods.get(`movie/upcoming`),

  discover: () => methods.get(`discover/movie`),
  video: () => methods.get(`movie/1353117/videos?language=en-US`),
  tv: () => methods.get(`trending/tv/day?language=en-US`),
};

const tvShows = {
  discoverTV: () => methods.get(`discover/tv`),
};

const videoModal = {
  videos: (id) => methods.get(`movie/${id}/videos?language=en-US`),
};
const requests = {
  genres,
  movie,
  tvShows,
  videoModal,
};

export default requests;

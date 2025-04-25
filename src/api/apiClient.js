import axios from "axios";

export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const API_GENRE = "genre/movie/list";
axios.defaults.baseURL = "https://api.themoviedb.org/3/";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`; //  API key’i URL’ye eklemek yerine header’a ekleme
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
const requests = {
  genres,
  movie,
  tvShows,
};

export default requests;

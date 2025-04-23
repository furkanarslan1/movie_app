import axios from "axios";

export const API_KEY =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMzdiYWY5ZGVlODk0YmE3N2M5ZDFmMTQ2ZDUxNjFlMCIsIm5iZiI6MTc0MjI0MjA1NS42NDksInN1YiI6IjY3ZDg4MTA3ODE0ZjY3NzA2M2YxNWM3OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DoeW5ITfcu-9hlWa1374Yn_AsCXSEZkT-wUjrnWpmCA";

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

const requests = {
  genres,
};

export default requests;

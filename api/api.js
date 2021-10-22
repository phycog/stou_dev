import axios from "axios";
const create = (baseURL = "https://api.themoviedb.org/3/") => {
  const API_KEY = '76a5f816163b6f2789f503cc1bc0cbec'
  const api = axios.create({
    baseURL,

    timeout: 100000,
  });

  const GET_MOVIES_RANDOM = () =>
    api.get(`movie/popular?api_key=${API_KEY}&language=en-US&page=1`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

  return {
    GET_MOVIES_RANDOM,
  };
};

export default {
  create,
};

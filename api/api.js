import axios from "axios";
const create = (baseURL = "API.ENDPOINT") => {
  const api = axios.create({
    baseURL,

    timeout: 100000,
  });

  const GET_MOVIES_RANDOM = () =>
    api.get("xxxx", {
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

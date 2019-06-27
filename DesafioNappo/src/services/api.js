import axios from "axios";

const api = axios.create({
  baseUrl: "https://api.hgbrasil.com"
});

export default api;

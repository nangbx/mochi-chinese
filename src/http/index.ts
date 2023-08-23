import axios from "axios";
export const API_URL = "http://localhost:3000/learn-vocabulary.json";

const api = axios.create({
  baseURL: API_URL,
});

export default api;

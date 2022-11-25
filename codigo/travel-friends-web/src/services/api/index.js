import axios from "axios";

const api = axios.create({
  baseURL: "https://travel-friends-backend.herokuapp.com",
});

export default api;

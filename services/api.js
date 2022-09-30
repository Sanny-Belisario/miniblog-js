import axios from "axios";

const api = axios.create({
  baseURL: "https://api-fake-blog.herokuapp.com",
});

export default api;
import axios from "axios";

const baseApi = axios.create({
  baseURL: "http://132.226.160.248:3000/",
});

export default baseApi;

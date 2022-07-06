import axios from "axios";
const API = axios.create({
  baseURL: "https://api-capstone-grupo1.herokuapp.com/",
  timeout: 3000,
});
export default API;

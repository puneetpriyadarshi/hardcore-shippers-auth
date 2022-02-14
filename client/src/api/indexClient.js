import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
export const signInClient = (formDataClient) =>
  API.post("/user/client/signin", formDataClient);
export const signUpClient = (formDataClient) =>
  API.post("/user/client/signup", formDataClient);

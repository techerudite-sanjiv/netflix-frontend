import axios from "axios";
import { BASE_URL } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    AccessControlAllowMethods: "GET, POST, PUT, DELETE, OPTIONS",
  },
  withCredentials: false,
});

export default instance;
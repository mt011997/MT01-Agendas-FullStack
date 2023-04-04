import axios from "axios";

export const api = axios.create({
  baseURL: "https://mt01-agenda.onrender.com",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});

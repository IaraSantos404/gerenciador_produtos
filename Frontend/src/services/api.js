import axios from "axios";

// Use VITE_API_URL if provided (no trailing slash), otherwise fallback to localhost
const host = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL.replace(/\/+$/, '') : 'http://localhost:5000';

export const api = axios.create({
  baseURL: `${host}/api`
});
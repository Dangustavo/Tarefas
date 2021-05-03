import axios from "axios";

const PORT = "3333";
const IP = "192.168.0.106";

const api = axios.create({
  baseURL: `http://${IP}:${PORT}`,
});

export default api;

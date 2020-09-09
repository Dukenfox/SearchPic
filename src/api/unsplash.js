import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 8rLRf2DPCdK9XviJxA1h_gXIKLmOe07dx3Fwfp9bMdE",
  },
});

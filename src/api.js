import axios from "axios";

export default axios.create({
    baseURL: `https://api.pexels.com`,
    headers: {
        Authorization: 'Stn6lVS7riM04PkH75nDHeeSunC3jVtIqBl1WEsb88G8Ipg6XamBd9Tj'
    }
  });
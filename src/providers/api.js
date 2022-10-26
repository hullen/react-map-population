import axios from 'axios';

const api = axios.create({
  baseURL: 'https://hullen.free.beeceptor.com/map-population',
});

export default api;

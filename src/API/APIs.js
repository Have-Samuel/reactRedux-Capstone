import axios from 'axios';

const rocketsAPI = axios.create({
  baseURL: 'https://api.covid19tracking.narrativa.com/api/2020-03-22/country/spain',
  headers: { 'Content-type': 'application/json' },
});
export default rocketsAPI;

import axios from 'axios';

const rocketsAPI = axios.create({
  baseURL: 'https://api.spacexdata.com/v3/rockets',
  headers: { 'Content-type': 'application/json' },
});

export default rocketsAPI;

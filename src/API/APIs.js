import axios from 'axios';

const AmazonAPI = axios.create({
  baseURL: 'https://api.spacexdata.com/v3/rockets',
  headers: { 'Content-type': 'application/json' },
});

const missionsAPI = axios.create({
  baseURL: 'https://api.spacexdata.com/v3/missions',
  headers: { 'Content-type': 'application/json' },
});

export { rocketsAPI, missionsAPI };

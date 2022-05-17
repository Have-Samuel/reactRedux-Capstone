// import axios from 'axios';

// const rocketsAPI = axios.create({
//   baseURL: 'https://api.covid19tracking.narrativa.com/api/2020-03-22/country/spain',
//   headers: { 'Content-type': 'application/json' },
// });
// export default rocketsAPI;

export default async function fetchAnimalData() {
  const baseURL = 'https://zoo-animal-api.herokuapp.com/animals/rand/2';
  const response = await fetch(baseURL);
  if (response.status !== 200) {
    throw new Error('Please check your endpoint');
  } try {
    const ainmalData = await response.json();
    return ainmalData;
  } catch (error) {
    throw new Error(error.message);
  }
}

import axios from 'axios';

export default axios.create({
  baseURL: 'https://rickandmortyapi.com/api',
  headers: {
    'Access-Control-Allow-Origin': true,
  },
  mode: 'cors',
});

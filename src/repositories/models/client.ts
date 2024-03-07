import axios from 'axios';

const client = axios.create({
  baseURL: "https://parallelum.com.br/fipe/api/v1",
});

export default client;
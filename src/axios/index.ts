import axios from 'axios';

const API = axios.create({
  baseURL: `https://angelswing-frontend-test-serverless-api.vercel.app/api/`,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

export default API;

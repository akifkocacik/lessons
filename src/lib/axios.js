import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://randomuser.me/api',
  timeout: 3000,
  headers: { 'X-Custom-Header': 'foobar', 'Content-Type': 'application/json' },
});

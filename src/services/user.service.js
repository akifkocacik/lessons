import { API } from '../lib/api';

export const fetchUser = async () => {
  const data = await API.get('/');
  const user = data.results[0];

  return user;
};

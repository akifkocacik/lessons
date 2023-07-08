import { useState, useEffect } from 'react';
import { fetchUser } from '../services/user.service';

const useUser = () => {
  const [user, setUser] = useState(null);

  const handler = async () => {
    setUser(null);
    const user = await fetchUser();
    setUser(user);
  };

  useEffect(() => {
    handler();
  }, []);

  return { user, handler };
};

export default useUser;

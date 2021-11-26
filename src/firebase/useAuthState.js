import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import auth from './auth';

export default function useAuthState() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, user => {
    if (user) {
      setIsLogged(true);
      setUser(user);
    } else {
      setIsLogged(false);
      setUser(null);
    }
  });

  return { isLogged, user };
}

import {createContext, useState} from 'react';

export const AuthContext = createContext({});

export default function Auth({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [isCheck, setIsCheck] = useState(true);
  const [me, setMe] = useState(null);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth, me, setMe, isCheck, setIsCheck }}>
      {children}
    </AuthContext.Provider>
  )
}
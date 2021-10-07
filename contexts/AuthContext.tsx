import { createContext, ReactChildren, useEffect, useState } from "react";
import { getUser } from "../services/user";
import { IUser } from "../types";

interface IAuthContext {
  isLoggedIn: boolean;
  user: IUser;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
  setUser: (user: IUser) => void;
  isAuthLoaded: boolean;
  setIsAuthLoaded: (isAuthLoaded: boolean) => void;
}

export const AuthContext = createContext<IAuthContext>({
  isLoggedIn: false,
  setIsLoggedIn: () => null,
  user: {
    username: "",
  },
  setUser: () => null,
  isAuthLoaded: false,
  setIsAuthLoaded: () => null,
});

export const AuthContextProvider: any = ({
  children,
}: {
  children: ReactChildren;
}) => {
  const [isLoggedIn, _setIsLoggedIn] = useState(false);
  const [isAuthLoaded, _setIsAuthLoaded] = useState(false);
  const [user, _setUser] = useState({} as IUser);

  useEffect(() => {
    (async () => {
      try {
        const user = await getUser();
        setIsAuthLoaded(true);

        if (user !== null) {
          setIsLoggedIn(true);
          setUser(user);
        }
      } catch (e) {
        console.log("Not Logged In");
      }
    })();
  }, []);

  const setIsAuthLoaded = (isAuthLoaded: boolean) => {
    _setIsAuthLoaded(isAuthLoaded);
  };

  const setIsLoggedIn = (isLoggedIn: boolean) => {
    _setIsLoggedIn(isLoggedIn);
  };

  const setUser = (user: IUser) => {
    _setUser(user);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        user,
        setUser,
        isAuthLoaded,
        setIsAuthLoaded,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

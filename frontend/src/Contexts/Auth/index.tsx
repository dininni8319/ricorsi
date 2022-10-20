import React, { useState, useContext, createContext } from "react";
import { ConfigContext } from "../Config";
import {
  ChildrenProps,
  AuthConfigType,
} from "../../components/interfaces/interfaces";

export const AuthContext = createContext({} as AuthConfigType);

export function AuthProvider({ children }: ChildrenProps) {
  const initialUser: any = localStorage.getItem("user");

  let { api_urls } = useContext(ConfigContext);

  const [user, setUser] = useState(JSON.parse(initialUser));

  const login = (
    first_name: string,
    last_name: string,
    token: string,
    id: number
  ) => {
    const obj = {
      first_name: first_name,
      last_name: last_name,
      token: token,
      id: id,
    };

    setUser(obj);
    localStorage.setItem("user", JSON.stringify(obj));
  };

  const logout = () => {
    fetch(`${api_urls.backend}/api/cienneffe/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }).then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };
  console.log(user, "in the auth");

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

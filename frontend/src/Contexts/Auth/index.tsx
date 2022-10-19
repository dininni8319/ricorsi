import { useState, useContext, createContext } from "react";
import { ConfigContext } from "../Config";
import { ChildrenProps, AuthConfigType } from '../../components/interfaces/interfaces';

export const AuthContext = createContext<AuthConfigType>({
  user: null,
  login: null,
  logout: null,
});

export function AuthProvider({ children }:ChildrenProps) {

  const initialUser: any = localStorage.getItem("user");

  let { api_urls } = useContext(ConfigContext);

  const [user, setUser] = useState(JSON.parse(initialUser));

  const login = (username: string, token: string, id: number) => {
    const obj = {
      username: username,
      token: token,
      id: id,
    };
    setUser(obj);
    localStorage.setItem("user", JSON.stringify(obj));
  };

  const logout = () => {
    fetch(`${api_urls.backend}/api/users/logout`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    }).then(() => {
      localStorage.removeItem("user");
      setUser(null);
    });
  };
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

import { createContext } from "react";
import { ChildrenProps } from '../../components/interfaces/interfaces';

export const ConfigContext = createContext();

export function ConfigProvider({ children }:ChildrenProps) {
  const api_urls = {
    backend: process.env.REACT_APP_LOCAL,
  };

  return (
    <ConfigContext.Provider value={{ api_urls }}>
      {children}
    </ConfigContext.Provider>
  );
}

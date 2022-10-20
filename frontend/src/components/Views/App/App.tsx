import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "../../../Contexts/Config";
import Router from "../Router";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "../../../Contexts/Auth";

const App = () => {
  const { user } = useContext(AuthContext);

  
  return (
    <ConfigProvider>
      <AuthProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default App;

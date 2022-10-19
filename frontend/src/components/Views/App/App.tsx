import "./App.css";
import { BrowserRouter} from "react-router-dom";
import { ConfigProvider } from "../../../Contexts/Config";
import Router from '../Router';
import { useContext } from 'react';
import { Navbar, Footer, Header } from "../../UI/index";
import { AuthContext } from "../../../Contexts/Auth";
import { AuthProvider } from '../../../Contexts/Auth';
const App = () => {
  const { user }:any = useContext(AuthContext);
  
  
  return (
    <ConfigProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Header />  
         <Router />
         <Footer />
        </BrowserRouter>
      </AuthProvider>
    </ConfigProvider>
  );
};

export default App;

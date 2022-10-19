import "./App.css";
import { BrowserRouter} from "react-router-dom";
import { ConfigProvider } from "../../../Contexts/Config";
import Router from '../Router';
import { useContext } from 'react';
import { Navbar, Footer, Header } from "../../UI/index";
import { AuthContext } from "../../../Contexts/Auth";

const App = () => {
  const { user } = useContext(AuthContext)
  return (
    <ConfigProvider>
      <BrowserRouter>
       {user  && <Navbar />} 
       {user  && <Header />} 
        <Router />
       {user  && <Footer />} 
        
      </BrowserRouter>
    </ConfigProvider>
  );
};

export default App;

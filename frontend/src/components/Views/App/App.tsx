import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Ricorsi, Cartoline, Fase, RicorsiDetail, FaseDetail } from '../index';
import Navbar from '../../UI/Navbar/index';
import Footer from '../../UI/Footer/index';
import Header from '../../UI/Header/index';

const App = () => {

  return (
    <BrowserRouter>
        <Navbar />
        <Header/>
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/ricorsi' element={<Ricorsi />}/>
            <Route path='/ricorsi/:slug' element={<Ricorsi />}/>
            <Route path='/ricorsi_detail/:slug' element={<RicorsiDetail />} />
            <Route path='/form_fase/:slug' element={<Fase />} />
            <Route path='/fase_detail/:slug' element={<FaseDetail />} />
            <Route path='/work_flow/' element={<Cartoline />} />
            <Route path='/work_flow/:slug' element={<Cartoline />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

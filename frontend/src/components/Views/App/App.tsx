import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, Ricorsi, WorkFlow, RicorsiDetail } from '../index';
import Navbar from '../../UI/Navbar/index';
import Footer from '../../UI/Footer/index';

const App = () => {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/ricorsi' element={<Ricorsi />}/>
            <Route path='/work_flow/:slug' element={<WorkFlow />} />
            <Route path='/work_flow/' element={<WorkFlow />} />
            <Route path='/ricorsi_detail/:slug' element={<RicorsiDetail />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

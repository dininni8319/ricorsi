import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Homepage, WorkFlow, Ricorsi } from '../index';
import Navbar from '../../UI/Navbar/index';

const App = () => {

  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/ricorsi' element={<Ricorsi />}/>
            <Route path='/work_flow' element={<WorkFlow />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

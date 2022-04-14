import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Coins from './components/Coins';
import CoinsDetail from './components/CoinsDetail';

const Router = () =>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Coins />} />
                <Route path="/:id" element={<CoinsDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;
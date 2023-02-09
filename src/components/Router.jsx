import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import MainPage from "../pages/MainPage";
import ImageInfoPage from "../pages/ImageInfoPage";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/images/:id' element={<ImageInfoPage />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Routes>
    );
};

export default Router;

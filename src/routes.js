import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomeScreen from './screens/home';
import NewAddressScreen from './screens/new';
import EditAddressScreen from './screens/edit';

const ScreenRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<HomeScreen />} />
                <Route exact path="/new" element={<NewAddressScreen />} />
                <Route exact path="/edit" element={<EditAddressScreen />} />
            </Routes>
        </BrowserRouter>
    )
}

export default ScreenRoutes;
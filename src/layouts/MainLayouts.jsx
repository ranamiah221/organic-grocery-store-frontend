import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../sharedComponents/Navbar/Navbar';
import Footer from '../sharedComponents/Footer/Footer';

const MainLayouts = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Navbar from '../Components/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;
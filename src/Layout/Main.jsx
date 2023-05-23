import React from 'react';
import NavBar from '../SharePage/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../SharePage/Footer';


const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;
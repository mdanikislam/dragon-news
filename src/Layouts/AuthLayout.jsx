import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';

const AuthLayout = () => {
    return (
        <div className='bg-gray-100'>
           <header className='py-5 w-10/12 mx-auto'>
            <Navbar></Navbar>
           </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;
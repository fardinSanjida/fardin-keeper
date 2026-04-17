import React from 'react';
import Navbar from '../componenets/Navber';
import { Outlet } from 'react-router';
import Footer from '../componenets/footer/Footer';
import ToastStack from '../componenets/ui/ToastStack';

const MainLayout = () => {
    return (
        <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <ToastStack />
        </div>
    );
};

export default MainLayout;

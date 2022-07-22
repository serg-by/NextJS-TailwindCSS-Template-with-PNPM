import React from 'react';
import Header from './Header';
import Footer from './Footer';


export default function MainLayout({ children }) {
    return (
        <div className={`page-wrapper flex min-h-screen flex-col justify-between maincover`}>
            <Header/> 
            <main>{children}</main>
            <Footer/>
        </div>
    )
}


import '../../index.css'

import { Link, useLocation } from "react-router-dom";
import { useEffect } from 'react';

import logo from '/assets/Codibara-Logo.png';


export default function Header() {
    const location = useLocation();

    return(
        <div className="w-full max-w-[1440px] mx-auto sticky top-0 flex flex-col items-center py-3.5 px-6 md:flex-row md:justify-between z-50">
            <Link to='/'>
                <img className='w-8' src={logo} />
            </Link>
            {location.pathname === "/policy" ? (
                <nav className='flex justify-center gap-16 py-3'>
                    <li className='nav-item'>Privacy Policy</li>
                </nav>
            ) : (
                <nav className='flex justify-center gap-16 py-3'>
                    <li className='nav-item'><a href="#about">About</a></li>
                    <li className='nav-item'><a href="#works">Works</a></li>
                    <li className='nav-item'><a href="#team">Team</a></li>
                </nav>
            )}
        </div>
    )
}
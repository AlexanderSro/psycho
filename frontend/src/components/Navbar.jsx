import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.svg'; // Make sure the path to your logo is correct
import Logo2 from '../assets/Original2.svg'; // Make sure the path to your logo is correct
import Logo3 from '../assets/logo3.png'; // Make sure the path to your logo is correct

export default function Navbar() {
    return (
        <div className="navbar bg-gradient-to-r from-lime-50 via-emerald-200 to-lime-300 shadow-lg border-b-2">
            <div className="navbar-start">
                <Link to="/" className="">
                    <img src={Logo2} alt="Company Logo" className="max-h-16 w-auto"/>
                </Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/">Acasa</Link></li>
                    <li><Link to="/about">Despre mine</Link></li>
                    <li><Link to="/services">Servicii</Link></li>
                    <li><Link to="/blog">Resurse</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             strokeWidth={2} className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-[#f3f0ed] rounded-box w-52">
                        <li><Link to="/">Acasa</Link></li>
                        <li><Link to="/about">Despre mine</Link></li>
                        <li><Link to="/services">Servicii</Link></li>
                        <li><Link to="/blog">Resurse</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

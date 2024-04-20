import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo2 from '../assets/Original2.svg'; // Ensure path is correct

export default function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Handle clicking outside of the dropdown
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="navbar shadow-lg border-b-2 text-black font-semibold bg-[#ddf5c6] max-w-full">
            <div className="navbar-start">
                <Link to="/" className="">
                    <img src={Logo2} alt="Company Logo" className="max-h-16 w-auto"/>
                </Link>
            </div>

            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to="/" className="btn btn-sm bg-gradient-to-r from-lime-200 to-lime-400">Acasa</NavLink></li>
                    <li><NavLink to="/about">Despre mine</NavLink></li>
                    <li><NavLink to="/services">Servicii</NavLink></li>
                    <li><NavLink to="/blog">Resurse</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end lg:hidden">
                <div className="dropdown dropdown-end" ref={dropdownRef}>
                    <label tabIndex={0} className="btn btn-ghost" onClick={toggleDropdown}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                             strokeWidth={2} className="h-5 w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-8 6h16"/>
                        </svg>
                    </label>
                    {isDropdownOpen && (
                        <ul tabIndex={0}
                            className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg rounded-box w-52 text-black bg-[#ddf5c6]"
                        >
                            <li><NavLink to="/" >Acasa</NavLink></li>
                            <li><NavLink to="/about">Despre mine</NavLink></li>
                            <li><NavLink to="/services">Servicii</NavLink></li>
                            <li><NavLink to="/blog">Resurse</NavLink></li>
                            <li><NavLink to="/contact">Contact</NavLink></li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h2 className="logo">Bhagavad Gita</h2>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/">Chapters</Link>
                    <Link to="/quotes">Quotes</Link>
                    <Link to="/about">About Gita</Link>
                    <Link to="/gita-ai">Gita AI</Link>
                    <Link to="/donate">Donate</Link>
                </div>

                <div className="navbar-actions">
                    <button className="theme-toggle">🌙</button>
                    <select className="language-dropdown">
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="mr">Marathi</option>
                        <option value="gu">Gujarati</option>
                    </select>
                    <button className="hamburger" onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

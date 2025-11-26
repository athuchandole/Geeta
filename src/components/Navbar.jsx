// src/components/Navbar.jsx
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className={`navbar`}>
            <div className="navbar-container">
                <div className="left-section">
                    <h2 className="logo">Bhagavad Gita</h2>
                </div>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/">Chapters</Link>
                    <Link to="/quotes">Quotes</Link>
                    <Link to="/about">About Gita</Link>
                </div>

                <div className="navbar-actions">
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                    <select className="language-dropdown">
                        <option value="en">English</option>
                        <option value="hi">Hindi</option>
                        <option value="mr">Marathi</option>
                        <option value="gu">Gujarati</option>
                    </select>
                    <button className="hamburger" onClick={toggleMenu}>☰</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

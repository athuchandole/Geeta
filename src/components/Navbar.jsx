// src/components/Navbar.jsx
import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { theme, toggleTheme } = useContext(ThemeContext);
    const location = useLocation();

    const handleNavClick = () => {
        // Close popup / mobile menu after clicking a link
        setOpen(false);
    };

    return (
        <nav className={`lux-navbar ${theme}`}>
            <div className="nav-inner">
                {/* Brand: behaves like "Chapters" (go home) */}
                <h2 to="/" className="brand" onClick={handleNavClick}>Bhagavad Gita
                </h2>

                {/* Links */}
                <div className={`links ${open ? "show" : ""}`}>
                    <Link
                        to="/"
                        onClick={handleNavClick}
                        className={location.pathname === "/" ? "active" : ""}
                    >
                        Chapters
                    </Link>

                    <Link
                        to="/quotes"
                        onClick={handleNavClick}
                        className={location.pathname.startsWith("/quotes") ? "active" : ""}
                    >
                        Quotes
                    </Link>

                    <Link
                        to="/about"
                        onClick={handleNavClick}
                        className={location.pathname.startsWith("/about") ? "active" : ""}
                    >
                        About
                    </Link>
                </div>

                {/* Right Icons */}
                <div className="actions">
                    <button className="theme-toggle" onClick={toggleTheme}>
                        {theme === "light" ? "🌙" : "☀️"}
                    </button>

                    <button
                        className="menu-btn"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={open}
                    >
                        ☰
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

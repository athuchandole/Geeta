// src/components/Navbar.jsx
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import "./Navbar.css";

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const { language, toggleLanguage } = useContext(LanguageContext);

    const [menuOpen, setMenuOpen] = useState(false);

    // close menu on route change / escape
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setMenuOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // keep document scroll locked when mobile menu open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen((s) => !s);

    // show the label for the language toggle as the other-language shorthand
    const langLabel = language === "en" ? "हिंदी" : "EN";

    return (
        <header className={`lux-navbar ${theme}`} role="banner">
            <div className="nav-inner">
                <div className="nav-left" aria-hidden={menuOpen}>
                    <Link to="/Geeta/" className="brand" onClick={() => setMenuOpen(false)}>
                        <span className="brand-text">Bhagavad Gita</span>
                    </Link>
                </div>

                <nav className="nav-center" aria-label="Primary navigation">
                    <div className={`links ${menuOpen ? "show" : ""}`}>
                        <Link to="/Geeta" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/quotes" onClick={() => setMenuOpen(false)}>Quotes</Link>
                        <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    </div>
                </nav>

                <div className="nav-right">
                    <div className="actions">
                        <button
                            className="theme-toggle"
                            aria-label="Toggle theme"
                            title={theme === "light" ? "Switch to dark" : "Switch to light"}
                            onClick={toggleTheme}
                        >
                            {theme === "light" ? "🌙" : "☀️"}
                        </button>

                        <button
                            className="theme-toggle"
                            aria-label="Toggle language"
                            title="Toggle language"
                            onClick={toggleLanguage}
                        >
                            {langLabel}
                        </button>

                        <button
                            className="menu-btn"
                            aria-expanded={menuOpen}
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            onClick={toggleMenu}
                        >
                            {menuOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

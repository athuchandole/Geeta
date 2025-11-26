// src/context/ThemeContext.jsx
import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem("gita_theme") || "light"
    );

    useEffect(() => {
        localStorage.setItem("gita_theme", theme);

        document.body.style.background = theme === "light" ? "#ffffff" : "#1c1c1c";
        document.body.style.color = theme === "light" ? "#222" : "#f2f2f2";
        document.body.style.fontFamily = "Inter, sans-serif";
        document.body.style.margin = 0;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme: () => setTheme(t => t === "light" ? "dark" : "light") }}>
            {children}
        </ThemeContext.Provider>
    );
};

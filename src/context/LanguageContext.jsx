// src/context/LanguageContext.jsx
import React, { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(() => {
        try {
            return localStorage.getItem("app_language") || "en";
        } catch {
            return "en";
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem("app_language", language);
        } catch { }
    }, [language]);

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "hi" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

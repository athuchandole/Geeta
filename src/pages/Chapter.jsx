// src/pages/Chapter.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import api from "../api/chapters";
import Loading from "../components/Loading";
import "./Chapter.css";

const UI = {
    en: { chapters: "Chapters", verses: "verses", loading: "Fetching chapters..." },
    hi: { chapters: "अध्याय", verses: "श्लोक", loading: "अध्याय ला रहे हैं..." },
};

const Chapter = () => {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await api.getChapters();
            setChapters(data || []);
        })();
    }, []);

    if (!chapters.length) return <Loading text={UI[language].loading} />;

    return (
        <div className={`chapter-page ${theme}`}>
            <h2 className="chapter-title">📖 Bhagavad Gita – {UI[language].chapters}</h2>

            <div className="chapter-list">
                {chapters.map((ch) => {
                    // for English show `translation` if present, otherwise fallback to name
                    const title = language === "en" ? (ch.translation || ch.name) : ch.name;
                    const summary = ch.summary?.[language] || ch.meaning?.[language] || "";

                    return (
                        <Link
                            key={ch.chapter_number}
                            to={`/chapter/${ch.chapter_number}`}
                            className="chapter-card"
                        >
                            <h3>{title}</h3>
                            <p>{ch.verses_count} {UI[language].verses}</p>
                            {summary && <p className="chapter-summary">{summary.slice(0, 160)}{summary.length > 160 ? '...' : ''}</p>}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Chapter;

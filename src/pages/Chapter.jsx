// src/pages/Chapter.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import api from "../api/chapters";
import Loading from "../components/Loading";
import "./Chapter.css";

const Chapter = () => {
    const { theme } = useContext(ThemeContext);
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await api.getChapters();
            setChapters(data || []);
        })();
    }, []);

    if (!chapters.length) return <Loading text="Fetching chapters..." />;

    return (
        <div className={`chapter-page ${theme}`}>
            <h2 className="chapter-title">📖 Bhagavad Gita – Chapters</h2>

            <div className="chapter-list">
                {chapters.map((ch) => (
                    <Link
                        key={ch.id}
                        to={`/chapter/${ch.id}`}
                        className="chapter-card"
                    >
                        <h3>{ch.name}</h3>
                        <p>{ch.verses_count} verses</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Chapter;

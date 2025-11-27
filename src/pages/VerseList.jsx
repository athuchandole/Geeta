// src/pages/VerseList.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import api from "../api/verses";
import Loading from "../components/Loading";
import "./VerseList.css";

const UI = {
    en: { chapters: "Chapter", verses: "Verses", loading: "Fetching verses..." },
    hi: { chapters: "अध्याय", verses: "श्लोक", loading: "श्लोक ला रहे हैं..." },
};

const VerseList = () => {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { id } = useParams();
    const [verses, setVerses] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await api.getVersesByChapter(id);
            setVerses(data || []);
        })();
    }, [id]);

    if (!verses.length) return <Loading text={UI[language].loading} />;

    return (
        <div className={`verse-list-page ${theme}`}>
            <h2>
                {UI[language].chapters} {id} – {UI[language].verses}
            </h2>

            <div className="verse-list">
                {verses.map((v) => (
                    <Link
                        key={v.verse_number}
                        to={`/chapter/${id}/verse/${v.verse_number}`}
                        className="verse-item"
                    >
                        {language === "en" ? `Verse ${v.verse_number}` : `श्लोक ${v.verse_number}`}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VerseList;

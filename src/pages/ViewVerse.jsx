// src/pages/ViewVerse.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import api from "../api/verses";
import Loading from "../components/Loading";
import "./ViewVerse.css";

const ViewVerse = () => {
    const { theme } = useContext(ThemeContext);
    const { chapterId, verseId } = useParams();
    const [verse, setVerse] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await api.getVerse(chapterId, verseId);
            setVerse(data);
        })();
    }, [chapterId, verseId]);

    if (!verse) return <Loading text="Loading verse..." />;

    return (
        <div className={`view-verse-page ${theme}`}>
            <Link to={`/chapter/${chapterId}`} className="back-btn">
                ← Back
            </Link>

            <h2>
                Chapter {chapterId}, Verse {verseId}
            </h2>

            <div className="block">
                <h3>Sanskrit</h3>
                <p className="text">{verse.text}</p>
            </div>

            <div className="block">
                <h3>Translation</h3>
                <p className="text">
                    {verse.translations?.[0]?.description}
                </p>
            </div>

            {verse.word_meanings && (
                <div className="block">
                    <h3>Word Meanings</h3>
                    <p className="text">{verse.word_meanings}</p>
                </div>
            )}
        </div>
    );
};

export default ViewVerse;

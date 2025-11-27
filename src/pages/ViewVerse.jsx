// src/pages/ViewVerse.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import api from "../api/verses";
import Loading from "../components/Loading";
import "./ViewVerse.css";

const UI = {
    en: { chapters: "Chapter", verses: "Verse", back: "Back", sanskrit: "Sanskrit", translation: "Translation", word_meanings: "Word Meanings", loading: "Loading verse..." },
    hi: { chapters: "अध्याय", verses: "श्लोक", back: "वापस", sanskrit: "संस्कृत", translation: "अनुवाद", word_meanings: "शब्दार्थ", loading: "श्लोक लोड हो रहा है..." },
};

const findTranslationByLang = (translations = [], lang) => {
    if (!translations || !translations.length) return null;

    // the JSON sample uses "language": "hindi" / "english" — normalize
    const wanted = lang === "en" ? "english" : "hindi";
    const found = translations.find((t) => {
        const val = String(t.language || "").toLowerCase();
        return val === wanted;
    });

    return found || translations[0] || null;
};

const ViewVerse = () => {
    const { theme } = useContext(ThemeContext);
    const { language } = useContext(LanguageContext);
    const { chapterId, verseId } = useParams();
    const [verse, setVerse] = useState(null);

    useEffect(() => {
        (async () => {
            const data = await api.getVerse(chapterId, verseId);
            setVerse(data);
        })();
    }, [chapterId, verseId]);

    if (!verse) return <Loading text={UI[language].loading} />;

    const translationObj = findTranslationByLang(verse.translations, language);
    const translationText = translationObj?.description || "";

    return (
        <div className={`view-verse-page ${theme}`}>
            <Link to={`/chapter/${chapterId}`} className="back-btn">
                ← {UI[language].back}
            </Link>

            <h2>
                {UI[language].chapters} {chapterId}, {UI[language].verses} {verseId}
            </h2>

            <div className="block">
                <h3>{UI[language].sanskrit}</h3>
                <p className="text">{verse.text}</p>
            </div>

            <div className="block">
                <h3>{UI[language].translation}</h3>
                <p className="text">{translationText}</p>
            </div>

            {verse.word_meanings && (
                <div className="block">
                    <h3>{UI[language].word_meanings}</h3>
                    <p className="text">{verse.word_meanings}</p>
                </div>
            )}
        </div>
    );
};

export default ViewVerse;

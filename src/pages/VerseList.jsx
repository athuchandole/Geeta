// src/pages/VerseList.jsx
import React, { useEffect, useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import api from "../api/verses";
import Loading from "../components/Loading";
import "./VerseList.css";

const VerseList = () => {
    const { theme } = useContext(ThemeContext);
    const { id } = useParams();
    const [verses, setVerses] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await api.getVersesByChapter(id);
            setVerses(data || []);
        })();
    }, [id]);

    if (!verses.length) return <Loading text="Fetching verses..." />;

    return (
        <div className={`verse-list-page ${theme}`}>
            <h2>Chapter {id} – Verses</h2>

            <div className="verse-list">
                {verses.map((v) => (
                    <Link
                        key={v.verse_number}
                        to={`/chapter/${id}/verse/${v.verse_number}`}
                        className="verse-item"
                    >
                        Verse {v.verse_number}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VerseList;

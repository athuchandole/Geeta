import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import verseAPI from '../api/verses';
import Loading from '../components/Loading';
import './ViewVerse.css';

const ViewVerse = () => {
    const { chapterId, verseId } = useParams();
    const [verse, setVerse] = useState(null);

    useEffect(() => {
        const fetch = async () => {
            const data = await verseAPI.getVerse(chapterId, verseId);
            setVerse(data);
        };
        fetch();
    }, [chapterId, verseId]);

    if (!verse) return <Loading />;

    return (
        <div className="view-container">
            <div className="verse-card">
                <h2 className="verse-title">🕉️ Chapter {chapterId}, Verse {verseId}</h2>
                <div className="verse-section">
                    <h3>📜 Sanskrit</h3>
                    <p className="sanskrit-text">{verse.text}</p>
                </div>
                <div className="verse-section">
                    <h3>🗣️ Translation</h3>
                    <p>{verse.translations?.[0]?.description}</p>
                </div>
                <div className="verse-section">
                    <h3>🔍 Word Meaning</h3>
                    <p>{verse.word_meanings}</p>
                </div>
                <div className="back-link">
                    <Link to={`/chapter/${chapterId}`}>← Back to Chapter</Link>
                </div>
            </div>
        </div>
    );
};

export default ViewVerse;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import chapterAPI from '../api/chapters';
import Loading from '../components/Loading';
import './Chapter.css';

const Chapter = () => {
    const [chapters, setChapters] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const data = await chapterAPI.getChapters();
            setChapters(data);
        };
        fetch();
    }, []);

    if (chapters.length === 0) return <Loading />;

    return (
        <div className="chapter-container">
            <h1 className="chapter-heading">📜 श्रीमद्भगवद्गीता - Chapters</h1>
            <div className="chapter-grid">
                {chapters.map(ch => (
                    <Link to={`/chapter/${ch.id}`} className="chapter-card" key={ch.id}>
                        <div className="card-content">
                            <h2>{ch.chapter_number}. {ch.name}</h2>
                            <p><span>Meaning:</span> {ch.name_meaning}</p>
                            <p><span>Translation:</span> {ch.name_translated}</p>
                            <p><span>Transliteration:</span> {ch.name_transliterated}</p>
                            <p><span>Verses:</span> {ch.verses_count}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Chapter;

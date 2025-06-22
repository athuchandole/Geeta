import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import chapterAPI from '../api/chapters';
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
        <div className="home-container">
            <h1 className="heading">📖 Bhagavad Gita - Chapters</h1>
            <div className="cards-wrapper">
                {chapters.map((ch) => (
                    <div className="card" key={ch.id}>
                        <h2>{ch.chapter_number}. {ch.name}</h2>
                        <p><strong>Meaning:</strong> {ch.name_meaning}</p>
                        <p><strong>Translation:</strong> {ch.name_translated}</p>
                        <p><strong>Transliteration:</strong> {ch.name_transliterated}</p>
                        <p><strong>Verses:</strong> {ch.verses_count}</p>
                        <p><strong>Slug:</strong> {ch.slug}</p>
                        <p><strong>Summary:</strong> {ch.chapter_summary || 'Not available'}</p>
                        <p><strong>Hindi Summary:</strong> {ch.chapter_summary_hindi || 'Not available'}</p>
                        <Link to={`/chapter/${ch.id}`} className="read-link">Read Chapter</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Chapter;

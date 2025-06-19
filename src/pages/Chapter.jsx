// src/pages/Chapter.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import verseAPI from '../api/verses';

const Chapter = () => {
    const { id } = useParams();
    const [verses, setVerses] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const data = await verseAPI.getVersesByChapter(id);
            setVerses(data);
        };
        fetch();
    }, [id]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Chapter {id} - Verses</h2>
            <ul>
                {verses.map((v) => (
                    <li key={v.id}>
                        <Link to={`/chapter/${id}/verse/${v.verse_number}`}>
                            Verse {v.verse_number}
                        </Link>
                    </li>
                ))}
            </ul>
            <Link to="/">← Back to Chapters</Link>
        </div>
    );
};

export default Chapter;

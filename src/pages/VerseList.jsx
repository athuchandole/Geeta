import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import verseAPI from '../api/verses';
import Loading from '../components/Loading';
import './VerseList.css';

const VerseList = () => {
    const { id } = useParams();
    const [verses, setVerses] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            const data = await verseAPI.getVersesByChapter(id);
            setVerses(data);
        };
        fetch();
    }, [id]);

    if (verses.length === 0) return <Loading />;

    return (
        <div className="verse-container">
            <h2 className="verse-heading">📜 Chapter {id} - Verses</h2>
            <div className="verse-grid">
                {verses.map(v => (
                    <Link
                        key={v.id}
                        to={`/chapter/${id}/verse/${v.verse_number}`}
                        className="verse-card"
                    >
                        <div className="verse-content">
                            <h3>Verse {v.verse_number}</h3>
                            <p>{v.text?.slice(0, 100)}...</p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="back-link">
                <Link to="/">← Back to Chapters</Link>
            </div>
        </div>
    );
};

export default VerseList;

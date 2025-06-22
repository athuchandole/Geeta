import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import verseAPI from '../api/verses';
import Loading from '../components/Loading';

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

export default VerseList;

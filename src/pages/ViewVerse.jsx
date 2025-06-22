import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import verseAPI from '../api/verses';
import Loading from '../components/Loading';

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
        <div style={{ padding: '20px' }}>
            <h2>🕉️ Chapter {chapterId}, Verse {verseId}</h2>
            <p><strong>Sanskrit:</strong> {verse.text}</p>
            <p><strong>Translation:</strong> {verse.translations?.[0]?.description}</p>
            <p><strong>Word Meaning:</strong> {verse.word_meanings}</p>
            <Link to={`/chapter/${chapterId}`}>← Back to Chapter</Link>
        </div>
    );
};

export default ViewVerse;

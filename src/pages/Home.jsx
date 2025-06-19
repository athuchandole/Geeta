// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import chapterAPI from '../api/chapters';

const Home = () => {
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
        <div style={{ padding: '20px' }}>
            <h1>📖 Bhagavad Gita - Chapters</h1>
            <ul>
                {chapters.map((ch) => (
                    <li key={ch.id}>
                        <Link to={`/chapter/${ch.id}`}>
                            {ch.chapter_number}. {ch.name} ({ch.name_meaning})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;

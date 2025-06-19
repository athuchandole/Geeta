// ChapterList.jsx - displays chapter list
import React from 'react';

const ChapterList = ({ chapters }) => {
    console.log("Chapters Received:", chapters); // 👈 Confirm props

    return (
        <div>
            <h2>Chapters of Bhagavad Gita</h2>
            <ul>
                {chapters.map((chapter) => (
                    <li key={chapter.id}>
                        <strong>{chapter.chapter_number}. {chapter.name}</strong> — {chapter.name_meaning}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChapterList;

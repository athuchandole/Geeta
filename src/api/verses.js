// src/api/verses.js
import API from './client';

const getVersesByChapter = async (chapterId) => {
    try {
        const response = await API.get(`/chapters/${chapterId}/verses/`);
        return response.data || [];
    } catch (error) {
        console.error('Error fetching verses:', error);
        return [];
    }
};

// ✅ New logic: fetch all verses in chapter, then find specific verse
const getVerse = async (chapterId, verseId) => {
    try {
        const response = await API.get(`/chapters/${chapterId}/verses/`);
        const verses = response.data || [];
        return verses.find((v) => String(v.verse_number) === String(verseId)) || null;
    } catch (error) {
        console.error('Error fetching verse:', error);
        return null;
    }
};

export default {
    getVersesByChapter,
    getVerse,
};

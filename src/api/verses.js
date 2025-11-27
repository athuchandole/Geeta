// src/api/verses.js
import allData from "../json/alldata.json";

/**
 * Get all verses of a chapter
 */
const getVersesByChapter = async (chapterId) => {
    try {
        // VERSES is a 2D array → index is chapter_number - 1
        const index = Number(chapterId) - 1;
        const chapterVerses = allData.VERSES[index];

        return chapterVerses || [];
    } catch (error) {
        console.error("Error loading verses:", error);
        return [];
    }
};

/**
 * Get a single verse by chapterId & verseId
 */
const getVerse = async (chapterId, verseId) => {
    try {
        const verses = await getVersesByChapter(chapterId);

        return (
            verses.find(
                (v) =>
                    String(v.verse_number) === String(verseId)
            ) || null
        );
    } catch (error) {
        console.error("Error loading verse:", error);
        return null;
    }
};

export default {
    getVersesByChapter,
    getVerse,
};

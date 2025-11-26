import allVerses from '../json/allverses.json';
import particularVerse from '../json/particularverse.json';
import particularChapter from '../json/particularchapter.json';

/**
 * Get all verses of a chapter
 */
const getVersesByChapter = async (chapterId) => {
    try {
        // Filter the allVerses array for the given chapter_number
        const verses = allVerses.filter(
            (v) => String(v.chapter_number) === String(chapterId)
        );

        // Fallback to particularChapter if no verses found
        if (verses.length === 0 && String(particularChapter.chapter_number) === String(chapterId)) {
            return [particularChapter];
        }

        return verses;
    } catch (error) {
        console.error('Error loading verses:', error);
        return [];
    }
};

/**
 * Get a single verse by chapterId and verseId
 */
const getVerse = async (chapterId, verseId) => {
    try {
        const verses = await getVersesByChapter(chapterId);

        // Find the verse in filtered chapter
        let found = verses.find(
            (v) => String(v.verse_number) === String(verseId)
        );

        // Fallback to particularVerse JSON if not found
        if (!found && String(particularVerse.chapter_number) === String(chapterId)
            && String(particularVerse.verse_number) === String(verseId)) {
            found = particularVerse;
        }

        return found || null;
    } catch (error) {
        console.error('Error loading specific verse:', error);
        return null;
    }
};

export default {
    getVersesByChapter,
    getVerse,
};

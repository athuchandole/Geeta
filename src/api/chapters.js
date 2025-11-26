// src/api/chapters.js
import allChapters from '../json/allchapters.json';

const getChapters = async () => {
    try {
        return allChapters || [];
    } catch (error) {
        console.error("Error loading chapters JSON:", error);
        return [];
    }
};

export default { getChapters };

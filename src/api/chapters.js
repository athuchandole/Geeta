// src/api/chapters.js
import allData from "../json/alldata.json";

const getChapters = async () => {
    try {
        return allData.CHAPTERS || [];
    } catch (error) {
        console.error("Error loading alldata.json chapters:", error);
        return [];
    }
};

export default { getChapters };

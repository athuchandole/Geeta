// src/api/chapters.js
import API from './client';

const getChapters = async () => {
    try {
        const response = await API.get('/chapters/');
        return response.data || [];
    } catch (error) {
        console.error('Error fetching chapters:', error);
        return [];
    }
};

export default { getChapters };

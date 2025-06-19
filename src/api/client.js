// src/api/client.js
import { create } from 'apisauce';

const api = create({
    baseURL: 'https://bhagavad-gita3.p.rapidapi.com/v2',
    headers: {
        'X-RapidAPI-Key': 'f3bb6358a0mshd341bfbef6ac552p19f94ajsnd11a44b54b93',
        'X-RapidAPI-Host': 'bhagavad-gita3.p.rapidapi.com',
    },
});

export default api;

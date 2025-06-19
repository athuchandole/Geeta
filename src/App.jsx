// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chapter from './pages/Chapter';
import Verse from './pages/Verse';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/chapter/:id" element={<Chapter />} />
    <Route path="/chapter/:chapterId/verse/:verseId" element={<Verse />} />
  </Routes>
);

export default App;

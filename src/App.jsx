// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Chapter from './pages/Chapter';
import ViewVerse from './pages/ViewVerse';
import VerseList from './pages/VerseList';
import Navbar from './components/Navbar';
import './App.css';

const App = () => (
  <>
    <Navbar />
    <div className="content-wrapper">
      <Routes>
        <Route path="/" element={<Chapter />} />
        <Route path="/chapter/:id" element={<VerseList />} />
        <Route path="/chapter/:chapterId/verse/:verseId" element={<ViewVerse />} />
      </Routes>
    </div>
  </>
);

export default App;

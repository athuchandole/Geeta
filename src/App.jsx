// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chapter from './pages/Chapter';
import Verse from './pages/Verse';
import Navbar from './components/Navbar'; // import the Navbar
import './App.css'; // optional if you want to add padding

const App = () => (
  <>
    <Navbar />
    <div className="content-wrapper">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chapter/:id" element={<Chapter />} />
        <Route path="/chapter/:chapterId/verse/:verseId" element={<Verse />} />
      </Routes>
    </div>
  </>
);

export default App;

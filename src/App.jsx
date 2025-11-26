// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Chapter from "./pages/Chapter";
import VerseList from "./pages/VerseList";
import ViewVerse from "./pages/ViewVerse";
import Navbar from "./components/Navbar";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Chapter />} />
      <Route path="/chapter/:id" element={<VerseList />} />
      <Route path="/chapter/:chapterId/verse/:verseId" element={<ViewVerse />} />
    </Routes>
  </>
);

export default App;

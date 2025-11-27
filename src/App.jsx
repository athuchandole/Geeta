// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Chapter from "./pages/Chapter";
import VerseList from "./pages/VerseList";
import ViewVerse from "./pages/ViewVerse";
import Quotes from "./pages/Quotes";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { LanguageProvider } from "./context/LanguageContext";

const App = () => (
  <LanguageProvider>
    <Navbar />
    <Routes>
      <Route path="/Geeta" element={<Chapter />} />
      <Route path="/chapter/:id" element={<VerseList />} />
      <Route path="/chapter/:chapterId/verse/:verseId" element={<ViewVerse />} />
      <Route path="/quotes" element={<Quotes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </LanguageProvider>
);

export default App;

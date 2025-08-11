// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AlgeriaNavbar from './components/AlgeriaNavbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AboutSection from './components/AboutSection';
import ClothingSection from './components/ClothingSection';
import FoodSection from './components/FoodSection';
import MusicSection from './components/MusicSection';
import TourismSection from './components/TourismSection';
import Language from './pages/Language';
// import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <AlgeriaNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/clothing" element={<ClothingSection />} />
        <Route path="/food" element={<FoodSection />} />
        <Route path="/music" element={<MusicSection />} />
        <Route path="/tourism" element={<TourismSection />} />
        <Route path="/language" element={<Language />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

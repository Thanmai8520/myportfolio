import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Contact from './pages/Contact';

function App() {
  const [selectedColor, setSelectedColor] = useState("#ffffff");
  const [textEffect, setTextEffect] = useState("none"); // Added textEffect state

  return (
    <Router>
      <Navbar selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      <Routes>
        <Route
          path="/"
          element={
            <Home 
              selectedColor={selectedColor} 
              setSelectedColor={setSelectedColor} 
              textEffect={textEffect} 
              setTextEffect={setTextEffect} 
            />
          }
        />
        <Route
          path="/about"
          element={<About selectedColor={selectedColor} textEffect={textEffect} />}
        />
        <Route
          path="/experience"
          element={
            <Experience 
              selectedColor={selectedColor} 
              setSelectedColor={setSelectedColor} 
              textEffect={textEffect} 
              setTextEffect={setTextEffect}
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact 
              selectedColor={selectedColor} 
              setSelectedColor={setSelectedColor} 
              textEffect={textEffect} 
              setTextEffect={setTextEffect}
            />
          }
        />
      </Routes>
      <Footer
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
        // setTextEffect={setTextEffect}  // Uncomment if needed in Footer
        // textEffect={textEffect}  // Uncomment if needed in Footer
      />
    </Router>
  );
}

export default App;

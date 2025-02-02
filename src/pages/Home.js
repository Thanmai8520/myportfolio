import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./Home.css";
import { FaPalette } from "react-icons/fa";

function Home({ selectedColor, setSelectedColor }) {
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const colors = ["#ffffff", "#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1", "#FFD700"];

  const handleImageClick = () => {
    setIsImageEnlarged(true); // Open the enlarged image
  };

  const handleCloseEnlarged = () => {
    setIsImageEnlarged(false); // Close the enlarged image
  };

  return (
    <div className="home-container">
      <div className="home-image" onClick={handleImageClick}>
        <img
          src="/pic1.jpeg"
          alt="Sri Santhoshi Thanmai Kora"
          style={{
            boxShadow: `0 8px 20px ${selectedColor}`,
          }}
        />
      </div>
      <div className="home-content">
        <h1
          className="home-title"
          style={{ color: selectedColor }}
        >
          Software Engineer
        </h1>
        <p
          className="home-subtitle"
          style={{ color: selectedColor }}
        >
          I am Sri Santhoshi Thanmai Kora, a Software Engineer with experience in
          full-stack development, automation, and machine learning. Passionate about
          building innovative solutions and enhancing user experiences.
        </p>
        <button
          className="contact-button"
          style={{
            "--button-color": selectedColor,
            background: `linear-gradient(45deg, ${selectedColor}, hsl(225, 74.60%, 13.90%))`,
          }}
          onClick={() => navigate("/contact")} // Use navigate instead of window.location.href
        >
          Contact Me
        </button>
      </div>

      {/* Fullscreen Image Overlay */}
      {isImageEnlarged && (
        <div className="overlay" onClick={handleCloseEnlarged}>
          <img src="/pic1.jpeg" alt="Enlarged Sri Santhoshi Thanmai Kora" className="enlarged-image" />
        </div>
      )}

      {/* Footer */}
      <div className="footer">
        <div className="customizer">
          <div
            className="customizer-icon"
            style={{ color: selectedColor }}
            onClick={() => setIsColorMenuOpen(!isColorMenuOpen)}
          >
            <FaPalette size={30} />
          </div>
          {isColorMenuOpen && (
            <div className="color-circle">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="color-option"
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                ></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

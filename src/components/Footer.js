import React, { useState } from 'react';
import './Footer.css';
import { FaPalette } from 'react-icons/fa';

function Footer({ setSelectedColor, selectedColor, setTextEffect, textEffect }) {
  const [isColorMenuOpen, setIsColorMenuOpen] = useState(false);
  //const [isEffectMenuOpen, setIsEffectMenuOpen] = useState(false);

  const colors = ["#ffffff", "#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1", "#FFD700"];
  //const effects = ["bounce", "shake", "wave", "dance", "none"];

  return (
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
  );
}

export default Footer;

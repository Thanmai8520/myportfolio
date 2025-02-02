import React, { useState, useEffect } from 'react';
import './Experience.css';

function Experience({ selectedColor }) {
  const [modalImage, setModalImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1); // Track the current image index

  const galleryImages = [
    "Barclays",
    "JPMorgan chase hackathon",
    "Automation Bot creation",
    "RPA Club promotion",
    "telegram bot creation",
    "Automation anywhere session",
    "Python coding session",
    "Interaction",
    "RPA INTRO",
    "Python Automation session"
  ];

  const openModal = (imageSrc, index) => {
    setModalImage(imageSrc);
    setCurrentIndex(index); // Set the current index
  };

  const closeModal = (e) => {
    if (e.target.className === 'modal' || e.target.className === 'modal-close') {
      setModalImage(null);
      setCurrentIndex(-1); // Reset index when modal is closed
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' && currentIndex < galleryImages.length - 1) {
      const nextIndex = currentIndex + 1;
      setModalImage(`/images/pic${nextIndex + 1}.jpg`);
      setCurrentIndex(nextIndex);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setModalImage(`/images/pic${prevIndex + 1}.jpg`);
      setCurrentIndex(prevIndex);
    } else if (e.key === 'Escape') {
      setModalImage(null);
      setCurrentIndex(-1);
    }
  };

  useEffect(() => {
    if (modalImage) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [modalImage, currentIndex]);

  return (
    <div className="experience-container">
      <div className="experience-header">
        <h2 className="experience-title" style={{ color: selectedColor }}>
          Professional Experience
        </h2>
      </div>

      <div className="experience-details">
        <h3 style={{ color: selectedColor }}>Work Experience</h3>
        <ul className="experience-list">
          <li className="experience-item animate-item">
            <img src="/images/barclays-logo.png" alt="Barclays Logo" className="experience-icon" />
            Backend Developer as an Intern at Barclays
          </li>
          <li className="experience-item animate-item">
            <img src="/images/jpmorgan-logo.png" alt="JPMorgan Logo" className="experience-icon" />
            Participant in the JPMorgan Chase 'Code for Good' 2024 Hackathon
          </li>
          <li className="experience-item animate-item">
            <img src="/images/rpa-club-logo.png" alt="RPA Club Logo" className="experience-icon" />
            <span className="rpa-tech-club">
              President of{' '}
              <a href="https://klrpa.netlify.app/team" target="_blank" rel="noopener noreferrer">
                RPA Technical Club
              </a>{' '}
              at KL University
            </span>
          </li>
        </ul>
      </div>

      <div className="experience-images">
        <h3 style={{ color: selectedColor }}>Gallery</h3>
        <div className="image-gallery">
          {galleryImages.map((caption, index) => (
            <div
              className="gallery-item"
              key={index}
              onClick={() => openModal(`/images/pic${index + 1}.jpg`, index)}
            >
              <img
                src={`/images/pic${index + 1}.jpg`}
                alt={`Experience ${index + 1}`}
                className="experience-image"
              />
              <div className="image-caption">{caption}</div>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Full View" />
        </div>
      )}
    </div>
  );
}

export default Experience;

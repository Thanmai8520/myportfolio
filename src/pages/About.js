import React, { useEffect, useState } from 'react';
import './About.css';

function About({ selectedColor }) {
  const [visibleCertifications, setVisibleCertifications] = useState([]);
  const [modalImage, setModalImage] = useState(null);

  const education = [
    { degree: 'B.Tech in CSE (Honors)', institution: 'KL University', score: 'CGPA: 9.78/10' },
    { degree: 'Intermediate', institution: 'Sri Chaitanya Jr College', score: 'GPA: 9.6/10' },
    { degree: 'Class 10', institution: 'Sri Chaitanya School', score: 'GPA: 9.8/10' },
  ];
  
  const certifications = [
    { src: '/images/tensorflow.png', alt: 'TensorFlow', name: 'TensorFlow Certification' },
    { src: '/images/redhat.png', alt: 'RedHat', name: 'RedHat Certification' },
    { src: '/images/aws-cp.png', alt: 'AWS Cloud Practitioner', name: 'AWS Cloud Practitioner' },
    { src: '/images/aws-dev-assoc.png', alt: 'AWS Developer Associate', name: 'AWS Developer Associate' },
    { src: '/images/automation-anywhere.png', alt: 'Automation Anywhere', name: 'Automation Anywhere Certification' },
  ];

  const arts = [
    { src: '/images/bharatanatyam.jpg', alt: 'Bharatanatyam', name: 'Pursuing Bharatanatyam Degree' },
    { src: '/images/kuchipudi.jpg', alt: 'Kuchipudi', name: 'Kuchipudi Certification Holder' },
    { src: '/images/sketching.jpg', alt: 'Sketching', name: 'Sketching' },
    { src: '/images/cubing.jpg', alt: 'Cubing', name: 'Cubing' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index, 10);
            setVisibleCertifications((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    const certificationElements = document.querySelectorAll('.certification-block');
    certificationElements.forEach((el) => observer.observe(el));

    return () => {
      certificationElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const openModal = (src) => {
    setModalImage(src);
  };
  
  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="about-page">
      {/* Profile Section */}
      <div className="about-header" style={{ color: selectedColor }}>
        <img src="/images/profile.jpg" alt="Profile" className="profile-image" />
      </div>

      {/* Technical Expertise Section */}
      <section className="tech-expertise-section">
        <h2 className="tech-heading" style={{ color: selectedColor }}>
          Technical Expertise
        </h2>
        <div className="tech-scrolling-ticker">
          <div className="tech-scroll">
            {[
              { src: '/images/springboot.png', alt: 'Spring Boot' },
              { src: '/images/react.png', alt: 'React' },
              { src: '/images/nodejs.png', alt: 'Node.js' },
              { src: '/images/sql.png', alt: 'SQL' },
              { src: '/images/rpa.png', alt: 'RPA' },
              { src: '/images/java.png', alt: 'Java' },
              { src: '/images/aws.png', alt: 'AWS' },
              { src: '/images/c.png', alt: 'C' },
              { src: '/images/python.png', alt: 'Python' },
              { src: '/images/html.png', alt: 'HTML' },
              { src: '/images/css.png', alt: 'CSS' },
              { src: '/images/django.png', alt: 'Django' },
            ].map((tech, index) => (
              <div className="tech-icon" key={index}>
                <img src={tech.src} alt={tech.alt} title={tech.alt} />
                <span>{tech.alt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="certifications-section">
        <h3 className="certifications-heading" style={{ color: selectedColor }}>
          Certifications
        </h3>
       
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`certification-block ${visibleCertifications.includes(index) ? 'visible' : ''}`}
              data-index={index}
              onClick={() => openModal(cert.src)}
            >
              <img src={cert.src} alt={cert.alt} className="certification-image" />
              <p className="certification-name">{cert.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Arts Section */}
      <section className="arts-section">
        <h2 className="arts-heading" style={{ color: selectedColor }}>
          Creative Pursuits
        </h2>
        <div className="arts-grid">
          {arts.map((art, index) => (
            <div key={index} className="arts-card">
              <img src={art.src} alt={art.alt} className="arts-image" />
              <p className="arts-name">{art.name}</p>
            </div>
          ))}
        </div>
      </section>
{/* Education Section */}
<section className="education-section">
        <h2 className="education-heading" style={{ color: selectedColor }}>
          Educational Background
        </h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-institution">{edu.institution}</p>
              <p className="education-score">{edu.score}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {modalImage && (
        <div className="modal" onClick={closeModal}>
          <span className="modal-close">&times;</span>
          <img className="modal-content" src={modalImage} alt="Full View" />
        </div>
      )}
    </div>
  );
}

export default About;








import React, { useState, useEffect } from 'react';
import './Achievements.css'; 

const Achievements = () => {
  const [achievementImages, setAchievementImages] = useState([]); 
  const [currentSlide, setCurrentSlide] = useState(0);
  const imagesPerSlide = 3; 

  
  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/achievement'); 
        const data = await response.json();
        setAchievementImages(data.map(item => item.imageUrl)); 
      } catch (error) {
        console.error('Error fetching achievement images:', error);
      }
    };

    fetchAchievements();
  }, []); 

  const prevSlide = () => {
    setCurrentSlide(prevSlide => 
      (prevSlide === 0) ? Math.ceil(achievementImages.length / imagesPerSlide) - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide(prevSlide => 
      (prevSlide + 1) % Math.ceil(achievementImages.length / imagesPerSlide)
    );
  };


  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 100000); 

    return () => clearInterval(autoSlide); 
  }, []);

  
  const currentImages = achievementImages.slice(
    currentSlide * imagesPerSlide,
    currentSlide * imagesPerSlide + imagesPerSlide
  );

  return (
    <section className="achievements-section">
      <div className="heading-container">
        <h2 className="achievements-heading">Achievements</h2>
      </div>

      <div className="slider-container">
        <button className="prev-button" onClick={prevSlide}>
          &#10094; 
        </button>

        <div className="achievement-slide">
          {currentImages.map((imageSrc, index) => (
            <img
              key={index}
              src={imageSrc}
              className="achievement-image"
              alt={`Achievement ${currentSlide * imagesPerSlide + index + 1}`}
            />
          ))}
        </div>

        <button className="next-button" onClick={nextSlide}>
          &#10095; 
        </button>
      </div>
    </section>
  );
};

export default Achievements;

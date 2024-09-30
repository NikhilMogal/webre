import React, { useState, useEffect } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import './Slider.css';

function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://www.roongtagroup.co.in/uploads/sliders/image-14.webp",
        "https://www.roongtagroup.co.in/uploads/sliders/image-15.webp",
        "https://www.roongtagroup.co.in/uploads/sliders/image-16.webp",
        "https://www.roongtagroup.co.in/uploads/sliders/image-19.webp"
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    };

   
    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextSlide();
        }, 3000); 

        return () => clearInterval(autoSlide); 
    }, [currentSlide]); 

    return (
        <div className="slider">
            <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map((img, index) => (
                    <img key={index} src={img} alt={`Slide ${index}`} />
                ))}
            </div>
            <div className="icons">
                <div className="icon" onClick={prevSlide}>
                    <IoIosArrowBack />
                </div>
                <div className="icon" onClick={nextSlide}>
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    );
}

export default Slider;

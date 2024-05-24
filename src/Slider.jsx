import React, { useState } from 'react';
import './Slider.css';

function Slider({ images }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider">
            <img src={images[activeIndex]} className="slide" alt={`Slide ${activeIndex}`} />
            <button className="prev" onClick={prevSlide}>
                Prev
            </button>
            <button className="next" onClick={nextSlide}>
                Next
            </button>
        </div>
    );
}

export default Slider;


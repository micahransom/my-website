import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right');

  const slides = [
    {
      image: '/api/placeholder/800/400',
      title: 'Welcome to My Website',
      description: 'Explore my work and projects. I focus on creating beautiful and functional web experiences.',
      buttonText: 'View Portfolio',
      buttonLink: '/portfolio'
    },
    {
      image: '/api/placeholder/800/400',
      title: 'Latest Projects',
      description: 'Check out my most recent web development projects and technical achievements.',
      buttonText: 'See Projects',
      buttonLink: '/projects'
    },
    {
      image: '/api/placeholder/800/400',
      title: 'Get in Touch',
      description: "I'm always interested in new opportunities and collaborations. Let's work together!",
      buttonText: 'Contact Me',
      buttonLink: '/contact'
    }
  ];

  const nextSlide = () => {
    setDirection('right');
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection('left');
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen bg-neutral-100 overflow-hidden">
      {/* Background - stays constant */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-300" />

      {/* Carousel container */}
      <div className="relative h-screen flex items-center justify-center px-16">
        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 p-2 rounded-full bg-white/80 hover:bg-white shadow-lg transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide content */}
        <div className="max-w-4xl w-full mx-auto text-center">
          <div 
            className={`transform transition-all duration-500 ease-in-out ${
              direction === 'right' ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
            key={currentSlide}
          >
            <img 
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-64 object-cover rounded-lg shadow-xl mb-8 transform transition-transform duration-500 hover:scale-105"
            />
            
            <h1 className={`text-4xl font-bold text-primary-900 mb-4 transform transition-all duration-500 ${
              direction === 'right' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              {slides[currentSlide].title}
            </h1>
            
            <p className={`text-lg text-neutral-700 mb-8 max-w-2xl mx-auto transform transition-all duration-500 delay-100 ${
              direction === 'right' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}>
              {slides[currentSlide].description}
            </p>
            
            <a
              href={slides[currentSlide].buttonLink}
              className={`inline-block px-6 py-3 bg-primary-500 text-white rounded-md hover:bg-primary-600 
                transition-all duration-500 delay-200 transform hover:scale-105 hover:shadow-lg ${
                direction === 'right' ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {slides[currentSlide].buttonText}
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 'right' : 'left');
              setCurrentSlide(index);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-primary-500 scale-125' : 'bg-primary-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
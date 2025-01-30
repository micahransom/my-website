import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState('right');

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: '#ffffff' },
          shape: { type: 'circle' },
          opacity: { value: 0.5, random: false },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
          }
        },
        retina_detect: true
      });
    }
  }, []);

  const slides = [
    {
      title: "Welcome",
      // First slide only has title
    },
    {
      image: 'https://picsum.photos/1920/1080?random=1',
      title: 'Design Portfolio',
      description: 'Exploring the intersection of creativity and technology through web design.',
      buttonText: 'View Designs',
      buttonLink: '/portfolio'
    },
    {
      image: 'https://picsum.photos/1920/1080?random=2',
      title: 'Latest Projects',
      description: 'A showcase of my recent web development work and creative experiments.',
      buttonText: 'See Projects',
      buttonLink: '/projects'
    },
    {
      image: 'https://picsum.photos/1920/1080?random=3',
      title: 'Technical Skills',
      description: 'From frontend frameworks to backend development, explore my technical expertise.',
      buttonText: 'Learn More',
      buttonLink: '/skills'
    },
    {
      image: 'https://picsum.photos/1920/1080?random=4',
      title: 'Get in Touch',
      description: "Interested in working together? Let's create something amazing.",
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
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Particles container */}
      <div id="particles-js" className="absolute inset-0" />

      {/* Carousel container */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Navigation buttons */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* All slides container */}
        <div className="flex transition-transform duration-500 ease-in-out"
             style={{
               transform: `translateX(${-currentSlide * 100}%)`,
               width: `${slides.length * 100}%`
             }}>
          
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 px-16">
              <div className="max-w-4xl mx-auto text-center h-screen flex flex-col justify-center">
                <h2 className="text-5xl font-bold text-white mb-4">
                  {slide.title}
                </h2>
                
                {slide.image && (
                  <img 
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-96 object-cover rounded-lg shadow-xl mb-8 transform transition-transform duration-500 hover:scale-105"
                  />
                )}
                
                {slide.description && (
                  <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                    {slide.description}
                  </p>
                )}
                
                {slide.buttonText && (
                  <a
                    href={slide.buttonLink}
                    className="inline-block px-6 py-3 bg-white text-black rounded-md hover:bg-gray-200 
                      transition-all duration-500 transform hover:scale-105 hover:shadow-lg"
                  >
                    {slide.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
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
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white scale-110' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
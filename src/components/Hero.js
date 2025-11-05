import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="/images/hero-bg.jpg" 
          alt="Запоріжжя вночі" 
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center px-4">
          <h1 className="hero-text text-4xl md:text-6xl lg:text-7xl font-bold text-yellow-400 tracking-wider">
            ЕНЕРГІЯ - ЦЕ ЖИТТЯ
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
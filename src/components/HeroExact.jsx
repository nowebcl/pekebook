import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroExact({ onExploreCatalog, onNavigateTab }) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 'slide-1',
      image: '/hero.png',
      pillColors: ['#9e76d9', '#2dd4bf'],
      line1: 'Imprime',
      line2: 'tus ideas',
      highlight1: 'sin',
      highlight1Color: 'text-[#9e76d9]',
      highlight2: 'límites',
      highlight2Color: 'text-[#32c9b4]',
      subtitle: 'Insumos, materiales y todo lo que necesitas para dar vida a tus proyectos.',
      cta: 'Explorar Catálogo',
      action: () => onExploreCatalog('todos'),
    },
    {
      id: 'slide-2',
      image: '/2.png',
      pillColors: ['#9e76d9', '#f59e0b'],
      line1: 'Encuaderna',
      line2: 'tus proyectos',
      highlight1: 'con',
      highlight1Color: 'text-[#9e76d9]',
      highlight2: 'estilo',
      highlight2Color: 'text-[#f59e0b]',
      subtitle: 'Anillados Wire-O, espirales, cartón piedra y herramientas para agendas únicas.',
      cta: 'Cotizar Encuadernación',
      action: () => onNavigateTab ? onNavigateTab('servicios') : onExploreCatalog('encuadernacion'),
    },
    {
      id: 'slide-3',
      image: '/3.png',
      pillColors: ['#ec4899', '#8b5cf6'],
      line1: 'Papelería',
      line2: 'creativa para',
      highlight1: 'tu',
      highlight1Color: 'text-[#ec4899]',
      highlight2: 'espacio',
      highlight2Color: 'text-[#8b5cf6]',
      subtitle: 'Planners, papeles fotográficos, stickers, cintas y accesorios para inspirarte.',
      cta: 'Ver Insumos de Bazar',
      action: () => onExploreCatalog('bazar'),
    },
  ];

  // Auto-play slides every 5.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const current = slides[activeSlide];

  return (
    <section className="w-full relative overflow-hidden bg-white min-h-[540px] sm:min-h-[600px] lg:min-h-[660px] flex items-center border-b border-zinc-100 select-none group">
      {/* Background Images with smooth opacity cross-fade */}
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            idx === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.line1}
            className="w-full h-full object-cover object-right sm:object-center pointer-events-none transform scale-100 group-hover:scale-[1.01] transition-transform duration-1000"
          />

          {/* Seamless gradient blend on the left so typography is always crystal clear */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 sm:via-white/85 to-transparent w-full sm:w-[65%] lg:w-[52%] pointer-events-none"></div>
          {/* Mobile gentle tint */}
          <div className="sm:hidden absolute inset-0 bg-white/60 pointer-events-none"></div>
        </div>
      ))}

      {/* Floating Circular Arrow Left on screen edge */}
      <button
        onClick={handlePrev}
        aria-label="Diapositiva anterior"
        className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-zinc-800 shadow-xl border border-zinc-100 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
      </button>

      {/* Floating Circular Arrow Right on screen edge */}
      <button
        onClick={handleNext}
        aria-label="Diapositiva siguiente"
        className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/95 hover:bg-white text-zinc-800 shadow-xl border border-zinc-100 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2]" />
      </button>

      {/* Center Max-Width Container for Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 w-full relative z-20 py-12 sm:py-16">
        <div className="max-w-xl text-left space-y-4 sm:space-y-5">
          {/* Dual-Tone Accent Bar */}
          <div className="flex items-center gap-1.5 pt-2">
            <div 
              className="w-8 sm:w-10 h-1.5 rounded-full transition-colors duration-500"
              style={{ backgroundColor: current.pillColors[0] }}
            ></div>
            <div 
              className="w-8 sm:w-10 h-1.5 rounded-full transition-colors duration-500"
              style={{ backgroundColor: current.pillColors[1] }}
            ></div>
          </div>

          {/* Giant Bold Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-[70px] font-black tracking-tight leading-[1.04] text-[#1e1e24] transition-all duration-300">
            {current.line1}<br />
            {current.line2}<br />
            <span className={current.highlight1Color}>{current.highlight1} </span>
            <span className={current.highlight2Color}>{current.highlight2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-base lg:text-lg text-zinc-500 font-normal leading-relaxed max-w-sm sm:max-w-md pt-1 pb-2">
            {current.subtitle}
          </p>

          {/* Black Pill CTA Button */}
          <div className="pt-2">
            <button
              onClick={current.action}
              className="inline-flex items-center gap-3 px-7 py-3.5 sm:py-4 bg-[#18181b] hover:bg-black active:scale-95 text-white text-xs sm:text-sm font-bold rounded-full transition-all shadow-md group"
            >
              <span>{current.cta}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Bottom 3 Dots */}
          <div className="flex items-center gap-2 pt-8 sm:pt-14">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                aria-label={`Ir a slide ${idx + 1}`}
                className={`transition-all rounded-full ${
                  idx === activeSlide
                    ? 'w-3 h-3 bg-[#9e76d9] ring-2 ring-[#9e76d9]/30 scale-110'
                    : 'w-2.5 h-2.5 bg-zinc-300 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

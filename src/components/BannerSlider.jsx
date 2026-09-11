import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { PROMO_BANNERS } from '../data/pekebookData';

export default function BannerSlider({ onSelectCategory, onNavigateTab }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROMO_BANNERS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + PROMO_BANNERS.length) % PROMO_BANNERS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % PROMO_BANNERS.length);
  };

  const activeBanner = PROMO_BANNERS[currentIndex];

  const handleClick = (banner) => {
    if (banner.action === 'servicios') {
      onNavigateTab('servicios');
    } else if (banner.category) {
      onSelectCategory(banner.category);
    }
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 my-4">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-950 aspect-[16/8] sm:aspect-[21/9] lg:aspect-[24/9] shadow-soft-lg group">
        {/* Background Banner Images with Transition */}
        {PROMO_BANNERS.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover object-center transform scale-100 group-hover:scale-105 transition-transform duration-700"
            />
            {/* Gradient Overlays for readable text */}
            <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-zinc-950/85 via-zinc-950/40 to-transparent"></div>
          </div>
        ))}

        {/* Content Over the Banner */}
        <div className="relative z-20 h-full p-5 sm:p-8 lg:p-10 flex flex-col justify-end sm:justify-center max-w-lg text-left text-white space-y-2 sm:space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] sm:text-xs font-black tracking-wider uppercase text-emerald-300 w-fit">
            <Sparkles className="w-3 h-3 text-amber-300" />
            <span>{activeBanner.tag}</span>
          </div>

          <h2 className="text-lg sm:text-2xl lg:text-3xl font-black tracking-tight leading-tight drop-shadow-sm">
            {activeBanner.title}
          </h2>

          <p className="text-xs sm:text-sm text-zinc-200 line-clamp-2 drop-shadow-xs font-normal">
            {activeBanner.subtitle}
          </p>

          <div className="pt-1">
            <button
              onClick={() => handleClick(activeBanner)}
              className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white hover:bg-zinc-100 active:scale-95 text-zinc-900 rounded-full font-bold text-xs sm:text-sm shadow-soft-md flex items-center gap-2 transition-all"
            >
              <span>{activeBanner.cta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          aria-label="Anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Siguiente"
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-xs flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 bg-black/40 backdrop-blur-xs px-2 py-1 rounded-full">
          {PROMO_BANNERS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex ? 'w-5 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

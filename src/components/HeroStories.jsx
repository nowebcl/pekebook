import React from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Truck, Clock, MapPin, Calculator, PhoneCall } from 'lucide-react';
import { STORE_INFO, STORE_GALLERY } from '../data/pekebookData';

export default function HeroStories({ onSelectCategory, onGoToCalculator }) {
  return (
    <section className="w-full pt-4 pb-6 sm:pb-8">
      {/* Mobile Stories / Quick Category Circles */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar py-1">
          {STORE_GALLERY.map((story, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center flex-shrink-0 cursor-pointer group"
              onClick={() => onSelectCategory('todos')}
            >
              <div className="p-0.5 rounded-full ring-2 ring-pekepurple-400 group-hover:ring-pekepurple-600 transition-all">
                <img 
                  src={story.url} 
                  alt={story.title}
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover group-hover:scale-105 transition-transform" 
                />
              </div>
              <span className="text-[11px] font-semibold text-zinc-700 mt-1 text-center max-w-[70px] truncate">
                {story.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Card - Clean, Warm Minimalist Card (Not generic AI 3D) */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white p-6 sm:p-10 lg:p-12 shadow-soft-lg">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mt-16 -mr-16 w-96 h-96 bg-pekepurple-500/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/3 -mb-20 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs font-medium text-pekepurple-200">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Librería, Bazar & Insumos en Puerto Montt</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] text-white">
                Todo lo que necesitas para tu negocio y proyectos,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pekepurple-300 via-white to-emerald-300">
                  sin complicaciones.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-zinc-300 max-w-xl font-normal leading-relaxed">
                Insumos de sublimación, encuadernación profesional, papeles especiales, regalos y servicios de impresión con atención local en <strong className="text-white font-semibold">Peke 1 (Av. Gabriela Mistral) y Peke 2 (Av. Violeta Parra)</strong>.
              </p>

              {/* Fast Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onSelectCategory('todos')}
                  className="px-5 py-3 bg-white text-zinc-900 hover:bg-zinc-100 rounded-full font-bold text-xs sm:text-sm transition-all active:scale-95 flex items-center gap-2 shadow-soft-md"
                >
                  <span>Explorar Catálogo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onGoToCalculator}
                  className="px-5 py-3 bg-white/10 hover:bg-white/15 text-white border border-white/15 rounded-full font-semibold text-xs sm:text-sm transition-all active:scale-95 flex items-center gap-2 backdrop-blur-sm"
                >
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  <span>Cotizar Taller</span>
                </button>

                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hola%20Pekebook,%20quisiera%20consultar%20por%20sus%20productos%20y%20servicios.`}
                  target="_blank"
                  rel="noreferrer"
                  className="hidden sm:inline-flex items-center gap-2 px-4 py-3 text-emerald-300 hover:text-emerald-200 text-xs sm:text-sm font-semibold transition-colors"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>+56 9 6748 6503</span>
                </a>
              </div>
            </div>

            {/* Visual Showcase - Real photo collage */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="space-y-3">
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-sm bg-zinc-800">
                  <img 
                    src={STORE_GALLERY[0].url} 
                    alt="Tienda Pekebook" 
                    className="w-full h-32 sm:h-40 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2.5 bg-zinc-900/90 text-[11px] font-medium text-zinc-300">
                    📍 Peke 1: Av. Gabriela Mistral 957
                  </div>
                </div>

                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-sm bg-zinc-800">
                  <img 
                    src={STORE_GALLERY[2].url} 
                    alt="Taller de Encuadernación" 
                    className="w-full h-24 sm:h-28 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 bg-zinc-900/90 text-[10px] font-medium text-zinc-300">
                    ✂️ Taller & Encuadernación
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <div className="overflow-hidden rounded-2xl border border-white/10 shadow-sm bg-zinc-800">
                  <img 
                    src={STORE_GALLERY[1].url} 
                    alt="Insumos de Sublimación" 
                    className="w-full h-24 sm:h-28 object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="p-2 bg-zinc-900/90 text-[10px] font-medium text-zinc-300">
                    ☕ Insumos Sublimables
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex flex-col justify-between h-32 sm:h-40">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Atención Local</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-white">+2 Años</div>
                    <p className="text-[11px] text-zinc-300">apoyando a creadores y pymes en Los Lagos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quick Value Badges */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
          <div className="bg-white rounded-2xl p-3 sm:p-4 border border-zinc-150 shadow-soft-sm flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-pekepurple-50 text-pekepurple-600 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-zinc-900">Retiro Inmediato</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 hidden sm:block">En nuestro local de Puerto Montt</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 sm:p-4 border border-zinc-150 shadow-soft-sm flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-zinc-900">Envíos a Todo Chile</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 hidden sm:block">Starken, Chilexpress y delivery</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-3 sm:p-4 border border-zinc-150 shadow-soft-sm flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center flex-shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-zinc-900">Taller Rápido</div>
              <div className="text-[10px] sm:text-xs text-zinc-500 hidden sm:block">Impresiones y anillados en el día</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

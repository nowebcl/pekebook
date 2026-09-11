import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Gift, Printer } from 'lucide-react';

export default function PromoGrid({ onSelectCategory, onNavigateTab }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 my-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
        {/* Card 1: Kits Emprende */}
        <div 
          onClick={() => onSelectCategory('bazar')}
          className="group relative overflow-hidden rounded-3xl bg-zinc-900 text-white cursor-pointer shadow-soft-sm hover:shadow-soft-md transition-all border border-zinc-800"
        >
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img 
              src="/banners/emprende.jpg" 
              alt="Kits Emprende" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
          </div>
          <div className="p-5 flex flex-col justify-between space-y-2">
            <div>
              <span className="text-[10px] font-bold text-amber-300 uppercase tracking-wider">
                Club Emprendedor
              </span>
              <h3 className="text-base font-extrabold text-white mt-0.5">
                Kits de Inicio & Insumos Mayoristas
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Herramientas, planners y marcos acrílicos con precios especiales por volumen.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
              <span>Ver insumos de bazar</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>
        </div>

        {/* Card 2: Sublimación & DTF */}
        <div 
          onClick={() => onSelectCategory('sublimacion')}
          className="group relative overflow-hidden rounded-3xl bg-zinc-900 text-white cursor-pointer shadow-soft-sm hover:shadow-soft-md transition-all border border-zinc-800"
        >
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img 
              src="/banners/sublimacion.jpg" 
              alt="Sublimación y DTF" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
          </div>
          <div className="p-5 flex flex-col justify-between space-y-2">
            <div>
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">
                Estampados & DTF UV
              </span>
              <h3 className="text-base font-extrabold text-white mt-0.5">
                Tazones AAA & Láminas UV
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Personalización en frío para vidrio, madera y tazas sin necesidad de plancha térmica.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
              <span>Explorar sublimables</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>
        </div>

        {/* Card 3: Taller de Tesis & Encuadernación */}
        <div 
          onClick={() => onNavigateTab('servicios')}
          className="group relative overflow-hidden rounded-3xl bg-zinc-900 text-white cursor-pointer shadow-soft-sm hover:shadow-soft-md transition-all border border-zinc-800 sm:col-span-2 lg:col-span-1"
        >
          <div className="aspect-[16/10] w-full overflow-hidden">
            <img 
              src="/banners/taller.jpg" 
              alt="Taller de Tesis y Encuadernación" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
            />
          </div>
          <div className="p-5 flex flex-col justify-between space-y-2">
            <div>
              <span className="text-[10px] font-bold text-pekepurple-300 uppercase tracking-wider">
                Servicio Express en Local
              </span>
              <h3 className="text-base font-extrabold text-white mt-0.5">
                Encuadernación de Tesis & Proyectos
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Tapas duras personalizadas con letras doradas, anillados doble cero y entrega veloz en Puerto Montt.
              </p>
            </div>
            <div className="pt-2 flex items-center text-xs font-bold text-emerald-400 group-hover:translate-x-1 transition-transform">
              <span>Abrir cotizador de taller</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

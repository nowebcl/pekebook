import React from 'react';
import { STORE_INFO } from '../data/pekebookData';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Heart } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="w-full bg-zinc-900 text-zinc-400 border-t border-zinc-800 pt-12 pb-24 md:pb-12 text-xs text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-zinc-800">
          {/* Column 1: Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img
                src={STORE_INFO.logoUrl}
                alt={STORE_INFO.name}
                className="h-8 w-auto brightness-200"
              />
              <span className="text-base font-black text-white tracking-tight">
                PEKE<span className="text-pekepurple-400">BOOK</span>
              </span>
            </div>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Librería, bazar y taller especializado en insumos de sublimación, encuadernación e impresiones de alta definición en Puerto Montt.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-semibold pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Atención presencial y envíos nacionales</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navegación Rápida
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li>
                <button 
                  onClick={() => { setActiveTab('inicio'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('catalogo'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Catálogo de Insumos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('servicios'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Cotizador de Impresiones
                </button>
              </li>
              <li>
                <button 
                  onClick={() => { setActiveTab('local'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-white transition-colors"
                >
                  Sucursal Puerto Montt & FAQs
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto Directo
            </h4>
            <ul className="space-y-2 text-zinc-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-pekepurple-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5 text-xs">
                  <div><strong className="text-zinc-200">Peke 1:</strong> Av. Gabriela Mistral 957, Local 7</div>
                  <div><strong className="text-zinc-200">Peke 2:</strong> Av. Violeta Parra, Local 1</div>
                  <div className="text-[11px] text-zinc-500">Puerto Montt, Chile</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="hover:text-white">
                  {STORE_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-white">
                  {STORE_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>{STORE_INFO.hours}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: WhatsApp & Trust */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Pedidos por WhatsApp
            </h4>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Atención directa sin intermediarios. Envíanos tu lista de productos o archivos y te confirmamos al momento.
            </p>
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hola%20Pekebook!%20Tengo%20una%20consulta.`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-colors"
            >
              <span>Chatear al +56 9 6748 6503</span>
            </a>
          </div>
        </div>

        {/* Bottom row with Noweb credit and copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-zinc-500">
          <div>
            © {new Date().getFullYear()} PEKEBOOK Librería & Bazar. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-2">
            <span>Diseñado con pasión por</span>
            <a 
              href="http://www.noweb.cl" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block hover:opacity-80 transition-opacity"
            >
              <img 
                src={STORE_INFO.nowebLogo} 
                alt="NOWEB" 
                className="h-5 w-auto object-contain brightness-150"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

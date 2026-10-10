import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, MapPin, Phone, ArrowRight, Grid, Calculator, BookOpen } from 'lucide-react';
import { STORE_INFO, CATEGORIES } from '../data/pekebookData';

export default function Header({ 
  cartCount, 
  onOpenCart, 
  searchQuery, 
  setSearchQuery,
  activeTab,
  setActiveTab
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-white border-b border-zinc-100 transition-all">
        {/* Main Header Bar - Identical to User's Mockup */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          {/* Exact Brand Logo with Mascot */}
          <button 
            onClick={() => {
              setActiveTab('inicio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center flex-shrink-0 focus:outline-none group"
            aria-label="Ir a inicio de Pekebook"
          >
            <img 
              src={STORE_INFO.logoUrl} 
              alt="PEKEBOOK Librería & Bazar" 
              className="h-10 sm:h-12 w-auto object-contain group-hover:opacity-95 transition-opacity"
            />
          </button>

          {/* Centered Pill Search Input - Exact Match */}
          <div className="flex-1 max-w-xl mx-2 sm:mx-6">
            <div className="relative flex items-center bg-[#f3f4f6] hover:bg-[#ededf0] rounded-full border border-zinc-200/60 px-4 py-2.5 transition-all focus-within:bg-white focus-within:ring-2 focus-within:ring-pekepurple-400/40 focus-within:border-pekepurple-400">
              <Search className="w-4 h-4 text-zinc-400 mr-3 flex-shrink-0" />
              <input
                type="text"
                placeholder="Buscar insumos, productos o ideas..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (activeTab !== 'catalogo' && e.target.value.trim() !== '') {
                    setActiveTab('catalogo');
                  }
                }}
                className="w-full text-xs sm:text-sm bg-transparent border-0 focus:outline-none text-zinc-800 placeholder:text-zinc-400 font-normal"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="text-zinc-400 hover:text-zinc-600 p-0.5"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Right Action Icons: Shopping Bag & Menu Toggle */}
          <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
            {/* Shopping Bag with outline aesthetic */}
            <button
              onClick={onOpenCart}
              aria-label="Abrir bolsa de compras"
              className="relative p-2.5 hover:bg-zinc-100 rounded-full text-zinc-800 transition-colors focus:outline-none"
            >
              <ShoppingBag className="w-6 h-6 stroke-[1.75]" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 min-w-[19px] h-[19px] px-1 bg-pekepurple-600 text-white rounded-full text-[10px] font-extrabold flex items-center justify-center leading-none shadow-xs">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Menu Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Abrir menú"
              className="p-2.5 hover:bg-zinc-100 rounded-full text-zinc-800 transition-colors focus:outline-none"
            >
              <Menu className="w-6 h-6 stroke-[1.75]" />
            </button>
          </div>
        </div>
      </header>

      {/* Side Slide-Over Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-white shadow-2xl flex flex-col justify-between p-6 text-left">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                  <img 
                    src={STORE_INFO.logoUrl} 
                    alt="PEKEBOOK" 
                    className="h-8 w-auto object-contain"
                  />
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="space-y-1">
                  {[
                    { id: 'inicio', label: 'Inicio', desc: 'Página principal' },
                    { id: 'catalogo', label: 'Catálogo de Insumos', desc: 'Papelería, sublimación y encuadernación' },
                    { id: 'servicios', label: 'Cotizador de Taller', desc: 'Presupuestos de impresión y tesis' },
                    { id: 'local', label: 'Sucursales Puerto Montt', desc: 'Peke 1 (G. Mistral) y Peke 2 (V. Parra)' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full p-3 rounded-2xl text-left transition-all flex items-center justify-between ${
                        activeTab === item.id 
                          ? 'bg-zinc-900 text-white font-bold' 
                          : 'hover:bg-zinc-50 text-zinc-700'
                      }`}
                    >
                      <div>
                        <div className="text-sm">{item.label}</div>
                        <div className={`text-[10px] ${activeTab === item.id ? 'text-zinc-300' : 'text-zinc-400'}`}>
                          {item.desc}
                        </div>
                      </div>
                      <ArrowRight className={`w-4 h-4 ${activeTab === item.id ? 'text-white' : 'text-zinc-400'}`} />
                    </button>
                  ))}
                </nav>
              </div>

              {/* Bottom Drawer info */}
              <div className="pt-6 border-t border-zinc-100 space-y-3 text-xs text-zinc-500">
                <div className="space-y-1 text-zinc-800 font-semibold text-[11px]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-pekepurple-600 flex-shrink-0" />
                    <span><strong>Peke 1:</strong> Av. Gabriela Mistral 957, L7</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span><strong>Peke 2:</strong> Av. Violeta Parra, L1</span>
                  </div>
                </div>
                <a
                  href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hola%20Pekebook!%20Les%20escribo%20desde%20su%20men%C3%BA%20web.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-soft-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>WhatsApp: +56 9 6748 6503</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

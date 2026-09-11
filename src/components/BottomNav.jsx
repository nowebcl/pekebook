import React from 'react';
import { Home, Grid, Calculator, ShoppingBag, MapPin } from 'lucide-react';

export default function BottomNav({ activeTab, setActiveTab, cartCount, onOpenCart }) {
  const tabs = [
    { id: 'inicio', label: 'Inicio', icon: Home },
    { id: 'catalogo', label: 'Catálogo', icon: Grid },
    { id: 'servicios', label: 'Cotizador', icon: Calculator },
    { id: 'cart', label: 'Bolsa', icon: ShoppingBag, isCartAction: true },
    { id: 'local', label: 'Sucursal', icon: MapPin },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-lg border-t border-zinc-200/80 shadow-app-nav pb-safe">
      <div className="flex items-center justify-around h-14 max-w-lg mx-auto px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          if (tab.isCartAction) {
            return (
              <button
                key={tab.id}
                onClick={onOpenCart}
                className="relative flex flex-col items-center justify-center flex-1 py-1 text-zinc-600 active:scale-90 transition-transform"
              >
                <div className="relative">
                  <Icon className="w-5 h-5 text-zinc-800" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1.5 -right-2.5 min-w-[17px] h-[17px] px-1 bg-emerald-500 text-white rounded-full text-[10px] font-extrabold flex items-center justify-center leading-none">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-[10px] font-semibold mt-0.5 text-zinc-800">
                  {tab.label}
                </span>
              </button>
            );
          }

          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-all active:scale-90 ${
                isActive 
                  ? 'text-zinc-900 font-extrabold' 
                  : 'text-zinc-400 hover:text-zinc-600 font-medium'
              }`}
            >
              <div className={`p-1 rounded-xl transition-all ${isActive ? 'bg-zinc-100' : ''}`}>
                <Icon className={`w-5 h-5 ${isActive ? 'text-zinc-900 stroke-[2.5]' : 'stroke-[1.8]'}`} />
              </div>
              <span className="text-[10px] leading-none mt-0.5">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

import React from 'react';
import { Plus, Check, Eye } from 'lucide-react';

export default function ProductCard({ product, onAddToCart, onQuickView }) {
  const [justAdded, setJustAdded] = React.useState(false);

  const handleAdd = (e) => {
    e.stopPropagation();
    onAddToCart(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1200);
  };

  const formatCLP = (val) => {
    return '$' + val.toLocaleString('es-CL');
  };

  return (
    <div 
      onClick={() => onQuickView(product)}
      className="group relative bg-white rounded-2xl border border-zinc-200/80 hover:border-zinc-300 p-2.5 sm:p-3.5 flex flex-col justify-between transition-all duration-300 hover:shadow-soft-md cursor-pointer"
    >
      {/* Top Image Container */}
      <div className="relative w-full aspect-square bg-zinc-50 rounded-xl overflow-hidden mb-3">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge */}
        {product.badge && (
          <span className={`absolute top-2 left-2 text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md shadow-xs ${
            product.badge === 'OFERTA' 
              ? 'bg-rose-500 text-white'
              : product.badge === 'MÁS VENDIDO'
              ? 'bg-amber-500 text-white'
              : 'bg-zinc-900 text-white'
          }`}>
            {product.badge}
          </span>
        )}

        {/* Quick View Hover Icon */}
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="bg-white/90 backdrop-blur-sm text-zinc-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-soft-sm flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-zinc-600" />
            <span>Ver detalles</span>
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
            {product.category}
          </span>
          <h3 className="text-xs sm:text-sm font-bold text-zinc-900 line-clamp-2 leading-snug group-hover:text-pekepurple-700 transition-colors">
            {product.name}
          </h3>
        </div>

        {/* Price & Add to Cart Button */}
        <div className="pt-3 mt-2 border-t border-zinc-100 flex items-center justify-between gap-2">
          <div>
            <div className="text-sm sm:text-base font-extrabold text-zinc-900 tracking-tight">
              {formatCLP(product.price)}
            </div>
            {product.originalPrice && (
              <div className="text-[11px] font-medium text-zinc-400 line-through">
                {formatCLP(product.originalPrice)}
              </div>
            )}
          </div>

          <button
            onClick={handleAdd}
            aria-label="Agregar al carrito"
            className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all duration-200 active:scale-90 ${
              justAdded
                ? 'bg-emerald-500 text-white'
                : 'bg-zinc-900 hover:bg-zinc-800 text-white'
            }`}
          >
            {justAdded ? (
              <Check className="w-4 h-4 animate-bounce" />
            ) : (
              <Plus className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

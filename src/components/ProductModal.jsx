import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, ShieldCheck, MapPin, MessageSquare, Check } from 'lucide-react';
import { STORE_INFO } from '../data/pekebookData';

export default function ProductModal({ product, onClose, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const formatCLP = (val) => '$' + val.toLocaleString('es-CL');

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hola Pekebook! Me interesa este producto: ${product.name} (${formatCLP(product.price)} x ${quantity} un). ¿Tienen stock en el local de Mañihual 285?`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      {/* Background click to close */}
      <div className="fixed inset-0" onClick={onClose}></div>

      {/* Modal / Sheet Card */}
      <div className="relative z-10 w-full sm:max-w-xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-y-auto custom-scroll p-5 sm:p-6 text-left">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
          {/* Image */}
          <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-zinc-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-3 left-3 bg-zinc-900 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-md">
                {product.badge}
              </span>
            )}
          </div>

          {/* Details */}
          <div className="space-y-3">
            <div>
              <span className="text-[11px] font-bold text-pekepurple-600 uppercase tracking-wider">
                {product.category}
              </span>
              <h2 className="text-base sm:text-lg font-extrabold text-zinc-900 leading-snug mt-1">
                {product.name}
              </h2>
            </div>

            {/* Pricing */}
            <div className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl font-black text-zinc-900">
                {formatCLP(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-zinc-400 line-through">
                  {formatCLP(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Stock status */}
            <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>{product.stock || "Disponible en local"}</span>
            </div>

            <p className="text-xs text-zinc-600 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications */}
            {product.specs && (
              <div className="bg-zinc-50 rounded-xl p-3 border border-zinc-150 space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400 block mb-1">
                  Especificaciones
                </span>
                {product.specs.map((spec, i) => (
                  <div key={i} className="text-[11px] text-zinc-600 flex items-center gap-1.5">
                    <span className="text-pekepurple-500">•</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Quantity Selector */}
            <div className="pt-2 flex items-center justify-between border-t border-zinc-100">
              <span className="text-xs font-bold text-zinc-700">Cantidad</span>
              <div className="flex items-center border border-zinc-200 rounded-xl p-1 bg-zinc-50">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-7 h-7 rounded-lg bg-white shadow-xs flex items-center justify-center text-zinc-700 hover:bg-zinc-100 active:scale-95"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-9 text-center text-xs font-bold text-zinc-900">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-7 h-7 rounded-lg bg-white shadow-xs flex items-center justify-center text-zinc-700 hover:bg-zinc-100 active:scale-95"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleAdd}
                className={`w-full py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  added
                    ? 'bg-emerald-500 text-white'
                    : 'bg-zinc-900 hover:bg-zinc-800 text-white shadow-soft-sm'
                }`}
              >
                {added ? (
                  <>
                    <Check className="w-4 h-4 animate-bounce" />
                    <span>¡Agregado al Carrito!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Agregar ({formatCLP(product.price * quantity)})</span>
                  </>
                )}
              </button>

              <button
                onClick={handleWhatsAppInquiry}
                className="w-full py-2.5 rounded-xl font-bold text-xs text-zinc-700 hover:bg-zinc-100 border border-zinc-200 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                <span>Consultar stock por WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

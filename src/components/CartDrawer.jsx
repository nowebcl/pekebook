import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, Send, ArrowRight, MapPin, Truck, Check } from 'lucide-react';
import { STORE_INFO } from '../data/pekebookData';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart 
}) {
  const [deliveryMethod, setDeliveryMethod] = useState('retiro'); // 'retiro' | 'envio'
  const [pickupBranch, setPickupBranch] = useState('peke-1'); // 'peke-1' | 'peke-2'
  const [clientName, setClientName] = useState('');
  const [clientNote, setClientNote] = useState('');

  if (!isOpen) return null;

  const formatCLP = (val) => '$' + val.toLocaleString('es-CL');

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) return;

    let itemsText = cartItems.map(
      (item) => `• ${item.quantity}x ${item.name} (${formatCLP(item.price * item.quantity)})`
    ).join('\n');

    const methodLabel = deliveryMethod === 'retiro' 
      ? `🏬 Retiro en ${pickupBranch === 'peke-1' ? 'Peke 1 (Av. Gabriela Mistral 957, Local 7)' : 'Peke 2 (Av. Violeta Parra, Local 1)'}` 
      : '🚚 Despacho a domicilio / Envío por pagar';

    const message = 
`👋 ¡Hola PEKEBOOK! Quisiera realizar el siguiente pedido desde su catálogo web:

${clientName ? `👤 *Cliente:* ${clientName}\n` : ''}📍 *Método de entrega:* ${methodLabel}

🛍️ *Detalle de productos:*
${itemsText}

💰 *TOTAL ESTIMADO:* ${formatCLP(subtotal)} CLP
${clientNote ? `\n📝 *Nota / Comentario:* ${clientNote}` : ''}

¿Me confirman disponibilidad y datos de transferencia para coordinar? ¡Muchas gracias!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between text-left">
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-zinc-100 flex items-center justify-between bg-zinc-50/50">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-zinc-900 text-white flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="text-sm sm:text-base font-bold text-zinc-900 leading-tight">
                  Tu Carrito de Pedido
                </h2>
                <span className="text-[11px] text-zinc-400">
                  {cartItems.reduce((acc, item) => acc + item.quantity, 0)} productos añadidos
                </span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-zinc-100 text-zinc-500 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 custom-scroll">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-3">
                <div className="w-16 h-16 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 stroke-1" />
                </div>
                <h3 className="text-sm font-bold text-zinc-800">
                  Tu bolsa está vacía
                </h3>
                <p className="text-xs text-zinc-400 max-w-[240px] mx-auto">
                  Explora nuestro catálogo de papelería, encuadernación y sublimación para armar tu pedido.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-4 py-2 bg-zinc-900 text-white rounded-full text-xs font-bold shadow-soft-sm active:scale-95"
                >
                  Ver Catálogo
                </button>
              </div>
            ) : (
              <>
                {/* List of items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div 
                      key={item.id}
                      className="p-3 bg-zinc-50 rounded-2xl border border-zinc-200/70 flex gap-3 items-center justify-between"
                    >
                      <img
                        src={item.image || '/placeholder-product.svg'}
                        alt={item.name}
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = '/placeholder-product.svg';
                        }}
                        className="w-14 h-14 rounded-xl object-cover bg-white flex-shrink-0 border border-zinc-150"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-bold text-zinc-900 truncate">
                          {item.name}
                        </h4>
                        <div className="text-xs font-extrabold text-zinc-800 mt-0.5">
                          {formatCLP(item.price * item.quantity)}
                        </div>
                        <div className="text-[10px] text-zinc-400">
                          {formatCLP(item.price)} c/u
                        </div>
                      </div>

                      {/* Quantity and Delete */}
                      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          className="text-zinc-400 hover:text-rose-600 transition-colors p-1"
                          title="Eliminar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                        <div className="flex items-center bg-white border border-zinc-200 rounded-lg p-0.5">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-5 h-5 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 rounded"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-6 text-center text-xs font-bold text-zinc-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-5 h-5 flex items-center justify-center text-zinc-600 hover:bg-zinc-100 rounded"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Method Selector */}
                <div className="bg-zinc-50 rounded-2xl p-3 border border-zinc-200/80 space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 block">
                    Método de Entrega
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('retiro')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        deliveryMethod === 'retiro'
                          ? 'bg-white border-zinc-900 text-zinc-900 shadow-soft-sm'
                          : 'border-zinc-200 text-zinc-500 hover:bg-white'
                      }`}
                    >
                      <MapPin className="w-4 h-4 text-pekepurple-600" />
                      <span>Retiro en Local</span>
                      <span className="text-[9px] font-normal text-emerald-600">Gratis (Pto. Montt)</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setDeliveryMethod('envio')}
                      className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center gap-1 transition-all ${
                        deliveryMethod === 'envio'
                          ? 'bg-white border-zinc-900 text-zinc-900 shadow-soft-sm'
                          : 'border-zinc-200 text-zinc-500 hover:bg-white'
                      }`}
                    >
                      <Truck className="w-4 h-4 text-emerald-600" />
                      <span>Envío a Domicilio</span>
                      <span className="text-[9px] font-normal text-zinc-400">Por pagar (Chile)</span>
                    </button>
                  </div>

                  {deliveryMethod === 'retiro' && (
                    <div className="pt-2 border-t border-zinc-200/60 space-y-1.5">
                      <span className="text-[10px] font-semibold text-zinc-500 block">
                        Sucursal para retirar:
                      </span>
                      <div className="grid grid-cols-2 gap-1.5">
                        <button
                          type="button"
                          onClick={() => setPickupBranch('peke-1')}
                          className={`p-2 rounded-xl text-left border transition-all ${
                            pickupBranch === 'peke-1'
                              ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                              : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300'
                          }`}
                        >
                          <div className="text-[11px] font-extrabold leading-tight">Peke 1 (Central)</div>
                          <div className={`text-[9px] ${pickupBranch === 'peke-1' ? 'text-zinc-300' : 'text-zinc-500'} truncate`}>
                            Av. G. Mistral 957, L7
                          </div>
                        </button>

                        <button
                          type="button"
                          onClick={() => setPickupBranch('peke-2')}
                          className={`p-2 rounded-xl text-left border transition-all ${
                            pickupBranch === 'peke-2'
                              ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
                              : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300'
                          }`}
                        >
                          <div className="text-[11px] font-extrabold leading-tight">Peke 2</div>
                          <div className={`text-[9px] ${pickupBranch === 'peke-2' ? 'text-zinc-300' : 'text-zinc-500'} truncate`}>
                            Av. Violeta Parra, L1
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Optional Client Details */}
                <div className="space-y-2 pt-1">
                  <div>
                    <label className="text-[11px] font-semibold text-zinc-600 block mb-1">
                      Tu Nombre (opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="Ej: Carolina Pérez"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full text-xs px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-800"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-semibold text-zinc-600 block mb-1">
                      Nota o requerimiento especial (opcional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Ej: Necesito factura / ¿Tienen retiro hoy a las 18:00?"
                      value={clientNote}
                      onChange={(e) => setClientNote(e.target.value)}
                      className="w-full text-xs p-2.5 bg-zinc-50 border border-zinc-200 rounded-xl focus:bg-white focus:outline-none focus:ring-1 focus:ring-zinc-800 resize-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Panel */}
          {cartItems.length > 0 && (
            <div className="p-4 sm:p-5 border-t border-zinc-100 bg-white space-y-3">
              <div className="flex items-center justify-between text-xs text-zinc-500">
                <span>Subtotal ({cartItems.length} productos)</span>
                <span className="font-bold text-zinc-900 text-sm">{formatCLP(subtotal)}</span>
              </div>
              <div className="flex items-center justify-between text-base font-black text-zinc-900">
                <span>Total Estimado</span>
                <span className="text-xl text-zinc-900">{formatCLP(subtotal)} CLP</span>
              </div>

              {/* Instant WhatsApp Checkout Button */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white rounded-2xl font-extrabold text-sm shadow-soft-md flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Pedir por WhatsApp al instante</span>
              </button>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-zinc-400">
                  🔒 Coordinación directa con el local
                </span>
                <button
                  onClick={onClearCart}
                  className="text-[10px] text-zinc-400 hover:text-rose-600 underline font-medium"
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

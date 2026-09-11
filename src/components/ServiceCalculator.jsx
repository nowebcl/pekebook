import React, { useState } from 'react';
import { Calculator, Printer, BookOpen, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { STORE_INFO, SERVICES } from '../data/pekebookData';

export default function ServiceCalculator() {
  const [serviceType, setServiceType] = useState('impresion'); // 'impresion' | 'encuadernacion' | 'sublimacion'
  const [pageCount, setPageCount] = useState(50);
  const [colorType, setColorType] = useState('bn'); // 'bn' | 'color'
  const [paperType, setPaperType] = useState('bond'); // 'bond' | 'opalina' | 'foto'
  const [bindingType, setBindingType] = useState('espiral'); // 'none' | 'espiral' | 'doblecero' | 'tapadura'
  const [copies, setCopies] = useState(1);

  // Sublimation parameters
  const [mugCount, setMugCount] = useState(6);
  const [mugType, setMugType] = useState('blanca'); // 'blanca' | 'magica' | 'botella'

  // Pricing calculation in CLP
  const calculateTotal = () => {
    if (serviceType === 'sublimacion') {
      let unitPrice = 3990;
      if (mugType === 'magica') unitPrice = 5990;
      if (mugType === 'botella') unitPrice = 6990;
      if (mugCount >= 12) unitPrice = unitPrice * 0.85; // discount for bulk
      return Math.round(unitPrice * mugCount);
    }

    // Printing calculation
    const pricePerPage = {
      bn: { bond: 50, opalina: 150, foto: 350 },
      color: { bond: 180, opalina: 350, foto: 600 },
    }[colorType][paperType];

    const printSubtotal = pageCount * pricePerPage;

    const bindingPrice = {
      none: 0,
      espiral: 2500,
      doblecero: 3800,
      tapadura: 9900,
    }[bindingType];

    return (printSubtotal + bindingPrice) * copies;
  };

  const total = calculateTotal();
  const formatCLP = (val) => '$' + val.toLocaleString('es-CL');

  const handleSendQuote = () => {
    let details = '';
    if (serviceType === 'sublimacion') {
      details = `• Servicio: Sublimación / Personalizados
• Tipo: ${mugType === 'blanca' ? 'Taza Cerámica Blanca' : mugType === 'magica' ? 'Taza Mágica Térmica' : 'Botella Térmica'}
• Cantidad: ${mugCount} unidades
• Valor Estimado: ${formatCLP(total)} CLP`;
    } else {
      details = `• Servicio: Impresión & Encuadernación
• Páginas por ejemplar: ${pageCount} págs
• Impresión: ${colorType === 'bn' ? 'Blanco y Negro' : 'Color Láser Alta Resolución'}
• Papel: ${paperType === 'bond' ? 'Bond estándar' : paperType === 'opalina' ? 'Opalina lisa 200g' : 'Fotográfico'}
• Encuadernación: ${
        bindingType === 'none' 
          ? 'Solo impresión suelta' 
          : bindingType === 'espiral' 
          ? 'Espiral Plástico con micas' 
          : bindingType === 'doblecero' 
          ? 'Anillado Doble Cero metálico' 
          : 'Tapa Dura Personalizada'
      }
• Ejemplares: ${copies}
• Presupuesto Estimado: ${formatCLP(total)} CLP`;
    }

    const message = `👋 Hola PEKEBOOK! Hice una cotización en su web para taller:

${details}

¿Me indican cómo enviarles los archivos en PDF o imágenes y el tiempo estimado de entrega en el local de Mañihual 285? ¡Gracias!`;

    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-white rounded-3xl border border-zinc-200/90 shadow-soft-lg overflow-hidden text-left">
        {/* Header bar of calculator */}
        <div className="bg-zinc-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-emerald-300 mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>Cotizador Instantáneo de Taller</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight">
              Calcula tu Presupuesto de Impresión & Encuadernación
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-xl">
              Configura las opciones de tu trabajo académico, tesis, folletos o regalos personalizados y envíalo directo a nuestro WhatsApp.
            </p>
          </div>

          {/* Quick Tabs */}
          <div className="flex bg-zinc-800 p-1 rounded-2xl border border-zinc-700/60 self-start sm:self-auto">
            <button
              onClick={() => setServiceType('impresion')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                serviceType === 'impresion'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Impresión & Taller
            </button>
            <button
              onClick={() => setServiceType('sublimacion')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                serviceType === 'sublimacion'
                  ? 'bg-white text-zinc-900 shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Sublimados / Tazas
            </button>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-6">
            {serviceType === 'impresion' ? (
              <>
                {/* Pages slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-zinc-800">
                    <span>Número de Páginas (por ejemplar)</span>
                    <span className="text-base text-pekepurple-700 font-extrabold">{pageCount} páginas</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="500"
                    step="5"
                    value={pageCount}
                    onChange={(e) => setPageCount(Number(e.target.value))}
                    className="w-full accent-zinc-900 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400">
                    <span>5 págs</span>
                    <span>150 págs</span>
                    <span>300 págs</span>
                    <span>500 págs</span>
                  </div>
                </div>

                {/* Color Mode */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-800 block">Tipo de Impresión</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setColorType('bn')}
                      className={`p-3 rounded-2xl border text-xs font-bold text-left transition-all ${
                        colorType === 'bn'
                          ? 'border-zinc-900 bg-zinc-50 text-zinc-900 ring-1 ring-zinc-900'
                          : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                      }`}
                    >
                      <div className="text-sm font-extrabold">Blanco & Negro</div>
                      <div className="text-[11px] text-zinc-500 font-normal">Ideal textos, guías y tesis ($50/pág)</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setColorType('color')}
                      className={`p-3 rounded-2xl border text-xs font-bold text-left transition-all ${
                        colorType === 'color'
                          ? 'border-zinc-900 bg-zinc-50 text-zinc-900 ring-1 ring-zinc-900'
                          : 'border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                      }`}
                    >
                      <div className="text-sm font-extrabold text-pekepurple-700">Color Láser HD</div>
                      <div className="text-[11px] text-zinc-500 font-normal">Fotografías y gráficos ($180/pág)</div>
                    </button>
                  </div>
                </div>

                {/* Paper Type */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-800 block">Tipo de Papel</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'bond', name: 'Bond 75g', note: 'Estándar' },
                      { id: 'opalina', name: 'Opalina 200g', note: 'Grueso mate' },
                      { id: 'foto', name: 'Fotográfico', note: 'Glossy brillo' },
                    ].map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => setPaperType(p.id)}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                          paperType === p.id
                            ? 'border-zinc-900 bg-zinc-900 text-white shadow-xs'
                            : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                        }`}
                      >
                        <div>{p.name}</div>
                        <div className={`text-[10px] font-normal ${paperType === p.id ? 'text-zinc-300' : 'text-zinc-400'}`}>
                          {p.note}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Binding options */}
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-800 block">Encuadernación / Terminación</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'none', label: 'Sin anillar', price: '$0' },
                      { id: 'espiral', label: 'Espiral clásico', price: '+$2.500' },
                      { id: 'doblecero', label: 'Doble Cero Wire', price: '+$3.800' },
                      { id: 'tapadura', label: 'Tapa Dura Tesis', price: '+$9.900' },
                    ].map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => setBindingType(b.id)}
                        className={`p-2.5 rounded-xl border text-xs font-bold transition-all text-center ${
                          bindingType === b.id
                            ? 'border-zinc-900 bg-zinc-900 text-white shadow-xs'
                            : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                        }`}
                      >
                        <div className="truncate">{b.label}</div>
                        <div className={`text-[10px] font-normal ${bindingType === b.id ? 'text-emerald-300' : 'text-zinc-400'}`}>
                          {b.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Number of copies */}
                <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
                  <span className="text-xs font-bold text-zinc-700">Cantidad de copias / tomos:</span>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 5, 10].map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setCopies(c)}
                        className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${
                          copies === c
                            ? 'bg-zinc-900 text-white'
                            : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              /* Sublimation parameters */
              <>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-800 block">Artículo a Sublimar</label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'blanca', name: 'Taza Cerámica 11oz', price: 'Desde $3.990' },
                      { id: 'magica', name: 'Taza Mágica Termosensible', price: 'Desde $5.990' },
                      { id: 'botella', name: 'Botella Térmica Metálica', price: 'Desde $6.990' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setMugType(m.id)}
                        className={`p-3 rounded-2xl border text-xs font-bold transition-all text-center ${
                          mugType === m.id
                            ? 'border-zinc-900 bg-zinc-900 text-white shadow-xs'
                            : 'border-zinc-200 text-zinc-700 hover:bg-zinc-50'
                        }`}
                      >
                        <div>{m.name}</div>
                        <div className={`text-[10px] font-normal ${mugType === m.id ? 'text-zinc-300' : 'text-zinc-400'}`}>
                          {m.price}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-zinc-800">
                    <span>Cantidad de unidades</span>
                    <span className="text-base text-pekepurple-700 font-extrabold">{mugCount} unidades</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={mugCount}
                    onChange={(e) => setMugCount(Number(e.target.value))}
                    className="w-full accent-zinc-900 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400">
                    <span>1 unidad</span>
                    <span>12 un (15% dscto)</span>
                    <span>24 un</span>
                    <span>50 un</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Real-time Summary Card */}
          <div className="lg:col-span-5 bg-zinc-50 rounded-2xl p-5 sm:p-6 border border-zinc-200/80 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Resumen de Trabajo
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                  Taller Puerto Montt
                </span>
              </div>

              <div className="space-y-2 text-xs text-zinc-600">
                {serviceType === 'impresion' ? (
                  <>
                    <div className="flex justify-between">
                      <span>Páginas:</span>
                      <strong className="text-zinc-900">{pageCount} págs</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Modo:</span>
                      <strong className="text-zinc-900">{colorType === 'bn' ? 'Blanco y Negro' : 'Color Láser HD'}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Papel:</span>
                      <strong className="text-zinc-900">{paperType.toUpperCase()}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Encuadernación:</span>
                      <strong className="text-zinc-900">{bindingType}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Ejemplares:</span>
                      <strong className="text-zinc-900">{copies}</strong>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-between">
                      <span>Artículo:</span>
                      <strong className="text-zinc-900">{mugType}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span>Cantidad:</span>
                      <strong className="text-zinc-900">{mugCount} un</strong>
                    </div>
                    {mugCount >= 12 && (
                      <div className="text-emerald-600 text-[11px] font-semibold">
                        ✨ ¡Descuento mayorista del 15% aplicado!
                      </div>
                    )}
                  </>
                )}
              </div>

              <div className="pt-4 border-t border-zinc-200">
                <div className="text-xs text-zinc-400 font-medium">Presupuesto Estimado:</div>
                <div className="text-3xl font-black text-zinc-900 tracking-tight mt-1">
                  {formatCLP(total)}{' '}
                  <span className="text-xs font-bold text-zinc-500">CLP</span>
                </div>
                <p className="text-[10px] text-zinc-400 mt-1">
                  *Precio referencial sujeto a revisión final de archivos en PDF.
                </p>
              </div>
            </div>

            {/* WhatsApp Send Quote */}
            <div className="space-y-2">
              <button
                onClick={handleSendQuote}
                className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm rounded-xl shadow-soft-sm flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Enviar cotización a WhatsApp</span>
              </button>

              <div className="text-center text-[11px] text-zinc-400">
                Atención rápida: Lunes a Sábado en Mañihual 285
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

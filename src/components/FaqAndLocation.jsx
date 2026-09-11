import React, { useState } from 'react';
import { ChevronDown, MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { STORE_INFO, FAQS } from '../data/pekebookData';

export default function FaqAndLocation() {
  const [openFaq, setOpenFaq] = useState(0);
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactMsg) return;
    
    // Format message to WhatsApp
    const text = encodeURIComponent(
      `👋 Mensaje desde la web de Pekebook:\nNombre: ${contactName}\nEmail: ${contactEmail || 'No especificado'}\nMensaje: ${contactMsg}`
    );
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${text}`, '_blank');
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setContactName('');
      setContactEmail('');
      setContactMsg('');
    }, 2000);
  };

  return (
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12 text-left">
      {/* FAQs Section */}
      <div className="space-y-6">
        <div className="text-center sm:text-left">
          <span className="text-xs font-bold uppercase tracking-wider text-pekepurple-600 block mb-1">
            Resolvemos tus dudas
          </span>
          <h2 className="text-xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1 max-w-xl">
            Todo lo que necesitas saber sobre nuestros insumos, encuadernaciones y servicios de impresión en Puerto Montt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-3 text-left font-bold text-xs sm:text-sm text-zinc-900 hover:text-pekepurple-700 transition-colors"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-pekepurple-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 text-xs text-zinc-600 leading-relaxed border-t border-zinc-50 pt-2 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Physical Store & Location Section */}
      <div className="bg-white rounded-3xl border border-zinc-200/80 shadow-soft-lg overflow-hidden grid grid-cols-1 lg:grid-cols-12">
        {/* Info Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                Visítanos en Puerto Montt
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
                Sucursal & Taller Central
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                Atención rápida, asesoría en el mesón y retiro inmediato de tus compras.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs text-zinc-700">
                <div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 text-zinc-800">
                  <MapPin className="w-4 h-4 text-pekepurple-600" />
                </div>
                <div>
                  <strong className="block text-zinc-900 font-bold">Dirección:</strong>
                  <span>{STORE_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-zinc-700">
                <div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 text-zinc-800">
                  <Clock className="w-4 h-4 text-amber-600" />
                </div>
                <div>
                  <strong className="block text-zinc-900 font-bold">Horarios de Atención:</strong>
                  <span>{STORE_INFO.hours}</span>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-zinc-700">
                <div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 text-zinc-800">
                  <Phone className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <strong className="block text-zinc-900 font-bold">Fono & WhatsApp:</strong>
                  <a href={`tel:${STORE_INFO.phone}`} className="text-zinc-900 font-bold hover:underline">
                    {STORE_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-zinc-700">
                <div className="w-8 h-8 rounded-xl bg-zinc-100 flex items-center justify-center flex-shrink-0 text-zinc-800">
                  <Mail className="w-4 h-4 text-sky-600" />
                </div>
                <div>
                  <strong className="block text-zinc-900 font-bold">Correo Electrónico:</strong>
                  <a href={`mailto:${STORE_INFO.email}`} className="text-zinc-600 hover:underline">
                    {STORE_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Navigation Links */}
          <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
            <a
              href={STORE_INFO.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all active:scale-95 shadow-xs"
            >
              <MapPin className="w-3.5 h-3.5" />
              <span>Abrir en Google Maps</span>
              <ExternalLink className="w-3 h-3 text-zinc-400" />
            </a>

            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hola%20Pekebook!%20Voy%20camino%20a%20su%20local%20en%20Ma%C3%B1ihual%20285.`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Avisar llegada / WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Real Embedded Google Map */}
        <div className="lg:col-span-7 h-72 sm:h-96 lg:h-full min-h-[320px] bg-zinc-100 relative">
          <iframe
            src="https://maps.google.com/maps?q=Ma%C3%B1ihual%20285%2C%20Local%203%2C%20Puerto%20Montt%2C%20Chile.&t=m&z=17&output=embed&iwloc=near"
            title="Ubicación Pekebook Mañihual 285 Local 3 Puerto Montt"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>

      {/* Fast Contact Form */}
      <div className="bg-zinc-900 text-white rounded-3xl p-6 sm:p-8">
        <div className="max-w-2xl mx-auto text-center space-y-2 mb-6">
          <h3 className="text-xl sm:text-2xl font-black">
            ¿Necesitas un trabajo especial o tienes una consulta?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400">
            Escríbenos directamente y te responderemos por WhatsApp o email a la brevedad.
          </p>
        </div>

        <form onSubmit={handleContactSubmit} className="max-w-xl mx-auto space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="Tu Nombre"
              value={contactName}
              onChange={(e) => setContactName(e.target.value)}
              className="w-full px-4 py-3 text-xs bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-pekepurple-400"
            />
            <input
              type="email"
              placeholder="Correo electrónico (opcional)"
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              className="w-full px-4 py-3 text-xs bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-pekepurple-400"
            />
          </div>

          <textarea
            required
            rows={3}
            placeholder="¿En qué podemos ayudarte? (Cotizaciones especiales, convenios para colegios, insumos)..."
            value={contactMsg}
            onChange={(e) => setContactMsg(e.target.value)}
            className="w-full p-4 text-xs bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder:text-zinc-500 focus:outline-none focus:border-pekepurple-400 resize-none"
          ></textarea>

          <button
            type="submit"
            className="w-full py-3.5 bg-white text-zinc-900 hover:bg-zinc-100 active:scale-95 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-soft-md flex items-center justify-center gap-2"
          >
            {submitted ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>¡Mensaje preparado! Abriendo WhatsApp...</span>
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Enviar consulta a Pekebook</span>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

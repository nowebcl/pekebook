import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import HeroStories from './components/HeroStories';
import CategoryPills from './components/CategoryPills';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import ServiceCalculator from './components/ServiceCalculator';
import FaqAndLocation from './components/FaqAndLocation';
import BottomNav from './components/BottomNav';
import Footer from './components/Footer';
import HeroExact from './components/HeroExact';
import BannerSlider from './components/BannerSlider';
import PromoGrid from './components/PromoGrid';
import { PRODUCTS, SERVICES, STORE_INFO } from './data/pekebookData';
import { Sparkles, MessageCircle, ArrowRight, ShieldCheck, Check, Filter } from 'lucide-react';

export default function App() {
  // Cart state persisted in localStorage
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('pekebook_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [activeTab, setActiveTab] = useState('inicio'); // 'inicio' | 'catalogo' | 'servicios' | 'local'
  const [activeCategory, setActiveCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem('pekebook_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2400);
  };

  const handleAddToCart = (product, qty = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    showToast(`"${product.name.slice(0, 24)}..." añadido a la bolsa`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const cartCount = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  }, [cart]);

  // Filtered products based on search and category
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory =
        activeCategory === 'todos' || item.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        (item.description && item.description.toLowerCase().includes(q)) ||
        (item.brand && item.brand.toLowerCase().includes(q)) ||
        (item.sku && String(item.sku).toLowerCase().includes(q)) ||
        (item.barcode && String(item.barcode).toLowerCase().includes(q)) ||
        item.category.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    if (activeTab !== 'catalogo' && activeTab !== 'inicio') {
      setActiveTab('catalogo');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf9f6] text-zinc-900 selection:bg-pekepurple-200 selection:text-pekepurple-900">
      {/* App Header */}
      <Header
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* VIEW: INICIO */}
        {activeTab === 'inicio' && (
          <div className="w-full">
            {/* EXACT Full-Bleed Immersive Hero */}
            <HeroExact
              onExploreCatalog={(cat) => {
                if (cat) handleCategorySelect(cat);
                setActiveTab('catalogo');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            <div className="space-y-6 pt-4">
              <CategoryPills
                activeCategory={activeCategory}
                onSelectCategory={handleCategorySelect}
              />

            {/* Featured Product Grid */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-2">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-lg sm:text-2xl font-black text-zinc-900 tracking-tight">
                    {activeCategory === 'todos'
                      ? 'Insumos & Destacados de la Semana'
                      : `Categoría: ${activeCategory.toUpperCase()}`}
                  </h2>
                  <p className="text-xs text-zinc-500">
                    Stock permanente en nuestro local de Puerto Montt
                  </p>
                </div>
                <button
                  onClick={() => {
                    setActiveTab('catalogo');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-xs font-bold text-pekepurple-700 hover:text-pekepurple-900 flex items-center gap-1 transition-colors"
                >
                  <span>Ver todos ({PRODUCTS.length})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="bg-white rounded-2xl p-10 text-center border border-zinc-200">
                  <p className="text-sm font-bold text-zinc-600">
                    No se encontraron insumos con ese término de búsqueda.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('todos');
                    }}
                    className="mt-3 px-4 py-2 bg-zinc-900 text-white rounded-full text-xs font-bold"
                  >
                    Restablecer filtros
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                  {filteredProducts.slice(0, 8).map((prod) => (
                    <ProductCard
                      key={prod.id}
                      product={prod}
                      onAddToCart={handleAddToCart}
                      onQuickView={setQuickViewProduct}
                    />
                  ))}
                </div>
              )}
            </section>

            {/* Promotional Cards Grid (Kits Emprende, DTF UV, Taller de Tesis) */}
            <PromoGrid
              onSelectCategory={(cat) => {
                handleCategorySelect(cat);
                setActiveTab('catalogo');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onNavigateTab={(tab) => {
                setActiveTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* Workshop Services Highlights Section */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
              <div className="bg-gradient-to-b from-zinc-100/80 to-zinc-50 rounded-3xl p-6 sm:p-8 border border-zinc-200/80">
                <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-pekepurple-700">
                    Servicios Integrales
                  </span>
                  <h3 className="text-xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                    Todo lo que necesitas, en un solo lugar
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600">
                    En PEKEBOOK transformamos tu experiencia con servicios profesionales de impresión, encuadernación y personalización.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {SERVICES.slice(0, 3).map((serv) => (
                    <div
                      key={serv.id}
                      className="bg-white rounded-2xl p-4 sm:p-5 border border-zinc-200/80 shadow-soft-sm flex flex-col justify-between text-left group hover:border-zinc-300 transition-all"
                    >
                      <div>
                        <div className="aspect-video w-full rounded-xl overflow-hidden mb-3 bg-zinc-100">
                          <img
                            src={serv.image}
                            alt={serv.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <span className="text-[10px] font-bold uppercase text-emerald-600">
                          {serv.priceRange}
                        </span>
                        <h4 className="text-sm font-extrabold text-zinc-900 mt-1">
                          {serv.title}
                        </h4>
                        <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
                          {serv.description}
                        </p>
                      </div>

                      <div className="pt-4 mt-3 border-t border-zinc-100">
                        <button
                          onClick={() => {
                            setActiveTab('servicios');
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 active:scale-95 text-white rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                        >
                          <span>Cotizar este servicio</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Quick Interactive Calculator Embed */}
            <ServiceCalculator />

            {/* FAQs and Location */}
            <FaqAndLocation />
            </div>
          </div>
        )}

        {/* VIEW: CATALOGO */}
        {activeTab === 'catalogo' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-zinc-900 tracking-tight">
                  Catálogo de Insumos & Bazar
                </h1>
                <p className="text-xs sm:text-sm text-zinc-500">
                  Explora y añade productos a tu pedido para coordinar por WhatsApp.
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-500">
                <span>Mostrando:</span>
                <span className="px-2.5 py-1 bg-white border border-zinc-200 rounded-lg text-zinc-900 font-bold">
                  {filteredProducts.length} productos
                </span>
              </div>
            </div>

            <CategoryPills
              activeCategory={activeCategory}
              onSelectCategory={handleCategorySelect}
            />

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-zinc-200/90 shadow-soft-sm space-y-3">
                <p className="text-sm font-bold text-zinc-700">
                  No se encontraron productos para "{searchQuery}".
                </p>
                <p className="text-xs text-zinc-400">
                  Prueba cambiando la búsqueda o seleccionando otra categoría.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('todos');
                  }}
                  className="px-5 py-2.5 bg-zinc-900 text-white rounded-full text-xs font-bold shadow-soft-sm active:scale-95"
                >
                  Ver todos los insumos
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                {filteredProducts.map((prod) => (
                  <ProductCard
                    key={prod.id}
                    product={prod}
                    onAddToCart={handleAddToCart}
                    onQuickView={setQuickViewProduct}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* VIEW: SERVICIOS / COTIZADOR */}
        {activeTab === 'servicios' && (
          <div className="space-y-6 py-4">
            <ServiceCalculator />

            {/* Detailed Services list */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 text-left">
              <div className="mb-6">
                <h3 className="text-lg sm:text-2xl font-black text-zinc-900">
                  Nuestros Servicios Especializados
                </h3>
                <p className="text-xs text-zinc-500">
                  Tecnología de impresión y acabados de primera para estudiantes, profesionales y pymes.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {SERVICES.map((serv) => (
                  <div
                    key={serv.id}
                    className="bg-white rounded-2xl p-5 border border-zinc-200/80 shadow-soft-sm flex gap-4 items-start"
                  >
                    <img
                      src={serv.image}
                      alt={serv.title}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0 bg-zinc-100"
                    />
                    <div className="space-y-1 flex-1">
                      <span className="text-[10px] font-bold text-emerald-600 uppercase">
                        {serv.priceRange}
                      </span>
                      <h4 className="text-sm font-extrabold text-zinc-900">
                        {serv.title}
                      </h4>
                      <p className="text-xs text-zinc-500 leading-relaxed">
                        {serv.description}
                      </p>
                      <div className="pt-2 flex flex-wrap gap-1">
                        {serv.features.map((f, i) => (
                          <span
                            key={i}
                            className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600"
                          >
                            ✓ {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* VIEW: LOCAL & CONTACTO */}
        {activeTab === 'local' && (
          <div className="py-4">
            <FaqAndLocation />
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Floating Desktop WhatsApp Button */}
      <a
        href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=Hola%20Pekebook!%20Les%20escribo%20desde%20la%20p%C3%A1gina%20web.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-float font-bold text-xs transition-all active:scale-95 group"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-ping"></span>
        <MessageCircle className="w-4 h-4" />
        <span>Hablemos por WhatsApp</span>
      </a>

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Quick View Product Modal */}
      <ProductModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-zinc-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full shadow-float flex items-center gap-2 animate-fadeIn border border-zinc-700">
          <Check className="w-3.5 h-3.5 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

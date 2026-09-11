import React from 'react';
import { Sparkles, FileText, BookOpen, Printer, Gift, Wrench } from 'lucide-react';
import { CATEGORIES } from '../data/pekebookData';

const ICONS_MAP = {
  Sparkles: Sparkles,
  FileText: FileText,
  BookOpen: BookOpen,
  Printer: Printer,
  Gift: Gift,
  Wrench: Wrench,
};

export default function CategoryPills({ activeCategory, onSelectCategory }) {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
          Explorar por Categoría
        </h2>
        <span className="text-[11px] text-zinc-400">
          Desliza para ver más
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-4 px-4 sm:mx-0 sm:px-0">
        {CATEGORIES.map((cat) => {
          const Icon = ICONS_MAP[cat.icon] || Sparkles;
          const isActive = activeCategory === cat.id;

          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 active:scale-95 ${
                isActive
                  ? 'bg-zinc-900 text-white shadow-soft-md'
                  : 'bg-white text-zinc-600 border border-zinc-200/80 hover:bg-zinc-50 hover:text-zinc-900'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-zinc-400'}`} />
              <span>{cat.name}</span>
              <span 
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-500'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

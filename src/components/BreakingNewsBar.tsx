import React, { useState } from 'react';
import { Flame, Bell, ChevronRight, Pause, Play } from 'lucide-react';
import { useNews } from '../context/NewsContext';

export const BreakingNewsBar: React.FC = () => {
  const { breakingNews, setSelectedArticle, articles, setCurrentView } = useNews();
  const [isPaused, setIsPaused] = useState(false);

  const activeItems = (Array.isArray(breakingNews) ? breakingNews : [])
    .filter(item => item.isActive)
    .sort((a, b) => a.priority - b.priority);

  if (activeItems.length === 0) return null;

  return (
    <div className="w-full bg-[#991B1B] text-white border-y border-red-950 overflow-hidden shadow-xs relative">
      <div className="max-w-7xl mx-auto flex items-stretch">
        
        {/* Left Badge: 🔴 BREAKING NEWS */}
        <div className="bg-[#7F1D1D] px-3 sm:px-4 py-2 flex items-center gap-1.5 shrink-0 z-10 font-bold text-xs uppercase tracking-wider border-r border-red-900 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-red-400 animate-ping inline-block" />
          <Flame className="w-3.5 h-3.5 text-amber-300" />
          <span className="hidden sm:inline">BREAKING NEWS</span>
          <span className="text-amber-300 font-serif-odia">| ତାଜା ଖବର</span>
        </div>

        {/* Marquee ticker container */}
        <div 
          className="flex-1 overflow-hidden relative flex items-center py-2 px-3 text-xs sm:text-sm font-medium"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`whitespace-nowrap flex items-center gap-8 ${
              isPaused ? '' : 'animate-ticker'
            }`}
          >
            {activeItems.map((item, idx) => (
              <span key={item.id} className="inline-flex items-center gap-2 cursor-pointer hover:underline text-stone-100">
                <span className="text-amber-300 font-bold">[{idx + 1}]</span>
                <span>{item.text}</span>
                <span className="text-red-300 text-xs px-2 py-0.5 rounded bg-red-900/60 font-mono">
                  {item.createdAt}
                </span>
                <span className="text-red-400 mx-2">◆</span>
              </span>
            ))}

            {/* Repeat items for continuous loop */}
            {activeItems.map((item, idx) => (
              <span key={`repeat-${item.id}`} className="inline-flex items-center gap-2 cursor-pointer hover:underline text-stone-100" aria-hidden="true">
                <span className="text-amber-300 font-bold">[{idx + 1}]</span>
                <span>{item.text}</span>
                <span className="text-red-300 text-xs px-2 py-0.5 rounded bg-red-900/60 font-mono">
                  {item.createdAt}
                </span>
                <span className="text-red-400 mx-2">◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right ticker control (Pause/Play toggle) */}
        <div className="hidden sm:flex items-center px-3 bg-[#7F1D1D]/70 border-l border-red-900">
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 text-red-200 hover:text-white transition-colors"
            title={isPaused ? 'Play Ticker' : 'Pause Ticker'}
            aria-label="Toggle Ticker Pause"
          >
            {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
          </button>
        </div>

      </div>
    </div>
  );
};

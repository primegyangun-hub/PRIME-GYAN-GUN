import React, { useState } from 'react';
import { Search, X, Calendar, MapPin, Tag, ArrowRight } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { NewsArticle } from '../types';
import { CATEGORIES } from '../data/initialData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const { articles, setSelectedArticle, setCurrentView, incrementViews } = useNews();

  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDistrict, setSelectedDistrict] = useState('all');

  if (!isOpen) return null;

  const safeArticles = Array.isArray(articles) ? articles : [];

  const results = safeArticles.filter(article => {
    const q = query.trim().toLowerCase();
    const matchQuery = !q || 
      article.title.toLowerCase().includes(q) ||
      article.summary.toLowerCase().includes(q) ||
      article.content.toLowerCase().includes(q) ||
      article.author.toLowerCase().includes(q) ||
      article.tags.some(t => t.toLowerCase().includes(q));

    const matchCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchDistrict = selectedDistrict === 'all' || article.district === selectedDistrict;

    return matchQuery && matchCategory && matchDistrict;
  });

  const handleArticleClick = (article: NewsArticle) => {
    incrementViews(article.id);
    setSelectedArticle(article);
    setCurrentView('article');
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-start justify-center pt-16 px-4">
      <div className="bg-white rounded-lg max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        
        {/* Top search input */}
        <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-red-700 shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="ଖବର, ଶୀର୍ଷକ, ଘଟଣା କିମ୍ବା ଲେଖକଙ୍କ ନାମ ଖୋଜନ୍ତୁ..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="flex-1 text-sm bg-transparent border-none outline-hidden font-serif-odia"
          />
          <button
            onClick={onClose}
            className="p-1 rounded hover:bg-stone-200 text-stone-500"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter ribbon */}
        <div className="px-4 py-2 bg-stone-100/70 border-b border-stone-200 flex flex-wrap items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-stone-500 font-semibold">ବିଭାଗ:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-white border border-stone-300 rounded px-2 py-0.5 text-xs text-stone-700"
            >
              <option value="all">ସମସ୍ତ ବିଭାଗ</option>
              {CATEGORIES.map(c => (
                <option key={c.id} value={c.slug || 'all'}>{c.nameOdia}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-stone-500 font-semibold">ଜିଲ୍ଲା:</span>
            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              className="bg-white border border-stone-300 rounded px-2 py-0.5 text-xs text-stone-700"
            >
              <option value="all">ସମସ୍ତ ଜିଲ୍ଲା</option>
              <option value="ମୟୂରଭଞ୍ଜ">ମୟୂରଭଞ୍ଜ</option>
              <option value="ବାଲେଶ୍ୱର">ବାଲେଶ୍ୱର</option>
              <option value="କେନ୍ଦୁଝର">କେନ୍ଦୁଝର</option>
              <option value="ଖୋର୍ଦ୍ଧା">ଖୋର୍ଦ୍ଧା / ଭୁବନେଶ୍ୱର</option>
            </select>
          </div>

          <div className="ml-auto text-[11px] text-stone-400 font-mono">
            {results.length} ଫଳାଫଳ
          </div>
        </div>

        {/* Search Results list */}
        <div className="flex-1 overflow-y-auto p-4 divide-y divide-stone-100">
          {results.length === 0 ? (
            <div className="py-12 text-center text-xs text-stone-500 font-serif-odia">
              କୌଣସି ଖବର ମିଳିଲା ନାହିଁ। ଅନ୍ୟ ଶବ୍ଦ ବ୍ୟବହାର କରି ଖୋଜନ୍ତୁ।
            </div>
          ) : (
            results.map(article => (
              <div
                key={article.id}
                onClick={() => handleArticleClick(article)}
                className="py-3 flex gap-3 cursor-pointer group hover:bg-stone-50 transition-colors p-2 rounded"
              >
                <div className="w-20 h-16 shrink-0 rounded overflow-hidden bg-stone-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 text-[11px] text-stone-400 mb-1">
                    <span className="text-red-700 font-bold uppercase">{article.category}</span>
                    <span>·</span>
                    <span>{article.publishedAt.split(',')[0]}</span>
                    <span>·</span>
                    <span>{article.author.split(' ')[0]}</span>
                  </div>
                  <h4 className="font-serif-odia text-xs sm:text-sm font-bold text-stone-900 group-hover:text-red-700 leading-snug line-clamp-2">
                    {article.title}
                  </h4>
                </div>
                <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-red-700 shrink-0 self-center" />
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { Clock, ChevronRight, RefreshCw, Flame, User } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { NewsArticle } from '../types';

export const LatestNewsFeed: React.FC = () => {
  const { articles, setSelectedArticle, setCurrentView, incrementViews, activeLanguage } = useNews();
  const [displayCount, setDisplayCount] = useState(6);

  const safeArticles = Array.isArray(articles) ? articles : [];
  const latestArticles = [...safeArticles].sort((a, b) => b.views - a.views);
  const visibleArticles = latestArticles.slice(0, displayCount);
  const hasMore = displayCount < latestArticles.length;

  const handleArticleClick = (article: NewsArticle) => {
    incrementViews(article.id);
    setSelectedArticle(article);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getArticleTitle = (a: NewsArticle) => {
    if (activeLanguage !== 'or' && a.translations?.[activeLanguage]?.title) {
      return a.translations[activeLanguage]!.title;
    }
    return a.title;
  };

  const getArticleSummary = (a: NewsArticle) => {
    if (activeLanguage !== 'or' && a.translations?.[activeLanguage]?.summary) {
      return a.translations[activeLanguage]!.summary;
    }
    return a.summary;
  };

  return (
    <section className="w-full bg-[#FBFBFA] py-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-stone-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-6 bg-red-700 inline-block"></span>
            <h2 className="font-serif-odia text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              ତାଜା ଖବର (Latest News)
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            ନିରନ୍ତର ସଦ୍ୟତମ ଅପଡେଟ୍
          </span>
        </div>

        {/* 3-Column News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => handleArticleClick(article)}
              className="bg-white border border-stone-200 rounded overflow-hidden flex flex-col group cursor-pointer hover:border-stone-400 hover:shadow-xs transition-all"
            >
              {/* Image Frame */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-100">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                />
                <div className="absolute top-2 left-2 bg-stone-900/80 text-white text-[11px] font-medium px-2 py-0.5 rounded-xs">
                  {article.category}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {article.publishedAt.split(',')[0]}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTimeMinutes} ମିନିଟ୍</span>
                  </div>

                  <h3 className="font-serif-odia text-base sm:text-lg font-bold text-stone-900 group-hover:text-red-700 transition-colors leading-snug line-clamp-2">
                    {getArticleTitle(article)}
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm line-clamp-3 mt-2 leading-relaxed">
                    {getArticleSummary(article)}
                  </p>
                </div>

                {/* Card footer */}
                <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1 truncate max-w-[180px]">
                    <User className="w-3 h-3 text-stone-400 shrink-0" />
                    <span className="truncate">{article.author}</span>
                  </span>
                  <span className="font-bold text-red-700 group-hover:translate-x-0.5 transition-transform flex items-center">
                    ପଢ଼ନ୍ତୁ →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setDisplayCount(prev => prev + 3)}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white border border-stone-300 hover:border-red-700 hover:text-red-700 text-stone-800 text-xs font-bold rounded shadow-xs transition-all"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>ଅଧିକ ଖବର ଲୋଡ୍ କରନ୍ତୁ (Load More)</span>
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

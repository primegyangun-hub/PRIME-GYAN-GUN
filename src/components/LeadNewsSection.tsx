import React from 'react';
import { Clock, Eye, Share2, BookOpen, ChevronRight, User } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { NewsArticle } from '../types';

export const LeadNewsSection: React.FC = () => {
  const { articles, setSelectedArticle, setCurrentView, incrementViews, activeLanguage } = useNews();

  const safeArticles = Array.isArray(articles) ? articles : [];
  const leadArticle = safeArticles.find(a => a.isLead) || safeArticles[0];
  const secondaryArticles = safeArticles
    .filter(a => a.id !== leadArticle?.id)
    .slice(0, 4);

  if (!leadArticle) return null;

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
    <section className="w-full bg-white py-6 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 mb-5 border-b-2 border-red-700">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-6 bg-red-700 inline-block"></span>
            <h2 className="font-serif-odia text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
              ପ୍ରମୁଖ ଖବର (Lead Stories)
            </h2>
          </div>
          <span className="text-xs text-stone-500 font-medium">
            ଆଜିର ବଡ଼ ଘଟଣାବଳୀ
          </span>
        </div>

        {/* 1 Lead + 4 Sub-stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Main Major Featured Story (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200 lg:pr-6 pb-6 lg:pb-0">
            <div 
              className="group cursor-pointer"
              onClick={() => handleArticleClick(leadArticle)}
            >
              {/* Image Frame */}
              <div className="relative aspect-16/9 w-full overflow-hidden rounded bg-stone-100 mb-3.5">
                <img
                  src={leadArticle.image}
                  alt={leadArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                />
                <div className="absolute top-2 left-2 bg-red-700 text-white text-[11px] font-bold px-2.5 py-0.5 uppercase tracking-wider">
                  ମୁଖ୍ୟ ଖବର
                </div>
              </div>

              {/* Quiet unboxed metadata */}
              <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                <span className="font-semibold text-red-700 uppercase tracking-wide">
                  {leadArticle.category}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {leadArticle.publishedAt}
                </span>
                <span aria-hidden="true">·</span>
                <span className="flex items-center gap-1">
                  <User className="w-3.5 h-3.5" />
                  {leadArticle.author}
                </span>
              </div>

              {/* Big Headline */}
              <h3 className="font-newspaper-headline text-2xl sm:text-3xl lg:text-3xl font-bold text-stone-950 group-hover:text-red-700 transition-colors leading-snug text-balance">
                {getArticleTitle(leadArticle)}
              </h3>

              {leadArticle.subtitle && (
                <p className="font-serif-odia text-sm font-semibold text-stone-700 mt-2">
                  {leadArticle.subtitle}
                </p>
              )}

              {/* Summary */}
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed mt-2.5 line-clamp-3">
                {getArticleSummary(leadArticle)}
              </p>
            </div>

            {/* Read more button */}
            <div className="pt-4 flex items-center justify-between border-t border-stone-100 mt-4">
              <button
                onClick={() => handleArticleClick(leadArticle)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-red-700 hover:text-red-800 transition-colors"
              >
                <span>ସମ୍ପୂର୍ଣ୍ଣ ଖବର ପଢ଼ନ୍ତୁ</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <Eye className="w-3.5 h-3.5" />
                <span>{leadArticle.views} ପଠନ</span>
              </span>
            </div>
          </div>

          {/* 4 Secondary Stories (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col divide-y divide-stone-200">
            {secondaryArticles.map((article, idx) => (
              <article 
                key={article.id}
                className={`group cursor-pointer py-3.5 first:pt-0 last:pb-0 flex gap-3.5 items-start`}
                onClick={() => handleArticleClick(article)}
              >
                {/* Thumbnail */}
                <div className="w-24 sm:w-28 shrink-0 aspect-4/3 rounded overflow-hidden bg-stone-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 text-[11px] text-stone-500 mb-1">
                    <span className="font-semibold text-red-700 uppercase">
                      {article.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTimeMinutes} ମିନିଟ୍</span>
                  </div>
                  
                  <h4 className="font-serif-odia text-sm sm:text-base font-bold text-stone-900 group-hover:text-red-700 transition-colors leading-snug line-clamp-2">
                    {getArticleTitle(article)}
                  </h4>

                  <p className="text-xs text-stone-600 line-clamp-2 mt-1">
                    {getArticleSummary(article)}
                  </p>
                  
                  <div className="text-[11px] text-stone-400 mt-1 flex items-center gap-2">
                    <span>{article.publishedAt.split(',')[0]}</span>
                    <span>·</span>
                    <span>{article.author.split(' ')[0]}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

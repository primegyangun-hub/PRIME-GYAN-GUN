import React from 'react';
import { ChevronRight, Clock, User, ShieldAlert } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { NewsArticle } from '../types';

interface CategoryNewsSectionProps {
  categoryKey: string;
  titleOdia: string;
  titleEn: string;
  tagline?: string;
  borderColor?: string;
  bannerAd?: boolean;
}

export const CategoryNewsSection: React.FC<CategoryNewsSectionProps> = ({
  categoryKey,
  titleOdia,
  titleEn,
  tagline,
  borderColor = 'border-red-700',
  bannerAd = false
}) => {
  const { articles, setSelectedArticle, setCurrentView, incrementViews, activeLanguage } = useNews();

  const safeArticles = Array.isArray(articles) ? articles : [];
  const categoryArticles = safeArticles.filter(a => a.category === categoryKey);

  if (categoryArticles.length === 0) return null;

  const mainArticle = categoryArticles[0];
  const sideArticles = categoryArticles.slice(1, 4);

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
    <section className="w-full bg-white py-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className={`flex items-center justify-between pb-3 mb-6 border-b-2 ${borderColor}`}>
          <div className="flex items-center gap-2">
            <span className={`w-2.5 h-6 bg-current inline-block ${borderColor.replace('border-', 'text-')}`}></span>
            <div>
              <h2 className="font-serif-odia text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                {titleOdia} <span className="text-sm font-sans font-normal text-stone-500">({titleEn})</span>
              </h2>
              {tagline && (
                <p className="text-xs text-stone-500">{tagline}</p>
              )}
            </div>
          </div>
          <button
            onClick={() => {
              // Set filter and go to category
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-stone-600 hover:text-red-700 flex items-center gap-1 transition-colors"
          >
            <span>ଅଧିକ ଦେଖନ୍ତୁ</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Section Content: 1 Lead card + 2-3 side cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Card (7 Cols) */}
          <div 
            onClick={() => handleArticleClick(mainArticle)}
            className="lg:col-span-7 bg-[#FCFCF9] border border-stone-200 rounded p-4 flex flex-col justify-between group cursor-pointer hover:border-stone-400 hover:shadow-xs transition-all"
          >
            <div>
              <div className="aspect-16/9 w-full rounded overflow-hidden mb-3 bg-stone-100">
                <img
                  src={mainArticle.image}
                  alt={mainArticle.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                <span className="font-bold text-red-700">{mainArticle.category}</span>
                <span>·</span>
                <span>{mainArticle.publishedAt}</span>
                <span>·</span>
                <span>{mainArticle.readTimeMinutes} ମିନିଟ୍ ପଠନ</span>
              </div>

              <h3 className="font-serif-odia text-xl sm:text-2xl font-bold text-stone-900 group-hover:text-red-700 transition-colors leading-snug">
                {getArticleTitle(mainArticle)}
              </h3>

              {mainArticle.subtitle && (
                <p className="font-serif-odia text-xs font-semibold text-stone-700 mt-1.5">
                  {mainArticle.subtitle}
                </p>
              )}

              <p className="text-stone-600 text-sm mt-2.5 line-clamp-3 leading-relaxed">
                {getArticleSummary(mainArticle)}
              </p>
            </div>

            <div className="pt-3 mt-4 border-t border-stone-200 flex items-center justify-between text-xs text-stone-500">
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                <span>{mainArticle.author}</span>
              </span>
              <span className="font-bold text-red-700 group-hover:translate-x-1 transition-transform flex items-center">
                ସମ୍ପୂର୍ଣ୍ଣ ପଢ଼ନ୍ତୁ →
              </span>
            </div>
          </div>

          {/* Secondary Cards (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {sideArticles.map(article => (
              <div
                key={article.id}
                onClick={() => handleArticleClick(article)}
                className="bg-white border border-stone-200 rounded p-3 flex gap-3 group cursor-pointer hover:border-stone-400 transition-all"
              >
                <div className="w-24 sm:w-28 shrink-0 aspect-4/3 rounded overflow-hidden bg-stone-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] text-stone-400 mb-1">
                      {article.publishedAt.split(',')[0]}
                    </div>
                    <h4 className="font-serif-odia text-sm font-bold text-stone-900 group-hover:text-red-700 leading-snug line-clamp-2">
                      {getArticleTitle(article)}
                    </h4>
                  </div>
                  <div className="text-[11px] text-stone-500 mt-2 truncate">
                    {article.author.split(' ')[0]}
                  </div>
                </div>
              </div>
            ))}

            {/* In-category Editorial Advisory Note if Crime / Politics */}
            {categoryKey === 'crime' && (
              <div className="p-3 bg-stone-50 border border-stone-200 rounded text-[11px] text-stone-600 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span>
                  ନୈତିକ ସୂଚନା: ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଆଇନ ଅନୁଯାୟୀ ତଦନ୍ତ ସୂତ୍ରରୁ ମିଳିଥିବା ସୂଚନା ଆଧାରରେ ଖବର ପରିବେଷଣ କରେ। କୋର୍ଟରେ ପ୍ରମାଣିତ ନହେବା ଯାଏଁ ସମସ୍ତ ଅଭିଯୁକ୍ତଙ୍କୁ ନିର୍ଦ୍ଦୋଷ ବୋଲି ଧରାଯିବା ଉଚିତ।
                </span>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

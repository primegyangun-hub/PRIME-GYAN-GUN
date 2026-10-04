import React, { useState } from 'react';
import { MapPin, ChevronRight, Clock, User } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { MAYURBHANJ_BLOCKS } from '../data/initialData';
import { NewsArticle } from '../types';

export const MayurbhanjSpecial: React.FC = () => {
  const { 
    articles, 
    setSelectedArticle, 
    setCurrentView, 
    incrementViews, 
    selectedDistrictFilter, 
    setSelectedDistrictFilter,
    activeLanguage 
  } = useNews();

  const [activeBlock, setActiveBlock] = useState<string>('all');

  const safeArticles = Array.isArray(articles) ? articles : [];
  const mayurbhanjArticles = safeArticles.filter(a => 
    a.district === 'ମୟୂରଭଞ୍ଜ' || a.category === 'mayurbhanj' || a.block
  );

  const filteredArticles = activeBlock === 'all' 
    ? mayurbhanjArticles 
    : mayurbhanjArticles.filter(a => a.block?.includes(activeBlock.split(' ')[0]));

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

  return (
    <section className="w-full bg-[#FFFDF9] py-8 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-4 border-b-2 border-amber-600 gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-6 bg-amber-600 inline-block"></span>
            <div>
              <h2 className="font-serif-odia text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
                ମୟୂରଭଞ୍ଜ ସ୍ୱତନ୍ତ୍ର (Mayurbhanj Special)
              </h2>
              <p className="text-xs text-stone-500">
                ଜିଲ୍ଲାର ପ୍ରତିଟି ବ୍ଲକ୍ ଓ ଗାଁରୁ ସତ୍ୟସନ୍ଧାନୀ ଖବର
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 self-start sm:self-auto">
            ମୁଖ୍ୟ ବ୍ୟୁରୋ: ବାରିପଦା ଦେବେନ୍ଦ୍ରପୁର
          </span>
        </div>

        {/* Block / Municipality Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-6 scrollbar-none">
          <button
            onClick={() => setActiveBlock('all')}
            className={`px-3 py-1 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
              activeBlock === 'all'
                ? 'bg-amber-700 text-white font-bold shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
            }`}
          >
            ସମସ୍ତ ବ୍ଲକ୍
          </button>
          {MAYURBHANJ_BLOCKS.map(block => (
            <button
              key={block}
              onClick={() => setActiveBlock(block)}
              className={`px-3 py-1 text-xs font-medium rounded-sm whitespace-nowrap transition-colors ${
                activeBlock === block
                  ? 'bg-amber-700 text-white font-bold shadow-xs'
                : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              {block}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.slice(0, 6).map(article => (
            <article
              key={article.id}
              onClick={() => handleArticleClick(article)}
              className="bg-white border border-stone-200 rounded p-4 flex flex-col justify-between group cursor-pointer hover:border-amber-500 hover:shadow-xs transition-all"
            >
              <div>
                <div className="aspect-16/9 w-full rounded overflow-hidden mb-3 bg-stone-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center gap-1.5 text-xs text-stone-500 mb-1.5">
                  <span className="flex items-center gap-1 font-semibold text-amber-800">
                    <MapPin className="w-3 h-3 text-amber-600" />
                    {article.block || article.district || 'ମୟୂରଭଞ୍ଜ'}
                  </span>
                  <span>·</span>
                  <span>{article.publishedAt.split(',')[0]}</span>
                </div>

                <h3 className="font-serif-odia text-base font-bold text-stone-900 group-hover:text-amber-800 transition-colors leading-snug line-clamp-2">
                  {getArticleTitle(article)}
                </h3>

                <p className="text-xs text-stone-600 line-clamp-2 mt-2 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <span className="truncate">{article.author.split(' ')[0]}</span>
                <span className="font-bold text-amber-700 flex items-center gap-0.5">
                  <span>ପଢ଼ନ୍ତୁ</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

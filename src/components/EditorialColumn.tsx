import React from 'react';
import { Feather, ChevronRight, Quote, BookOpen } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { SITE_INFO } from '../data/initialData';

export const EditorialColumn: React.FC = () => {
  const { articles, setSelectedArticle, setCurrentView, incrementViews } = useNews();

  const safeArticles = Array.isArray(articles) ? articles : [];
  const editorialArticle = safeArticles.find(a => a.isEditorial || a.category === 'editorial') || safeArticles[0];

  const handleReadEditorial = () => {
    if (editorialArticle) {
      incrementViews(editorialArticle.id);
      setSelectedArticle(editorialArticle);
      setCurrentView('article');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-[#F4F1EA] py-10 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Frame with broadsheet styling */}
        <div className="bg-[#FAF8F5] border-2 border-stone-400 p-6 sm:p-8 rounded shadow-xs relative">
          
          {/* Top Label */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-stone-300 gap-2">
            <div className="flex items-center gap-2">
              <Feather className="w-5 h-5 text-red-800" />
              <span className="font-serif-odia text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                ସମ୍ପାଦକଙ୍କ କଲମରୁ (Editor's Column)
              </span>
            </div>
            <div className="text-xs text-stone-600 font-serif-odia italic">
              ନିୟମିତ ସମ୍ପାଦକୀୟ ସ୍ତମ୍ଭ • ନିର୍ଭୀକ ମତ
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 4 Cols: Editor profile and authority */}
            <div className="lg:col-span-4 flex flex-col items-center text-center p-4 bg-white/70 border border-stone-300 rounded">
              <div className="w-24 h-24 rounded-full border-2 border-red-700 overflow-hidden mb-3 shadow-inner bg-stone-100 flex items-center justify-center">
                <span className="font-serif-odia font-bold text-2xl text-red-800">ସ.ନ.</span>
              </div>
              <h3 className="font-serif-odia text-lg font-bold text-stone-900">
                ସୁଶାନ୍ତ କୁମାର ନାୟକ
              </h3>
              <p className="text-xs text-red-700 font-bold uppercase tracking-wider">
                ମୁଖ୍ୟ ସମ୍ପାଦକ, ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍
              </p>
              <div className="mt-3 text-xs text-stone-600 font-serif-odia italic border-t border-stone-200 pt-3 w-full">
                “ଜନତାର ଦରବାର, ଆପଣଙ୍କ ସ୍ୱର।”
              </div>
              <div className="text-[11px] text-stone-500 mt-1">
                ବାରିପଦା, ମୟୂରଭଞ୍ଜ
              </div>
            </div>

            {/* Right 8 Cols: Editorial lead and excerpt */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-stone-500 mb-2">
                  <span className="text-red-700">ସମ୍ପାଦକୀୟ</span>
                  <span>·</span>
                  <span>{editorialArticle?.publishedAt || '୨୯ ମେ ୨୦୨୬'}</span>
                </div>

                <h4 
                  onClick={handleReadEditorial}
                  className="font-newspaper-headline text-2xl sm:text-3xl font-bold text-stone-950 hover:text-red-800 cursor-pointer transition-colors leading-snug"
                >
                  {editorialArticle?.title || 'ଗ୍ରାମାଞ୍ଚଳ ବିକାଶ ଓ ଜନସାଧାରଣଙ୍କ ସ୍ୱର: ପ୍ରକୃତ ଗଣତନ୍ତ୍ରର ଭିତ୍ତିଭୂମି'}
                </h4>

                {/* Pull Quote */}
                <div className="my-4 p-4 border-l-4 border-red-700 bg-white/90 italic font-serif-odia text-stone-800 text-sm sm:text-base leading-relaxed">
                  <Quote className="w-4 h-4 text-red-700 inline mr-2 opacity-50" />
                  ସମ୍ବାଦପତ୍ର କେବଳ ଖବର ପରିବେଷଣ କରେନାହିଁ, ସାଧାରଣ ମଣିଷର ଅକୁହା ବେଦନା ଓ ଅଧିକାରକୁ ପ୍ରଶାସନ ସାମ୍ନାରେ ଉପସ୍ଥାପନ କରିବା ହେଉଛି ଆମର ପବିତ୍ର ଦାୟିତ୍ୱ।
                </div>

                <p className="text-stone-700 text-sm leading-relaxed line-clamp-3">
                  {editorialArticle?.summary || 'ଏକ ସୁସ୍ଥ ଗଣତନ୍ତ୍ରର ମୂଳଦୁଆ ସେତିକିବେଳେ ସୁଦୃଢ଼ ହୁଏ, ଯେତେବେଳେ ଦେଶର ସବୁଠାରୁ ଦୁର୍ଗମ ଅଞ୍ଚଳରେ ଥିବା ସାଧାରଣ ନାଗରିକର ସ୍ୱର ରାଜଧାନୀର ନୀତି ନିର୍ଦ୍ଧାରକଙ୍କ କାନରେ ପହଞ୍ଚିପାରେ...'}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-300 flex items-center justify-between">
                <button
                  onClick={handleReadEditorial}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-red-800 hover:bg-red-900 text-white text-xs font-bold rounded shadow-xs transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>ସମ୍ପୂର୍ଣ୍ଣ ସମ୍ପାଦକୀୟ ପଢ଼ନ୍ତୁ</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-stone-500 font-serif-odia">
                  ମତାମତ ଜଣାନ୍ତୁ: {SITE_INFO.email}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

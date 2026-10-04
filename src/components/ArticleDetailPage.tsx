import React, { useState } from 'react';
import { 
  Clock, 
  User, 
  Calendar, 
  Share2, 
  Heart, 
  Bookmark, 
  Eye, 
  Volume2, 
  VolumeX, 
  ArrowLeft, 
  AlertCircle, 
  Check, 
  MessageSquare, 
  Send,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Type
} from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { NewsArticle } from '../types';

export const ArticleDetailPage: React.FC = () => {
  const { 
    selectedArticle, 
    setSelectedArticle, 
    articles, 
    setCurrentView, 
    likeArticle,
    comments,
    addComment,
    fontSize,
    setFontSize,
    activeLanguage 
  } = useNews();

  const [copied, setCopied] = useState(false);
  const [commentName, setCommentName] = useState('');
  const [commentText, setCommentText] = useState('');
  const [isReadingAudio, setIsReadingAudio] = useState(false);

  if (!selectedArticle) {
    return (
      <div className="py-20 text-center max-w-xl mx-auto px-4">
        <h2 className="font-serif-odia text-xl font-bold text-stone-800">
          ଖବର ଲୋଡ୍ ହୋଇପାରୁନାହିଁ। ଦୟାକରି କିଛି ସମୟ ପରେ ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ।
        </h2>
        <button
          onClick={() => setCurrentView('home')}
          className="mt-4 px-4 py-2 bg-red-700 text-white rounded text-xs font-bold"
        >
          ମୁଖ୍ୟପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ
        </button>
      </div>
    );
  }

  const safeArticles = Array.isArray(articles) ? articles : [];
  const currentIndex = safeArticles.findIndex(a => a.id === selectedArticle.id);
  const prevArticle = currentIndex > 0 ? safeArticles[currentIndex - 1] : null;
  const nextArticle = currentIndex < safeArticles.length - 1 ? safeArticles[currentIndex + 1] : null;

  const relatedArticles = safeArticles
    .filter(a => a.id !== selectedArticle.id && (a.category === selectedArticle.category || a.district === selectedArticle.district))
    .slice(0, 3);

  const articleComments = (Array.isArray(comments) ? comments : []).filter(
    c => c.articleId === selectedArticle.id
  );

  const getArticleTitle = () => {
    if (activeLanguage !== 'or' && selectedArticle.translations?.[activeLanguage]?.title) {
      return selectedArticle.translations[activeLanguage]!.title;
    }
    return selectedArticle.title;
  };

  const getArticleContent = () => {
    if (activeLanguage !== 'or' && selectedArticle.translations?.[activeLanguage]?.content) {
      return selectedArticle.translations[activeLanguage]!.content;
    }
    return selectedArticle.content;
  };

  const handleShare = (platform: 'whatsapp' | 'facebook' | 'twitter' | 'copy') => {
    const url = window.location.href;
    const title = selectedArticle.title;

    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' - ' + url)}`, '_blank');
    } else if (platform === 'facebook') {
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
    } else if (platform === 'copy') {
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentText.trim()) return;
    addComment(selectedArticle.id, commentName, commentText);
    setCommentText('');
    setCommentName('');
  };

  const toggleAudioSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isReadingAudio) {
        window.speechSynthesis.cancel();
        setIsReadingAudio(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(selectedArticle.title + '. ' + selectedArticle.summary);
        utterance.rate = 0.9;
        utterance.onend = () => setIsReadingAudio(false);
        utterance.onerror = () => setIsReadingAudio(false);
        window.speechSynthesis.speak(utterance);
        setIsReadingAudio(true);
      }
    } else {
      alert('ଆପଣଙ୍କ ବ୍ରାଉଜର୍ ଅଡିଓ ସମର୍ଥନ କରୁନାହିଁ।');
    }
  };

  const fontSizeClass = {
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-loose',
    xl: 'text-xl leading-loose'
  }[fontSize];

  return (
    <article className="w-full bg-[#FAF9F6] py-8 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Back navigation & Category */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-stone-200">
          <button
            onClick={() => setCurrentView('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ମୁଖ୍ୟପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ</span>
          </button>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded border border-red-200">
              {selectedArticle.category}
            </span>
            {selectedArticle.district && (
              <span className="text-xs text-stone-600 font-medium">
                • {selectedArticle.district}
              </span>
            )}
          </div>
        </div>

        {/* Large Headline */}
        <h1 className="font-newspaper-headline text-2xl sm:text-3xl md:text-4xl font-black text-stone-950 leading-tight text-balance">
          {getArticleTitle()}
        </h1>

        {/* Subtitle */}
        {selectedArticle.subtitle && (
          <h2 className="font-serif-odia text-base sm:text-lg font-semibold text-stone-700 mt-2.5 leading-snug">
            {selectedArticle.subtitle}
          </h2>
        )}

        {/* Author byline & Publication info strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 py-4 my-4 border-y border-stone-200 text-xs text-stone-600">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-red-800 text-white font-serif-odia flex items-center justify-center font-bold text-sm">
              {selectedArticle.author.charAt(0)}
            </div>
            <div>
              <div className="font-bold text-stone-900 font-serif-odia">
                {selectedArticle.author}
              </div>
              <div className="text-[11px] text-stone-500">
                {selectedArticle.authorRole || 'ସ୍ୱତନ୍ତ୍ର ସମ୍ବାଦଦାତା'}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-stone-500 text-[11px]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-stone-400" />
              <span>ପ୍ରକାଶିତ: {selectedArticle.publishedAt}</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-stone-400" />
              <span>{selectedArticle.readTimeMinutes} ମିନିଟ୍ ପଠନ</span>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-stone-400" />
              <span>{selectedArticle.views} ପଠନ</span>
            </span>
          </div>
        </div>

        {/* Reading Accessibility Bar (Font Size & Audio Listen) */}
        <div className="flex items-center justify-between bg-white border border-stone-200 p-2.5 rounded mb-6 text-xs">
          <div className="flex items-center gap-2">
            <span className="text-stone-500 font-medium flex items-center gap-1">
              <Type className="w-3.5 h-3.5" />
              <span>ଅକ୍ଷର ଆକାର:</span>
            </span>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setFontSize('sm')}
                className={`px-2 py-0.5 rounded ${fontSize === 'sm' ? 'bg-red-700 text-white font-bold' : 'bg-stone-100 hover:bg-stone-200'}`}
              >
                A-
              </button>
              <button
                onClick={() => setFontSize('base')}
                className={`px-2 py-0.5 rounded ${fontSize === 'base' ? 'bg-red-700 text-white font-bold' : 'bg-stone-100 hover:bg-stone-200'}`}
              >
                A
              </button>
              <button
                onClick={() => setFontSize('lg')}
                className={`px-2 py-0.5 rounded ${fontSize === 'lg' ? 'bg-red-700 text-white font-bold' : 'bg-stone-100 hover:bg-stone-200'}`}
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xl')}
                className={`px-2 py-0.5 rounded ${fontSize === 'xl' ? 'bg-red-700 text-white font-bold' : 'bg-stone-100 hover:bg-stone-200'}`}
              >
                A++
              </button>
            </div>
          </div>

          {/* Audio speech button */}
          <button
            onClick={toggleAudioSpeech}
            className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-medium transition-colors ${
              isReadingAudio 
                ? 'bg-amber-600 text-white animate-pulse' 
                : 'bg-stone-100 hover:bg-stone-200 text-stone-800'
            }`}
          >
            {isReadingAudio ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-red-700" />}
            <span>{isReadingAudio ? 'ଅଡିଓ ବନ୍ଦ କରନ୍ତୁ' : 'ଖବର ଶୁଣନ୍ତୁ'}</span>
          </button>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-16/9 w-full rounded overflow-hidden bg-stone-200 shadow-sm mb-3">
          <img
            src={selectedArticle.image}
            alt={selectedArticle.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
        {selectedArticle.imageCaption && (
          <p className="text-xs text-stone-500 italic mb-6 text-center font-serif-odia">
            ଫଟୋ: {selectedArticle.imageCaption}
          </p>
        )}

        {/* Social Share Floating Ribbon */}
        <div className="flex items-center justify-between p-3 bg-white border border-stone-200 rounded my-5 shadow-xs">
          <div className="text-xs font-bold text-stone-700">
            ଏହି ଖବର ସେୟାର୍ କରନ୍ତୁ:
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleShare('whatsapp')}
              className="flex items-center gap-1 px-3 py-1.5 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded text-xs font-bold transition-colors"
            >
              <span>WhatsApp</span>
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="flex items-center gap-1 px-3 py-1.5 bg-[#1877F2] hover:bg-[#0c6be4] text-white rounded text-xs font-bold transition-colors"
            >
              <span>Facebook</span>
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="flex items-center gap-1 px-3 py-1.5 bg-black hover:bg-stone-800 text-white rounded text-xs font-bold transition-colors"
            >
              <span>X</span>
            </button>
            <button
              onClick={() => handleShare('copy')}
              className="flex items-center gap-1 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded text-xs font-medium transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'କପି ହେଲା!' : 'ଲିଙ୍କ କପି'}</span>
            </button>
          </div>
        </div>

        {/* Article Prose Content */}
        <div className={`text-stone-900 font-serif-odia whitespace-pre-line mt-6 ${fontSizeClass} selection:bg-red-200`}>
          {getArticleContent()}
        </div>

        {/* Action Button inside article: "ଜନତାଙ୍କ ସମସ୍ୟା ଜଣାନ୍ତୁ" */}
        <div className="my-8 p-5 bg-[#FEF3C7] border-2 border-amber-400 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-serif-odia font-bold text-base text-stone-900 flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-red-700" />
              <span>ଆପଣଙ୍କ ଅଞ୍ଚଳରେ ମଧ୍ୟ ଏପରି କିଛି ସମସ୍ୟା ଅଛି କି?</span>
            </h4>
            <p className="text-xs text-stone-700 mt-1">
              ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ 'ଜନତାର ଦରବାର'କୁ ସିଧାସଳଖ ଅଭିଯୋଗ ପଠାନ୍ତୁ। ଆମେ ସରକାରଙ୍କ ଦୃଷ୍ଟି ଆକର୍ଷଣ କରିବୁ।
            </p>
          </div>
          <button
            onClick={() => {
              setCurrentView('grievance');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="shrink-0 px-4 py-2 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded transition-colors"
          >
            ଜନତାଙ୍କ ସମସ୍ୟା ଜଣାନ୍ତୁ →
          </button>
        </div>

        {/* Tags */}
        {selectedArticle.tags && selectedArticle.tags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2 py-4 border-t border-stone-200">
            <span className="text-xs font-semibold text-stone-500">ଟ୍ୟାଗ୍:</span>
            {selectedArticle.tags.map((tag, idx) => (
              <span key={idx} className="text-xs text-stone-600 hover:text-red-700 cursor-pointer">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Prev / Next Article Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6 border-y border-stone-200 my-6">
          {prevArticle ? (
            <button
              onClick={() => {
                setSelectedArticle(prevArticle);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left p-3 rounded bg-white border border-stone-200 hover:border-red-600 transition-colors group"
            >
              <div className="text-[11px] text-stone-400 flex items-center gap-1 mb-1">
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>ପୂର୍ବ ଖବର</span>
              </div>
              <div className="font-serif-odia text-xs font-bold text-stone-900 group-hover:text-red-700 line-clamp-2">
                {prevArticle.title}
              </div>
            </button>
          ) : <div />}

          {nextArticle && (
            <button
              onClick={() => {
                setSelectedArticle(nextArticle);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-right p-3 rounded bg-white border border-stone-200 hover:border-red-600 transition-colors group"
            >
              <div className="text-[11px] text-stone-400 flex items-center justify-end gap-1 mb-1">
                <span>ପରବର୍ତ୍ତୀ ଖବର</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </div>
              <div className="font-serif-odia text-xs font-bold text-stone-900 group-hover:text-red-700 line-clamp-2">
                {nextArticle.title}
              </div>
            </button>
          )}
        </div>

        {/* Comments Section */}
        <section className="bg-white border border-stone-200 rounded p-6 my-8">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-stone-200">
            <MessageSquare className="w-5 h-5 text-red-700" />
            <h3 className="font-serif-odia text-lg font-bold text-stone-900">
              ପାଠକଙ୍କ ମତାମତ ({articleComments.length})
            </h3>
          </div>

          {/* Comment Form */}
          <form onSubmit={handleCommentSubmit} className="space-y-3 mb-6">
            <div>
              <input
                type="text"
                placeholder="ଆପଣଙ୍କ ନାମ"
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:ring-1 focus:ring-red-700 focus:outline-hidden"
              />
            </div>
            <div>
              <textarea
                rows={3}
                placeholder="ଏହି ଖବର ସମ୍ପର୍କରେ ଆପଣଙ୍କ ମତାମତ ଲେଖନ୍ତୁ..."
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:ring-1 focus:ring-red-700 focus:outline-hidden"
                required
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white text-xs font-bold rounded transition-colors flex items-center gap-1.5"
            >
              <Send className="w-3.5 h-3.5" />
              <span>ମତାମତ ପ୍ରକାଶ କରନ୍ତୁ</span>
            </button>
          </form>

          {/* Comments List */}
          <div className="space-y-3">
            {articleComments.length === 0 ? (
              <p className="text-xs text-stone-500 italic">
                ଏପର୍ଯ୍ୟନ୍ତ କୌଣସି ମତାମତ ନାହିଁ। ପ୍ରଥମେ ଆପଣଙ୍କ ମତାମତ ରଖନ୍ତୁ।
              </p>
            ) : (
              articleComments.map(c => (
                <div key={c.id} className="p-3 bg-stone-50 rounded border border-stone-200 text-xs">
                  <div className="flex items-center justify-between font-bold text-stone-800 mb-1">
                    <span>{c.authorName}</span>
                    <span className="text-[10px] text-stone-400 font-normal">{c.createdAt}</span>
                  </div>
                  <p className="text-stone-700 font-serif-odia leading-relaxed">{c.comment}</p>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Related News Section */}
        {relatedArticles.length > 0 && (
          <section className="my-8">
            <h3 className="font-serif-odia text-lg font-bold text-stone-900 pb-2 mb-4 border-b-2 border-stone-800">
              ସମ୍ପର୍କିତ ଖବର (Related News)
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedArticles.map(rel => (
                <div
                  key={rel.id}
                  onClick={() => {
                    setSelectedArticle(rel);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white border border-stone-200 rounded p-3 cursor-pointer group hover:border-red-600 transition-all"
                >
                  <div className="aspect-16/10 w-full rounded overflow-hidden bg-stone-100 mb-2">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-serif-odia text-xs font-bold text-stone-900 group-hover:text-red-700 line-clamp-2 leading-snug">
                    {rel.title}
                  </h4>
                  <div className="text-[10px] text-stone-400 mt-1">
                    {rel.publishedAt.split(',')[0]}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

      </div>
    </article>
  );
};

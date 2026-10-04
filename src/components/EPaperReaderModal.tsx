import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Download, 
  Share2, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  FileText,
  Printer,
  Check
} from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { EPaperIssue } from '../types';

export const EPaperReaderModal: React.FC = () => {
  const { epaperIssues, selectedEPaperIssue, setSelectedEPaperIssue, setCurrentView } = useNews();

  const safeIssues = Array.isArray(epaperIssues) ? epaperIssues : [];
  const currentIssue: EPaperIssue = selectedEPaperIssue || safeIssues[0];

  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  if (!currentIssue) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl font-bold font-serif-odia">କୌଣସି ଇ-ପେପର୍ ସଂସ୍କରଣ ମିଳିଲା ନାହିଁ।</h2>
        <button onClick={() => setCurrentView('home')} className="mt-4 px-4 py-2 bg-red-700 text-white rounded text-xs">
          ମୁଖ୍ୟପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ
        </button>
      </div>
    );
  }

  const pages = currentIssue.pages && currentIssue.pages.length > 0 
    ? currentIssue.pages 
    : [
        { pageNumber: 1, title: 'ମୁଖ୍ୟ ପୃଷ୍ଠା', section: 'ମୁଖ୍ୟ ଆକର୍ଷଣ', imageUrl: currentIssue.coverImage }
      ];

  const currentPage = pages[activePageIndex] || pages[0];

  const handleNextPage = () => {
    if (activePageIndex < pages.length - 1) {
      setActivePageIndex(prev => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (activePageIndex > 0) {
      setActivePageIndex(prev => prev - 1);
    }
  };

  const handleZoomIn = () => setZoomLevel(prev => Math.min(prev + 25, 200));
  const handleZoomOut = () => setZoomLevel(prev => Math.max(prev - 25, 75));
  const handleResetZoom = () => setZoomLevel(100);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Prime Time Press E-Paper - ${currentIssue.dateOdia}`,
        text: `ପଢ଼ନ୍ତୁ ଆଜିର ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଇ-ପେପର୍ (ପୃଷ୍ଠା ${currentPage.pageNumber}): ${currentIssue.dateOdia}`,
        url: window.location.href
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownloadPage = () => {
    alert(`ପୃଷ୍ଠା ${currentPage.pageNumber} ଡାଉନଲୋଡ୍ ପ୍ରକ୍ରିୟା ଆରମ୍ଭ ହେଲା (${currentIssue.editionLocation})`);
  };

  return (
    <div className={`w-full min-h-screen bg-[#0F172A] text-white flex flex-col ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>
      
      {/* 1. TOP TOOLBAR */}
      <div className="bg-[#1E293B] border-b border-stone-800 px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 shrink-0">
        
        {/* Left: Back & Issue Info */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentView('home')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-stone-800 hover:bg-stone-700 text-xs font-semibold text-stone-200 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ଫେରନ୍ତୁ</span>
          </button>

          <div>
            <h1 className="font-serif-odia font-bold text-sm sm:text-base text-amber-400 truncate max-w-xs sm:max-w-md">
              ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଇ-ପେପର୍: {currentIssue.dateOdia}
            </h1>
            <div className="text-[11px] text-stone-400">
              {currentIssue.volumeNumber} • {currentIssue.issueNumber} • {currentIssue.editionLocation} • ମୂଲ୍ୟ: {currentIssue.price}
            </div>
          </div>
        </div>

        {/* Center: Issue Date Selector */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-stone-400 flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-stone-400" />
            <span className="hidden sm:inline">ସଂସ୍କରଣ ତାରିଖ:</span>
          </span>
          <select
            value={currentIssue.id}
            onChange={(e) => {
              const selected = safeIssues.find(i => i.id === e.target.value);
              if (selected) {
                setSelectedEPaperIssue(selected);
                setActivePageIndex(0);
              }
            }}
            className="bg-stone-800 border border-stone-700 text-xs text-stone-200 rounded px-2 py-1 focus:ring-1 focus:ring-red-600 focus:outline-hidden"
          >
            {safeIssues.map(iss => (
              <option key={iss.id} value={iss.id}>
                {iss.dateOdia} ({iss.editionLocation})
              </option>
            ))}
          </select>
        </div>

        {/* Right: Controls (Zoom, Fullscreen, Download, Share, Print) */}
        <div className="flex items-center gap-1.5">
          <button
            onClick={handleZoomOut}
            className="p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          <span className="text-xs font-mono text-stone-400 px-1">
            {zoomLevel}%
          </span>

          <button
            onClick={handleZoomIn}
            className="p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            onClick={handleResetZoom}
            className="p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            title="Reset Zoom"
          >
            <RotateCw className="w-4 h-4" />
          </button>

          <span className="w-px h-4 bg-stone-700 mx-1" />

          <button
            onClick={handleDownloadPage}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded bg-stone-800 hover:bg-stone-700 text-xs text-stone-200 transition-colors"
            title="Download PDF"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">ଡାଉନଲୋଡ୍</span>
          </button>

          <button
            onClick={handleShare}
            className="p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            title="Share Issue"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
          </button>

          <button
            onClick={() => window.print()}
            className="hidden sm:inline-block p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            title="Print Page"
          >
            <Printer className="w-4 h-4" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
            title="Full Screen"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* 2. MAIN READING CANVAS */}
      <div className="flex-1 flex overflow-hidden relative">
        
        {/* Left Page Prev Button */}
        <button
          onClick={handlePrevPage}
          disabled={activePageIndex === 0}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-red-700 text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xl"
          aria-label="Previous Page"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Center Paper Viewport */}
        <div className="flex-1 overflow-auto flex items-center justify-center p-4 sm:p-8">
          <div 
            style={{ width: `${zoomLevel}%`, maxWidth: '900px' }} 
            className="bg-white rounded shadow-2xl transition-all duration-200 border-4 border-stone-800 overflow-hidden"
          >
            {/* Broadsheet Page Header */}
            <div className="bg-[#FAF8F5] border-b border-stone-300 p-2 sm:p-3 flex items-center justify-between text-stone-900 text-xs">
              <span className="font-serif-odia font-bold text-red-700">
                ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଦୈନିକ ଖବର କାଗଜ
              </span>
              <span className="font-semibold text-stone-600">
                ପୃଷ୍ଠା ନଂ {currentPage.pageNumber} • {currentPage.title}
              </span>
              <span className="font-mono text-stone-500">
                {currentIssue.date}
              </span>
            </div>

            {/* High-res page canvas */}
            <div className="relative aspect-3/4 w-full bg-stone-100 flex items-center justify-center">
              <img
                src={currentPage.imageUrl}
                alt={`Page ${currentPage.pageNumber} - ${currentPage.title}`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Page Section Banner */}
            <div className="bg-stone-100 p-2 text-center text-xs font-serif-odia text-stone-600 border-t border-stone-300">
              ବିଭାଗ: <span className="font-bold text-stone-800">{currentPage.section}</span> | ସମ୍ପାଦକ: ସୁଶାନ୍ତ କୁମାର ନାୟକ
            </div>
          </div>
        </div>

        {/* Right Page Next Button */}
        <button
          onClick={handleNextPage}
          disabled={activePageIndex === pages.length - 1}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/70 hover:bg-red-700 text-white disabled:opacity-30 disabled:pointer-events-none transition-all shadow-xl"
          aria-label="Next Page"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

      </div>

      {/* 3. BOTTOM THUMBNAIL CAROUSEL (12 Pages) */}
      <div className="bg-[#1E293B] border-t border-stone-800 p-3 shrink-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="text-xs text-stone-400 font-semibold shrink-0">
            ପୃଷ୍ଠା: {activePageIndex + 1} / {pages.length}
          </div>

          {/* Thumbnails row */}
          <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-none">
            {pages.map((p, idx) => (
              <button
                key={p.pageNumber}
                onClick={() => setActivePageIndex(idx)}
                className={`relative shrink-0 w-12 sm:w-16 aspect-3/4 rounded overflow-hidden border-2 transition-all ${
                  activePageIndex === idx 
                    ? 'border-red-500 scale-105 shadow-md' 
                    : 'border-stone-700 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={p.imageUrl}
                  alt={`Page ${p.pageNumber}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[10px] text-center font-mono py-0.5">
                  P.{p.pageNumber}
                </span>
              </button>
            ))}
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <button
              onClick={handlePrevPage}
              disabled={activePageIndex === 0}
              className="px-2.5 py-1 rounded bg-stone-800 hover:bg-stone-700 text-xs disabled:opacity-30"
            >
              ପୂର୍ବ ପୃଷ୍ଠା
            </button>
            <button
              onClick={handleNextPage}
              disabled={activePageIndex === pages.length - 1}
              className="px-2.5 py-1 rounded bg-red-700 hover:bg-red-800 text-xs font-bold disabled:opacity-30"
            >
              ପରବର୍ତ୍ତୀ ପୃଷ୍ଠା
            </button>
          </div>
        </div>
      </div>

    </div>
  );
};

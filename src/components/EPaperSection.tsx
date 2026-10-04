import React from 'react';
import { FileText, Download, Share2, ZoomIn, Eye, Calendar, ChevronRight } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { EPaperIssue } from '../types';

export const EPaperSection: React.FC = () => {
  const { epaperIssues, setSelectedEPaperIssue, setCurrentView } = useNews();

  const safeIssues = Array.isArray(epaperIssues) ? epaperIssues : [];
  const latestIssue = safeIssues[0];

  const handleOpenReader = (issue?: EPaperIssue) => {
    if (issue) {
      setSelectedEPaperIssue(issue);
    } else if (latestIssue) {
      setSelectedEPaperIssue(latestIssue);
    }
    setCurrentView('epaper');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!latestIssue) return null;

  const sectionsList = [
    { name: 'ମୁଖ୍ୟ ଆକର୍ଷଣ (Front Page)', page: 1 },
    { name: 'ଓଡ଼ିଶା ଆଞ୍ଚଳିକ (Odisha Regional)', page: 2 },
    { name: 'ମୟୂରଭଞ୍ଜ ସ୍ୱତନ୍ତ୍ର (Mayurbhanj Special)', page: 3 },
    { name: 'ସମ୍ପାଦକଙ୍କ କଲମରୁ (Editorial)', page: 4 },
    { name: 'ଦେଶ ବିଦେଶ (National/World)', page: 6 },
    { name: 'ରବିବାର ବିଶେଷ (Special Feature)', page: 11 }
  ];

  return (
    <section className="w-full bg-[#1E293B] text-white py-10 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-6 border-b border-stone-700 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-red-600 rounded">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-serif-odia text-xl sm:text-2xl font-bold text-white tracking-tight">
                ଇ-ପେପର୍ (Prime Time Digital E-Paper)
              </h2>
              <p className="text-xs text-stone-400">
                ମୂଳ ଛାପା ଖବର କାଗଜର ସମ୍ପୂର୍ଣ୍ଣ ଡିଜିଟାଲ୍ ସଂସ୍କରଣ
              </p>
            </div>
          </div>
          <button
            onClick={() => handleOpenReader()}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded transition-colors shadow-sm"
          >
            <span>ସମସ୍ତ ସଂସ୍କରଣ ଦେଖନ୍ତୁ</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* E-Paper Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Newspaper Cover Preview (5 Cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              onClick={() => handleOpenReader(latestIssue)}
              className="group relative cursor-pointer max-w-xs sm:max-w-sm w-full bg-white rounded shadow-2xl p-2.5 border-4 border-stone-700 hover:border-amber-400 transition-all transform hover:-translate-y-1"
            >
              <div className="aspect-3/4 w-full overflow-hidden bg-stone-200 rounded-xs relative">
                <img
                  src={latestIssue.coverImage}
                  alt={latestIssue.dateOdia}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <span className="px-4 py-2 bg-red-700 text-white text-xs font-bold rounded shadow-lg flex items-center gap-1.5">
                    <ZoomIn className="w-4 h-4" />
                    <span>ପୂର୍ଣ୍ଣ ସ୍କ୍ରିନ୍‌ରେ ପଢ଼ନ୍ତୁ</span>
                  </span>
                </div>
              </div>
              <div className="mt-2 text-center text-stone-900 text-xs font-bold font-serif-odia">
                {latestIssue.dateOdia} • {latestIssue.editionLocation}
              </div>
            </div>
          </div>

          {/* Right Issue Metadata & Quick Page Navigation (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Badge metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-1 rounded bg-stone-800 text-amber-300 font-mono font-bold">
                  {latestIssue.volumeNumber} {latestIssue.issueNumber}
                </span>
                <span className="px-2.5 py-1 rounded bg-stone-800 text-stone-300">
                  {latestIssue.dateOdia}
                </span>
                <span className="px-2.5 py-1 rounded bg-stone-800 text-stone-300">
                  ମୂଲ୍ୟ: {latestIssue.price}
                </span>
                <span className="px-2.5 py-1 rounded bg-emerald-900/80 text-emerald-300 font-bold">
                  {latestIssue.totalPages} ପୃଷ୍ଠା ବିଶିଷ୍ଟ
                </span>
              </div>

              <h3 className="font-serif-odia text-xl sm:text-2xl font-bold text-stone-100">
                ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଦୈନିକ ଇ-ପେପର୍ ସଂସ୍କରଣ
              </h3>

              <p className="text-stone-300 text-sm leading-relaxed">
                ଆପଣଙ୍କ ମୋବାଇଲ୍, ଟାବ୍ଲେଟ୍ କିମ୍ବା କମ୍ପ୍ୟୁଟରରେ ଯେକୌଣସି ସମୟରେ ପଢ଼ନ୍ତୁ ଆଜିର ପୂରା ଖବର କାଗଜ। ସହଜ ଜୁମ୍, ଡାଉନଲୋଡ୍ ଏବଂ ଆର୍କାଇଭ୍ ସୁବିଧା ସହିତ ଉପଲବ୍ଧ।
              </p>

              {/* Newspaper Sections Shortcuts */}
              <div className="bg-stone-800/80 p-4 rounded border border-stone-700">
                <div className="text-xs font-bold text-amber-400 mb-2 uppercase tracking-wider">
                  ପୃଷ୍ଠା ଅନୁଯାୟୀ ବିଭାଗ (Page Navigation)
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {sectionsList.map((sec) => (
                    <button
                      key={sec.name}
                      onClick={() => handleOpenReader(latestIssue)}
                      className="text-left px-2.5 py-1.5 rounded bg-stone-700/60 hover:bg-red-700 text-stone-200 text-xs transition-colors flex items-center justify-between"
                    >
                      <span className="truncate">{sec.name.split(' ')[0]}</span>
                      <span className="text-[10px] text-stone-400 font-mono ml-1">P.{sec.page}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-stone-800 flex flex-wrap items-center gap-3">
              <button
                onClick={() => handleOpenReader(latestIssue)}
                className="flex items-center gap-2 px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded transition-colors shadow-md"
              >
                <Eye className="w-4 h-4" />
                <span>ଇ-ପେପର୍ ଖୋଲନ୍ତୁ</span>
              </button>

              <button
                onClick={() => {
                  alert('ଆପଣଙ୍କ ମୋବାଇଲ୍/ଡିଭାଇସ୍‌ରେ ଇ-ପେପର୍ PDF ଡାଉନଲୋଡ୍ ଆରମ୍ଭ ହେଲା।');
                }}
                className="flex items-center gap-2 px-4 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>PDF ଡାଉନଲୋଡ୍ କରନ୍ତୁ</span>
              </button>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Prime Time Press E-Paper',
                      text: `ପଢ଼ନ୍ତୁ ଆଜିର ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଇ-ପେପର୍: ${latestIssue.dateOdia}`,
                      url: window.location.href
                    }).catch(() => {});
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('ଇ-ପେପର୍ ଲିଙ୍କ କପି ହୋଇଛି!');
                  }
                }}
                className="flex items-center gap-2 px-3 py-2.5 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-medium rounded transition-colors"
                title="Share E-Paper"
              >
                <Share2 className="w-4 h-4" />
                <span>ସେୟାର୍</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

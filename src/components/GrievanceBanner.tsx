import React, { useState } from 'react';
import { AlertCircle, Search, ShieldCheck, CheckCircle2, ChevronRight, FileText, ArrowRight } from 'lucide-react';
import { useNews } from '../context/NewsContext';

export const GrievanceBanner: React.FC = () => {
  const { setCurrentView, findComplaintByRef } = useNews();
  const [quickRef, setQuickRef] = useState('');
  const [searchedComplaint, setSearchedComplaint] = useState<any>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleQuickTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickRef.trim()) return;
    const match = findComplaintByRef(quickRef.trim());
    setSearchedComplaint(match || null);
    setHasSearched(true);
  };

  return (
    <section className="w-full bg-[#FEF3C7] border-y-2 border-amber-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* Left Callout (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-amber-900 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
              <span>ଜନତାର ଦରବାର • ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ସ୍ୱତନ୍ତ୍ର ପଦକ୍ଷେପ</span>
            </div>
            
            <h2 className="font-serif-odia text-2xl sm:text-3xl font-extrabold text-stone-900 leading-tight">
              ଜନତାଙ୍କ ସମସ୍ୟା ଜଣାନ୍ତୁ (Report Your Problem)
            </h2>
            
            <p className="text-stone-700 text-sm mt-2 leading-relaxed max-w-2xl">
              ଆପଣଙ୍କ ଗାଁ, ପଞ୍ଚାୟତ କିମ୍ବା ସହରର ରାସ୍ତା, ପାନୀୟ ଜଳ, ସ୍ୱାସ୍ଥ୍ୟ, ଶିକ୍ଷା କିମ୍ବା ପ୍ରଶାସନିକ ସମସ୍ୟା ଅଛି କି? ଆମକୁ ଜଣାନ୍ତୁ। ଆମର ତଦନ୍ତକାରୀ ରିପୋର୍ଟର ଦଳ ଘଟଣାସ୍ଥଳକୁ ଯାଇ ସତ୍ୟ ଉନ୍ମୋଚନ କରିବେ ଏବଂ ପ୍ରଶାସନ ଠାରୁ ଉତ୍ତର ମାଗିବେ।
            </p>

            <div className="flex flex-wrap items-center gap-3 mt-4">
              <button
                onClick={() => {
                  setCurrentView('grievance');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded shadow transition-colors"
              >
                <AlertCircle className="w-4 h-4 text-amber-300" />
                <span>ନୂତନ ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setCurrentView('track_grievance');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-amber-100 hover:bg-amber-200 border border-amber-400 text-stone-900 font-bold text-xs rounded transition-colors"
              >
                <span>ଆପଣଙ୍କ ଅଭିଯୋଗର ସ୍ଥିତି ଜାଣନ୍ତୁ</span>
              </button>
            </div>
          </div>

          {/* Right Quick Tracker Box (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-amber-300 p-5 rounded shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-amber-700" />
              <h3 className="font-serif-odia font-bold text-stone-900 text-sm">
                ଅଭିଯୋଗ ଟ୍ରାକିଂ (Track Complaint)
              </h3>
            </div>

            <form onSubmit={handleQuickTrack} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  ରେଫରେନ୍ସ ନମ୍ବର କିମ୍ବା ମୋବାଇଲ୍ ନଂ:
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="ଉଦାହରଣ: PTP-2026-MAY-7842"
                    value={quickRef}
                    onChange={(e) => setQuickRef(e.target.value)}
                    className="flex-1 px-3 py-2 text-xs border border-stone-300 rounded focus:outline-hidden focus:ring-1 focus:ring-amber-500 font-mono"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-stone-900 hover:bg-black text-white text-xs font-bold rounded transition-colors flex items-center gap-1"
                  >
                    <Search className="w-3.5 h-3.5" />
                    <span>ଖୋଜନ୍ତୁ</span>
                  </button>
                </div>
              </div>
            </form>

            {/* Quick search result preview */}
            {hasSearched && (
              <div className="mt-3 pt-3 border-t border-stone-200 text-xs">
                {searchedComplaint ? (
                  <div className="p-2.5 bg-amber-50 rounded border border-amber-200">
                    <div className="flex items-center justify-between font-bold text-stone-900">
                      <span className="font-mono text-red-700">{searchedComplaint.refNumber}</span>
                      <span className="px-2 py-0.5 rounded bg-amber-200 text-amber-900 text-[10px]">
                        {searchedComplaint.status}
                      </span>
                    </div>
                    <p className="font-serif-odia text-stone-800 font-semibold mt-1 truncate">
                      {searchedComplaint.problemTitle}
                    </p>
                    <button
                      onClick={() => {
                        setCurrentView('track_grievance');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="mt-2 text-red-700 font-bold hover:underline block text-right text-[11px]"
                    >
                      ସମ୍ପୂର୍ଣ୍ଣ ଟାଇମଲାଇନ୍ ଦେଖନ୍ତୁ →
                    </button>
                  </div>
                ) : (
                  <div className="p-2.5 bg-red-50 text-red-800 rounded border border-red-200">
                    କୌଣସି ଅଭିଯୋଗ ମିଳିଲା ନାହିଁ। ଦୟାକରି ସଠିକ୍ ରେଫରେନ୍ସ ନମ୍ବର (ଯଥା PTP-2026-MAY-7842) ପ୍ରବେଶ କରନ୍ତୁ।
                  </div>
                )}
              </div>
            )}

            <div className="mt-3 text-[11px] text-stone-500 flex items-center justify-between">
              <span>ସହାୟତା ଫୋନ୍: 9114832950</span>
              <span className="text-emerald-700 font-medium">୧୦୦% ଗୋପନୀୟତା ରକ୍ଷା</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

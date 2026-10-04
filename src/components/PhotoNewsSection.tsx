import React, { useState } from 'react';
import { Camera, Eye, MapPin, Calendar, X, ChevronLeft, ChevronRight, Share2 } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { PhotoNewsItem } from '../types';

export const PhotoNewsSection: React.FC = () => {
  const { photoNews } = useNews();
  const [selectedGallery, setSelectedGallery] = useState<PhotoNewsItem | null>(null);
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  const safePhotoNews = Array.isArray(photoNews) ? photoNews : [];
  if (safePhotoNews.length === 0) return null;

  const openLightbox = (item: PhotoNewsItem, index: number = 0) => {
    setSelectedGallery(item);
    setActivePhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedGallery(null);
    setActivePhotoIndex(0);
  };

  const nextPhoto = () => {
    if (!selectedGallery) return;
    setActivePhotoIndex((prev) => (prev + 1) % selectedGallery.images.length);
  };

  const prevPhoto = () => {
    if (!selectedGallery) return;
    setActivePhotoIndex((prev) => 
      prev === 0 ? selectedGallery.images.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full bg-[#18181B] text-white py-10 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b border-stone-700">
          <div className="flex items-center gap-2">
            <Camera className="w-5 h-5 text-amber-400" />
            <h2 className="font-serif-odia text-xl sm:text-2xl font-bold text-white tracking-tight">
              ଫଟୋ ଖବର (Photo News)
            </h2>
          </div>
          <span className="text-xs text-stone-400">
            ଛବିରେ ଆଜିର ଓଡ଼ିଶା
          </span>
        </div>

        {/* Photo Galleries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {safePhotoNews.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item, 0)}
              className="group cursor-pointer bg-stone-900 border border-stone-800 rounded overflow-hidden hover:border-amber-400 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-16/10 w-full overflow-hidden bg-stone-800">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-[11px] font-mono flex items-center gap-1">
                  <Camera className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.images.length} ଫଟୋ</span>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-stone-400 mb-1.5">
                  <span className="flex items-center gap-1 text-amber-400">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                  <span>·</span>
                  <span>{item.date}</span>
                </div>

                <h3 className="font-serif-odia text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-400 line-clamp-2 mt-2">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedGallery && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-between p-4 sm:p-6">
          {/* Top Bar */}
          <div className="w-full max-w-5xl flex items-center justify-between text-white pb-3 border-b border-stone-800">
            <div>
              <h4 className="font-serif-odia font-bold text-sm sm:text-base text-amber-400">
                {selectedGallery.title}
              </h4>
              <div className="text-xs text-stone-400">
                {selectedGallery.location} • ଫଟୋ {activePhotoIndex + 1} / {selectedGallery.images.length}
              </div>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 rounded bg-stone-800 hover:bg-red-700 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Photo Display */}
          <div className="relative w-full max-w-5xl flex-1 flex items-center justify-center my-4 overflow-hidden">
            <img
              src={selectedGallery.images[activePhotoIndex].url}
              alt={selectedGallery.images[activePhotoIndex].caption}
              referrerPolicy="no-referrer"
              className="max-h-[70vh] max-w-full object-contain rounded shadow-2xl"
            />

            {/* Prev / Next buttons */}
            {selectedGallery.images.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-red-700 text-white transition-colors"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/70 hover:bg-red-700 text-white transition-colors"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Caption */}
          <div className="w-full max-w-5xl text-center text-xs sm:text-sm text-stone-300 font-serif-odia bg-stone-900/90 p-3 rounded border border-stone-800">
            {selectedGallery.images[activePhotoIndex].caption}
          </div>
        </div>
      )}
    </section>
  );
};

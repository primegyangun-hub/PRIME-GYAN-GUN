import React, { useState } from 'react';
import { Play, Youtube, Eye, Clock, X } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { VideoNewsItem } from '../types';
import { SITE_INFO } from '../data/initialData';

export const VideoNewsSection: React.FC = () => {
  const { videoNews } = useNews();
  const [activeVideo, setActiveVideo] = useState<VideoNewsItem | null>(null);

  const safeVideos = Array.isArray(videoNews) ? videoNews : [];
  if (safeVideos.length === 0) return null;

  return (
    <section className="w-full bg-[#111827] text-white py-10 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 mb-6 border-b border-stone-800 gap-3">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 bg-red-600 rounded">
              <Youtube className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-serif-odia text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2 flex-wrap">
                <span>ଭିଡିଓ ଖବର (Prime Time Video)</span>
                <span className="text-[11px] font-sans font-bold bg-red-950 text-red-400 px-2 py-0.5 rounded border border-red-800">
                  DIGITAL NEWS CHANNEL
                </span>
              </h2>
              <p className="text-xs text-stone-400">
                ଅଫିସିଆଲ୍ ଡିଜିଟାଲ୍ ନ୍ୟୁଜ୍ ଚ୍ୟାନେଲ୍: <strong className="text-stone-200">{SITE_INFO.youtubeChannel}</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            {/* YouTube Subscribe Button */}
            <a
              href={SITE_INFO.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded transition-colors shadow-sm"
              title="Subscribe on YouTube"
            >
              <Youtube className="w-4 h-4" />
              <span>ୟୁଟ୍ୟୁବ୍ ସବସ୍କ୍ରାଇବ୍ (Subscribe)</span>
            </a>

            {/* Facebook Connect Button */}
            <a
              href={SITE_INFO.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#1877F2] hover:bg-[#0c6be4] text-white text-xs font-bold rounded transition-colors shadow-sm"
              title="Follow on Facebook"
            >
              <span className="w-4 h-4 flex items-center justify-center font-bold text-xs bg-white text-[#1877F2] rounded-full">f</span>
              <span>ଫେସବୁକ୍ ଫଲୋ (Follow Facebook)</span>
            </a>
          </div>
        </div>

        {/* Official Social Connect Announcement Banner */}
        <div className="mb-6 p-3.5 bg-gradient-to-r from-red-950/80 via-stone-900 to-blue-950/80 rounded-lg border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping inline-block shrink-0" />
            <span className="font-serif-odia text-stone-200">
              ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଅଫିସିଆଲ୍ ଡିଜିଟାଲ୍ ନ୍ୟୁଜ୍ ଚ୍ୟାନେଲ୍ ଓ ଫେସବୁକ୍ ପେଜ୍ ସହ ଯୋଡ଼ି ହୁଅନ୍ତୁ ଏବଂ ପାଆନ୍ତୁ ସର୍ବପ୍ରଥମ ତାଜା ଖବର ଭିଡିଓ।
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href={SITE_INFO.youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1 bg-red-700/80 hover:bg-red-700 text-white rounded text-[11px] font-bold"
            >
              YouTube Channel →
            </a>
            <a
              href={SITE_INFO.facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="px-2.5 py-1 bg-blue-700/80 hover:bg-blue-700 text-white rounded text-[11px] font-bold"
            >
              Facebook Page →
            </a>
          </div>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {safeVideos.map((video) => (
            <div
              key={video.id}
              onClick={() => setActiveVideo(video)}
              className="bg-stone-900 border border-stone-800 rounded overflow-hidden flex flex-col group cursor-pointer hover:border-red-600 transition-all shadow-sm"
            >
              {/* Thumbnail with Play Overlay */}
              <div className="relative aspect-16/9 w-full bg-stone-800 overflow-hidden">
                <img
                  src={video.thumbnailUrl}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                  <div className="w-12 h-12 rounded-full bg-red-600 group-hover:scale-110 flex items-center justify-center text-white shadow-lg transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                  {video.duration}
                </div>
                <div className="absolute top-2 left-2 bg-red-700 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                  {video.category}
                </div>
              </div>

              {/* Info */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-odia text-sm sm:text-base font-bold text-white group-hover:text-red-400 transition-colors leading-snug line-clamp-2">
                    {video.title}
                  </h3>
                </div>

                <div className="mt-3 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-stone-400">
                  <span>{video.channel}</span>
                  <span>{video.viewsCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Player Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="bg-stone-950 border border-stone-800 rounded-lg max-w-4xl w-full overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between p-3 border-b border-stone-800">
              <h4 className="font-serif-odia font-bold text-sm text-white truncate max-w-xl">
                {activeVideo.title}
              </h4>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 rounded hover:bg-stone-800 text-stone-400 hover:text-white"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Embed video container */}
            <div className="aspect-16/9 w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="p-4 text-xs text-stone-300 flex items-center justify-between">
              <span>{activeVideo.category} • {activeVideo.publishedAt}</span>
              <a 
                href={SITE_INFO.youtubeUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-red-400 hover:underline font-bold"
              >
                ୟୁଟ୍ୟୁବ୍‌ରେ ଅଧିକ ଭିଡିଓ ଦେଖନ୍ତୁ →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

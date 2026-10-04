import React from 'react';
import { useNews } from '../context/NewsContext';
import { Sparkles } from 'lucide-react';

interface AdBannerProps {
  placement: 'header' | 'leaderboard' | 'sidebar' | 'in-article' | 'footer';
  className?: string;
  onOpenAdvertiseModal?: () => void;
}

export const AdBanner: React.FC<AdBannerProps> = ({ placement, className = '', onOpenAdvertiseModal }) => {
  const { ads, recordAdClick } = useNews();

  const safeAds = Array.isArray(ads) ? ads : [];
  const ad = safeAds.find(a => a.placement === placement && a.isActive);

  if (!ad) {
    // Show polite "Advertise Here" placeholder box
    return (
      <div 
        onClick={onOpenAdvertiseModal}
        className={`bg-stone-100 hover:bg-stone-200/80 border border-dashed border-stone-300 rounded p-3 text-center cursor-pointer transition-colors ${className}`}
      >
        <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>ବିଜ୍ଞାପନ ସ୍ଥାନ (Advertisement Space Available) • ଏଠାରେ କ୍ଲିକ୍ କରନ୍ତୁ</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`my-4 overflow-hidden rounded border border-stone-200 bg-white ${className}`}>
      <div className="text-[10px] text-stone-400 bg-stone-50 px-2 py-0.5 text-right uppercase tracking-wider border-b border-stone-100">
        ବିଜ୍ଞାପନ / Sponsored
      </div>
      <a
        href={ad.linkUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() => recordAdClick(ad.id)}
        className="block group"
      >
        <img
          src={ad.imageUrl}
          alt={ad.title}
          referrerPolicy="no-referrer"
          className="w-full object-cover group-hover:opacity-95 transition-opacity max-h-32"
        />
      </a>
    </div>
  );
};

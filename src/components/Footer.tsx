import React from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Heart, AlertCircle, FileText, ArrowUp } from 'lucide-react';
import { SITE_INFO, CATEGORIES } from '../data/initialData';
import { useNews } from '../context/NewsContext';

interface FooterProps {
  onOpenAdvertiseModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAdvertiseModal }) => {
  const { setCurrentView, setActiveCategory } = useNews();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (view: any, cat?: string) => {
    setCurrentView(view);
    if (cat) setActiveCategory(cat);
    scrollToTop();
  };

  return (
    <footer className="w-full bg-[#111827] text-stone-300 pt-12 pb-8 border-t-4 border-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-stone-800">
          
          {/* Brand & Organization Credibility (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <div className="text-xs uppercase tracking-widest text-red-500 font-bold mb-1">
                ଓଡ଼ିଶାର ଅଗ୍ରଣୀ ଦୈନିକ ଖବର କାଗଜ ଓ ଡିଜିଟାଲ୍ ପୋର୍ଟାଲ୍
              </div>
              <h2 className="font-masthead text-3xl font-extrabold text-white tracking-tight">
                PRIME TIME PRESS
              </h2>
              <div className="font-serif-odia text-xl font-bold text-red-500 mt-1">
                {SITE_INFO.odiaName}
              </div>
              <p className="font-serif-odia italic text-stone-400 text-sm mt-1">
                {SITE_INFO.tagline}
              </p>
            </div>

            <div className="text-xs text-stone-400 space-y-2 pt-2 border-t border-stone-800/80">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>ପଞ୍ଜୀକରଣ ସଂଖ୍ୟା (RNI Reg No):</strong> {SITE_INFO.registrationNo}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>
                  <strong>ମୁଖ୍ୟ କାର୍ଯ୍ୟାଳୟ:</strong> {SITE_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <span>
                  <strong>ଇମେଲ୍:</strong> <a href={`mailto:${SITE_INFO.email}`} className="text-stone-200 hover:text-white underline">{SITE_INFO.email}</a>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-stone-400 shrink-0" />
                <span>
                  <strong>ଫୋନ୍ / ହ୍ୱାଟ୍ସଆପ୍:</strong> <a href={`tel:${SITE_INFO.phone}`} className="text-stone-200 hover:text-white font-mono">{SITE_INFO.phone}</a>
                </span>
              </div>
            </div>

            {/* Editorial Leadership Badge */}
            <div className="p-3 bg-stone-900 rounded border border-stone-800 text-xs">
              <span className="text-stone-400">ମୁଖ୍ୟ ସମ୍ପାଦକ:</span>{' '}
              <strong className="text-white font-serif-odia">{SITE_INFO.editor}</strong>
            </div>

            {/* Official Social Media Connect Strip */}
            <div className="pt-2 flex items-center gap-3">
              <span className="text-xs font-bold text-stone-400">ଅନୁସରଣ କରନ୍ତୁ:</span>
              <a
                href={SITE_INFO.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-colors"
                title="Prime Time Odia News on YouTube"
              >
                <span>▶ YouTube</span>
              </a>
              <a
                href={SITE_INFO.facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#1877F2] hover:bg-[#0c6be4] text-white text-xs font-bold transition-colors"
                title="Prime Time Odia News on Facebook"
              >
                <span>f Facebook</span>
              </a>
              <a
                href={SITE_INFO.whatsappChannelUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
                title="Prime Time Press WhatsApp Channel"
              >
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Categories Navigation (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif-odia text-base font-bold text-white border-b border-stone-700 pb-2">
              ପ୍ରମୁଖ ବିଭାଗ (Categories)
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs">
              {CATEGORIES.slice(0, 14).map(c => (
                <li key={c.id}>
                  <button
                    onClick={() => handleNav('home', c.slug || 'all')}
                    className="text-stone-400 hover:text-white transition-colors truncate text-left"
                  >
                    • {c.nameOdia}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Public Services & Policies (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-serif-odia text-base font-bold text-white border-b border-stone-700 pb-2">
              ଜନସେବା ଓ ନୀତି (Citizen Services)
            </h3>

            <div className="space-y-2 text-xs">
              <button
                onClick={() => handleNav('grievance', 'grievance')}
                className="w-full text-left p-2.5 bg-red-950/60 border border-red-900 rounded hover:bg-red-900 text-stone-200 flex items-center justify-between transition-colors"
              >
                <span className="font-serif-odia font-bold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>ଜନତାର ଦରବାର (Report Your Problem)</span>
                </span>
                <span className="text-amber-400 text-[10px]">କ୍ଲିକ୍ କରନ୍ତୁ →</span>
              </button>

              <button
                onClick={() => handleNav('epaper', 'epaper')}
                className="w-full text-left p-2.5 bg-stone-900 border border-stone-800 rounded hover:bg-stone-800 text-stone-200 flex items-center justify-between transition-colors"
              >
                <span className="font-serif-odia font-bold flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-amber-400" />
                  <span>ଦୈନିକ ଇ-ପେପର୍ (Daily E-Paper Archive)</span>
                </span>
                <span className="text-amber-400 text-[10px]">ଖୋଲନ୍ତୁ →</span>
              </button>

              <button
                onClick={onOpenAdvertiseModal}
                className="w-full text-left p-2.5 bg-stone-900 border border-stone-800 rounded hover:bg-stone-800 text-stone-200 flex items-center justify-between transition-colors"
              >
                <span className="font-serif-odia font-bold">
                  ବିଜ୍ଞାପନ ପାଇଁ ଯୋଗାଯୋଗ (Advertise With Us)
                </span>
                <span className="text-stone-400 text-[10px]">ସମ୍ପର୍କ →</span>
              </button>
            </div>

            {/* Legal & Editorial Links */}
            <div className="pt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-400">
              <span className="hover:text-white cursor-pointer">About Us</span>
              <span className="hover:text-white cursor-pointer">Contact Us</span>
              <span className="hover:text-white cursor-pointer">Privacy Policy</span>
              <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
              <span className="hover:text-white cursor-pointer">Disclaimer</span>
              <span className="hover:text-white cursor-pointer">Editorial Policy</span>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Scroll to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <div>
            © ୨୦୨୬ <strong>Prime Time Press</strong> (ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଦୈନିକ ଖବର କାଗଜ). All Rights Reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <span>ପଞ୍ଜୀକୃତ ସଂଖ୍ୟା: {SITE_INFO.registrationNo}</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-300 transition-colors"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  FileText, 
  AlertCircle, 
  Share2, 
  Menu, 
  X, 
  Globe, 
  UserCheck, 
  LogIn, 
  LogOut, 
  Sparkles,
  PhoneCall,
  Calendar,
  Clock,
  ChevronDown
} from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { CATEGORIES, SITE_INFO } from '../data/initialData';
import { Language } from '../types';

interface HeaderProps {
  onOpenSearch: () => void;
  onOpenAdvertiseModal: () => void;
  onOpenLoginModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onOpenSearch, 
  onOpenAdvertiseModal,
  onOpenLoginModal 
}) => {
  const { 
    activeCategory, 
    setActiveCategory, 
    activeLanguage, 
    setActiveLanguage,
    currentUser,
    logoutUser,
    setCurrentView,
    currentView 
  } = useNews();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [currentDateString, setCurrentDateString] = useState<string>('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      // Format time in Indian standard
      const timeStr = now.toLocaleTimeString('or-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      setCurrentTime(timeStr);

      const daysOdia = ['ରବିବାର', 'ସୋମବାର', 'ମଙ୍ଗଳବାର', 'ବୁଧବାର', 'ଗୁରୁବାର', 'ଶୁକ୍ରବାର', 'ଶନିବାର'];
      const monthsOdia = ['ଜାନୁଆରୀ', 'ଫେବୃଆରୀ', 'ମାର୍ଚ୍ଚ', 'ଏପ୍ରିଲ', 'ମେ', 'ଜୁନ୍', 'ଜୁଲାଇ', 'ଅଗଷ୍ଟ', 'ସେପ୍ଟେମ୍ବର', 'ଅକ୍ଟୋବର', 'ନଭେମ୍ବର', 'ଡିସେମ୍ବର'];
      
      const dayName = daysOdia[now.getDay()];
      const dayNum = now.getDate();
      const monthName = monthsOdia[now.getMonth()];
      const year = now.getFullYear();

      setCurrentDateString(`${dayName}, ${dayNum} ${monthName} ${year}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const languages: { code: Language; name: string }[] = [
    { code: 'or', name: 'ଓଡ଼ିଆ' },
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'mr', name: 'मराठी' },
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
    { code: 'kn', name: 'ಕನ್ನಡ' }
  ];

  const handleNavClick = (categorySlug: string) => {
    setMobileMenuOpen(false);
    if (categorySlug === 'epaper') {
      setCurrentView('epaper');
      setActiveCategory('epaper');
    } else if (categorySlug === 'grievance') {
      setCurrentView('grievance');
      setActiveCategory('grievance');
    } else if (categorySlug === 'editorial') {
      setCurrentView('editorial');
      setActiveCategory('editorial');
    } else if (categorySlug === 'video') {
      setCurrentView('videos');
      setActiveCategory('video');
    } else {
      setActiveCategory(categorySlug || 'all');
      setCurrentView('home');
    }
  };

  return (
    <header className="w-full bg-white border-b border-stone-200">
      {/* 1. TOP UTILITY BAR */}
      <div className="bg-[#111827] text-stone-300 text-xs py-1.5 px-4 sm:px-6 border-b border-stone-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Date, Day, Time, Location */}
          <div className="flex items-center gap-3 flex-wrap">
            <span className="flex items-center gap-1.5 text-stone-200 font-medium">
              <Calendar className="w-3.5 h-3.5 text-red-500" />
              <span>{currentDateString || 'ଶୁକ୍ରବାର, ୨୯ ମେ ୨୦୨୬'}</span>
            </span>
            <span className="hidden sm:inline text-stone-600">|</span>
            <span className="hidden sm:flex items-center gap-1 text-stone-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{currentTime}</span>
            </span>
            <span className="hidden md:inline text-stone-600">|</span>
            <span className="hidden md:inline text-amber-400 font-medium">
              ବାରିପଦା • ମୟୂରଭଞ୍ଜ ସଂସ୍କରଣ
            </span>
          </div>

          {/* Right: Social Links, Language selector, Auth */}
          <div className="flex items-center gap-3">
            {/* Social Links */}
            <div className="hidden lg:flex items-center gap-2">
              <a 
                href={SITE_INFO.facebookUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors"
                title="Facebook"
              >
                <span className="sr-only">Facebook</span>
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-[10px]">f</span>
              </a>
              <a 
                href={SITE_INFO.youtubeUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors"
                title="YouTube"
              >
                <span className="sr-only">YouTube</span>
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-red-600 text-white font-bold text-[10px]">▶</span>
              </a>
              <a 
                href={SITE_INFO.whatsappChannelUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="hover:text-white transition-colors"
                title="WhatsApp Channel"
              >
                <span className="sr-only">WhatsApp Channel</span>
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-[10px]">W</span>
              </a>
            </div>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-stone-800 hover:bg-stone-700 text-stone-200 transition-colors"
                aria-label="Select Language"
              >
                <Globe className="w-3.5 h-3.5 text-stone-400" />
                <span className="font-semibold">{languages.find(l => l.code === activeLanguage)?.name || 'ଓଡ଼ିଆ'}</span>
                <ChevronDown className="w-3 h-3 text-stone-400" />
              </button>

              {langDropdownOpen && (
                <div 
                  className="absolute right-0 mt-1 w-36 bg-white border border-stone-200 rounded shadow-lg z-50 py-1 text-stone-800"
                  onMouseLeave={() => setLangDropdownOpen(false)}
                >
                  <div className="px-3 py-1 text-[11px] font-bold text-stone-400 border-b border-stone-100 uppercase">
                    ଭାଷା ଚୟନ କରନ୍ତୁ
                  </div>
                  {languages.map(l => (
                    <button
                      key={l.code}
                      onClick={() => {
                        setActiveLanguage(l.code);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs hover:bg-stone-100 transition-colors flex items-center justify-between ${
                        activeLanguage === l.code ? 'font-bold text-red-700 bg-red-50' : 'text-stone-700'
                      }`}
                    >
                      <span>{l.name}</span>
                      {activeLanguage === l.code && <span className="text-red-700 text-[10px]">✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Admin / Reporter Login Button */}
            {currentUser ? (
              <div className="flex items-center gap-1.5 pl-1 border-l border-stone-700">
                <button
                  onClick={() => {
                    if (currentUser.role === 'admin' || currentUser.role === 'editor') {
                      setCurrentView('admin');
                    } else {
                      setCurrentView('reporter');
                    }
                  }}
                  className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
                >
                  <UserCheck className="w-3.5 h-3.5" />
                  <span className="capitalize">{currentUser.role}: {currentUser.name.split(' ')[0]}</span>
                </button>
                <button
                  onClick={logoutUser}
                  title="Logout"
                  className="text-stone-400 hover:text-red-400 ml-1"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenLoginModal}
                className="flex items-center gap-1 px-2 py-0.5 rounded bg-red-700 hover:bg-red-800 text-white font-medium transition-colors"
              >
                <LogIn className="w-3 h-3" />
                <span>ଲଗଇନ୍</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 2. MAIN NEWSPAPER MASTHEAD */}
      <div className="py-4 px-4 sm:px-6 bg-[#FCFBF7] border-b border-stone-300">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Left quick trust badge */}
          <div className="hidden lg:flex flex-col text-left text-xs text-stone-600 border-l-2 border-red-700 pl-3">
            <span className="font-semibold text-stone-800">ଓଡ଼ିଶାର ନିର୍ଭୀକ ସ୍ୱର</span>
            <span className="text-[11px] text-stone-500">ପଞ୍ଜୀକରଣ: {SITE_INFO.registrationNo}</span>
            <span className="text-[11px] text-stone-500">ସମ୍ପାଦକ: ସୁଶାନ୍ତ ନାୟକ</span>
          </div>

          {/* Center: Authentic Newspaper Name & Brand Lockup */}
          <div className="text-center cursor-pointer" onClick={() => { setCurrentView('home'); setActiveCategory('all'); }}>
            <div className="text-xs uppercase tracking-widest text-red-700 font-bold mb-1">
              ସତ୍ୟର ଅନୁସନ୍ଧାନ • ଜନତାର ଅଧିକାର
            </div>
            <h1 className="font-masthead text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#111827]">
              PRIME TIME PRESS
            </h1>
            <div className="font-serif-odia text-xl sm:text-2xl md:text-3xl font-bold text-red-700 mt-1">
              {SITE_INFO.odiaName}
            </div>
            <p className="font-serif-odia italic text-stone-700 text-sm sm:text-base mt-0.5">
              {SITE_INFO.tagline}
            </p>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            {/* E-Paper Button */}
            <button
              onClick={() => { setCurrentView('epaper'); setActiveCategory('epaper'); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded text-xs font-bold transition-all shadow-sm ${
                currentView === 'epaper' 
                  ? 'bg-red-700 text-white' 
                  : 'bg-stone-900 hover:bg-black text-white'
              }`}
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>ଇ-ପେପର୍ (E-Paper)</span>
            </button>

            {/* Grievance Portal Button */}
            <button
              onClick={() => { setCurrentView('grievance'); setActiveCategory('grievance'); }}
              className={`flex items-center gap-1.5 px-3 py-2 rounded text-xs font-bold transition-all shadow-sm ${
                currentView === 'grievance'
                  ? 'bg-amber-600 text-white'
                  : 'bg-amber-500 hover:bg-amber-600 text-stone-950'
              }`}
            >
              <AlertCircle className="w-4 h-4" />
              <span>ଜନସମସ୍ୟା ଜଣାନ୍ତୁ</span>
            </button>

            {/* Advertise Button */}
            <button
              onClick={onOpenAdvertiseModal}
              className="hidden sm:flex items-center gap-1 px-2.5 py-2 rounded text-xs font-medium border border-stone-300 hover:bg-stone-100 text-stone-700 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>ବିଜ୍ଞାପନ</span>
            </button>

            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 rounded border border-stone-300 hover:bg-stone-100 text-stone-700 transition-colors"
              title="Search news"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded bg-stone-100 border border-stone-300 text-stone-800"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. DESKTOP NAVIGATION MENU (20 Categories) */}
      <nav className="hidden md:block bg-[#B91C1C] text-white shadow-sm border-t border-red-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between overflow-x-auto scrollbar-none py-1">
            <div className="flex items-center space-x-1 flex-nowrap min-w-max">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === (cat.slug || 'all');
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleNavClick(cat.slug)}
                    className={`px-3 py-1.5 text-xs font-semibold whitespace-nowrap rounded-sm transition-colors ${
                      isActive 
                        ? 'bg-stone-950 text-white shadow-inner font-bold' 
                        : 'text-stone-100 hover:bg-red-800 hover:text-white'
                    }`}
                  >
                    {cat.nameOdia}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* 4. MOBILE SLIDE-OUT MENU */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full shadow-2xl flex flex-col overflow-y-auto">
            {/* Mobile Header */}
            <div className="p-4 bg-[#B91C1C] text-white flex items-center justify-between">
              <div>
                <h2 className="font-masthead font-bold text-lg">PRIME TIME PRESS</h2>
                <p className="text-xs text-stone-200">ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଦୈନିକ ଖବର କାଗଜ</p>
              </div>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded hover:bg-red-800 text-white"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Quick action buttons in mobile menu */}
            <div className="p-4 bg-stone-50 border-b border-stone-200 grid grid-cols-2 gap-2">
              <button
                onClick={() => { handleNavClick('epaper'); }}
                className="flex items-center justify-center gap-1.5 py-2 bg-stone-900 text-white text-xs font-bold rounded"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>ଇ-ପେପର୍</span>
              </button>
              <button
                onClick={() => { handleNavClick('grievance'); }}
                className="flex items-center justify-center gap-1.5 py-2 bg-amber-500 text-stone-950 text-xs font-bold rounded"
              >
                <AlertCircle className="w-4 h-4" />
                <span>ଜନସମସ୍ୟା</span>
              </button>
            </div>

            {/* Category Nav Links */}
            <div className="p-2 divide-y divide-stone-100">
              <div className="px-3 py-2 text-xs font-bold text-stone-400 uppercase">
                ସମସ୍ତ ବିଭାଗ (Categories)
              </div>
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === (cat.slug || 'all');
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleNavClick(cat.slug)}
                    className={`w-full text-left px-3 py-2.5 text-sm flex items-center justify-between ${
                      isActive 
                        ? 'font-bold text-red-700 bg-red-50 rounded' 
                        : 'text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>{cat.nameOdia}</span>
                    <span className="text-xs text-stone-400">{cat.nameEn}</span>
                  </button>
                );
              })}
            </div>

            {/* Footer inside mobile menu */}
            <div className="mt-auto p-4 bg-stone-100 border-t border-stone-200 text-xs text-stone-600">
              <div className="font-semibold text-stone-800 mb-1">ସମ୍ପର୍କ:</div>
              <p>Email: {SITE_INFO.email}</p>
              <p>Phone: {SITE_INFO.phone}</p>
              <p className="mt-2 text-[11px] text-stone-500">
                ଠିକଣା: {SITE_INFO.address}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

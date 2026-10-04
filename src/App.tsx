import React, { useState } from 'react';
import { NewsProvider, useNews } from './context/NewsContext';
import { Header } from './components/Header';
import { BreakingNewsBar } from './components/BreakingNewsBar';
import { LeadNewsSection } from './components/LeadNewsSection';
import { LatestNewsFeed } from './components/LatestNewsFeed';
import { MayurbhanjSpecial } from './components/MayurbhanjSpecial';
import { CategoryNewsSection } from './components/CategoryNewsSection';
import { EditorialColumn } from './components/EditorialColumn';
import { EPaperSection } from './components/EPaperSection';
import { GrievanceBanner } from './components/GrievanceBanner';
import { PhotoNewsSection } from './components/PhotoNewsSection';
import { VideoNewsSection } from './components/VideoNewsSection';
import { ArticleDetailPage } from './components/ArticleDetailPage';
import { EPaperReaderModal } from './components/EPaperReaderModal';
import { GrievancePortal } from './components/GrievancePortal';
import { AdminDashboard } from './components/AdminDashboard';
import { ReporterDashboard } from './components/ReporterDashboard';
import { SearchModal } from './components/SearchModal';
import { Modals } from './components/Modals';
import { AdBanner } from './components/AdBanner';
import { Footer } from './components/Footer';

const MainPortalContent: React.FC = () => {
  const { currentView, setCurrentView, activeCategory } = useNews();

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [advertiseModalOpen, setAdvertiseModalOpen] = useState(false);

  // Render Dedicated Views
  if (currentView === 'epaper') {
    return (
      <>
        <EPaperReaderModal />
        <Footer onOpenAdvertiseModal={() => setAdvertiseModalOpen(true)} />
      </>
    );
  }

  if (currentView === 'article') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
        <Header 
          onOpenSearch={() => setSearchModalOpen(true)} 
          onOpenAdvertiseModal={() => setAdvertiseModalOpen(true)}
          onOpenLoginModal={() => setLoginModalOpen(true)}
        />
        <BreakingNewsBar />
        <main className="flex-1">
          <ArticleDetailPage />
        </main>
        <Footer onOpenAdvertiseModal={() => setAdvertiseModalOpen(true)} />
        <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
        <Modals 
          loginOpen={loginModalOpen} 
          onCloseLogin={() => setLoginModalOpen(false)}
          advertiseOpen={advertiseModalOpen}
          onCloseAdvertise={() => setAdvertiseModalOpen(false)}
        />
      </div>
    );
  }

  if (currentView === 'grievance' || currentView === 'track_grievance') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
        <Header 
          onOpenSearch={() => setSearchModalOpen(true)} 
          onOpenAdvertiseModal={() => setAdvertiseModalOpen(true)}
          onOpenLoginModal={() => setLoginModalOpen(true)}
        />
        <main className="flex-1">
          <GrievancePortal />
        </main>
        <Footer onOpenAdvertiseModal={() => setAdvertiseModalOpen(true)} />
        <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
        <Modals 
          loginOpen={loginModalOpen} 
          onCloseLogin={() => setLoginModalOpen(false)}
          advertiseOpen={advertiseModalOpen}
          onCloseAdvertise={() => setAdvertiseModalOpen(false)}
        />
      </div>
    );
  }

  if (currentView === 'admin') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F1F5F9]">
        <AdminDashboard />
        <Footer onOpenAdvertiseModal={() => setAdvertiseModalOpen(true)} />
      </div>
    );
  }

  if (currentView === 'reporter') {
    return (
      <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
        <ReporterDashboard />
        <Footer onOpenAdvertiseModal={() => setAdvertiseModalOpen(true)} />
      </div>
    );
  }

  // HOMEPAGE VIEW (Full 24-step Newspaper layout)
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA]">
      {/* 1. HEADER */}
      <Header 
        onOpenSearch={() => setSearchModalOpen(true)} 
        onOpenAdvertiseModal={() => setAdvertiseModalOpen(true)}
        onOpenLoginModal={() => setLoginModalOpen(true)}
      />

      {/* 2. BREAKING NEWS TICKER */}
      <BreakingNewsBar />

      <main className="flex-1">
        {/* Top Header Ad banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <AdBanner 
            placement="leaderboard" 
            onOpenAdvertiseModal={() => setAdvertiseModalOpen(true)}
          />
        </div>

        {/* SECTION 1: MAIN FEATURED LEAD NEWS */}
        <LeadNewsSection />

        {/* SECTION 2: LATEST NEWS (ତାଜା ଖବର) */}
        <LatestNewsFeed />

        {/* SECTION 3: ODISHA NEWS (ଓଡ଼ିଶା ଖବର) */}
        <CategoryNewsSection 
          categoryKey="odisha"
          titleOdia="ଓଡ଼ିଶା ଖବର"
          titleEn="Odisha State News"
          tagline="ଭୁବନେଶ୍ୱର, କଟକ, ରାଜ୍ୟ ପ୍ରଶାସନ ଓ ବିକାଶ ଖବର"
          borderColor="border-red-700"
        />

        {/* SECTION 4: MAYURBHANJ SPECIAL (ମୟୂରଭଞ୍ଜ ଖବର) */}
        <MayurbhanjSpecial />

        {/* SECTION 5: POLITICAL NEWS (ରାଜନୀତି) */}
        <CategoryNewsSection 
          categoryKey="politics"
          titleOdia="ରାଜନୀତି"
          titleEn="Political Developments"
          tagline="ବିଜେପି, ବିଜେଡି, କଂଗ୍ରେସ ଓ ବିଧାନସଭା ଗତିବିଧି"
          borderColor="border-indigo-700"
        />

        {/* SECTION 6: CRIME NEWS (ଅପରାଧ) */}
        <CategoryNewsSection 
          categoryKey="crime"
          titleOdia="ଅପରାଧ ଓ ଆଇନ"
          titleEn="Crime & Public Safety"
          tagline="ପୋଲିସ, ଅଦାଲତ ଓ ସାଇବର ସୁରକ୍ଷା ଖବର"
          borderColor="border-rose-800"
        />

        {/* SECTION 7: EDUCATION & JOBS (ଶିକ୍ଷା ଓ ଚାକିରି) */}
        <CategoryNewsSection 
          categoryKey="education"
          titleOdia="ଶିକ୍ଷା ଓ ନିଯୁକ୍ତି"
          titleEn="Education & Career"
          tagline="ସରକାରୀ ଚାକିରି, OPSC, OSSSC ଓ ପରୀକ୍ଷା ଫଳାଫଳ"
          borderColor="border-blue-700"
        />

        {/* SECTION 8: AGRICULTURE (କୃଷି) */}
        <CategoryNewsSection 
          categoryKey="agriculture"
          titleOdia="କୃଷି ଓ ଗ୍ରାମୀଣ ଅର୍ଥନୀତି"
          titleEn="Agriculture & Farmers"
          tagline="ପିଏମ୍-କିଷାନ୍, ଫସଲ ବୀମା, ମଣ୍ଡି ଓ ପାଣିପାଗ"
          borderColor="border-emerald-700"
        />

        {/* SECTION 9: BUSINESS (ବ୍ୟବସାୟ) */}
        <CategoryNewsSection 
          categoryKey="business"
          titleOdia="ବ୍ୟବସାୟ ଓ ବାଣିଜ୍ୟ"
          titleEn="Business & Economy"
          tagline="ସ୍ଥାନୀୟ ବଜାର, MSME, ସବାଇ ଶିଳ୍ପ ଓ ବ୍ୟାଙ୍କିଙ୍ଗ୍"
          borderColor="border-amber-700"
        />

        {/* SECTION 10: SPORTS (କ୍ରୀଡ଼ା) */}
        <CategoryNewsSection 
          categoryKey="sports"
          titleOdia="କ୍ରୀଡ଼ା ଜଗତ"
          titleEn="Sports"
          tagline="ହକି, କ୍ରିକେଟ୍, ଫୁଟବଲ୍ ଓ ଓଡ଼ିଶା ଆଥଲେଟିକ୍ସ"
          borderColor="border-teal-700"
        />

        {/* PHOTO NEWS SECTION */}
        <PhotoNewsSection />

        {/* PRIME TIME PRESS VIDEO NEWS SECTION */}
        <VideoNewsSection />

        {/* E-PAPER HOMEPAGE SECTION */}
        <EPaperSection />

        {/* EDITOR'S COLUMN (ସମ୍ପାଦକଙ୍କ କଲମରୁ) */}
        <EditorialColumn />

        {/* REPORT YOUR PROBLEM CALLOUT BANNER */}
        <GrievanceBanner />
      </main>

      {/* FOOTER */}
      <Footer onOpenAdvertiseModal={() => setAdvertiseModalOpen(true)} />

      {/* MODALS */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <Modals 
        loginOpen={loginModalOpen} 
        onCloseLogin={() => setLoginModalOpen(false)}
        advertiseOpen={advertiseModalOpen}
        onCloseAdvertise={() => setAdvertiseModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <NewsProvider>
      <MainPortalContent />
    </NewsProvider>
  );
}

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  FileText, 
  AlertCircle, 
  Radio, 
  Users, 
  Settings, 
  Plus, 
  Trash2, 
  Edit3, 
  Check, 
  X, 
  Eye, 
  ArrowLeft, 
  Sparkles, 
  Shield, 
  Layers, 
  Search, 
  Video, 
  Play, 
  Upload, 
  Calendar, 
  KeyRound, 
  BookOpen, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { NewsArticle, BreakingNewsItem, GrievanceComplaint, GrievanceStatus, EPaperIssue, VideoNewsItem } from '../types';
import { CATEGORIES, MAYURBHANJ_BLOCKS, DEFAULT_CREDENTIALS, SITE_INFO } from '../data/initialData';

export const AdminDashboard: React.FC = () => {
  const { 
    articles, 
    addArticle, 
    updateArticle, 
    deleteArticle, 
    breakingNews, 
    addBreakingNews, 
    updateBreakingNews, 
    deleteBreakingNews, 
    toggleBreakingNews,
    complaints, 
    updateComplaintStatus,
    epaperIssues, 
    addEPaperIssue,
    deleteEPaperIssue,
    videoNews, 
    addVideo, 
    deleteVideo,
    currentUser, 
    setCurrentView,
    setSelectedEPaperIssue
  } = useNews();

  const [activeTab, setActiveTab] = useState<'overview' | 'news' | 'create_news' | 'post_video' | 'epaper' | 'breaking' | 'complaints'>('overview');

  // --- Article Form State ---
  const [newsTitle, setNewsTitle] = useState('');
  const [newsSubtitle, setNewsSubtitle] = useState('');
  const [newsCategory, setNewsCategory] = useState('odisha');
  const [newsDistrict, setNewsDistrict] = useState('ମୟୂରଭଞ୍ଜ');
  const [newsBlock, setNewsBlock] = useState('ବାରିପଦା');
  const [newsAuthor, setNewsAuthor] = useState(currentUser?.name || 'ସୁଶାନ୍ତ କୁମାର ନାୟକ');
  const [newsSummary, setNewsSummary] = useState('');
  const [newsContent, setNewsContent] = useState('');
  const [newsImageUrl, setNewsImageUrl] = useState('/src/assets/images/mayurbhanj_baripada_1791117262571.jpg');
  const [newsIsLead, setNewsIsLead] = useState(false);
  const [newsIsTrending, setNewsIsTrending] = useState(false);

  // --- Video Form State ---
  const [videoTitle, setVideoTitle] = useState('');
  const [videoUrlOrId, setVideoUrlOrId] = useState('');
  const [videoDuration, setVideoDuration] = useState('06:30');
  const [videoCategory, setVideoCategory] = useState('ଗ୍ରାଉଣ୍ଡ ରିପୋର୍ଟ');
  const [videoThumbnail, setVideoThumbnail] = useState('');
  const [videoSuccess, setVideoSuccess] = useState(false);

  // --- Newspaper / E-Paper Form State ---
  const [issueDate, setIssueDate] = useState('2026-05-30');
  const [issueDateOdia, setIssueDateOdia] = useState('ଶନିବାର, ୩୦ ମେ ୨୦୨୬');
  const [issueNumber, setIssueNumber] = useState('ସଂଖ୍ୟା ୧୧');
  const [volumeNumber, setVolumeNumber] = useState('ବର୍ଷ ୦୧');
  const [editionLocation, setEditionLocation] = useState('ବାରିପଦା ମୁଖ୍ୟ ସଂସ୍କରଣ');
  const [issuePrice, setIssuePrice] = useState('₹୫.୦୦');
  const [issueTotalPages, setIssueTotalPages] = useState(12);
  const [coverImage, setCoverImage] = useState('/src/assets/images/prime_time_newspaper_cover_1791117304778.jpg');
  const [epaperSuccess, setEpaperSuccess] = useState(false);

  // --- Breaking News Form State ---
  const [breakingText, setBreakingText] = useState('');
  const [breakingPriority, setBreakingPriority] = useState(1);

  // --- Complaint Edit State ---
  const [selectedComplaint, setSelectedComplaint] = useState<GrievanceComplaint | null>(null);
  const [complaintNewStatus, setComplaintNewStatus] = useState<GrievanceStatus>('Under Review');
  const [complaintNote, setComplaintNote] = useState('');
  const [complaintReporter, setComplaintReporter] = useState('');
  const [complaintInternalNote, setComplaintInternalNote] = useState('');

  // Stats calculation
  const totalArticles = articles.length;
  const totalViews = articles.reduce((acc, curr) => acc + (curr.views || 0), 0);
  const totalComplaints = complaints.length;
  const pendingComplaints = complaints.filter(c => c.status !== 'Resolved' && c.status !== 'Closed').length;

  // Extract YouTube Video ID
  const extractYouTubeId = (url: string) => {
    if (!url) return 'dQw4w9WgXcQ';
    const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/);
    return match ? match[1] : url.trim();
  };

  // 1. Post Article
  const handleCreateArticle = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitle || !newsContent) {
      alert('ଦୟାକରି ଶୀର୍ଷକ ଏବଂ ବିବରଣୀ ପ୍ରବେଶ କରନ୍ତୁ।');
      return;
    }

    addArticle({
      slug: newsTitle.toLowerCase().replace(/[^\w\u0B00-\u0B7F]+/g, '-').slice(0, 50),
      title: newsTitle,
      subtitle: newsSubtitle,
      category: newsCategory,
      district: newsDistrict,
      block: newsBlock,
      author: newsAuthor,
      authorRole: 'ବ୍ୟୁରୋ ରିପୋର୍ଟର',
      publishedAt: '୨୯ ମେ ୨୦୨୬, ଏବେ',
      readTimeMinutes: 3,
      image: newsImageUrl,
      imageCaption: newsTitle,
      summary: newsSummary || newsContent.slice(0, 140) + '...',
      content: newsContent,
      isLead: newsIsLead,
      isTrending: newsIsTrending,
      tags: [newsCategory, newsDistrict],
      status: 'published'
    });

    alert('ଖବର ସଫଳତାର ସହ ପ୍ରକାଶିତ ହେଲା!');
    setNewsTitle('');
    setNewsSubtitle('');
    setNewsSummary('');
    setNewsContent('');
    setActiveTab('news');
  };

  // 2. Post Video
  const handlePostVideo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoTitle.trim() || !videoUrlOrId.trim()) {
      alert('ଦୟାକରି ଭିଡିଓ ଶୀର୍ଷକ ଏବଂ ୟୁଟ୍ୟୁବ୍ ଲିଙ୍କ୍ ଦିଅନ୍ତୁ।');
      return;
    }

    const yId = extractYouTubeId(videoUrlOrId);
    const thumb = videoThumbnail.trim() || `https://img.youtube.com/vi/${yId}/hqdefault.jpg`;

    addVideo({
      title: videoTitle.trim(),
      youtubeId: yId,
      duration: videoDuration || '05:00',
      category: videoCategory,
      publishedAt: 'ଏହି ମାତ୍ର',
      channel: SITE_INFO.youtubeChannel,
      thumbnailUrl: thumb
    });

    setVideoSuccess(true);
    setVideoTitle('');
    setVideoUrlOrId('');
    setTimeout(() => setVideoSuccess(false), 3000);
  };

  // 3. Post Newspaper / E-Paper
  const handlePostNewspaper = (e: React.FormEvent) => {
    e.preventDefault();
    if (!issueDateOdia.trim() || !issueNumber.trim()) {
      alert('ଦୟାକରି ସଂସ୍କରଣର ତାରିଖ ଓ ସଂଖ୍ୟା ଲେଖନ୍ତୁ।');
      return;
    }

    // Standard 12-page broadsheet composition
    const generatedPages = [
      { pageNumber: 1, title: 'ମୁଖ୍ୟ ପୃଷ୍ଠା (Front Page)', section: 'ମୁଖ୍ୟ ଆକର୍ଷଣ', imageUrl: coverImage },
      { pageNumber: 2, title: 'ଓଡ଼ିଶା ଆଞ୍ଚଳିକ (Odisha Regional)', section: 'ଓଡ଼ିଶା ଆଞ୍ଚଳିକ', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 3, title: 'ମୟୂରଭଞ୍ଜ ସ୍ୱତନ୍ତ୍ର (Mayurbhanj Special)', section: 'ମୟୂରଭଞ୍ଜ ସ୍ୱତନ୍ତ୍ର', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 4, title: 'ସମ୍ପାଦକଙ୍କ କଲମରୁ (Editorial)', section: 'ସମ୍ପାଦକଙ୍କ କଲମରୁ', imageUrl: coverImage },
      { pageNumber: 5, title: 'କୃଷି ଓ ଗ୍ରାମୀଣ ଅର୍ଥନୀତି', section: 'କୃଷି', imageUrl: '/src/assets/images/odisha_agriculture_farmers_1791117276754.jpg' },
      { pageNumber: 6, title: 'ଦେଶ ବିଦେଶ (National & World)', section: 'ଦେଶ ବିଦେଶ', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 7, title: 'ଶିକ୍ଷା ଓ ରୋଜଗାର (Jobs & Education)', section: 'ଶିକ୍ଷା', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 8, title: 'ବ୍ୟବସାୟ ଓ ବାଣିଜ୍ୟ (Business)', section: 'ବ୍ୟବସାୟ', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 9, title: 'ଖେଳ ଦୁନିଆ (Sports)', section: 'କ୍ରୀଡ଼ା', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 10, title: 'ଜନସମସ୍ୟା ଓ ଜନତାର ଦରବାର', section: 'ଜନସମସ୍ୟା', imageUrl: coverImage },
      { pageNumber: 11, title: 'ଫଟୋ ଫିଚର ଓ ସାଂସ୍କୃତିକ', section: 'ରବିବାର ବିଶେଷ', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 12, title: 'ଶେଷ ପୃଷ୍ଠା - ବିଶେଷ ଖବର', section: 'ମୁଖ୍ୟ ଆକର୍ଷଣ', imageUrl: coverImage }
    ];

    const newIssue: Omit<EPaperIssue, 'id'> = {
      issueNumber,
      volumeNumber,
      date: issueDate,
      dateOdia: issueDateOdia,
      editionLocation,
      price: issuePrice,
      totalPages: issueTotalPages,
      coverImage,
      pdfUrl: '#',
      pages: generatedPages
    };

    addEPaperIssue(newIssue);
    setEpaperSuccess(true);
    setTimeout(() => setEpaperSuccess(false), 3000);
  };

  const handleAddBreaking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!breakingText.trim()) return;
    addBreakingNews(breakingText.trim(), '', breakingPriority);
    setBreakingText('');
  };

  const handleUpdateComplaintStatus = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedComplaint) return;
    updateComplaintStatus(
      selectedComplaint.id,
      complaintNewStatus,
      complaintNote || `ସ୍ଥିତି ପରିବର୍ତ୍ତିତ: ${complaintNewStatus}`,
      complaintReporter,
      complaintInternalNote
    );
    setSelectedComplaint(null);
  };

  return (
    <div className="w-full min-h-screen bg-[#F1F5F9] py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Admin Top Bar */}
        <div className="bg-white border border-stone-200 rounded-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCurrentView('home')}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded text-xs font-semibold"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ମୁଖ୍ୟ ପୋର୍ଟାଲ୍</span>
            </button>
            <div>
              <h1 className="font-serif-odia font-bold text-lg text-stone-900 flex items-center gap-2">
                <span>ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ପ୍ରଶାସନିକ ଡ୍ୟାସବୋର୍ଡ (Admin Panel)</span>
                <span className="px-2 py-0.5 rounded bg-red-100 text-red-800 text-[11px] font-mono font-bold">
                  {currentUser?.role || 'Admin'}
                </span>
              </h1>
              <p className="text-xs text-stone-500">
                ସ୍ୱାଗତମ୍, {currentUser?.name || 'ସୁଶାନ୍ତ କୁମାର ନାୟକ'} | {SITE_INFO.address}
              </p>
            </div>
          </div>

          {/* Current Admin Credentials Badge for User Reference */}
          <div className="p-2.5 bg-amber-50 rounded border border-amber-300 text-xs flex items-center gap-3">
            <KeyRound className="w-4 h-4 text-amber-700 shrink-0" />
            <div>
              <div className="text-[10px] text-amber-800 font-bold uppercase">ଆପଣଙ୍କ ଲଗଇନ୍ କ୍ରେଡେନସିଆଲ୍ସ:</div>
              <div className="font-mono text-stone-800 text-[11px]">
                ID: <span className="font-bold text-red-700">{SITE_INFO.email}</span> | Password: <span className="font-bold text-emerald-800">admin123</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mb-6 scrollbar-none">
          {[
            { id: 'overview', label: 'ଡ୍ୟାସବୋର୍ଡ ଓଭରଭ୍ୟୁ', icon: LayoutDashboard },
            { id: 'news', label: `ସମସ୍ତ ଖବର (${totalArticles})`, icon: FileText },
            { id: 'create_news', label: 'ନୂଆ ଖବର ପୋଷ୍ଟ', icon: Plus },
            { id: 'post_video', label: `ଭିଡିଓ ପୋଷ୍ଟ୍ (${videoNews.length})`, icon: Video },
            { id: 'epaper', label: `ଖବରକାଗଜ / ଇ-ପେପର୍ (${epaperIssues.length})`, icon: Layers },
            { id: 'breaking', label: `ବ୍ରେକିଂ ନ୍ୟୁଜ୍ (${breakingNews.length})`, icon: Radio },
            { id: 'complaints', label: `ଜନସମସ୍ୟା / ଅଭିଯୋଗ (${complaints.length})`, icon: AlertCircle }
          ].map(tab => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded text-xs font-bold transition-all shadow-xs whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-red-700 text-white'
                    : 'bg-white text-stone-700 hover:bg-stone-50 border border-stone-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Stat Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white border border-stone-200 rounded p-4 shadow-xs">
                <div className="text-xs text-stone-500 font-medium">ସମୁଦାୟ ଖବର</div>
                <div className="text-2xl font-bold font-mono text-stone-900 mt-1">{totalArticles}</div>
                <div className="text-[11px] text-emerald-600 mt-1">ସକ୍ରିୟ ପୋଷ୍ଟ୍</div>
              </div>

              <div className="bg-white border border-stone-200 rounded p-4 shadow-xs">
                <div className="text-xs text-stone-500 font-medium">ପୋଷ୍ଟ୍ ହୋଇଥିବା ଭିଡିଓ</div>
                <div className="text-2xl font-bold font-mono text-red-700 mt-1">{videoNews.length}</div>
                <div className="text-[11px] text-stone-500 mt-1">ୟୁଟ୍ୟୁବ୍ ନ୍ୟୁଜ୍</div>
              </div>

              <div className="bg-white border border-stone-200 rounded p-4 shadow-xs">
                <div className="text-xs text-stone-500 font-medium">ଖବରକାଗଜ / ଇ-ପେପର୍</div>
                <div className="text-2xl font-bold font-mono text-amber-600 mt-1">{epaperIssues.length}</div>
                <div className="text-[11px] text-stone-500 mt-1">ଦୈନିକ ସଂସ୍କରଣ</div>
              </div>

              <div className="bg-white border border-stone-200 rounded p-4 shadow-xs">
                <div className="text-xs text-stone-500 font-medium">ଜନତାଙ୍କ ଅଭିଯୋଗ</div>
                <div className="text-2xl font-bold font-mono text-stone-900 mt-1">{totalComplaints}</div>
                <div className="text-[11px] text-amber-800 mt-1">{pendingComplaints} ବିଚାରାଧୀନ</div>
              </div>
            </div>

            {/* Quick Post Shortcuts */}
            <div className="p-4 bg-white border border-stone-200 rounded-lg shadow-xs flex flex-wrap items-center justify-between gap-3">
              <div className="text-xs font-bold text-stone-800">
                ତ୍ୱରିତ ପୋଷ୍ଟିଂ ସୁବିଧା (Quick Publishing Shortcuts):
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('create_news')}
                  className="px-3 py-1.5 bg-red-700 hover:bg-red-800 text-white rounded text-xs font-bold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>ନୂଆ ଖବର ଲେଖନ୍ତୁ</span>
                </button>
                <button
                  onClick={() => setActiveTab('post_video')}
                  className="px-3 py-1.5 bg-stone-900 hover:bg-black text-white rounded text-xs font-bold flex items-center gap-1"
                >
                  <Video className="w-3.5 h-3.5 text-red-400" />
                  <span>ନୂଆ ଭିଡିଓ ପୋଷ୍ଟ୍ କରନ୍ତୁ</span>
                </button>
                <button
                  onClick={() => setActiveTab('epaper')}
                  className="px-3 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded text-xs font-bold flex items-center gap-1"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>ନୂଆ ଖବରକାଗଜ ପୋଷ୍ଟ୍ କରନ୍ତୁ</span>
                </button>
              </div>
            </div>

            {/* Recent Items Preview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Videos */}
              <div className="bg-white border border-stone-200 rounded p-5 shadow-xs">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-200">
                  <h3 className="font-serif-odia font-bold text-stone-900 text-sm flex items-center gap-1.5">
                    <Video className="w-4 h-4 text-red-600" />
                    <span>ସମ୍ପ୍ରତି ପୋଷ୍ଟ୍ ହୋଇଥିବା ଭିଡିଓ ({videoNews.length})</span>
                  </h3>
                  <button onClick={() => setActiveTab('post_video')} className="text-xs text-red-700 font-bold hover:underline">
                    + ନୂଆ ଭିଡିଓ
                  </button>
                </div>

                <div className="space-y-2.5">
                  {videoNews.slice(0, 3).map(v => (
                    <div key={v.id} className="p-2.5 bg-stone-50 rounded border border-stone-200 text-xs flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5 truncate">
                        <div className="w-12 h-8 bg-black rounded overflow-hidden shrink-0">
                          <img src={v.thumbnailUrl} alt={v.title} className="w-full h-full object-cover" />
                        </div>
                        <span className="font-serif-odia text-stone-900 font-semibold truncate">
                          {v.title}
                        </span>
                      </div>
                      <span className="text-[11px] text-stone-500 shrink-0 font-mono">{v.duration}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Newspaper Issues */}
              <div className="bg-white border border-stone-200 rounded p-5 shadow-xs">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-stone-200">
                  <h3 className="font-serif-odia font-bold text-stone-900 text-sm flex items-center gap-1.5">
                    <Layers className="w-4 h-4 text-amber-600" />
                    <span>ସମ୍ପ୍ରତି ଖବରକାଗଜ ସଂସ୍କରଣ ({epaperIssues.length})</span>
                  </h3>
                  <button onClick={() => setActiveTab('epaper')} className="text-xs text-red-700 font-bold hover:underline">
                    + ନୂଆ ସଂସ୍କରଣ
                  </button>
                </div>

                <div className="space-y-2.5">
                  {epaperIssues.slice(0, 3).map(iss => (
                    <div key={iss.id} className="p-2.5 bg-stone-50 rounded border border-stone-200 text-xs flex items-center justify-between">
                      <div>
                        <div className="font-serif-odia font-bold text-stone-900">{iss.dateOdia}</div>
                        <div className="text-[11px] text-stone-500">{iss.editionLocation} • {iss.issueNumber}</div>
                      </div>
                      <span className="px-2 py-0.5 bg-stone-200 rounded text-[11px] font-mono">
                        {iss.totalPages} ପୃଷ୍ଠା
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. POST VIDEO TAB */}
        {activeTab === 'post_video' && (
          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-xs max-w-3xl mx-auto">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-stone-200">
                <Video className="w-5 h-5 text-red-600" />
                <div>
                  <h2 className="font-serif-odia text-xl font-bold text-stone-900">
                    ନୂତନ ଭିଡିଓ ଖବର ପୋଷ୍ଟ୍ କରନ୍ତୁ (Post Video News)
                  </h2>
                  <p className="text-xs text-stone-500 font-sans">
                    ୟୁଟ୍ୟୁବ୍ ଭିଡିଓ ଲିଙ୍କ୍ କିମ୍ବା ଆଇଡି ଦେଇ ତୁରନ୍ତ ୱେବସାଇଟ୍‌ରେ ଭିଡିଓ ପ୍ରକାଶ କରନ୍ତୁ
                  </p>
                </div>
              </div>

              {videoSuccess && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded flex items-center gap-2 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ଭିଡିଓ ସଫଳତାର ସହ ପୋଷ୍ଟ୍ ହୋଇଛି ଏବଂ ୱେବସାଇଟ୍‌ର ଭିଡିଓ ସେକ୍ସନରେ ଦୃଶ୍ୟମାନ ହେଉଛି!</span>
                </div>
              )}

              <form onSubmit={handlePostVideo} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    ଭିଡିଓ ଶୀର୍ଷକ (Video Headline) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ଭିଡିଓର ସଠିକ୍ ଓ ଆକର୍ଷଣୀୟ ଶିରୋନାମା..."
                    value={videoTitle}
                    onChange={(e) => setVideoTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded font-serif-odia font-bold text-xs focus:ring-1 focus:ring-red-700"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    ୟୁଟ୍ୟୁବ୍ ଲିଙ୍କ୍ କିମ୍ବା ଭିଡିଓ ଆଇଡି (YouTube Video Link or ID) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ଉଦାହରଣ: https://www.youtube.com/watch?v=dQw4w9WgXcQ କିମ୍ବା dQw4w9WgXcQ"
                    value={videoUrlOrId}
                    onChange={(e) => {
                      setVideoUrlOrId(e.target.value);
                      const id = extractYouTubeId(e.target.value);
                      if (id) {
                        setVideoThumbnail(`https://img.youtube.com/vi/${id}/hqdefault.jpg`);
                      }
                    }}
                    className="w-full px-3 py-2 border border-stone-300 rounded font-mono text-xs focus:ring-1 focus:ring-red-700"
                  />
                  <p className="text-[11px] text-stone-400 mt-1">
                    ସମ୍ପୂର୍ଣ୍ଣ ୟୁଟ୍ୟୁବ୍ ଲିଙ୍କ୍ ପେଷ୍ଟ୍ କଲେ ଭିଡିଓ ଆଇଡି ସ୍ୱୟଂଚାଳିତ ଭାବେ ବାହାରିବ।
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      ଭିଡିଓ ବିଭାଗ (Category):
                    </label>
                    <select
                      value={videoCategory}
                      onChange={(e) => setVideoCategory(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded bg-white"
                    >
                      <option value="ଗ୍ରାଉଣ୍ଡ ରିପୋର୍ଟ">ଗ୍ରାଉଣ୍ଡ ରିପୋର୍ଟ (Ground Report)</option>
                      <option value="ଇଣ୍ଟରଭ୍ୟୁ">ଇଣ୍ଟରଭ୍ୟୁ (Special Interview)</option>
                      <option value="ବ୍ରେକିଂ ନ୍ୟୁଜ୍">ବ୍ରେକିଂ ନ୍ୟୁଜ୍ (Breaking Video)</option>
                      <option value="ଅନୁସନ୍ଧାନ">ଅନୁସନ୍ଧାନ (Investigation)</option>
                      <option value="ମୟୂରଭଞ୍ଜ ସ୍ୱତନ୍ତ୍ର">ମୟୂରଭଞ୍ଜ ସ୍ୱତନ୍ତ୍ର</option>
                      <option value="କ୍ରୀଡ଼ା">କ୍ରୀଡ଼ା (Sports)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      ଭିଡିଓ ସମୟାବଧି (Duration):
                    </label>
                    <input
                      type="text"
                      placeholder="ଉଦାହରଣ: 06:45"
                      value={videoDuration}
                      onChange={(e) => setVideoDuration(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    ଥମ୍ବନେଲ୍ ଛବି URL (Thumbnail Image):
                  </label>
                  <input
                    type="text"
                    placeholder="https://img.youtube.com/vi/.../hqdefault.jpg"
                    value={videoThumbnail}
                    onChange={(e) => setVideoThumbnail(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded font-mono"
                  />
                </div>

                {/* Live Preview Box */}
                {videoUrlOrId && (
                  <div className="p-3 bg-stone-50 border border-stone-200 rounded">
                    <div className="text-[11px] font-bold text-stone-600 mb-2">ଲାଇଭ୍ ପ୍ରିଭ୍ୟୁ (Live Preview):</div>
                    <div className="flex gap-3 items-center">
                      <div className="w-24 aspect-16/9 bg-black rounded overflow-hidden relative">
                        <img 
                          src={videoThumbnail || `https://img.youtube.com/vi/${extractYouTubeId(videoUrlOrId)}/hqdefault.jpg`} 
                          alt="Preview" 
                          className="w-full h-full object-cover" 
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <Play className="w-4 h-4 text-white fill-current" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-stone-900 font-serif-odia">{videoTitle || 'ଭିଡିଓ ଶୀର୍ଷକ...'}</div>
                        <div className="text-stone-500 text-[10px]">{videoCategory} • {videoDuration} • {SITE_INFO.youtubeChannel}</div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-red-700 hover:bg-red-800 text-white rounded font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Video className="w-4 h-4" />
                    <span>ୱେବସାଇଟ୍‌ରେ ଭିଡିଓ ପ୍ରକାଶ କରନ୍ତୁ (Publish Video)</span>
                  </button>
                </div>
              </form>
            </div>

            {/* List of Published Videos with Delete Option */}
            <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
              <h3 className="font-serif-odia font-bold text-stone-900 text-base mb-4 pb-2 border-b border-stone-200">
                ପ୍ରକାଶିତ ସମସ୍ତ ଭିଡିଓ ଖବର ({videoNews.length})
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videoNews.map(vid => (
                  <div key={vid.id} className="p-3 bg-stone-50 border border-stone-200 rounded flex flex-col justify-between">
                    <div>
                      <div className="aspect-16/9 w-full bg-black rounded overflow-hidden relative mb-2">
                        <img src={vid.thumbnailUrl} alt={vid.title} className="w-full h-full object-cover" />
                        <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1.5 py-0.5 rounded font-mono">
                          {vid.duration}
                        </span>
                      </div>
                      <div className="text-[10px] text-red-700 font-bold uppercase">{vid.category}</div>
                      <h4 className="font-serif-odia font-bold text-stone-900 text-xs line-clamp-2 mt-1">
                        {vid.title}
                      </h4>
                    </div>

                    <div className="mt-3 pt-2 border-t border-stone-200 flex items-center justify-between text-[11px] text-stone-500">
                      <span>{vid.publishedAt}</span>
                      <button
                        onClick={() => {
                          if (confirm('ଏହି ଭିଡିଓ ଡିଲିଟ୍ କରିବାକୁ ଚାହାଁନ୍ତି କି?')) {
                            deleteVideo(vid.id);
                          }
                        }}
                        className="p-1 text-red-600 hover:bg-red-50 rounded"
                        title="Delete Video"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 3. POST NEWSPAPER / E-PAPER TAB */}
        {activeTab === 'epaper' && (
          <div className="space-y-6">
            <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-xs max-w-3xl mx-auto">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-stone-200">
                <Layers className="w-5 h-5 text-amber-600" />
                <div>
                  <h2 className="font-serif-odia text-xl font-bold text-stone-900">
                    ଦୈନିକ ଖବରକାଗଜ / ଇ-ପେପର୍ ପୋଷ୍ଟ୍ କରନ୍ତୁ (Publish Daily E-Paper)
                  </h2>
                  <p className="text-xs text-stone-500 font-sans">
                    ଆଜିର ନୂଆ ଦୈନିକ ସଂସ୍କରଣ ଯୋଡ଼ନ୍ତୁ ଏବଂ ପାଠକମାନଙ୍କ ପାଇଁ ୧୨ ପୃଷ୍ଠାର ଖବରକାଗଜ ଉପଲବ୍ଧ କରାନ୍ତୁ
                  </p>
                </div>
              </div>

              {epaperSuccess && (
                <div className="mb-4 p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 rounded flex items-center gap-2 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>ନୂଆ ଖବରକାଗଜ ସଂସ୍କରଣ ସଫଳତାର ସହ ପ୍ରକାଶିତ ହେଲା! ଇ-ପେପର୍ ରିଡର୍‌ରେ ଦେଖିପାରିବେ।</span>
                </div>
              )}

              <form onSubmit={handlePostNewspaper} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      ସଂସ୍କରଣ ତାରିଖ (Edition Date) *
                    </label>
                    <input
                      type="date"
                      required
                      value={issueDate}
                      onChange={(e) => setIssueDate(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded font-mono"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      ଓଡ଼ିଆରେ ତାରିଖ ଓ ବାର (Odia Date String) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ଉଦାହରଣ: ଶନିବାର, ୩୦ ମେ ୨୦୨୬"
                      value={issueDateOdia}
                      onChange={(e) => setIssueDateOdia(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded font-serif-odia"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      ସଂଖ୍ୟା (Issue Number) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ସଂଖ୍ୟା ୧୧"
                      value={issueNumber}
                      onChange={(e) => setIssueNumber(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded font-serif-odia"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      ବର୍ଷ (Volume) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ବର୍ଷ ୦୧"
                      value={volumeNumber}
                      onChange={(e) => setVolumeNumber(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded font-serif-odia"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      ମୂଲ୍ୟ (Price)
                    </label>
                    <input
                      type="text"
                      value={issuePrice}
                      onChange={(e) => setIssuePrice(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded font-serif-odia"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      ମୁଖ୍ୟ ସଂସ୍କରଣ ସ୍ଥାନ (Edition Location):
                    </label>
                    <input
                      type="text"
                      value={editionLocation}
                      onChange={(e) => setEditionLocation(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded font-serif-odia"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      ମୋଟ ପୃଷ୍ଠା ସଂଖ୍ୟା (Total Pages):
                    </label>
                    <input
                      type="number"
                      min="4"
                      max="32"
                      value={issueTotalPages}
                      onChange={(e) => setIssueTotalPages(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-stone-300 rounded font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    ଖବରକାଗଜ କଭର୍ ଫଟୋ (Cover Page Image URL) *
                  </label>
                  <input
                    type="text"
                    required
                    value={coverImage}
                    onChange={(e) => setCoverImage(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded font-mono text-xs"
                  />
                </div>

                {/* Pre-configured 12 Page Structure Notice */}
                <div className="p-3 bg-stone-50 border border-stone-200 rounded text-[11px] text-stone-600 space-y-1">
                  <div className="font-bold text-stone-800">ସ୍ୱୟଂଚାଳିତ ୧୨ ପୃଷ୍ଠା ବିଶିଷ୍ଟ ଖବରକାଗଜ ସଂରଚନା:</div>
                  <div>• P.1 ମୁଖ୍ୟ ପୃଷ୍ଠା | P.2 ଓଡ଼ିଶା ଆଞ୍ଚଳିକ | P.3 ମୟୂରଭଞ୍ଜ ସ୍ୱତନ୍ତ୍ର | P.4 ସମ୍ପାଦକଙ୍କ କଲମରୁ</div>
                  <div>• P.5 କୃଷି ଓ ଗ୍ରାମୀଣ | P.6 ଦେଶ ବିଦେଶ | P.7 ଶିକ୍ଷା ଓ ରୋଜଗାର | P.8 ବ୍ୟବସାୟ | P.9 କ୍ରୀଡ଼ା</div>
                  <div>• P.10 ଜନତାର ଦରବାର | P.11 ରବିବାର ବିଶେଷ | P.12 ଶେଷ ପୃଷ୍ଠା</div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Layers className="w-4 h-4" />
                    <span>ଦୈନିକ ଖବରକାଗଜ ପ୍ରକାଶ କରନ୍ତୁ (Publish Newspaper)</span>
                  </button>
                </div>
              </form>
            </div>

            {/* List of Published Editions with View and Delete buttons */}
            <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
              <h3 className="font-serif-odia font-bold text-stone-900 text-base mb-4 pb-2 border-b border-stone-200">
                ପ୍ରକାଶିତ ସମସ୍ତ ଖବରକାଗଜ ସଂସ୍କରଣ ({epaperIssues.length})
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {epaperIssues.map(iss => (
                  <div key={iss.id} className="p-3 bg-stone-50 border border-stone-200 rounded flex gap-3 items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-14 aspect-3/4 bg-stone-200 rounded overflow-hidden shrink-0 border border-stone-300">
                        <img src={iss.coverImage} alt={iss.dateOdia} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="font-serif-odia font-bold text-stone-900 text-xs">{iss.dateOdia}</div>
                        <div className="text-[11px] text-stone-500 font-serif-odia">{iss.volumeNumber} • {iss.issueNumber}</div>
                        <div className="text-[10px] text-stone-500">{iss.editionLocation} • {iss.totalPages} ପୃଷ୍ଠା</div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1 shrink-0">
                      <button
                        onClick={() => {
                          setSelectedEPaperIssue(iss);
                          setCurrentView('epaper');
                        }}
                        className="px-2 py-1 bg-stone-900 hover:bg-black text-white text-[10px] font-bold rounded flex items-center gap-1"
                        title="View in reader"
                      >
                        <Eye className="w-3 h-3" />
                        <span>ଦେଖନ୍ତୁ</span>
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`ଏହି ସଂସ୍କରଣ (${iss.dateOdia}) ଡିଲିଟ୍ କରିବାକୁ ଚାହାଁନ୍ତି କି?`)) {
                            deleteEPaperIssue(iss.id);
                          }
                        }}
                        className="px-2 py-1 text-red-600 hover:bg-red-100 text-[10px] rounded flex items-center gap-1"
                        title="Delete issue"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>ଡିଲିଟ୍</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 4. NEWS ARTICLES MANAGEMENT */}
        {activeTab === 'news' && (
          <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-stone-200">
              <h2 className="font-serif-odia text-lg font-bold text-stone-900">
                ପ୍ରକାଶିତ ଖବର ପରିଚାଳନା (Manage Articles)
              </h2>
              <button
                onClick={() => setActiveTab('create_news')}
                className="px-3 py-1.5 bg-red-700 text-white rounded text-xs font-bold"
              >
                + ନୂତନ ଖବର ଯୋଡ଼ନ୍ତୁ
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-100 border-b border-stone-200 text-stone-700">
                    <th className="p-2.5">ଶୀର୍ଷକ (Headline)</th>
                    <th className="p-2.5">ବିଭାଗ</th>
                    <th className="p-2.5">ଲେଖକ</th>
                    <th className="p-2.5">ତାରିଖ</th>
                    <th className="p-2.5">ପଠନ</th>
                    <th className="p-2.5 text-right">କାର୍ଯ୍ୟାନୁଷ୍ଠାନ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {articles.map(article => (
                    <tr key={article.id} className="hover:bg-stone-50">
                      <td className="p-2.5 font-serif-odia font-bold text-stone-900 max-w-sm truncate">
                        {article.isLead && <span className="text-red-700 mr-1">[ମୁଖ୍ୟ]</span>}
                        {article.title}
                      </td>
                      <td className="p-2.5 capitalize">{article.category}</td>
                      <td className="p-2.5 text-stone-600">{article.author.split(' ')[0]}</td>
                      <td className="p-2.5 text-stone-500">{article.publishedAt.split(',')[0]}</td>
                      <td className="p-2.5 font-mono">{article.views}</td>
                      <td className="p-2.5 text-right space-x-1">
                        <button
                          onClick={() => deleteArticle(article.id)}
                          className="p-1 text-red-600 hover:bg-red-50 rounded"
                          title="Delete article"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 5. CREATE NEWS TAB */}
        {activeTab === 'create_news' && (
          <div className="bg-white border border-stone-200 rounded-lg p-6 shadow-xs max-w-3xl mx-auto">
            <h2 className="font-serif-odia text-xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200">
              ନୂତନ ଖବର ରଚନା ଓ ପ୍ରକାଶନ (Publish News Article)
            </h2>

            <form onSubmit={handleCreateArticle} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  ମୁଖ୍ୟ ଶୀର୍ଷକ (Headline) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ଖବରର ଶୀର୍ଷକ ଲେଖନ୍ତୁ..."
                  value={newsTitle}
                  onChange={(e) => setNewsTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded font-serif-odia font-bold focus:ring-1 focus:ring-red-700 focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  ଉପ-ଶୀର୍ଷକ (Subtitle)
                </label>
                <input
                  type="text"
                  placeholder="ଉପ-ଶିରୋନାମା (ଐଚ୍ଛିକ)..."
                  value={newsSubtitle}
                  onChange={(e) => setNewsSubtitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded font-serif-odia focus:ring-1 focus:ring-red-700 focus:outline-hidden"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ବିଭାଗ (Category) *
                  </label>
                  <select
                    value={newsCategory}
                    onChange={(e) => setNewsCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded bg-white"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c.id} value={c.slug || 'odisha'}>
                        {c.nameOdia} ({c.nameEn})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ଜିଲ୍ଲା (District)
                  </label>
                  <select
                    value={newsDistrict}
                    onChange={(e) => setNewsDistrict(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded bg-white"
                  >
                    <option value="ମୟୂରଭଞ୍ଜ">ମୟୂରଭଞ୍ଜ</option>
                    <option value="ବାଲେଶ୍ୱର">ବାଲେଶ୍ୱର</option>
                    <option value="କେନ୍ଦୁଝର">କେନ୍ଦୁଝର</option>
                    <option value="ଖୋର୍ଦ୍ଧା">ଖୋର୍ଦ୍ଧା / ଭୁବନେଶ୍ୱର</option>
                    <option value="ଅନ୍ୟାନ୍ୟ">ଅନ୍ୟାନ୍ୟ</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ବ୍ଲକ୍ (Block)
                  </label>
                  <select
                    value={newsBlock}
                    onChange={(e) => setNewsBlock(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded bg-white"
                  >
                    {MAYURBHANJ_BLOCKS.map(b => (
                      <option key={b} value={b.split(' ')[0]}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  ଲେଖକ / ରିପୋର୍ଟରଙ୍କ ନାମ
                </label>
                <input
                  type="text"
                  value={newsAuthor}
                  onChange={(e) => setNewsAuthor(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  ଖବର ସଂକ୍ଷେପ (Short Summary)
                </label>
                <textarea
                  rows={2}
                  placeholder="ଖବରର ସାରାଂଶ..."
                  value={newsSummary}
                  onChange={(e) => setNewsSummary(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded font-serif-odia"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  ସମ୍ପୂର୍ଣ୍ଣ ଖବର (Full News Body) *
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="ଖବରର ସବିଶେଷ ବିବରଣୀ ଲେଖନ୍ତୁ..."
                  value={newsContent}
                  onChange={(e) => setNewsContent(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded font-serif-odia leading-relaxed"
                />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newsIsLead}
                    onChange={(e) => setNewsIsLead(e.target.checked)}
                    className="rounded text-red-700"
                  />
                  <span>ମୁଖ୍ୟ ଖବର ଭାବେ ରଖନ୍ତୁ (Lead Story)</span>
                </label>

                <label className="flex items-center gap-2 text-xs font-semibold cursor-pointer">
                  <input
                    type="checkbox"
                    checked={newsIsTrending}
                    onChange={(e) => setNewsIsTrending(e.target.checked)}
                    className="rounded text-red-700"
                  />
                  <span>ଟ୍ରେଣ୍ଡିଂ ଖବର (Trending)</span>
                </label>
              </div>

              <div className="pt-4 border-t border-stone-200 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('news')}
                  className="px-4 py-2 border border-stone-300 rounded text-xs font-semibold text-stone-700"
                >
                  ବାତିଲ୍ କରନ୍ତୁ
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-red-700 hover:bg-red-800 text-white rounded text-xs font-bold transition-colors"
                >
                  ପ୍ରକାଶ କରନ୍ତୁ (Publish)
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 6. BREAKING NEWS TAB */}
        {activeTab === 'breaking' && (
          <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
            <h2 className="font-serif-odia text-lg font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200">
              ବ୍ରେକିଂ ନ୍ୟୁଜ୍ ଟିକର୍ ପରିଚାଳନା (Breaking News Ticker Manager)
            </h2>

            <form onSubmit={handleAddBreaking} className="flex gap-2 mb-6">
              <input
                type="text"
                required
                placeholder="ନୂତନ ତାଜା/ବ୍ରେକିଂ ଖବର ଲେଖନ୍ତୁ..."
                value={breakingText}
                onChange={(e) => setBreakingText(e.target.value)}
                className="flex-1 px-3 py-2 text-xs border border-stone-300 rounded font-serif-odia focus:ring-1 focus:ring-red-700 focus:outline-hidden"
              />
              <input
                type="number"
                min="1"
                max="10"
                title="Priority (1-10)"
                value={breakingPriority}
                onChange={(e) => setBreakingPriority(Number(e.target.value))}
                className="w-16 px-2 py-2 text-xs border border-stone-300 rounded font-mono text-center"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded text-xs font-bold whitespace-nowrap"
              >
                + ଟିକର୍‌ରେ ଯୋଡ଼ନ୍ତୁ
              </button>
            </form>

            <div className="space-y-2">
              {breakingNews.map(item => (
                <div key={item.id} className="p-3 bg-stone-50 rounded border border-stone-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className="font-mono text-xs font-bold text-red-700">P.{item.priority}</span>
                    <span className="font-serif-odia text-xs font-semibold text-stone-900 truncate">
                      {item.text}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => toggleBreakingNews(item.id)}
                      className={`px-2.5 py-1 rounded text-[11px] font-bold ${
                        item.isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-stone-200 text-stone-600'
                      }`}
                    >
                      {item.isActive ? 'Active' : 'Paused'}
                    </button>
                    <button
                      onClick={() => deleteBreakingNews(item.id)}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. COMPLAINTS MANAGEMENT TAB */}
        {activeTab === 'complaints' && (
          <div className="bg-white border border-stone-200 rounded-lg p-5 shadow-xs">
            <h2 className="font-serif-odia text-lg font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200">
              ଜନତାଙ୍କ ଅଭିଯୋଗ ଓ ସମାଧାନ ପରିଚାଳନା (Citizen Grievance Desk)
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-stone-100 border-b border-stone-200 text-stone-700">
                    <th className="p-2.5">ରେଫରେନ୍ସ ନଂ</th>
                    <th className="p-2.5">ନାମ ଓ ସମ୍ପର୍କ</th>
                    <th className="p-2.5">ସ୍ଥାନ / ବ୍ଲକ୍</th>
                    <th className="p-2.5">ସମସ୍ୟା ଶୀର୍ଷକ</th>
                    <th className="p-2.5">ବର୍ତ୍ତମାନ ସ୍ଥିତି</th>
                    <th className="p-2.5 text-right">କାର୍ଯ୍ୟାନୁଷ୍ଠାନ</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100">
                  {complaints.map(c => (
                    <tr key={c.id} className="hover:bg-stone-50">
                      <td className="p-2.5 font-mono font-bold text-red-700">{c.refNumber}</td>
                      <td className="p-2.5">
                        <div className="font-bold text-stone-900">{c.name}</div>
                        <div className="text-[10px] text-stone-500">{c.mobile}</div>
                      </td>
                      <td className="p-2.5 text-stone-600">{c.block}, {c.district}</td>
                      <td className="p-2.5 font-serif-odia max-w-xs truncate">{c.problemTitle}</td>
                      <td className="p-2.5">
                        <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-bold text-[10px]">
                          {c.status}
                        </span>
                      </td>
                      <td className="p-2.5 text-right">
                        <button
                          onClick={() => {
                            setSelectedComplaint(c);
                            setComplaintNewStatus(c.status);
                            setComplaintReporter(c.reporterAssigned || 'ଦୀପକ କୁମାର ମହାନ୍ତ');
                            setComplaintInternalNote(c.internalNotes || '');
                          }}
                          className="px-2.5 py-1 bg-stone-900 hover:bg-black text-white rounded text-[11px] font-bold"
                        >
                          ସ୍ଥିତି ଅପଡେଟ୍
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>

      {/* Complaint Status Update Modal */}
      {selectedComplaint && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
              <h3 className="font-serif-odia font-bold text-stone-900 text-base">
                ଅଭିଯୋଗ ସ୍ଥିତି ଅପଡେଟ୍: {selectedComplaint.refNumber}
              </h3>
              <button onClick={() => setSelectedComplaint(null)} className="p-1 rounded hover:bg-stone-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleUpdateComplaintStatus} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  ନୂତନ ସ୍ଥିତି ଚୟନ କରନ୍ତୁ (Lifecycle Status):
                </label>
                <select
                  value={complaintNewStatus}
                  onChange={(e) => setComplaintNewStatus(e.target.value as GrievanceStatus)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded bg-white font-bold"
                >
                  <option value="Received">Received (ଗ୍ରହଣ ହେଲା)</option>
                  <option value="Under Review">Under Review (ସମୀକ୍ଷାଧୀନ)</option>
                  <option value="Verification">Verification (କ୍ଷେତ୍ର ଯାଞ୍ଚ)</option>
                  <option value="Reporter Assigned">Reporter Assigned (ରିପୋର୍ଟର ନିୟୋଜିତ)</option>
                  <option value="Published">Published (ଖବର ପ୍ରକାଶିତ)</option>
                  <option value="Resolved">Resolved (ସମସ୍ୟା ସମାଧାନ ହେଲା)</option>
                  <option value="Closed">Closed (ବନ୍ଦ ହେଲା)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  ନ୍ୟସ୍ତ ରିପୋର୍ଟରଙ୍କ ନାମ:
                </label>
                <input
                  type="text"
                  value={complaintReporter}
                  onChange={(e) => setComplaintReporter(e.target.value)}
                  placeholder="ଯଥା: ଦୀପକ କୁମାର ମହାନ୍ତ (ବାରିପଦା)"
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  ପାଠକଙ୍କ ପାଇଁ ପ୍ରଗତି ଟିପ୍ପଣୀ (Public Timeline Note):
                </label>
                <input
                  type="text"
                  value={complaintNote}
                  onChange={(e) => setComplaintNote(e.target.value)}
                  placeholder="ଉଦାହରଣ: ପ୍ରଶାସନିକ ଅଧିକାରୀଙ୍କୁ ସାକ୍ଷାତ କରାଯାଇଛି..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded font-serif-odia"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  ଆଭ୍ୟନ୍ତରୀଣ ଟିପ୍ପଣୀ (Internal Admin Note):
                </label>
                <textarea
                  rows={2}
                  value={complaintInternalNote}
                  onChange={(e) => setComplaintInternalNote(e.target.value)}
                  placeholder="କେବଳ ଏଡିଟୋରିଆଲ୍ ଟିମ୍ ପାଇଁ..."
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded font-serif-odia"
                />
              </div>

              <div className="pt-3 border-t border-stone-200 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedComplaint(null)}
                  className="px-4 py-2 border border-stone-300 rounded text-xs"
                >
                  ବାତିଲ୍
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-700 hover:bg-red-800 text-white rounded text-xs font-bold"
                >
                  ଅପଡେଟ୍ ସଂରକ୍ଷଣ କରନ୍ତୁ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

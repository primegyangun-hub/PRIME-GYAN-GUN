import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  NewsArticle, 
  BreakingNewsItem, 
  GrievanceComplaint, 
  EPaperIssue, 
  PhotoNewsItem, 
  VideoNewsItem, 
  Advertisement, 
  User,
  Language,
  ArticleComment
} from '../types';
import { 
  INITIAL_ARTICLES, 
  INITIAL_BREAKING_NEWS, 
  INITIAL_COMPLAINTS, 
  INITIAL_EPAPER_ISSUES, 
  INITIAL_PHOTO_NEWS, 
  INITIAL_VIDEOS, 
  INITIAL_ADS, 
  INITIAL_USERS,
  DEFAULT_CREDENTIALS 
} from '../data/initialData';

interface NewsContextType {
  // Articles
  articles: NewsArticle[];
  selectedArticle: NewsArticle | null;
  setSelectedArticle: (article: NewsArticle | null) => void;
  addArticle: (article: Omit<NewsArticle, 'id' | 'views' | 'likes'>) => void;
  updateArticle: (id: string, updates: Partial<NewsArticle>) => void;
  deleteArticle: (id: string) => void;
  likeArticle: (id: string) => void;
  incrementViews: (id: string) => void;

  // Breaking News
  breakingNews: BreakingNewsItem[];
  addBreakingNews: (text: string, link?: string, priority?: number) => void;
  updateBreakingNews: (id: string, updates: Partial<BreakingNewsItem>) => void;
  deleteBreakingNews: (id: string) => void;
  toggleBreakingNews: (id: string) => void;

  // Grievance / Complaints
  complaints: GrievanceComplaint[];
  submitGrievance: (data: Omit<GrievanceComplaint, 'id' | 'refNumber' | 'status' | 'statusTimeline' | 'createdAt' | 'updatedAt'>) => string;
  updateComplaintStatus: (id: string, status: GrievanceComplaint['status'], note: string, reporter?: string, internalNotes?: string) => void;
  findComplaintByRef: (refOrPhone: string) => GrievanceComplaint | undefined;

  // E-Paper
  epaperIssues: EPaperIssue[];
  selectedEPaperIssue: EPaperIssue | null;
  setSelectedEPaperIssue: (issue: EPaperIssue | null) => void;
  addEPaperIssue: (issue: Omit<EPaperIssue, 'id'>) => void;
  deleteEPaperIssue: (id: string) => void;

  // Photos & Videos
  photoNews: PhotoNewsItem[];
  videoNews: VideoNewsItem[];
  addVideo: (video: Omit<VideoNewsItem, 'id' | 'viewsCount'>) => void;
  deleteVideo: (id: string) => void;

  // Ads
  ads: Advertisement[];
  recordAdClick: (id: string) => void;
  addAd: (ad: Omit<Advertisement, 'id' | 'clicks' | 'impressions'>) => void;
  toggleAd: (id: string) => void;

  // Comments
  comments: ArticleComment[];
  addComment: (articleId: string, authorName: string, comment: string) => void;

  // Navigation & Filtering
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  activeLanguage: Language;
  setActiveLanguage: (lang: Language) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  fontSize: 'sm' | 'base' | 'lg' | 'xl';
  setFontSize: (size: 'sm' | 'base' | 'lg' | 'xl') => void;

  // User & Auth
  currentUser: User | null;
  loginUser: (email: string, password?: string, role?: User['role']) => { success: boolean; message?: string };
  logoutUser: () => void;
  isAdmin: boolean;
  isReporter: boolean;
  isEditor: boolean;

  // Views / Modals
  currentView: 'home' | 'article' | 'epaper' | 'grievance' | 'track_grievance' | 'admin' | 'reporter' | 'photos' | 'videos' | 'editorial' | 'search';
  setCurrentView: (view: 'home' | 'article' | 'epaper' | 'grievance' | 'track_grievance' | 'admin' | 'reporter' | 'photos' | 'videos' | 'editorial' | 'search') => void;
  selectedDistrictFilter: string | null;
  setSelectedDistrictFilter: (dist: string | null) => void;
}

const NewsContext = createContext<NewsContextType | undefined>(undefined);

export const NewsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Defensive local storage loader
  const loadFromStorage = <T,>(key: string, fallback: T): T => {
    try {
      const stored = localStorage.getItem(key);
      if (!stored) return fallback;
      const parsed = JSON.parse(stored);
      if (Array.isArray(fallback)) {
        return Array.isArray(parsed) ? (parsed as T) : fallback;
      }
      return parsed ?? fallback;
    } catch {
      return fallback;
    }
  };

  const [articles, setArticles] = useState<NewsArticle[]>(() => 
    loadFromStorage('ptp_articles', INITIAL_ARTICLES)
  );
  const [breakingNews, setBreakingNews] = useState<BreakingNewsItem[]>(() => 
    loadFromStorage('ptp_breaking', INITIAL_BREAKING_NEWS)
  );
  const [complaints, setComplaints] = useState<GrievanceComplaint[]>(() => 
    loadFromStorage('ptp_complaints', INITIAL_COMPLAINTS)
  );
  const [epaperIssues, setEpaperIssues] = useState<EPaperIssue[]>(() => 
    loadFromStorage('ptp_epaper', INITIAL_EPAPER_ISSUES)
  );
  const [photoNews] = useState<PhotoNewsItem[]>(INITIAL_PHOTO_NEWS);
  const [videoNews, setVideoNews] = useState<VideoNewsItem[]>(() => 
    loadFromStorage('ptp_videos', INITIAL_VIDEOS)
  );
  const [ads, setAds] = useState<Advertisement[]>(() => 
    loadFromStorage('ptp_ads', INITIAL_ADS)
  );
  const [comments, setComments] = useState<ArticleComment[]>(() => 
    loadFromStorage('ptp_comments', [])
  );

  const [currentUser, setCurrentUser] = useState<User | null>(() => 
    loadFromStorage('ptp_user', null)
  );

  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [selectedEPaperIssue, setSelectedEPaperIssue] = useState<EPaperIssue | null>(
    INITIAL_EPAPER_ISSUES[0] || null
  );

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedDistrictFilter, setSelectedDistrictFilter] = useState<string | null>(null);
  const [activeLanguage, setActiveLanguage] = useState<Language>('or');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [fontSize, setFontSize] = useState<'sm' | 'base' | 'lg' | 'xl'>('base');
  const [currentView, setCurrentView] = useState<NewsContextType['currentView']>('home');

  // Persistence effects
  useEffect(() => {
    try {
      localStorage.setItem('ptp_articles', JSON.stringify(articles));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [articles]);

  useEffect(() => {
    try {
      localStorage.setItem('ptp_breaking', JSON.stringify(breakingNews));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [breakingNews]);

  useEffect(() => {
    try {
      localStorage.setItem('ptp_complaints', JSON.stringify(complaints));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [complaints]);

  useEffect(() => {
    try {
      localStorage.setItem('ptp_epaper', JSON.stringify(epaperIssues));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [epaperIssues]);

  useEffect(() => {
    try {
      localStorage.setItem('ptp_videos', JSON.stringify(videoNews));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [videoNews]);

  useEffect(() => {
    try {
      localStorage.setItem('ptp_ads', JSON.stringify(ads));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [ads]);

  useEffect(() => {
    try {
      localStorage.setItem('ptp_comments', JSON.stringify(comments));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [comments]);

  useEffect(() => {
    try {
      localStorage.setItem('ptp_user', JSON.stringify(currentUser));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }, [currentUser]);

  // Article handlers
  const addArticle = (articleData: Omit<NewsArticle, 'id' | 'views' | 'likes'>) => {
    const newArticle: NewsArticle = {
      ...articleData,
      id: `art-${Date.now()}`,
      views: 1,
      likes: 0
    };
    setArticles(prev => [newArticle, ...(Array.isArray(prev) ? prev : [])]);
  };

  const updateArticle = (id: string, updates: Partial<NewsArticle>) => {
    setArticles(prev => {
      const list = Array.isArray(prev) ? prev : [];
      return list.map(a => a.id === id ? { ...a, ...updates, updatedAt: 'ଏବେ ଅପଡେଟ୍ ହେଲା' } : a);
    });
    if (selectedArticle?.id === id) {
      setSelectedArticle(prev => prev ? { ...prev, ...updates } : null);
    }
  };

  const deleteArticle = (id: string) => {
    setArticles(prev => (Array.isArray(prev) ? prev : []).filter(a => a.id !== id));
    if (selectedArticle?.id === id) {
      setSelectedArticle(null);
      setCurrentView('home');
    }
  };

  const likeArticle = (id: string) => {
    setArticles(prev => {
      const list = Array.isArray(prev) ? prev : [];
      return list.map(a => a.id === id ? { ...a, likes: a.likes + 1 } : a);
    });
    if (selectedArticle?.id === id) {
      setSelectedArticle(prev => prev ? { ...prev, likes: prev.likes + 1 } : null);
    }
  };

  const incrementViews = (id: string) => {
    setArticles(prev => {
      const list = Array.isArray(prev) ? prev : [];
      return list.map(a => a.id === id ? { ...a, views: a.views + 1 } : a);
    });
  };

  // Breaking News handlers
  const addBreakingNews = (text: string, link?: string, priority: number = 1) => {
    const item: BreakingNewsItem = {
      id: `brk-${Date.now()}`,
      text,
      link,
      priority,
      isActive: true,
      createdAt: 'ଆଜି'
    };
    setBreakingNews(prev => [item, ...(Array.isArray(prev) ? prev : [])]);
  };

  const updateBreakingNews = (id: string, updates: Partial<BreakingNewsItem>) => {
    setBreakingNews(prev => {
      const list = Array.isArray(prev) ? prev : [];
      return list.map(b => b.id === id ? { ...b, ...updates } : b);
    });
  };

  const deleteBreakingNews = (id: string) => {
    setBreakingNews(prev => (Array.isArray(prev) ? prev : []).filter(b => b.id !== id));
  };

  const toggleBreakingNews = (id: string) => {
    setBreakingNews(prev => {
      const list = Array.isArray(prev) ? prev : [];
      return list.map(b => b.id === id ? { ...b, isActive: !b.isActive } : b);
    });
  };

  // Grievance / Complaints handlers
  const submitGrievance = (data: Omit<GrievanceComplaint, 'id' | 'refNumber' | 'status' | 'statusTimeline' | 'createdAt' | 'updatedAt'>): string => {
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const refNumber = `PTP-2026-MAY-${randomSuffix}`;
    const newComplaint: GrievanceComplaint = {
      ...data,
      id: `comp-${Date.now()}`,
      refNumber,
      status: 'Received',
      statusTimeline: [
        {
          status: 'Received',
          timestamp: 'ଏବେ ପଞ୍ଜୀକୃତ ହେଲା',
          note: 'ଆପଣଙ୍କ ଅଭିଯୋଗ ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଜନତାର ଦରବାରରେ ଗ୍ରହଣ କରାଗଲା।'
        }
      ],
      createdAt: '୨୯ ମେ ୨୦୨୬',
      updatedAt: '୨୯ ମେ ୨୦୨୬'
    };
    setComplaints(prev => [newComplaint, ...(Array.isArray(prev) ? prev : [])]);
    return refNumber;
  };

  const updateComplaintStatus = (
    id: string, 
    status: GrievanceComplaint['status'], 
    note: string, 
    reporter?: string, 
    internalNotes?: string
  ) => {
    setComplaints(prev => {
      const list = Array.isArray(prev) ? prev : [];
      return list.map(c => {
        if (c.id !== id) return c;
        const updatedTimeline = [
          ...c.statusTimeline,
          {
            status,
            timestamp: 'ଏବେ ଅପଡେଟ୍ ହେଲା',
            note: note || `ସ୍ଥିତି ପରିବର୍ତ୍ତିତ ହୋଇଛି: ${status}`
          }
        ];
        return {
          ...c,
          status,
          reporterAssigned: reporter !== undefined ? reporter : c.reporterAssigned,
          internalNotes: internalNotes !== undefined ? internalNotes : c.internalNotes,
          statusTimeline: updatedTimeline,
          updatedAt: 'ଏବେ ଅପଡେଟ୍ ହେଲା'
        };
      });
    });
  };

  const findComplaintByRef = (refOrPhone: string) => {
    const cleanQuery = refOrPhone.trim().toLowerCase();
    const list = Array.isArray(complaints) ? complaints : [];
    return list.find(c => 
      c.refNumber.toLowerCase() === cleanQuery || 
      c.mobile.replace(/\D/g, '').includes(cleanQuery.replace(/\D/g, ''))
    );
  };

  // E-Paper handlers
  const addEPaperIssue = (issueData: Omit<EPaperIssue, 'id'>) => {
    const newIssue: EPaperIssue = {
      ...issueData,
      id: `epaper-${Date.now()}`
    };
    setEpaperIssues(prev => [newIssue, ...(Array.isArray(prev) ? prev : [])]);
  };

  const deleteEPaperIssue = (id: string) => {
    setEpaperIssues(prev => (Array.isArray(prev) ? prev : []).filter(e => e.id !== id));
    if (selectedEPaperIssue?.id === id) {
      setSelectedEPaperIssue(null);
    }
  };

  // Video News handlers
  const addVideo = (videoData: Omit<VideoNewsItem, 'id' | 'viewsCount'>) => {
    const newVideo: VideoNewsItem = {
      ...videoData,
      id: `vid-${Date.now()}`,
      viewsCount: '୧.୫K views'
    };
    setVideoNews(prev => [newVideo, ...(Array.isArray(prev) ? prev : [])]);
  };

  const deleteVideo = (id: string) => {
    setVideoNews(prev => (Array.isArray(prev) ? prev : []).filter(v => v.id !== id));
  };

  // Ads
  const recordAdClick = (id: string) => {
    setAds(prev => {
      const list = Array.isArray(prev) ? prev : [];
      return list.map(a => a.id === id ? { ...a, clicks: a.clicks + 1 } : a);
    });
  };

  const addAd = (adData: Omit<Advertisement, 'id' | 'clicks' | 'impressions'>) => {
    const newAd: Advertisement = {
      ...adData,
      id: `ad-${Date.now()}`,
      clicks: 0,
      impressions: 1
    };
    setAds(prev => [newAd, ...(Array.isArray(prev) ? prev : [])]);
  };

  const toggleAd = (id: string) => {
    setAds(prev => {
      const list = Array.isArray(prev) ? prev : [];
      return list.map(a => a.id === id ? { ...a, isActive: !a.isActive } : a);
    });
  };

  // Comments
  const addComment = (articleId: string, authorName: string, comment: string) => {
    const newComment: ArticleComment = {
      id: `comm-${Date.now()}`,
      articleId,
      authorName: authorName.trim() || 'ପାଠକ',
      comment: comment.trim(),
      createdAt: 'ଏହି ମାତ୍ର',
      approved: true
    };
    setComments(prev => [newComment, ...(Array.isArray(prev) ? prev : [])]);
  };

  // User & Auth
  const loginUser = (email: string, password?: string, role?: User['role']): { success: boolean; message?: string } => {
    const cleanEmail = email.trim().toLowerCase();
    
    // Check against standard credentials
    const credential = DEFAULT_CREDENTIALS.find(c => c.email.toLowerCase() === cleanEmail);
    if (credential) {
      if (password && password !== credential.password) {
        return { 
          success: false, 
          message: `ଭୁଲ୍ ପାସୱାର୍ଡ! ${credential.roleOdia} ପାଇଁ ଡିଫଲ୍ଟ ପାସୱାର୍ଡ: ${credential.password}` 
        };
      }
      const matchedUser = INITIAL_USERS.find(u => u.email.toLowerCase() === cleanEmail) || {
        id: `user-${credential.role}`,
        name: credential.name,
        email: credential.email,
        role: credential.role,
        location: 'ବାରିପଦା, ମୟୂରଭଞ୍ଜ'
      };
      setCurrentUser(matchedUser);
      return { success: true };
    }

    // Check against INITIAL_USERS
    const matchedUser = INITIAL_USERS.find(u => u.email.toLowerCase() === cleanEmail);
    if (matchedUser) {
      setCurrentUser(matchedUser);
      return { success: true };
    }

    // Default custom role handling
    const defaultRole = role || (cleanEmail.includes('admin') ? 'admin' : cleanEmail.includes('editor') ? 'editor' : 'reporter');
    const newUser: User = {
      id: `user-${Date.now()}`,
      name: email.split('@')[0],
      email: cleanEmail,
      role: defaultRole,
      location: 'ବାରିପଦା, ମୟୂରଭଞ୍ଜ'
    };
    setCurrentUser(newUser);
    return { success: true };
  };

  const logoutUser = () => {
    setCurrentUser(null);
  };

  const isAdmin = currentUser?.role === 'admin';
  const isReporter = currentUser?.role === 'reporter';
  const isEditor = currentUser?.role === 'editor';

  return (
    <NewsContext.Provider
      value={{
        articles: Array.isArray(articles) ? articles : [],
        selectedArticle,
        setSelectedArticle,
        addArticle,
        updateArticle,
        deleteArticle,
        likeArticle,
        incrementViews,

        breakingNews: Array.isArray(breakingNews) ? breakingNews : [],
        addBreakingNews,
        updateBreakingNews,
        deleteBreakingNews,
        toggleBreakingNews,

        complaints: Array.isArray(complaints) ? complaints : [],
        submitGrievance,
        updateComplaintStatus,
        findComplaintByRef,

        epaperIssues: Array.isArray(epaperIssues) ? epaperIssues : [],
        selectedEPaperIssue,
        setSelectedEPaperIssue,
        addEPaperIssue,
        deleteEPaperIssue,

        photoNews: Array.isArray(photoNews) ? photoNews : [],
        videoNews: Array.isArray(videoNews) ? videoNews : [],
        addVideo,
        deleteVideo,

        ads: Array.isArray(ads) ? ads : [],
        recordAdClick,
        addAd,
        toggleAd,

        comments: Array.isArray(comments) ? comments : [],
        addComment,

        activeCategory,
        setActiveCategory,
        activeLanguage,
        setActiveLanguage,
        searchQuery,
        setSearchQuery,
        fontSize,
        setFontSize,

        currentUser,
        loginUser,
        logoutUser,
        isAdmin,
        isReporter,
        isEditor,

        currentView,
        setCurrentView,
        selectedDistrictFilter,
        setSelectedDistrictFilter
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNews must be used within a NewsProvider');
  }
  return context;
};

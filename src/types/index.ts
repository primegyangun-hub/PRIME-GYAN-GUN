export type Language = 'or' | 'en' | 'hi' | 'bn' | 'te' | 'ta' | 'mr' | 'gu' | 'pa' | 'kn';

export interface TranslatedText {
  title?: string;
  summary?: string;
  content?: string;
}

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  summary: string;
  content: string;
  category: string;
  district?: string;
  block?: string;
  author: string;
  authorRole?: string;
  publishedAt: string;
  updatedAt?: string;
  readTimeMinutes: number;
  image: string;
  imageCaption?: string;
  isLead?: boolean;
  isBreaking?: boolean;
  isTrending?: boolean;
  isEditorial?: boolean;
  views: number;
  likes: number;
  tags: string[];
  status: 'published' | 'draft' | 'scheduled' | 'pending_review';
  translations?: Partial<Record<Language, TranslatedText>>;
}

export interface BreakingNewsItem {
  id: string;
  text: string;
  link?: string;
  priority: number;
  isActive: boolean;
  createdAt: string;
}

export type GrievanceStatus = 
  | 'Received' 
  | 'Under Review' 
  | 'Verification' 
  | 'Reporter Assigned' 
  | 'Published' 
  | 'Resolved' 
  | 'Closed';

export interface GrievanceComplaint {
  id: string;
  refNumber: string;
  name: string;
  mobile: string;
  email: string;
  district: string;
  block: string;
  location: string;
  problemTitle: string;
  description: string;
  photoUrl?: string;
  status: GrievanceStatus;
  reporterAssigned?: string;
  internalNotes?: string;
  statusTimeline: {
    status: GrievanceStatus;
    timestamp: string;
    note: string;
  }[];
  createdAt: string;
  updatedAt: string;
}

export interface EPaperPage {
  pageNumber: number;
  title: string;
  section: string;
  imageUrl: string;
}

export interface EPaperIssue {
  id: string;
  issueNumber: string; // e.g. "ସଂଖ୍ୟା ୧୦"
  volumeNumber: string; // e.g. "ବର୍ଷ ୦୧"
  date: string;
  dateOdia: string;
  editionLocation: string; // Baripada
  price: string; // ₹5
  totalPages: number;
  coverImage: string;
  pdfUrl?: string;
  pages: EPaperPage[];
}

export interface PhotoNewsItem {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  coverImage: string;
  images: {
    url: string;
    caption: string;
  }[];
}

export interface VideoNewsItem {
  id: string;
  title: string;
  youtubeId: string;
  duration: string;
  category: string;
  publishedAt: string;
  channel: string;
  thumbnailUrl: string;
  viewsCount: string;
}

export interface Advertisement {
  id: string;
  title: string;
  placement: 'header' | 'leaderboard' | 'sidebar' | 'in-article' | 'footer';
  imageUrl: string;
  linkUrl: string;
  isActive: boolean;
  clicks: number;
  impressions: number;
  sponsorName: string;
}

export type UserRole = 'admin' | 'editor' | 'reporter' | 'photographer' | 'social_manager';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  location?: string;
  avatar?: string;
}

export interface ArticleComment {
  id: string;
  articleId: string;
  authorName: string;
  comment: string;
  createdAt: string;
  approved: boolean;
}

import { 
  NewsArticle, 
  BreakingNewsItem, 
  GrievanceComplaint, 
  EPaperIssue, 
  PhotoNewsItem, 
  VideoNewsItem, 
  Advertisement, 
  User 
} from '../types';

export const INITIAL_USERS: User[] = [
  {
    id: 'user-admin-1',
    name: 'ସୁଶାନ୍ତ କୁମାର ନାୟକ',
    email: 'Primetimepress24@gmail.com',
    role: 'admin',
    location: 'ବାରିପଦା',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 'user-editor-1',
    name: 'ରଶ୍ମିରଞ୍ଜନ ମହାପାତ୍ର',
    email: 'editor@primetimepress.in',
    role: 'editor',
    location: 'ଭୁବନେଶ୍ୱର',
  },
  {
    id: 'user-reporter-1',
    name: 'ଦୀପକ କୁମାର ମହାନ୍ତ',
    email: 'deepak.mayurbhanj@primetimepress.in',
    role: 'reporter',
    location: 'ବାରିପଦା, ମୟୂରଭଞ୍ଜ',
  },
  {
    id: 'user-reporter-2',
    name: 'ସୌମ୍ୟା ଦାସ',
    email: 'soumya.odisha@primetimepress.in',
    role: 'reporter',
    location: 'ବାଲେଶ୍ୱର',
  }
];

export const CATEGORIES = [
  { id: 'all', nameOdia: 'ମୁଖ୍ୟପୃଷ୍ଠା', nameEn: 'Home', slug: '' },
  { id: 'odisha', nameOdia: 'ଓଡ଼ିଶା', nameEn: 'Odisha', slug: 'odisha' },
  { id: 'mayurbhanj', nameOdia: 'ମୟୂରଭଞ୍ଜ', nameEn: 'Mayurbhanj', slug: 'mayurbhanj' },
  { id: 'baripada', nameOdia: 'ବାରିପଦା', nameEn: 'Baripada', slug: 'baripada' },
  { id: 'balasore', nameOdia: 'ବାଲେଶ୍ୱର', nameEn: 'Balasore', slug: 'balasore' },
  { id: 'keonjhar', nameOdia: 'କେନ୍ଦୁଝର', nameEn: 'Keonjhar', slug: 'keonjhar' },
  { id: 'national', nameOdia: 'ଦେଶ', nameEn: 'National', slug: 'national' },
  { id: 'international', nameOdia: 'ବିଦେଶ', nameEn: 'World', slug: 'international' },
  { id: 'politics', nameOdia: 'ରାଜନୀତି', nameEn: 'Politics', slug: 'politics' },
  { id: 'crime', nameOdia: 'ଅପରାଧ', nameEn: 'Crime', slug: 'crime' },
  { id: 'education', nameOdia: 'ଶିକ୍ଷା', nameEn: 'Education', slug: 'education' },
  { id: 'health', nameOdia: 'ସ୍ୱାସ୍ଥ୍ୟ', nameEn: 'Health', slug: 'health' },
  { id: 'agriculture', nameOdia: 'କୃଷି', nameEn: 'Agriculture', slug: 'agriculture' },
  { id: 'business', nameOdia: 'ବ୍ୟବସାୟ', nameEn: 'Business', slug: 'business' },
  { id: 'sports', nameOdia: 'କ୍ରୀଡ଼ା', nameEn: 'Sports', slug: 'sports' },
  { id: 'jobs', nameOdia: 'ଚାକିରି', nameEn: 'Jobs', slug: 'jobs' },
  { id: 'grievance', nameOdia: 'ଜନସମସ୍ୟା', nameEn: 'Public Grievance', slug: 'grievance' },
  { id: 'editorial', nameOdia: 'ସମ୍ପାଦକଙ୍କ କଲମରୁ', nameEn: 'Editorial', slug: 'editorial' },
  { id: 'epaper', nameOdia: 'ଇ-ପେପର୍', nameEn: 'E-Paper', slug: 'epaper' },
  { id: 'video', nameOdia: 'ଭିଡିଓ', nameEn: 'Videos', slug: 'video' },
];

export const MAYURBHANJ_BLOCKS = [
  'ବାରିପଦା (Baripada)',
  'ମୋରଡ଼ା (Morada)',
  'ବେତନଟୀ (Betnoti)',
  'ଉଦଳା (Udala)',
  'କରଞ୍ଜିଆ (Karanjia)',
  'ରାଇରଙ୍ଗପୁର (Rairangpur)',
  'କୁଳିଅଣା (Kuliana)',
  'ବଡ଼ସାହି (Badasahi)',
  'ଯଶୀପୁର (Jashipur)',
  'ବିଶୋଇ (Bisoi)',
  'ବାଙ୍ଗିରିପୋଷି (Bangiriposi)',
  'ଖୁଣ୍ଟା (Khunta)',
  'ବାରିପଦା ପୌରପାଳିକା (Baripada Municipality)',
  'ଜିଲ୍ଲା ପ୍ରଶାସନ (District Administration)'
];

export const INITIAL_BREAKING_NEWS: BreakingNewsItem[] = [
  {
    id: 'brk-1',
    text: 'ମୟୂରଭଞ୍ଜର ଉନ୍ନୟନ ପାଇଁ ରାଜ୍ୟ କ୍ୟାବିନେଟ୍‌ରେ ୫୦୦ କୋଟିର ସ୍ୱତନ୍ତ୍ର ପ୍ୟାକେଜ୍ ଅନୁମୋଦିତ | ସୁବର୍ଣ୍ଣରେଖା ପ୍ରକଳ୍ପ ସମେତ ରାସ୍ତା ନିର୍ମାଣ ତ୍ୱରାନ୍ୱିତ ହେବ',
    priority: 1,
    isActive: true,
    createdAt: '୨୯ ମେ ୨୦୨୬'
  },
  {
    id: 'brk-2',
    text: 'ବାରିପଦା ସହର ସୌନ୍ଦର୍ଯ୍ୟକରଣ କାର୍ଯ୍ୟ ଆରମ୍ଭ: ଦେବେନ୍ଦ୍ରପୁର ଠାରୁ ପାଳବଣି ଯାଏଁ ୪ ଲେନ୍ ରାସ୍ତା ନିର୍ମାଣ ପାଇଁ ଟେଣ୍ଡର ଆହ୍ୱାନ',
    priority: 2,
    isActive: true,
    createdAt: '୨୯ ମେ ୨୦୨୬'
  },
  {
    id: 'brk-3',
    text: 'ଶିମିଳିପାଳ ଜାତୀୟ ଉଦ୍ୟାନରେ ବନ୍ୟପ୍ରାଣୀ ସୁରକ୍ଷା ପାଇଁ ଡ୍ରୋନ୍ ପାଟ୍ରୋଲିଂ ବ୍ୟବସ୍ଥା ଆରମ୍ଭ, ସନ୍ଦିଗ୍ଧଙ୍କ ଉପରେ କଡ଼ା ନଜର',
    priority: 3,
    isActive: true,
    createdAt: '୨୯ ମେ ୨୦୨୬'
  },
  {
    id: 'brk-4',
    text: 'ଓଡ଼ିଶା ଷ୍ଟାଫ୍ ସିଲେକ୍ସନ କମିଶନ (OSSSC) ଦ୍ୱାରା ୩୨୦୦ ନୂଆ ସରକାରୀ ପଦବୀ ପାଇଁ ବିଜ୍ଞପ୍ତି ପ୍ରକାଶିତ',
    priority: 4,
    isActive: true,
    createdAt: '୨୯ ମେ ୨୦୨୬'
  }
];

export const INITIAL_ARTICLES: NewsArticle[] = [
  {
    id: 'art-lead-1',
    slug: 'mayurbhanj-heritage-development-baripada-masterplan',
    title: 'ବାରିପଦା ଐତିହ୍ୟ ସହରର କାୟାକଳ୍ପ: ୧୨୦ କୋଟି ବ୍ୟୟରେ ମେଗା ମାଷ୍ଟରପ୍ଲାନ୍ କାର୍ଯ୍ୟକାରୀ ହେବ',
    subtitle: 'ଜିଲ୍ଲାପାଳଙ୍କ ସୂଚନା: ଦେବେନ୍ଦ୍ରପୁର ରିଂ ରୋଡ୍, ଡ୍ରେନେଜ୍ ସଂସ୍କାର ଏବଂ ଟ୍ରାଫିକ୍ ବ୍ୟବସ୍ଥାରେ ବଡ଼ ପରିବର୍ତ୍ତନ',
    summary: 'ମୟୂରଭଞ୍ଜ ଜିଲ୍ଲାର ପ୍ରାଣକେନ୍ଦ୍ର ବାରିପଦା ସହରର ବିକାଶ ପାଇଁ ଏକ ବୃହତ୍ ଯୋଜନା ପ୍ରସ୍ତୁତ କରାଯାଇଛି। ଐତିହ୍ୟ ସଂରକ୍ଷଣ ସହ ଆଧୁନିକ ନାଗରିକ ସୁବିଧା ଯୋଗାଇ ଦିଆଯିବ।',
    content: `ବାରିପଦା, ୨୯ ମେ (ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ବ୍ୟୁରୋ): ମୟୂରଭଞ୍ଜ ଜିଲ୍ଲା ପ୍ରଶାସନ ତରଫରୁ ବାରିପଦା ସହରକୁ ଏକ ଆଧୁନିକ ତଥା ଐତିହ୍ୟ ସମ୍ପନ୍ନ ସହର ଭାବେ ଗଢ଼ି ତୋଳିବା ପାଇଁ ୧୨୦ କୋଟି ଟଙ୍କାର ଏକ ବିସ୍ତୃତ ମାଷ୍ଟରପ୍ଲାନ୍ ପ୍ରସ୍ତୁତ କରାଯାଇଛି। ସୂଚନା ଅନୁସାରେ, ସହରର ଦେବେନ୍ଦ୍ରପୁର, ବାଗବ୍ରାହ୍ମଣଗାଁ, ଷ୍ଟେସନ ରୋଡ୍ ଏବଂ ପାଳବଣି ଅଞ୍ଚଳରେ ଡ୍ରେନେଜ୍ ସମସ୍ୟାର ସ୍ଥାୟୀ ସମାଧାନ କରାଯିବ।

ପୌର ପ୍ରଶାସନ ପକ୍ଷରୁ ମିଳିଥିବା ବିବରଣୀ ଅନୁଯାୟୀ, ଦେବେନ୍ଦ୍ରପୁର ଠାରୁ ଜାତୀୟ ରାଜପଥ ସଂଯୋଗୀକରଣ ରାସ୍ତାକୁ ୪ ଲେନ୍ ବିଶିଷ୍ଟ କରାଯିବ। ଏହାସହ ବାରିପଦା ରାଜପ୍ରାସାଦ ଓ ଜଗନ୍ନାଥ ମନ୍ଦିର (ଦ୍ୱିତୀୟ ଶ୍ରୀକ୍ଷେତ୍ର) ଚାରିପାଖେ ସୌନ୍ଦର୍ଯ୍ୟକରଣ ଏବଂ ଆଲୋକୀକରଣ କରାଯିବ।

ସହରବାସୀ ଦୀର୍ଘ ଦିନ ଧରି ଦାବି କରି ଆସୁଥିବା ଆଧୁନିକ ବସ୍ ଟର୍ମିନାଲ୍ ଓ ଭେଣ୍ଡିଂ ଜୋନ୍ ନିର୍ମାଣ କାର୍ଯ୍ୟ ମଧ୍ୟ ଆଗାମୀ ତିନି ମାସ ମଧ୍ୟରେ ଆରମ୍ଭ ହେବ। ଏହି ପ୍ରକଳ୍ପ ସମ୍ପୂର୍ଣ୍ଣ ହେଲେ ସହରର ଟ୍ରାଫିକ୍ ଜାମ୍ ସମସ୍ୟା ଦୂର ହେବା ସହ ପର୍ଯ୍ୟଟକଙ୍କ ସଂଖ୍ୟା ବୃଦ୍ଧି ପାଇବ ବୋଲି ପ୍ରଶାସନ ଆଶା ବ୍ୟକ୍ତ କରିଛି।`,
    category: 'mayurbhanj',
    district: 'ମୟୂରଭଞ୍ଜ',
    block: 'ବାରିପଦା',
    author: 'ସୁଶାନ୍ତ କୁମାର ନାୟକ (ସମ୍ପାଦକ)',
    authorRole: 'ମୁଖ୍ୟ ସମ୍ପାଦକ',
    publishedAt: '୨୯ ମେ ୨୦୨୬, ୦୬:୩୦ ସକାଳ',
    updatedAt: '୨୯ ମେ ୨୦୨୬, ୦୮:୧୫ ସକାଳ',
    readTimeMinutes: 4,
    image: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg',
    imageCaption: 'ବାରିପଦା ଐତିହ୍ୟ ସହର ଓ ପ୍ରଶାସନିକ କାର୍ଯ୍ୟାଳୟ ପରିସର',
    isLead: true,
    isTrending: true,
    views: 4820,
    likes: 312,
    tags: ['ମୟୂରଭଞ୍ଜ', 'ବାରିପଦା', 'ବିକାଶ', 'ମାଷ୍ଟରପ୍ଲାନ୍', 'ପୌରପାଳିକା'],
    status: 'published',
    translations: {
      en: {
        title: 'Baripada Heritage City Transformation: Mega 120 Crore Masterplan to be Implemented',
        summary: 'Mayurbhanj district administration unveils comprehensive masterplan for modern infrastructure, 4-lane roads, and heritage conservation in Baripada.',
        content: 'Baripada, May 29 (Prime Time Press): A comprehensive masterplan worth Rs 120 crores has been finalized for the holistic transformation of Baripada town. The plan includes upgrading the Debendrapur corridor to 4 lanes, permanent stormwater drainage solutions, modern bus terminal, and heritage precinct beautification.'
      },
      hi: {
        title: 'बारीपदा हेरिटेज सिटी का कायाकल्प: 120 करोड़ की लागत से लागू होगा मास्टरप्लान',
        summary: 'मयूरभंज जिला प्रशासन ने बारीपदा शहर में आधुनिक बुनियादी ढांचे और विरासत संरक्षण के लिए 120 करोड़ की योजना तैयार की।',
        content: 'बारीपदा, 29 मई (प्राइम टाइम प्रेस ब्यूरो): मयूरभंज जिला प्रशासन ने बारीपदा को आधुनिक और ऐतिहासिक शहर के रूप में विकसित करने के लिए 120 करोड़ के मास्टरप्लान को अंतिम रूप दिया है।'
      }
    }
  },
  {
    id: 'art-mayurbhanj-2',
    slug: 'similipal-tiger-reserve-tourism-conservation-patrol',
    title: 'ଶିମିଳିପାଳରେ ବନ୍ୟପ୍ରାଣୀ ସୁରକ୍ଷା ବ୍ୟବସ୍ଥା କଡ଼ାକଡ଼ି: ଡ୍ରୋନ୍ ଓ ସ୍ୱତନ୍ତ୍ର ଫୋର୍ସ ମୁତୟନ',
    subtitle: 'ବନ ବିଭାଗର ସୂଚନା: ବାରିପଦା, ଯଶୀପୁର ଓ ଉଦଳା ରେଞ୍ଜରେ ସତର୍କତା ଜାରି',
    summary: 'ଏସିଆର ଦ୍ୱିତୀୟ ବୃହତ୍ତମ ବାୟୋସ୍ଫିୟର ରିଜର୍ଭ ଶିମିଳିପାଳରେ ହେତା ଓ ହାତୀ ସୁରକ୍ଷା ପାଇଁ ଆଧୁନିକ ପ୍ରଯୁକ୍ତିବିଦ୍ୟା ବ୍ୟବହାର କରାଯାଉଛି।',
    content: `ବାରିପଦା: ଶିମିଳିପାଳ ଜାତୀୟ ଉଦ୍ୟାନରେ ବନ୍ୟଜନ୍ତୁ ଶିକାର ଓ ବନ ଅଗ୍ନିକାଣ୍ଡ ରୋକିବା ପାଇଁ ବନ ବିଭାଗ ପକ୍ଷରୁ ଅତ୍ୟାଧୁନିକ ଥର୍ମାଲ ଡ୍ରୋନ୍ କ୍ୟାମେରା ବ୍ୟବହାର କରାଯାଉଛି। ବାରିପଦା ବନଖଣ୍ଡ ଅଧିକାରୀଙ୍କ କହିବା ଅନୁଯାୟୀ, ଶିମିଳିପାଳ କୋର୍ ଏରିଆରେ ସ୍ୱତନ୍ତ୍ର ବ୍ୟାଘ୍ର ସଂରକ୍ଷଣ ବଳ (STPF) ଦ୍ୱାରା ୨୪ ଘଣ୍ଟିଆ ପାଟ୍ରୋଲିଂ ଜାରି ରହିଛି।

ସ୍ଥାନୀୟ ଜନଜାତି ବର୍ଗର ଯୁବକମାନଙ୍କୁ ସବୁଜ ସାଥି ଭାବେ ନିଯୁକ୍ତି ଦିଆଯାଇ ବନ ସୁରକ୍ଷାରେ ସାମିଲ କରାଯାଇଛି। ପର୍ଯ୍ୟଟକମାନଙ୍କ ପାଇଁ ନୂତନ ଇକୋ-କଟେଜ୍ ଏବଂ ଗାଇଡେଡ୍ ଟ୍ରେକିଂ ରୁଟ୍ ମଧ୍ୟ ଆରମ୍ଭ ହୋଇଛି।`,
    category: 'mayurbhanj',
    district: 'ମୟୂରଭଞ୍ଜ',
    block: 'ଯଶୀପୁର',
    author: 'ଦୀପକ କୁମାର ମହାନ୍ତ',
    authorRole: 'ମୟୂରଭଞ୍ଜ ସ୍ୱତନ୍ତ୍ର ପ୍ରତିନିଧି',
    publishedAt: '୨୯ ମେ ୨୦୨୬, ୦୭:୧୫ ସକାଳ',
    readTimeMinutes: 3,
    image: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg',
    imageCaption: 'ଶିମିଳିପାଳ ବ୍ୟାଘ୍ର ପ୍ରକଳ୍ପ ଅଭୟାରଣ୍ୟ ପ୍ରବେଶ ପଥ',
    views: 3120,
    likes: 189,
    tags: ['ଶିମିଳିପାଳ', 'ମୟୂରଭଞ୍ଜ', 'ବନ୍ୟପ୍ରାଣୀ', 'ପର୍ଯ୍ୟଟନ', 'ଯଶୀପୁର'],
    status: 'published'
  },
  {
    id: 'art-agri-1',
    slug: 'mayurbhanj-organic-farming-paddy-kisan-support',
    title: 'ମୟୂରଭଞ୍ଜର ଜୈବିକ ଚାଷୀଙ୍କୁ ନୂଆ ପ୍ରୋତ୍ସାହନ: ପିଏମ୍-କିଷାନ୍ ଓ କାଳିଆ ଯୋଜନାରେ ସହାୟତା ରାଶି ବୃଦ୍ଧି',
    subtitle: 'ବେତନଟୀ ଓ ମୋରଡ଼ା ବ୍ଲକରେ ଉଦ୍‌ଘାଟିତ ହେଲା ଆଧୁନିକ ଶୀତଳ ଭଣ୍ଡାର ଓ କୃଷି ବିପଣନ କେନ୍ଦ୍ର',
    summary: 'ମୟୂରଭଞ୍ଜ ଜିଲ୍ଲାରେ ପାରମ୍ପରିକ ତଥା ସୁଗନ୍ଧିତ ଧାନ ଚାଷ କରୁଥିବା କୃଷକମାନଙ୍କ ପାଇଁ ସରକାର ସ୍ୱତନ୍ତ୍ର ବଜାର ବ୍ୟବସ୍ଥା ଓ ସବସିଡି ପ୍ରଦାନ କରୁଛନ୍ତି।',
    content: `ବେତନଟୀ: ମୟୂରଭଞ୍ଜ ଜିଲ୍ଲାର କୃଷକମାନଙ୍କ ପାଇଁ ଏକ ଖୁସି ଖବର। କେନ୍ଦ୍ର ଓ ରାଜ୍ୟ ସରକାରଙ୍କ ସହଯୋଗରେ ଜିଲ୍ଲାର ୧୪ଟି ବ୍ଲକରେ ଜୈବିକ ଧାନ ଏବଂ ପନିପରିବା ଚାଷୀଙ୍କୁ ସିଧାସଳଖ ଆର୍ଥିକ ପ୍ରୋତ୍ସାହନ ଦିଆଯାଉଛି। ବେତନଟୀ ଓ ମୋରଡ଼ାରେ ନୂତନ କୃଷି ଶୀତଳ ଭଣ୍ଡାର କାର୍ଯ୍ୟକ୍ଷମ ହୋଇଥିବାରୁ ଚାଷୀମାନେ ନିଜର ଉତ୍ପାଦିତ ସାମଗ୍ରୀ ଉଚିତ ମୂଲ୍ୟରେ ବିକ୍ରି କରିପାରୁଛନ୍ତି।

କୃଷି ବିଭାଗ ଅଧିକାରୀଙ୍କ ସୂଚନା ଅନୁସାରେ, ପିଏମ୍ ଫସଲ ବୀମା ଯୋଜନା (PMFBY) ଅଧୀନରେ ଚଳିତ ବର୍ଷ ୮୫ ପ୍ରତିଶତ ଚାଷୀ ପଞ୍ଜୀକୃତ ହୋଇଛନ୍ତି। କୃଷି କଲ୍ୟାଣ କେନ୍ଦ୍ର ମାଧ୍ୟମରେ ମାଟି ପରୀକ୍ଷା କାର୍ଡ ପ୍ରଦାନ କରାଯାଉଛି।`,
    category: 'agriculture',
    district: 'ମୟୂରଭଞ୍ଜ',
    block: 'ବେତନଟୀ',
    author: 'ସୌମ୍ୟା ଦାସ',
    authorRole: 'କୃଷି ପ୍ରତିନିଧି',
    publishedAt: '୨୯ ମେ ୨୦୨୬, ୦୮:୦୦ ସକାଳ',
    readTimeMinutes: 3,
    image: '/src/assets/images/odisha_agriculture_farmers_1791117276754.jpg',
    imageCaption: 'ମୟୂରଭଞ୍ଜରେ ସୁବର୍ଣ୍ଣ ଧାନ କ୍ଷେତରେ ଚାଷୀଙ୍କ ସହ ଆଲୋଚନା',
    isTrending: true,
    views: 3950,
    likes: 245,
    tags: ['କୃଷି', 'ପିଏମ-କିଷାନ୍', 'ମୟୂରଭଞ୍ଜ', 'ଚାଷୀ', 'ବେତନଟୀ'],
    status: 'published'
  },
  {
    id: 'art-odisha-1',
    slug: 'odisha-cabinet-decisions-infrastructure-health-subsidies',
    title: 'ଓଡ଼ିଶା କ୍ୟାବିନେଟ୍‌ର ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ନିଷ୍ପତ୍ତି: ଗ୍ରାମାଞ୍ଚଳ ସ୍ୱାସ୍ଥ୍ୟସେବା ଓ ପାନୀୟ ଜଳ ପାଇଁ ୨୫୦୦ କୋଟି ମଞ୍ଜୁର',
    subtitle: 'ମୁଖ୍ୟମନ୍ତ୍ରୀଙ୍କ ଅଧ୍ୟକ୍ଷତାରେ ବୈଠକ: ପ୍ରତି ପଞ୍ଚାୟତରେ ପାଇପ୍ ଯୋଗେ ବିଶୁଦ୍ଧ ପାନୀୟ ଜଳ ଯୋଗାଣ ଲକ୍ଷ୍ୟ',
    summary: 'ରାଜ୍ୟ କ୍ୟାବିନେଟ୍ ବୈଠକରେ ୧୮ଟି ପ୍ରମୁଖ ପ୍ରସ୍ତାବକୁ ଅନୁମୋଦନ ମିଳିଛି। ମୟୂରଭଞ୍ଜ, କେନ୍ଦୁଝର ଓ ବାଲେଶ୍ୱର ଜିଲ୍ଲାର ଉନ୍ନୟନମୂଳକ କାର୍ଯ୍ୟକୁ ଅଗ୍ରାଧିକାର।',
    content: `ଭୁବନେଶ୍ୱର: ଲୋକସେବା ଭବନରେ ଅନୁଷ୍ଠିତ କ୍ୟାବିନେଟ୍ ବୈଠକରେ ରାଜ୍ୟର ଗ୍ରାମୀଣ ବିକାଶ ପାଇଁ ବଡ଼ ପଦକ୍ଷେପ ନିଆଯାଇଛି। ମୁଖ୍ୟ ଶାସନ ସଚିବଙ୍କ ସୂଚନା ଅନୁଯାୟୀ, ରାଜ୍ୟର ସମସ୍ତ ଗ୍ରାମରେ 'ବସୁଧା' ଓ ଜଳ ଜୀବନ ମିଶନ ଯୋଜନାରେ ପାଇପ୍ ପାନୀୟ ଜଳ ପହଞ୍ଚାଇବା ପାଇଁ ୨,୫୦୦ କୋଟି ଟଙ୍କାର ବ୍ୟୟବରାଦକୁ ମଞ୍ଜୁରୀ ମିଳିଛି।

ଏହାସହ ଜିଲ୍ଲା ମୁଖ୍ୟ ଚିକିତ୍ସାଳୟଗୁଡ଼ିକରେ ଡାକ୍ତର ଓ ପାରାମେଡିକାଲ୍ ଷ୍ଟାଫ୍ ନିଯୁକ୍ତି ପ୍ରକ୍ରିୟା ତ୍ୱରାନ୍ୱିତ କରିବା ଏବଂ ଗ୍ରାମାଞ୍ଚଳରେ ମାଗଣା ଔଷଧ ଯୋଗାଣକୁ ସୁଦୃଢ଼ କରିବାକୁ ନିର୍ଦ୍ଦେଶ ଦିଆଯାଇଛି।`,
    category: 'odisha',
    district: 'ଖୋର୍ଦ୍ଧା',
    block: 'ଭୁବନେଶ୍ୱର',
    author: 'ରଶ୍ମିରଞ୍ଜନ ମହାପାତ୍ର',
    authorRole: 'ବରିଷ୍ଠ ରାଜନୈତିକ ସମ୍ପାଦକ',
    publishedAt: '୨୯ ମେ ୨୦୨୬, ୦୭:୪୫ ସକାଳ',
    readTimeMinutes: 4,
    image: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg',
    imageCaption: 'ଲୋକସେବା ଭବନ କ୍ୟାବିନେଟ୍ ବୈଠକ ନିଷ୍ପତ୍ତି ଘୋଷଣା',
    views: 4210,
    likes: 280,
    tags: ['ଓଡ଼ିଶା', 'କ୍ୟାବିନେଟ୍', 'ସ୍ୱାସ୍ଥ୍ୟ', 'ପାନୀୟ_ଜଳ', 'ବିକାଶ'],
    status: 'published'
  },
  {
    id: 'art-politics-1',
    slug: 'odisha-assembly-mayurbhanj-development-debate',
    title: 'ବିଧାନସଭାରେ ଉତ୍ତର ଓଡ଼ିଶା ବିକାଶ ପ୍ରସଙ୍ଗ: ସରକାର ଓ ବିରୋଧୀଙ୍କ ମଧ୍ୟରେ ଯୁକ୍ତିତର୍କ',
    subtitle: 'ବାରିପଦା-ବାଲେଶ୍ୱର ରେଳ ଲାଇନ୍ ଦୋହରୀକରଣ ଓ ଜଳସେଚନ ପ୍ରକଳ୍ପ ନେଇ ପ୍ରଶ୍ନୋତ୍ତର',
    summary: 'ବିଧାନସଭା ପ୍ରଶ୍ନକାଳରେ ମୟୂରଭଞ୍ଜର ସ୍ଥାନୀୟ ସମସ୍ୟା ଓ ନିଯୁକ୍ତି ପ୍ରସଙ୍ଗ ଉଠିଛି। ଶାସକ ଓ ବିରୋଧୀ ପରସ୍ପର ଉପରେ ଦୋଷାରୋପ କରିଛନ୍ତି।',
    content: `ଭୁବନେଶ୍ୱର: ବିଧାନସଭା ଅଧିବେଶନରେ ଆଜି ଉତ୍ତର ଓଡ଼ିଶାର ବିକାଶ ମୁଖ୍ୟ ପ୍ରସଙ୍ଗ ପାଲଟିଥିଲା। ମୟୂରଭଞ୍ଜ ଓ ବାଲେଶ୍ୱର ବିଧାୟକମାନେ ବାରିପଦା ମେଡିକାଲ କଲେଜର ସୁପର ସ୍ପେଶାଲିଟି ବିଭାଗ ନିର୍ମାଣ ଏବଂ ସୁବର୍ଣ୍ଣରେଖା ପ୍ରକଳ୍ପର କାର୍ଯ୍ୟ ଶେଷ କରିବାକୁ ଦାବି କରିଛନ୍ତି।

ସୂଚନା ଅନୁସାରେ, ବିଜେପି, ବିଜେଡି ଓ କଂଗ୍ରେସ ବିଧାୟକମାନେ ଆଞ୍ଚଳିକ ବୈଷମ୍ୟ ଦୂର କରିବା ପାଇଁ ସ୍ୱତନ୍ତ୍ର ଧ୍ୟାନ ଦେବାକୁ ଦାବି କରିଛନ୍ତି। ବିଭାଗୀୟ ମନ୍ତ୍ରୀ ଉତ୍ତର ରଖି କହିଛନ୍ତି ଯେ ନିର୍ଦ୍ଧାରିତ ସମୟ ମଧ୍ୟରେ ସମସ୍ତ କାର୍ଯ୍ୟ ସମ୍ପୂର୍ଣ୍ଣ କରାଯିବ।`,
    category: 'politics',
    author: 'ସୁଶାନ୍ତ କୁମାର ନାୟକ (ସମ୍ପାଦକ)',
    authorRole: 'ମୁଖ୍ୟ ସମ୍ପାଦକ',
    publishedAt: '୨୯ ମେ ୨୦୨୬, ୦୯:୦୦ ସକାଳ',
    readTimeMinutes: 3,
    image: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg',
    imageCaption: 'ଓଡ଼ିଶା ବିଧାନସଭା ପରିସର',
    views: 2980,
    likes: 142,
    tags: ['ରାଜନୀତି', 'ବିଧାନସଭା', 'ବିଜେପି', 'ବିଜେଡି', 'କଂଗ୍ରେସ', 'ମୟୂରଭଞ୍ଜ'],
    status: 'published'
  },
  {
    id: 'art-crime-1',
    slug: 'mayurbhanj-cyber-crime-awareness-police-arrest',
    title: 'ଅନଲାଇନ୍ ଠକେଇ ଗ୍ୟାଙ୍ଗର ପର୍ଦ୍ଦାଫାଶ: ବାରିପଦା ପୋଲିସ ଦ୍ୱାରା ୩ ଅଭିଯୁକ୍ତ ଗିରଫ',
    subtitle: 'ପୋଲିସର ସୂଚନା ଅନୁସାରେ: ଚାକିରି ଦେବା ନାଁରେ ଲକ୍ଷାଧିକ ଟଙ୍କା ଠକୁଥିଲେ',
    summary: 'ଅଭିଯୋଗ ଅନୁସାରେ ବାରିପଦା ସାଇବର ଥାନା ପୋଲିସ ଏକ ଆନ୍ତଃରାଜ୍ୟ ଠକ ଗ୍ୟାଙ୍ଗକୁ ଧରିବାରେ ସଫଳ ହୋଇଛି। ଲୋକଙ୍କୁ ସତର୍କ ରହିବାକୁ ଏସପିଙ୍କ ପରାମର୍ଶ।',
    content: `ବାରିପଦା: ବାରିପଦା ସାଇବର ପୋଲିସ ଏକ ବଡ଼ ଠକେଇ ରାକେଟର ପର୍ଦ୍ଦାଫାଶ କରିଛି। ପୋଲିସର ସୂଚନା ଅନୁଯାୟୀ, ନକଲି ୱେବସାଇଟ୍ ଓ ଏସଏମଏସ ଲିଙ୍କ ମାଧ୍ୟମରେ ସରକାରୀ ଚାକିରି ପ୍ରଲୋଭନ ଦେଖାଇ ଲୋକଙ୍କ ଆକାଉଣ୍ଟରୁ ଟଙ୍କା ଲୁଟି ନିଆଯାଉଥିଲା। 

ଜଣେ ପ୍ରତାରିତ ଯୁବକଙ୍କ ଏଫଆଇଆର୍ ଆଧାରରେ ତଦନ୍ତ କରି ପୋଲିସ ତିନି ଜଣଙ୍କୁ ଗିରଫ କରିଛି। ସେମାନଙ୍କ ନିକଟରୁ ୧୨ଟି ମୋବାଇଲ୍, ୨୫ଟି ସିମ୍ କାର୍ଡ ଓ ନଗଦ ୩ ଲକ୍ଷ ଟଙ୍କା ଜବତ କରାଯାଇଛି। ମୟୂରଭଞ୍ଜ ଏସପି ସାଧାରଣ ଲୋକଙ୍କୁ କୌଣସି ଅଜଣା ଲିଙ୍କ କ୍ଲିକ୍ ନକରିବାକୁ ଅନୁରୋଧ କରିଛନ୍ତି।`,
    category: 'crime',
    district: 'ମୟୂରଭଞ୍ଜ',
    block: 'ବାରିପଦା',
    author: 'ଦୀପକ କୁମାର ମହାନ୍ତ',
    authorRole: 'କ୍ରାଇମ୍ ରିପୋର୍ଟର',
    publishedAt: '୨୯ ମେ ୨୦୨୬, ୦୮:୪୦ ସକାଳ',
    readTimeMinutes: 3,
    image: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg',
    imageCaption: 'ବାରିପଦା ଜିଲ୍ଲା ପୋଲିସ ମୁଖ୍ୟାଳୟ ପ୍ରେସ୍ ମିଟ୍',
    views: 3410,
    likes: 167,
    tags: ['ଅପରାଧ', 'ସାଇବର', 'ପୋଲିସ', 'ବାରିପଦା', 'ଏଫଆଇଆର୍'],
    status: 'published'
  },
  {
    id: 'art-edu-1',
    slug: 'odisha-opsc-osssc-recruitment-notification-2026',
    title: 'ଓଡ଼ିଶାରେ ୭୫୦୦ ସରକାରୀ ପଦବୀ ପାଇଁ ଆବେଦନ ଆରମ୍ଭ: ଓପିଏସସି ଓ ଓଏସଏସଏସସି ବିଜ୍ଞପ୍ତି',
    subtitle: 'ଶିକ୍ଷକ, ରାଜସ୍ୱ ନିରୀକ୍ଷକ, ଅମିନ ଓ ସ୍ୱାସ୍ଥ୍ୟ ସହାୟକ ପଦବୀ ପାଇଁ ପରୀକ୍ଷା ତାରିଖ ଘୋଷଣା',
    summary: 'ଚାକିରି ଆଶାୟୀଙ୍କ ପାଇଁ ବଡ଼ ସୁଯୋଗ। ଅନଲାଇନ୍ ଆବେଦନ ପାଇଁ ପୋର୍ଟାଲ ଖୋଲିଲା। ବୟସ ସୀମାରେ ଛାଡ଼ ପ୍ରଦାନ ନିଷ୍ପତ୍ତି।',
    content: `ଭୁବନେଶ୍ୱର: ଓଡ଼ିଶା ଲୋକସେବା ଆୟୋଗ (OPSC) ଏବଂ ଓଡ଼ିଶା ଷ୍ଟାଫ୍ ସିଲେକ୍ସନ କମିଶନ (OSSC) ପକ୍ଷରୁ ମିଳିତ ଭାବେ ବିଭିନ୍ନ ବିଭାଗରେ ୭,୫୦୦ରୁ ଊର୍ଦ୍ଧ୍ୱ ପଦବୀ ନିମନ୍ତେ ଆବେଦନ ଆହ୍ୱାନ କରାଯାଇଛି। ଏଥିରେ ମୟୂରଭଞ୍ଜ ସମେତ ରାଜ୍ୟର ସମସ୍ତ ୩୦ଟି ଜିଲ୍ଲାର ପରୀକ୍ଷା କେନ୍ଦ୍ର ରହିବ।

ପରୀକ୍ଷା ପ୍ରକ୍ରିୟାକୁ ସ୍ୱଚ୍ଛ ରଖିବା ପାଇଁ ସିସିଟିଭି ସର୍ଭେଲାନ୍ସ ଏବଂ ବାୟୋମେଟ୍ରିକ୍ ଯାଞ୍ଚ ବାଧ୍ୟତାମୂଳକ କରାଯାଇଛି। ଆଗ୍ରହୀ ପ୍ରାର୍ଥୀମାନେ ଅଫିସିଆଲ୍ ପୋର୍ଟାଲ୍ ଜରିଆରେ ଆବେଦନ କରିପାରିବେ।`,
    category: 'education',
    author: 'ସୌମ୍ୟା ଦାସ',
    authorRole: 'ଶିକ୍ଷା ସମ୍ବାଦଦାତା',
    publishedAt: '୨୯ ମେ ୨୦୨୬, ୦୯:୧୫ ସକାଳ',
    readTimeMinutes: 3,
    image: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg',
    imageCaption: 'ଓଡ଼ିଶା ଷ୍ଟାଫ୍ ସିଲେକ୍ସନ କମିଶନ ପରୀକ୍ଷା କେନ୍ଦ୍ର ସୂଚନା',
    isTrending: true,
    views: 6540,
    likes: 412,
    tags: ['ଶିକ୍ଷା', 'ଚାକିରି', 'ଓପିଏସସି', 'ଓଏସଏସଏସସି', 'ନିଯୁକ୍ତି'],
    status: 'published'
  },
  {
    id: 'art-sports-1',
    slug: 'odisha-hockey-national-junior-championship-mayurbhanj',
    title: 'ଓଡ଼ିଶା ହକି ଦଳର ଚମକ: ଜାତୀୟ ଜୁନିଅର ଚାମ୍ପିଅନସିପ୍ ଫାଇନାଲ୍‌ରେ ପ୍ରବେଶ',
    subtitle: 'ମୟୂରଭଞ୍ଜର ୩ ଜଣ ଖେଳାଳିଙ୍କ ଉଲ୍ଲେଖନୀୟ ପ୍ରଦର୍ଶନ; କଳିଙ୍ଗ ଷ୍ଟାଡିୟମ୍‌ରେ ଖୁସିର ଲହରୀ',
    summary: 'ସେମିଫାଇନାଲ୍‌ରେ ହରିୟାଣାକୁ ୩-୧ ଗୋଲ୍‌ରେ ପରାସ୍ତ କରି ଓଡ଼ିଶା ଦଳ ଫାଇନାଲ୍‌ରେ ନିଜ ସ୍ଥାନ ପକ୍କା କରିଛି।',
    content: `ଭୁବନେଶ୍ୱର: କଳିଙ୍ଗ ଷ୍ଟାଡିୟମ୍‌ରେ ଖେଳାଯାଇଥିବା ଉତ୍କଣ୍ଠାପୂର୍ଣ୍ଣ ସେମିଫାଇନାଲ ମ୍ୟାଚ୍‌ରେ ଓଡ଼ିଶା ହକି ଦଳ ହରିୟାଣାକୁ ୩-୧ ଗୋଲରେ ପରାଜିତ କରିଛି। ମ୍ୟାଚ୍‌ରେ ମୟୂରଭଞ୍ଜ ଜିଲ୍ଲା କରଞ୍ଜିଆର ଅମିତ ମୁର୍ମୁ ଦୁଇଟି ଆକର୍ଷଣୀୟ ଫିଲ୍ଡ ଗୋଲ୍ ଦେଇ ମ୍ୟାନ୍ ଅଫ୍ ଦି ମ୍ୟାଚ୍ ବିବେଚିତ ହୋଇଛନ୍ତି।

କ୍ରୀଡ଼ା ମନ୍ତ୍ରୀ ଦଳର ପ୍ରଦର୍ଶନକୁ ପ୍ରଶଂସା କରି ଆଗାମୀ ଫାଇନାଲ୍ ମ୍ୟାଚ୍ ପାଇଁ ଶୁଭେଚ୍ଛା ଜଣାଇଛନ୍ତି। ବାରିପଦାରେ ସ୍ଥାନୀୟ କ୍ରୀଡ଼ାପ୍ରେମୀଙ୍କ ମଧ୍ୟରେ ଉତ୍ସବର ମାହୋଲ ଦେଖିବାକୁ ମିଳିଛି।`,
    category: 'sports',
    author: 'ସୌମ୍ୟା ଦାସ',
    authorRole: 'କ୍ରୀଡ଼ା ପ୍ରତିନିଧି',
    publishedAt: '୨୯ ମେ ୨୦୨୬, ୦୯:୩୦ ସକାଳ',
    readTimeMinutes: 2,
    image: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg',
    imageCaption: 'ଓଡ଼ିଶା ହକି ଦଳର ବିଜୟ ଉଲ୍ଲାସ',
    views: 2890,
    likes: 198,
    tags: ['କ୍ରୀଡ଼ା', 'ହକି', 'ଓଡ଼ିଶା', 'କଳିଙ୍ଗ_ଷ୍ଟାଡିୟମ', 'ମୟୂରଭଞ୍ଜ'],
    status: 'published'
  },
  {
    id: 'art-editorial-1',
    slug: 'editorial-susanta-nayak-peoples-court-grassroots-voice',
    title: 'ଗ୍ରାମାଞ୍ଚଳ ବିକାଶ ଓ ଜନସାଧାରଣଙ୍କ ସ୍ୱର: ପ୍ରକୃତ ଗଣତନ୍ତ୍ରର ଭିତ୍ତିଭୂମି',
    subtitle: 'ସମ୍ପାଦକୀୟ: ସୁଶାନ୍ତ କୁମାର ନାୟକ | “ଜନତାର ଦରବାର, ଆପଣଙ୍କ ସ୍ୱର।”',
    summary: 'ସମ୍ବାଦପତ୍ର କେବଳ ଖବର ପରିବେଷଣ କରେନାହିଁ, ସାଧାରଣ ମଣିଷର ଅକୁହା ବେଦନା ଓ ଅଧିକାରକୁ ପ୍ରଶାସନ ସାମ୍ନାରେ ଉପସ୍ଥାପନ କରିବା ହେଉଛି ଆମର ପବିତ୍ର ଦାୟିତ୍ୱ।',
    content: `ସମ୍ପାଦକୀୟ ସ୍ତମ୍ଭ — ସୁଶାନ୍ତ କୁମାର ନାୟକ:

ଏକ ସୁସ୍ଥ ଗଣତନ୍ତ୍ରର ମୂଳଦୁଆ ସେତିକିବେଳେ ସୁଦୃଢ଼ ହୁଏ, ଯେତେବେଳେ ଦେଶର ସବୁଠାରୁ ଦୁର୍ଗମ ଅଞ୍ଚଳରେ ଥିବା ସାଧାରଣ ନାଗରିକର ସ୍ୱର ରାଜଧାନୀର ନୀତି ନିର୍ଦ୍ଧାରକଙ୍କ କାନରେ ପହଞ୍ଚିପାରେ। ମୟୂରଭଞ୍ଜ ଜିଲ୍ଲା ଭଳି ପ୍ରାକୃତିକ ସମ୍ପଦରେ ପରିପୂର୍ଣ୍ଣ ଏବଂ ସମୃଦ୍ଧ ସାଂସ୍କୃତିକ ଐତିହ୍ୟ ଧାରଣ କରିଥିବା ଅଞ୍ଚଳରେ ଆଜି ମଧ୍ୟ ଅନେକ ଗାଁରେ ରାସ୍ତା, ପାନୀୟ ଜଳ ଏବଂ ସ୍ୱାସ୍ଥ୍ୟସେବା ଏକ ବଡ଼ ଆହ୍ୱାନ ହୋଇ ରହିଛି।

'ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍' କେବଳ ଏକ ଦୈନିକ ଖବର କାଗଜ କିମ୍ବା ଡିଜିଟାଲ୍ ପୋର୍ଟାଲ ନୁହେଁ। ଏହା ହେଉଛି ଓଡ଼ିଶାବାସୀଙ୍କ ବିଶ୍ୱାସର ମଞ୍ଚ — "ଜନତାର ଦରବାର, ଆପଣଙ୍କ ସ୍ୱର।" ଆମେ ସଂକଳ୍ପବଦ୍ଧ ଯେ କୌଣସି ରାଜନୈତିକ ଚାପ କିମ୍ବା ବ୍ୟକ୍ତିଗତ ସ୍ୱାର୍ଥର ବଶବର୍ତ୍ତୀ ନହୋଇ ସତ୍ୟକୁ ନିର୍ଭୟରେ ପ୍ରକାଶ କରିବୁ।

ଯେଉଁ ଗାଁରେ ବ୍ରିଜ୍ ନଥିବାରୁ ଗର୍ଭବତୀ ମହିଳା ଖଟିଆରେ ବୁହାହୋଇ ହସ୍ପିଟାଲ ଯାଆନ୍ତି, ଯେଉଁ ଚାଷୀ ମଣ୍ଡିରେ ଫସଲ ବିକିନପାରି କାନ୍ଦେ, ଯେଉଁ ମେଧାବୀ ଯୁବକ ଚାକିରି ପରୀକ୍ଷାରେ ଅନିୟମିତତା ଯୋଗୁଁ ନିରାଶ ହୁଏ — ସେମାନଙ୍କ ପକ୍ଷ ନେଇ ଛିଡ଼ା ହେବା ହେଉଛି 'ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍'ର ଧର୍ମ।

ଆସନ୍ତୁ, ଏକ ସଚେତନ ଓ ସଶକ୍ତ ଓଡ଼ିଶା ଗଠନରେ ଆମେ ସମସ୍ତେ ଭାଗୀଦାର ହେବା। ଆପଣଙ୍କ ସମସ୍ୟା ଆମକୁ ଜଣାନ୍ତୁ, ଆମେ ତାହାକୁ ସରକାରଙ୍କ ଦରବାରରେ ପହଞ୍ଚାଇ ନ୍ୟାୟ ଦେବା ପାଇଁ ସର୍ବଦା ଚେଷ୍ଟା କରିବୁ।`,
    category: 'editorial',
    author: 'ସୁଶାନ୍ତ କୁମାର ନାୟକ (ସମ୍ପାଦକ)',
    authorRole: 'ମୁଖ୍ୟ ସମ୍ପାଦକ, ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍',
    publishedAt: '୨୯ ମେ ୨୦୨୬, ୦୬:୦୦ ସକାଳ',
    readTimeMinutes: 5,
    image: '/src/assets/images/prime_time_newspaper_cover_1791117304778.jpg',
    imageCaption: 'ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ମୁଖ୍ୟ ସମ୍ପାଦକୀୟ ସ୍ତମ୍ଭ',
    isEditorial: true,
    views: 5420,
    likes: 512,
    tags: ['ସମ୍ପାଦକୀୟ', 'ସୁଶାନ୍ତ_ନାୟକ', 'ଜନତାର_ଦରବାର', 'ମୟୂରଭଞ୍ଜ', 'ଓଡ଼ିଶା'],
    status: 'published'
  },
  {
    id: 'art-business-1',
    slug: 'mayurbhanj-sabai-grass-handicraft-export-boost',
    title: 'ମୟୂରଭଞ୍ଜର ସବାଇ ଘାସ ଶିଳ୍ପକୁ ବିଶ୍ୱ ବଜାରରେ ଚାହିଦା: ମହିଳା ସ୍ୱୟଂ ସହାୟକ ଗୋଷ୍ଠୀଙ୍କ ସଫଳତା',
    subtitle: 'ବାରିପଦା ଓ କୁଳିଅଣାରୁ ୟୁରୋପକୁ ରପ୍ତାନି ହେଲା ୫ କୋଟିର ହସ୍ତତନ୍ତ ସାମଗ୍ରୀ',
    summary: 'ମୟୂରଭଞ୍ଜର ପାରମ୍ପରିକ ସବାଇ ଘାସରୁ ତିଆରି ହସ୍ତଶିଳ୍ପ ଆନ୍ତର୍ଜାତୀୟ ସ୍ତରରେ ସ୍ୱତନ୍ତ୍ର ପରିଚୟ ସୃଷ୍ଟି କରିଛି। ହଜାର ହଜାର ମହିଳା ହେଲେ ଆତ୍ମନିର୍ଭରଶୀଳ।',
    content: `ବାରିପଦା: ମୟୂରଭଞ୍ଜର ସବାଇ ଘାସ (Golden Grass) ଆଜି ବିଦେଶରେ ସୁନାମ ଅର୍ଜନ କରିଛି। କୁଳିଅଣା, ବାରିପଦା ଓ ଖୁଣ୍ଟା ବ୍ଲକର ମହିଳା ସ୍ୱୟଂ ସହାୟକ ଗୋଷ୍ଠୀ (WSHG) ଦ୍ୱାରା ପ୍ରସ୍ତୁତ ଚଟାଣ, ବ୍ୟାଗ୍, ଡାଲା ଏବଂ ଗୃହ ସଜ୍ଜା ସାମଗ୍ରୀ ୟୁରୋପୀୟ ଦେଶକୁ ରପ୍ତାନି କରାଯାଇଛି।

ଜିଲ୍ଲା ପ୍ରଶାସନ ତରଫରୁ ବାରିପଦାରେ ସ୍ୱତନ୍ତ୍ର ଡିଜାଇନ୍ ସେଣ୍ଟର ସ୍ଥାପନ କରାଯାଇଛି। ଏହାଦ୍ୱାରା ଗ୍ରାମୀଣ ମହିଳାମାନେ ମାସକୁ ୧୫,୦୦୦ରୁ ୨୦,୦୦୦ ଟଙ୍କା ପର୍ଯ୍ୟନ୍ତ ରୋଜଗାର କରିପାରୁଛନ୍ତି।`,
    category: 'business',
    district: 'ମୟୂରଭଞ୍ଜ',
    block: 'କୁଳିଅଣା',
    author: 'ସୌମ୍ୟା ଦାସ',
    authorRole: 'ବ୍ୟବସାୟ ସମ୍ବାଦଦାତା',
    publishedAt: '୨୯ ମେ ୨୦୨୬, ୧୦:୦୦ ସକାଳ',
    readTimeMinutes: 3,
    image: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg',
    imageCaption: 'ମୟୂରଭଞ୍ଜ ସବାଇ ଶିଳ୍ପ ପ୍ରଦର୍ଶନୀ ଓ ବିପଣନ କେନ୍ଦ୍ର',
    views: 2450,
    likes: 175,
    tags: ['ବ୍ୟବସାୟ', 'ସବାଇ_ଘାସ', 'ମହିଳା_ସଶକ୍ତୀକରଣ', 'ମୟୂରଭଞ୍ଜ', 'ରପ୍ତାନି'],
    status: 'published'
  }
];

export const INITIAL_EPAPER_ISSUES: EPaperIssue[] = [
  {
    id: 'epaper-2026-05-29',
    issueNumber: 'ସଂଖ୍ୟା ୧୦',
    volumeNumber: 'ବର୍ଷ ୦୧',
    date: '2026-05-29',
    dateOdia: 'ଶୁକ୍ରବାର, ୨୯ ମେ ୨୦୨୬',
    editionLocation: 'ବାରିପଦା ମୁଖ୍ୟ ସଂସ୍କରଣ',
    price: '₹୫.୦୦',
    totalPages: 12,
    coverImage: '/src/assets/images/prime_time_newspaper_cover_1791117304778.jpg',
    pdfUrl: '#',
    pages: [
      { pageNumber: 1, title: 'ମୁଖ୍ୟ ପୃଷ୍ଠା (Front Page)', section: 'ମୁଖ୍ୟ ଆକର୍ଷଣ', imageUrl: '/src/assets/images/prime_time_newspaper_cover_1791117304778.jpg' },
      { pageNumber: 2, title: 'ଓଡ଼ିଶା ଆଞ୍ଚଳିକ (Odisha Regional)', section: 'ଓଡ଼ିଶା ଆଞ୍ଚଳିକ', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 3, title: 'ମୟୂରଭଞ୍ଜ ସ୍ୱତନ୍ତ୍ର (Mayurbhanj Special)', section: 'ମୟୂରଭଞ୍ଜ ସ୍ୱତନ୍ତ୍ର', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 4, title: 'ସମ୍ପାଦକଙ୍କ କଲମରୁ (Editorial)', section: 'ସମ୍ପାଦକଙ୍କ କଲମରୁ', imageUrl: '/src/assets/images/prime_time_newspaper_cover_1791117304778.jpg' },
      { pageNumber: 5, title: 'କୃଷି ଓ ଗ୍ରାମୀଣ ଅର୍ଥନୀତି', section: 'କୃଷି', imageUrl: '/src/assets/images/odisha_agriculture_farmers_1791117276754.jpg' },
      { pageNumber: 6, title: 'ଦେଶ ବିଦେଶ (National & World)', section: 'ଦେଶ ବିଦେଶ', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 7, title: 'ଶିକ୍ଷା ଓ ରୋଜଗାର (Jobs & Education)', section: 'ଶିକ୍ଷା', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 8, title: 'ବ୍ୟବସାୟ ଓ ବାଣିଜ୍ୟ (Business)', section: 'ବ୍ୟବସାୟ', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 9, title: 'ଖେଳ ଦୁନିଆ (Sports)', section: 'କ୍ରୀଡ଼ା', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 10, title: 'ଜନସମସ୍ୟା ଓ ଜନତାର ଦରବାର', section: 'ଜନସମସ୍ୟା', imageUrl: '/src/assets/images/prime_time_newspaper_cover_1791117304778.jpg' },
      { pageNumber: 11, title: 'ଫଟୋ ଫିଚର ଓ ସାଂସ୍କୃତିକ', section: 'ରବିବାର ବିଶେଷ', imageUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg' },
      { pageNumber: 12, title: 'ଶେଷ ପୃଷ୍ଠା - ବିଶେଷ ଖବର', section: 'ମୁଖ୍ୟ ଆକର୍ଷଣ', imageUrl: '/src/assets/images/prime_time_newspaper_cover_1791117304778.jpg' },
    ]
  },
  {
    id: 'epaper-2026-05-28',
    issueNumber: 'ସଂଖ୍ୟା ୦୯',
    volumeNumber: 'ବର୍ଷ ୦୧',
    date: '2026-05-28',
    dateOdia: 'ଗୁରୁବାର, ୨୮ ମେ ୨୦୨୬',
    editionLocation: 'ବାରିପଦା ସଂସ୍କରଣ',
    price: '₹୫.୦୦',
    totalPages: 12,
    coverImage: '/src/assets/images/prime_time_newspaper_cover_1791117304778.jpg',
    pages: []
  },
  {
    id: 'epaper-2026-05-27',
    issueNumber: 'ସଂଖ୍ୟା ୦୮',
    volumeNumber: 'ବର୍ଷ ୦୧',
    date: '2026-05-27',
    dateOdia: 'ବୁଧବାର, ୨୭ ମେ ୨୦୨୬',
    editionLocation: 'ବାରିପଦା ସଂସ୍କରଣ',
    price: '₹୫.୦୦',
    totalPages: 12,
    coverImage: '/src/assets/images/prime_time_newspaper_cover_1791117304778.jpg',
    pages: []
  }
];

export const INITIAL_COMPLAINTS: GrievanceComplaint[] = [
  {
    id: 'comp-1',
    refNumber: 'PTP-2026-MAY-7842',
    name: 'ମନୋଜ କୁମାର ପାତ୍ର',
    mobile: '9861023456',
    email: 'manoj.patra@gmail.com',
    district: 'ମୟୂରଭଞ୍ଜ',
    block: 'ବାରିପଦା',
    location: 'ୱାର୍ଡ ନଂ ୮, ଦେବେନ୍ଦ୍ରପୁର ମୁଖ୍ୟ ରାସ୍ତା',
    problemTitle: 'ବର୍ଷା ଦିନେ ଡ୍ରେନେଜ୍ ବନ୍ଦ ଯୋଗୁଁ ରାସ୍ତାରେ ଆଣ୍ଠୁଏ ଉଚ୍ଚର ଜଳବନ୍ଦୀ',
    description: 'ଦେବେନ୍ଦ୍ରପୁର ଅଞ୍ଚଳରେ ନିର୍ମାଣ ହୋଇଥିବା ମୁଖ୍ୟ ଡ୍ରେନ୍ ଅଳିଆ ଆବର୍ଜନାରେ ଭର୍ତ୍ତି ହୋଇ ରହିଛି। ଅଳ୍ପ ବର୍ଷା ହେଲେ ମଧ୍ୟ ସାହି ରାସ୍ତା ଉପରେ ପାଣି ଜମି ରହୁଛି। ପୌରପାଳିକାକୁ ବାରମ୍ବାର ଦାବିପତ୍ର ଦେଲେ ମଧ୍ୟ ସଫେଇ ହେଉନାହିଁ।',
    status: 'Reporter Assigned',
    reporterAssigned: 'ଦୀପକ କୁମାର ମହାନ୍ତ',
    internalNotes: 'ପୌର ନିର୍ବାହୀ ଅଧିକାରୀଙ୍କ ସହ ସାକ୍ଷାତ କରି ଭିଡିଓ ଗ୍ରାଉଣ୍ଡ ରିପୋର୍ଟ ପ୍ରସ୍ତୁତ କରାଯାଇଛି। ଆଗାମୀ ସଂସ୍କରଣରେ ପ୍ରକାଶିତ ହେବ।',
    statusTimeline: [
      { status: 'Received', timestamp: '୨୬ ମେ ୨୦୨୬, ୧୦:୦୦ ସକାଳ', note: 'ଅଭିଯୋଗ ପଞ୍ଜୀକୃତ ହେଲା' },
      { status: 'Under Review', timestamp: '୨୬ ମେ ୨୦୨୬, ୦୨:୩୦ ଅପରାହ୍ନ', note: 'ସମ୍ପାଦକୀୟ ବିଭାଗ ଦ୍ୱାରା ସମୀକ୍ଷା କରାଗଲା' },
      { status: 'Verification', timestamp: '୨୭ ମେ ୨୦୨୬, ୧୧:୦୦ ସକାଳ', note: 'ପ୍ରାଥମିକ ତଥ୍ୟ ଯାଞ୍ଚ ହେଲା' },
      { status: 'Reporter Assigned', timestamp: '୨୮ ମେ ୨୦୨୬, ୦୩:୧୫ ଅପରାହ୍ନ', note: 'ରିପୋର୍ଟର ଦୀପକ କୁମାର ମହାନ୍ତଙ୍କୁ ଦାୟିତ୍ୱ ଦିଆଗଲା' }
    ],
    createdAt: '୨୬ ମେ ୨୦୨୬',
    updatedAt: '୨୮ ମେ ୨୦୨୬'
  },
  {
    id: 'comp-2',
    refNumber: 'PTP-2026-MAY-7843',
    name: 'ସୁକାନ୍ତ ବେହେରା',
    mobile: '9437198765',
    email: 'sukanta.morada@yahoo.com',
    district: 'ମୟୂରଭଞ୍ଜ',
    block: 'ମୋରଡ଼ା',
    location: 'ଚିତ୍ରଡ଼ା ପଞ୍ଚାୟତ, ବାଲିପାଳ ଗାଁ',
    problemTitle: 'ଗାଁର ଏକମାତ୍ର ପ୍ରାଥମିକ ସ୍ୱାସ୍ଥ୍ୟକେନ୍ଦ୍ରରେ ଡାକ୍ତର ଅନୁପସ୍ଥିତ, ଔଷଧ ଅଭାବ',
    description: 'ଚିତ୍ରଡ଼ା ପ୍ରାଥମିକ ସ୍ୱାସ୍ଥ୍ୟକେନ୍ଦ୍ର ଉପରେ ୧୦ଟି ଗାଁର ଲୋକ ନିର୍ଭର କରନ୍ତି। ଗତ ଦୁଇ ମାସ ହେବ ନିୟମିତ ଡାକ୍ତର ଆସୁନାହାନ୍ତି। ଜରୁରୀକାଳୀନ ରୋଗୀଙ୍କୁ ୩୦ କିମି ଦୂର ବାରିପଦା ନେବାକୁ ପଡ଼ୁଛି।',
    status: 'Published',
    reporterAssigned: 'ଦୀପକ କୁମାର ମହାନ୍ତ',
    internalNotes: 'ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍‌ର ପୃଷ୍ଠା ୨ରେ ଖବର ପ୍ରକାଶ ପାଇବା ପରେ ସିଡିଏମଓ ତଦନ୍ତ ନିର୍ଦ୍ଦେଶ ଦେଇଛନ୍ତି।',
    statusTimeline: [
      { status: 'Received', timestamp: '୨୦ ମେ ୨୦୨୬', note: 'ଅଭିଯୋଗ ଗ୍ରହଣ କରାଗଲା' },
      { status: 'Under Review', timestamp: '୨୧ ମେ ୨୦୨୬', note: 'ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ସ୍ୱାସ୍ଥ୍ୟ ସମସ୍ୟା ଭାବେ ଚିହ୍ନଟ' },
      { status: 'Reporter Assigned', timestamp: '୨୨ ମେ ୨୦୨୬', note: 'କ୍ଷେତ୍ର ଯାଞ୍ଚ ପାଇଁ ଟିମ୍ ପ୍ରେରଣ' },
      { status: 'Published', timestamp: '୨୪ ମେ ୨୦୨୬', note: 'ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଦୈନିକ ସଂସ୍କରଣରେ ପ୍ରକାଶିତ' }
    ],
    createdAt: '୨୦ ମେ ୨୦୨୬',
    updatedAt: '୨୪ ମେ ୨୦୨୬'
  }
];

export const INITIAL_PHOTO_NEWS: PhotoNewsItem[] = [
  {
    id: 'photo-1',
    title: 'ବାରିପଦାର ଐତିହାସିକ ରଥଯାତ୍ରା ପ୍ରସ୍ତୁତି: ଦ୍ୱିତୀୟ ଶ୍ରୀକ୍ଷେତ୍ରରେ କାଠ ଅନୁକୂଳ',
    description: 'ବାରିପଦାରେ ପ୍ରସିଦ୍ଧ ରଥଯାତ୍ରା ପାଇଁ ରଥ ନିର୍ମାଣ କାର୍ଯ୍ୟ ଆନୁଷ୍ଠାନିକ ଭାବେ ଆରମ୍ଭ ହୋଇଛି। ମା’ ସୁଭଦ୍ରାଙ୍କ ରଥକୁ କେବଳ ମହିଳାମାନେ ଟାଣିବାର ପରମ୍ପରା ରହିଛି।',
    location: 'ବାରିପଦା, ମୟୂରଭଞ୍ଜ',
    date: '୨୮ ମେ ୨୦୨୬',
    coverImage: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg',
    images: [
      { url: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg', caption: 'ଶ୍ରୀ ଶ୍ରୀ ହରିବଳଦେବଜୀଉ ମନ୍ଦିର ସାମ୍ନାରେ ରଥ କାଠ ପୂଜାର୍ଚ୍ଚନା' },
      { url: '/src/assets/images/prime_time_newspaper_cover_1791117304778.jpg', caption: 'ମହାରଣା ସେବକଙ୍କ ଦ୍ୱାରା ରଥ ଚକ ନିର୍ମାଣର ପାରମ୍ପରିକ ଅନୁକୂଳ' },
      { url: '/src/assets/images/odisha_agriculture_farmers_1791117276754.jpg', caption: 'ଉତ୍ସବରେ ଏକତ୍ରିତ ଶ୍ରଦ୍ଧାଳୁ ଓ ସ୍ଥାନୀୟ ବାସିନ୍ଦା' }
    ]
  },
  {
    id: 'photo-2',
    title: 'ଶିମିଳିପାଳ ଜଳପ୍ରପାତ ବରେହିପାଣି ଓ ଯୋରନ୍ଦାର ମନୋରମ ଦୃଶ୍ୟ',
    description: 'ଗ୍ରୀଷ୍ମ ଋତୁ ପରେ ଶିମିଳିପାଳର ପ୍ରାକୃତିକ ଶୋଭା ବୃଦ୍ଧି ପାଇଛି। ପର୍ଯ୍ୟଟକଙ୍କ ଭିଡ଼ ଜମୁଛି।',
    location: 'ଶିମିଳିପାଳ ବ୍ୟାଘ୍ର ଅଭୟାରଣ୍ୟ',
    date: '୨୭ ମେ ୨୦୨୬',
    coverImage: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg',
    images: [
      { url: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg', caption: 'ବରେହିପାଣି ଜଳପ୍ରପାତର ଝରଣା ଧାର' }
    ]
  }
];

export const INITIAL_VIDEOS: VideoNewsItem[] = [
  {
    id: 'vid-1',
    title: 'ବାରିପଦା ସହର ବିକାଶ: ଦେବେନ୍ଦ୍ରପୁର ମାଷ୍ଟରପ୍ଲାନ୍‌ର ଗ୍ରାଉଣ୍ଡ ରିପୋର୍ଟ',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '06:45',
    category: 'ଗ୍ରାଉଣ୍ଡ ରିପୋର୍ଟ',
    publishedAt: '୨୮ ମେ ୨୦୨୬',
    channel: 'PRIME TIME ODIA NEWS',
    thumbnailUrl: '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg',
    viewsCount: '୧୮K views'
  },
  {
    id: 'vid-2',
    title: 'ସମ୍ପାଦକ ସୁଶାନ୍ତ ନାୟକଙ୍କ ସ୍ୱତନ୍ତ୍ର ସାକ୍ଷାତକାର: ମୟୂରଭଞ୍ଜର ସମସ୍ୟା ଓ ସମାଧାନ',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '୧୨:୨୦',
    category: 'ଇଣ୍ଟରଭ୍ୟୁ',
    publishedAt: '୨୭ ମେ ୨୦୨୬',
    channel: 'PRIME TIME ODIA NEWS',
    thumbnailUrl: '/src/assets/images/prime_time_newspaper_cover_1791117304778.jpg',
    viewsCount: '୨୫K views'
  },
  {
    id: 'vid-3',
    title: 'ଶିମିଳିପାଳ ଅଭୟାରଣ୍ୟରେ ଡ୍ରୋନ୍ ପାଟ୍ରୋଲିଂ: କିପରି ସୁରକ୍ଷିତ ରହୁଛନ୍ତି ବାଘ ଓ ହାତୀ?',
    youtubeId: 'dQw4w9WgXcQ',
    duration: '୦୮:୧୫',
    category: 'ଅନୁସନ୍ଧାନ',
    publishedAt: '୨୬ ମେ ୨୦୨୬',
    channel: 'PRIME TIME ODIA NEWS',
    thumbnailUrl: '/src/assets/images/odisha_agriculture_farmers_1791117276754.jpg',
    viewsCount: '୩୨K views'
  }
];

export const INITIAL_ADS: Advertisement[] = [
  {
    id: 'ad-hdr-1',
    title: 'ମୟୂରଭଞ୍ଜ ମେଗା ହସ୍ତଶିଳ୍ପ ଓ ଟେକ୍ସଟାଇଲ୍ ପ୍ରଦର୍ଶନୀ - ବାରିପଦା ଷ୍ଟାଡିୟମ୍',
    placement: 'header',
    imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=728&h=90&q=80',
    linkUrl: '#',
    isActive: true,
    clicks: 142,
    impressions: 5410,
    sponsorName: 'ଓଡ଼ିଶା ହସ୍ତଶିଳ୍ପ ନିଗମ'
  },
  {
    id: 'ad-lead-1',
    title: 'ଆପଣଙ୍କ ସନ୍ତାନ ପାଇଁ ସର୍ବୋତ୍ତମ ଶିକ୍ଷା: ବାରିପଦା ପବ୍ଲିକ ସ୍କୁଲ ଆଡମିଶନ ୨୦୨୬',
    placement: 'leaderboard',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=970&h=120&q=80',
    linkUrl: '#',
    isActive: true,
    clicks: 290,
    impressions: 8900,
    sponsorName: 'ବାରିପଦା ଏଡୁକେସନାଲ ଟ୍ରଷ୍ଟ'
  },
  {
    id: 'ad-side-1',
    title: 'ଜନତାର ଦରବାରରେ ବିଜ୍ଞାପନ ଦିଅନ୍ତୁ | ଆପଣଙ୍କ ବ୍ୟବସାୟ ପହଞ୍ଚାନ୍ତୁ ଲକ୍ଷାଧିକ ପାଠକଙ୍କ ନିକଟରେ',
    placement: 'sidebar',
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=300&h=250&q=80',
    linkUrl: '#advertise',
    isActive: true,
    clicks: 88,
    impressions: 3420,
    sponsorName: 'ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ବିଜ୍ଞାପନ ବିଭାଗ'
  }
];

export const SITE_INFO = {
  name: 'Prime Time Press',
  odiaName: 'ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଦୈନିକ ଖବର କାଗଜ',
  tagline: '“ଜନତାର ଦରବାର, ଆପଣଙ୍କ ସ୍ୱର।”',
  editor: 'ସୁଶାନ୍ତ ନାୟକ (Susanta Kumar Nayak)',
  email: 'Primetimepress24@gmail.com',
  phone: '9114832950',
  whatsapp: '9114832950',
  address: 'ଦେବେନ୍ଦ୍ରପୁର, ବାରିପଦା, ମୟୂରଭଞ୍ଜ, ଓଡ଼ିଶା (Debendrapur, Baripada, Mayurbhanj, Odisha)',
  registrationNo: 'OR/2026/0513/5141/1604',
  youtubeChannel: 'PRIME TIME ODIA NEWS',
  youtubeChannelId: 'UCB7eD5rx3--HBX40BsfW5cA',
  facebookUrl: 'https://www.facebook.com/primetimeodianews?mibextid=JRoKGi',
  youtubeUrl: 'https://www.youtube.com/channel/UCB7eD5rx3--HBX40BsfW5cA',
  whatsappChannelUrl: 'https://whatsapp.com/channel/primetimepress'
};

export const DEFAULT_CREDENTIALS = [
  {
    role: 'admin' as const,
    roleOdia: 'ମୁଖ୍ୟ ପ୍ରଶାସକ (Super Admin)',
    email: 'Primetimepress24@gmail.com',
    password: 'admin123',
    name: 'ସୁଶାନ୍ତ କୁମାର ନାୟକ (Susanta Kumar Nayak)',
    designation: 'ମୁଖ୍ୟ ସମ୍ପାଦକ ଓ ପ୍ରଶାସକ'
  },
  {
    role: 'editor' as const,
    roleOdia: 'ବରିଷ୍ଠ ସମ୍ପାଦକ (Editor)',
    email: 'editor@primetimepress.in',
    password: 'editor123',
    name: 'ରଶ୍ମିରଞ୍ଜନ ମହାପାତ୍ର',
    designation: 'ଏଡିଟୋରିଆଲ୍ ମୁଖ୍ୟ'
  },
  {
    role: 'reporter' as const,
    roleOdia: 'ଜିଲ୍ଲା ସମ୍ବାଦଦାତା (Reporter)',
    email: 'reporter@primetimepress.in',
    password: 'reporter123',
    name: 'ଦୀପକ କୁମାର ମହାନ୍ତ',
    designation: 'ମୟୂରଭଞ୍ଜ ବ୍ୟୁରୋ ରିପୋର୍ଟର'
  }
];


import React, { useState } from 'react';
import { Send, Upload, ArrowLeft, CheckCircle2, FileText, MapPin, UserCheck } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { CATEGORIES, MAYURBHANJ_BLOCKS } from '../data/initialData';

export const ReporterDashboard: React.FC = () => {
  const { addArticle, currentUser, setCurrentView } = useNews();

  const [reporterName, setReporterName] = useState(currentUser?.name || 'ଦୀପକ କୁମାର ମହାନ୍ତ');
  const [reporterLocation, setReporterLocation] = useState(currentUser?.location || 'ବାରିପଦା, ମୟୂରଭଞ୍ଜ');
  const [headline, setHeadline] = useState('');
  const [category, setCategory] = useState('mayurbhanj');
  const [block, setBlock] = useState('ବାରିପଦା');
  const [newsBody, setNewsBody] = useState('');
  const [imagePath, setImagePath] = useState('/src/assets/images/mayurbhanj_baripada_1791117262571.jpg');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!headline || !newsBody) {
      alert('ଦୟାକରି ଶୀର୍ଷକ ଏବଂ ବିବରଣୀ ପ୍ରବେଶ କରନ୍ତୁ।');
      return;
    }

    // Submit for editor approval
    addArticle({
      slug: headline.toLowerCase().replace(/[^\w\u0B00-\u0B7F]+/g, '-').slice(0, 50),
      title: headline,
      summary: newsBody.slice(0, 140) + '...',
      content: `${newsBody}\n\n(ରିପୋର୍ଟର ବିବରଣୀ: ${reporterName}, ${reporterLocation})`,
      category,
      district: 'ମୟୂରଭଞ୍ଜ',
      block,
      author: reporterName,
      authorRole: 'ସ୍ଥାନୀୟ ପ୍ରତିନିଧି',
      publishedAt: '୨୯ ମେ ୨୦୨୬, ଏବେ',
      readTimeMinutes: 3,
      image: imagePath,
      tags: [category, block],
      status: 'published' // Immediately published into system
    });

    setSubmitted(true);
  };

  return (
    <div className="w-full min-h-screen bg-[#F8FAFC] py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Navigation */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-200">
          <button
            onClick={() => setCurrentView('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ମୁଖ୍ୟପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ</span>
          </button>

          <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-300 flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5" />
            <span>ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ସାମ୍ବାଦିକ ଡେସ୍କ</span>
          </span>
        </div>

        {/* Content Box */}
        <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-6 sm:p-8">
          
          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-serif-odia text-2xl font-bold text-stone-900">
                ଖବର ସଫଳତାର ସହ ଦାଖଲ ହୋଇଛି!
              </h2>
              <p className="text-xs text-stone-600 mt-2">
                ଆପଣଙ୍କ ଦ୍ୱାରା ପ୍ରେରିତ ଖବର ସମ୍ପାଦକୀୟ ଡେସ୍କ ଦ୍ୱାରା ଅନୁମୋଦିତ ହୋଇ ପୋର୍ଟାଲ୍‌ରେ ପ୍ରକାଶିତ ହୋଇଛି।
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setHeadline('');
                    setNewsBody('');
                  }}
                  className="px-4 py-2 bg-stone-900 text-white rounded text-xs font-bold"
                >
                  ଅନ୍ୟ ଏକ ଖବର ପଠାନ୍ତୁ
                </button>
                <button
                  onClick={() => setCurrentView('home')}
                  className="px-4 py-2 border border-stone-300 text-stone-700 rounded text-xs font-semibold"
                >
                  ମୁଖ୍ୟପୃଷ୍ଠାରେ ଦେଖନ୍ତୁ
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="pb-3 border-b border-stone-200">
                <h1 className="font-serif-odia text-xl font-bold text-stone-900">
                  ସାମ୍ବାଦିକ ନ୍ୟୁଜ୍ ସବମିସନ୍ ଫର୍ମ (Reporter News Submission)
                </h1>
                <p className="text-xs text-stone-500 mt-1">
                  କ୍ଷେତ୍ରରୁ ସତ୍ୟ ତଥ୍ୟ, ଫଟୋ ଓ ଖବର ସିଧାସଳଖ ଏଡିଟୋରିଆଲ୍ ଡେସ୍କକୁ ପଠାନ୍ତୁ।
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ରିପୋର୍ଟରଙ୍କ ନାମ (Reporter Name) *
                  </label>
                  <input
                    type="text"
                    required
                    value={reporterName}
                    onChange={(e) => setReporterName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded font-serif-odia"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ସ୍ଥାନ / ଠିକଣା (Location) *
                  </label>
                  <input
                    type="text"
                    required
                    value={reporterLocation}
                    onChange={(e) => setReporterLocation(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded font-serif-odia"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ବିଭାଗ (Category) *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded bg-white"
                  >
                    {CATEGORIES.map(c => (
                      <option key={c.id} value={c.slug || 'mayurbhanj'}>
                        {c.nameOdia} ({c.nameEn})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ବ୍ଲକ୍ / ଅଞ୍ଚଳ *
                  </label>
                  <select
                    value={block}
                    onChange={(e) => setBlock(e.target.value)}
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
                  ଖବରର ଶୀର୍ଷକ (Headline) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ସ୍ପଷ୍ଟ ଓ ସଠିକ୍ ଶିରୋନାମା..."
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded font-serif-odia font-bold focus:ring-1 focus:ring-red-700"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 mb-1">
                  ସମ୍ପୂର୍ଣ୍ଣ ଖବର ବିବରଣୀ (News Body) *
                </label>
                <textarea
                  rows={6}
                  required
                  placeholder="କ’ଣ ଘଟିଛି? କେବେ ଏବଂ କେଉଁଠି? ପୋଲିସ କିମ୍ବା ଅଧିକାରୀଙ୍କ କହିବା କ’ଣ? ସବିଶେଷ ତଥ୍ୟ ଲେଖନ୍ତୁ..."
                  value={newsBody}
                  onChange={(e) => setNewsBody(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-stone-300 rounded font-serif-odia leading-relaxed focus:ring-1 focus:ring-red-700"
                />
              </div>

              {/* Photo Attachment simulation */}
              <div className="p-4 bg-stone-50 border border-dashed border-stone-300 rounded text-center">
                <Upload className="w-5 h-5 text-stone-400 mx-auto mb-1" />
                <div className="text-xs font-bold text-stone-700">
                  ଫଟୋ ଓ ଭିଡିଓ ସଂଲଗ୍ନ କରନ୍ତୁ
                </div>
                <input
                  type="file"
                  className="mt-2 text-xs text-stone-500"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      setImagePath('/src/assets/images/mayurbhanj_baripada_1791117262571.jpg');
                      alert('ଫଟୋ ସଂଲଗ୍ନ ହୋଇଛି!');
                    }
                  }}
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-red-700 hover:bg-red-800 text-white font-bold text-xs rounded transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>ଏଡିଟୋରିଆଲ୍ ଡେସ୍କକୁ ପ୍ରେରଣ କରନ୍ତୁ (Submit News)</span>
                </button>
              </div>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};

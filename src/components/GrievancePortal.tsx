import React, { useState } from 'react';
import { 
  AlertCircle, 
  Search, 
  CheckCircle2, 
  Clock, 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  FileText, 
  Upload, 
  ArrowLeft, 
  ShieldCheck, 
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { GrievanceStatus, GrievanceComplaint } from '../types';
import { MAYURBHANJ_BLOCKS } from '../data/initialData';

export const GrievancePortal: React.FC = () => {
  const { submitGrievance, findComplaintByRef, setCurrentView, currentView } = useNews();

  // Mode: 'submit' or 'track'
  const [activeTab, setActiveTab] = useState<'submit' | 'track'>(
    currentView === 'track_grievance' ? 'track' : 'submit'
  );

  // Form State
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [district, setDistrict] = useState('ମୟୂରଭଞ୍ଜ');
  const [block, setBlock] = useState('ବାରିପଦା');
  const [location, setLocation] = useState('');
  const [problemTitle, setProblemTitle] = useState('');
  const [description, setDescription] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Tracking State
  const [searchQuery, setSearchQuery] = useState('');
  const [trackedComplaint, setTrackedComplaint] = useState<GrievanceComplaint | null>(null);
  const [trackSearched, setTrackSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !mobile || !problemTitle || !description) {
      alert('ଦୟାକରି ସମସ୍ତ ଆବଶ୍ୟକ ତଥ୍ୟ ପୂରଣ କରନ୍ତୁ।');
      return;
    }

    const ref = submitGrievance({
      name,
      mobile,
      email: email || 'user@example.com',
      district,
      block,
      location: location || `${block}, ${district}`,
      problemTitle,
      description,
      photoUrl: photoUrl || '/src/assets/images/mayurbhanj_baripada_1791117262571.jpg'
    });

    setSubmittedRef(ref);
  };

  const handleTrackSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    const match = findComplaintByRef(searchQuery.trim());
    setTrackedComplaint(match || null);
    setTrackSearched(true);
  };

  const allStatuses: GrievanceStatus[] = [
    'Received',
    'Under Review',
    'Verification',
    'Reporter Assigned',
    'Published',
    'Resolved',
    'Closed'
  ];

  const getStatusIndex = (status: GrievanceStatus) => allStatuses.indexOf(status);

  return (
    <div className="w-full bg-[#FAF9F6] py-10 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation back */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-stone-200">
          <button
            onClick={() => setCurrentView('home')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-stone-600 hover:text-red-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ମୁଖ୍ୟପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ</span>
          </button>

          <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
            ଜନତାର ଦରବାର • ସିଧାସଳଖ ଅଭିଯୋଗ ସେଲ୍
          </span>
        </div>

        {/* Portal Header */}
        <div className="text-center mb-8">
          <div className="inline-flex p-3 bg-red-100 text-red-800 rounded-full mb-3">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h1 className="font-serif-odia text-3xl sm:text-4xl font-extrabold text-stone-900 tracking-tight">
            ଜନତାଙ୍କ ସମସ୍ୟା ଜଣାନ୍ତୁ
          </h1>
          <p className="text-stone-500 font-sans font-bold text-sm tracking-widest uppercase mt-1">
            REPORT YOUR PROBLEM & CITIZEN GRIEVANCE PORTAL
          </p>
          <p className="text-stone-600 text-sm max-w-xl mx-auto mt-2 leading-relaxed font-serif-odia">
            “ଜନତାର ଦରବାର, ଆପଣଙ୍କ ସ୍ୱର।” ଆପଣଙ୍କ ଅଞ୍ଚଳର ସମସ୍ୟା ଆମକୁ ଜଣାନ୍ତୁ। ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ତଦନ୍ତକାରୀ ସାମ୍ବାଦିକ ଦଳ ଉପଯୁକ୍ତ ପଦକ୍ଷେପ ଗ୍ରହଣ କରିବେ।
          </p>

          {/* Mode Switcher Tabs */}
          <div className="flex justify-center gap-2 mt-6">
            <button
              onClick={() => { setActiveTab('submit'); setSubmittedRef(null); }}
              className={`px-5 py-2.5 rounded text-xs font-bold transition-all shadow-xs ${
                activeTab === 'submit'
                  ? 'bg-red-700 text-white'
                  : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
              }`}
            >
              ନୂତନ ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ (New Complaint)
            </button>
            <button
              onClick={() => setActiveTab('track')}
              className={`px-5 py-2.5 rounded text-xs font-bold transition-all shadow-xs ${
                activeTab === 'track'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white text-stone-700 border border-stone-300 hover:bg-stone-50'
              }`}
            >
              ଆପଣଙ୍କ ଅଭିଯୋଗର ସ୍ଥିତି ଜାଣନ୍ତୁ (Track Status)
            </button>
          </div>
        </div>

        {/* TAB 1: SUBMIT COMPLAINT */}
        {activeTab === 'submit' && (
          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-6 sm:p-8">
            
            {submittedRef ? (
              /* Success Screen */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif-odia text-2xl font-bold text-stone-900">
                  ଅଭିଯୋଗ ସଫଳତାର ସହ ପଞ୍ଜୀକୃତ ହୋଇଛି!
                </h3>
                <p className="text-sm text-stone-600 mt-2">
                  ଆପଣଙ୍କ ଅଭିଯୋଗ ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ 'ଜନତାର ଦରବାର' ଡେସ୍କକୁ ପ୍ରେରଣ କରାଗଲା।
                </p>

                {/* Reference Number Box */}
                <div className="my-6 p-4 bg-amber-50 border-2 border-dashed border-amber-400 rounded-lg inline-block max-w-md w-full">
                  <div className="text-xs text-amber-900 font-bold uppercase tracking-wider mb-1">
                    ଆପଣଙ୍କ ଅଭିଯୋଗ ରେଫରେନ୍ସ ନମ୍ବର:
                  </div>
                  <div className="text-2xl font-mono font-black text-red-700 select-all">
                    {submittedRef}
                  </div>
                  <div className="text-[11px] text-stone-500 mt-1">
                    ଏହି ନମ୍ବରକୁ ସାଇତି ରଖନ୍ତୁ। ପରବର୍ତ୍ତୀ ସମୟରେ ସ୍ଥିତି ଯାଞ୍ଚ କରିପାରିବେ।
                  </div>
                </div>

                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSearchQuery(submittedRef);
                      setActiveTab('track');
                      const match = findComplaintByRef(submittedRef);
                      setTrackedComplaint(match || null);
                      setTrackSearched(true);
                    }}
                    className="px-5 py-2.5 bg-stone-900 text-white font-bold text-xs rounded hover:bg-black transition-colors"
                  >
                    ଏବେ ସ୍ଥିତି ଯାଞ୍ଚ କରନ୍ତୁ →
                  </button>
                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setName('');
                      setProblemTitle('');
                      setDescription('');
                    }}
                    className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold rounded"
                  >
                    ଅନ୍ୟ ଏକ ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ
                  </button>
                </div>
              </div>
            ) : (
              /* Complaint Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      ନାମ (Full Name) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="ଆପଣଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ନାମ"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:ring-1 focus:ring-red-700 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      ମୋବାଇଲ୍ ନମ୍ବର (Mobile Number) *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="୧୦ ଅଙ୍କ ବିଶିଷ୍ଟ ମୋବାଇଲ୍ ନମ୍ବର"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:ring-1 focus:ring-red-700 focus:outline-hidden"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      ଇମେଲ୍ (Email ID)
                    </label>
                    <input
                      type="email"
                      placeholder="ଆପଣଙ୍କ ଇମେଲ୍ (ଐଚ୍ଛିକ)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:ring-1 focus:ring-red-700 focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      ଜିଲ୍ଲା (District) *
                    </label>
                    <select
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:ring-1 focus:ring-red-700 focus:outline-hidden bg-white"
                    >
                      <option value="ମୟୂରଭଞ୍ଜ">ମୟୂରଭଞ୍ଜ (Mayurbhanj)</option>
                      <option value="ବାଲେଶ୍ୱର">ବାଲେଶ୍ୱର (Balasore)</option>
                      <option value="କେନ୍ଦୁଝର">କେନ୍ଦୁଝର (Keonjhar)</option>
                      <option value="ଖୋର୍ଦ୍ଧା / ଭୁବନେଶ୍ୱର">ଖୋର୍ଦ୍ଧା / ଭୁବନେଶ୍ୱର</option>
                      <option value="କଟକ">କଟକ (Cuttack)</option>
                      <option value="ଅନ୍ୟାନ୍ୟ ଜିଲ୍ଲା">ଅନ୍ୟାନ୍ୟ ଜିଲ୍ଲା</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      ବ୍ଲକ୍ / ପୌରପାଳିକା (Block) *
                    </label>
                    <select
                      value={block}
                      onChange={(e) => setBlock(e.target.value)}
                      className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:ring-1 focus:ring-red-700 focus:outline-hidden bg-white"
                    >
                      {MAYURBHANJ_BLOCKS.map((b) => (
                        <option key={b} value={b.split(' ')[0]}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ସ୍ଥାନ / ଗ୍ରାମ / ୱାର୍ଡ ନମ୍ବର (Exact Location) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ଉଦାହରଣ: ୱାର୍ଡ ନଂ ୮, ଦେବେନ୍ଦ୍ରପୁର, ବାରିପଦା"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:ring-1 focus:ring-red-700 focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ସମସ୍ୟା କିମ୍ବା ଅଭିଯୋଗର ଶୀର୍ଷକ (Problem Title) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ସମସ୍ୟାର ସଂକ୍ଷିପ୍ତ ଶିରୋନାମା (ଯଥା: ରାସ୍ତା ନିର୍ମାଣ ଅଧୁରା, ପାନୀୟ ଜଳ ସଙ୍କଟ...)"
                    value={problemTitle}
                    onChange={(e) => setProblemTitle(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:ring-1 focus:ring-red-700 focus:outline-hidden font-serif-odia"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    ସମସ୍ୟାର ବିସ୍ତୃତ ବିବରଣୀ (Detailed Description) *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="ସମସ୍ୟା କେବେଠାରୁ ଲାଗିରହିଛି? କାହାକୁ ଦାବିପତ୍ର ଦିଆଯାଇଛି? କ’ଣ ଅସୁବିଧା ହେଉଛି? ସବିଶେଷ ଲେଖନ୍ତୁ..."
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-stone-300 rounded focus:ring-1 focus:ring-red-700 focus:outline-hidden font-serif-odia"
                  />
                </div>

                {/* Upload Section (Simulation) */}
                <div className="p-4 bg-stone-50 border border-dashed border-stone-300 rounded text-center">
                  <Upload className="w-6 h-6 text-stone-400 mx-auto mb-1" />
                  <div className="text-xs font-bold text-stone-700">
                    ଫଟୋ / ଭିଡିଓ / ଦସ୍ତାବିଜ୍ ଅପଲୋଡ୍ କରନ୍ତୁ
                  </div>
                  <p className="text-[11px] text-stone-500 mt-0.5">
                    JPG, PNG, MP4, PDF ସମର୍ଥନ କରେ (ସର୍ବାଧିକ ୨୫ MB)
                  </p>
                  <input
                    type="file"
                    className="mt-2 text-xs text-stone-500 file:mr-2 file:py-1 file:px-3 file:rounded file:border-0 file:text-xs file:font-semibold file:bg-red-50 file:text-red-700 hover:file:bg-red-100"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setPhotoUrl('/src/assets/images/mayurbhanj_baripada_1791117262571.jpg');
                        alert('ଫାଇଲ୍ ସଫଳତାର ସହ ଯୋଡ଼ାଗଲା!');
                      }
                    }}
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-red-700 hover:bg-red-800 text-white font-bold text-sm rounded shadow-sm transition-colors flex items-center justify-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4" />
                    <span>ଅଭିଯୋଗ ଦାଖଲ କରନ୍ତୁ (Submit Grievance)</span>
                  </button>
                </div>
              </form>
            )}

          </div>
        )}

        {/* TAB 2: TRACK STATUS */}
        {activeTab === 'track' && (
          <div className="bg-white border border-stone-200 rounded-lg shadow-sm p-6 sm:p-8">
            <h2 className="font-serif-odia text-xl font-bold text-stone-900 mb-2">
              ଆପଣଙ୍କ ଅଭିଯୋଗର ସ୍ଥିତି ଜାଣନ୍ତୁ (Track Status)
            </h2>
            <p className="text-xs text-stone-600 mb-5">
              ଦାଖଲ କରିଥିବା ରେଫରେନ୍ସ ନମ୍ବର (ଯଥା: PTP-2026-MAY-7842) କିମ୍ବା ପଞ୍ଜୀକୃତ ମୋବାଇଲ୍ ନମ୍ବର ପ୍ରବେଶ କରନ୍ତୁ:
            </p>

            <form onSubmit={handleTrackSearch} className="flex gap-2 mb-6">
              <input
                type="text"
                required
                placeholder="PTP-2026-MAY-XXXX କିମ୍ବା ମୋବାଇଲ୍ ନଂ"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 py-2.5 text-xs sm:text-sm border border-stone-300 rounded font-mono focus:ring-1 focus:ring-amber-500 focus:outline-hidden"
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold rounded transition-colors flex items-center gap-1.5"
              >
                <Search className="w-4 h-4" />
                <span>ଟ୍ରାକ୍ କରନ୍ତୁ</span>
              </button>
            </form>

            {/* Results Section */}
            {trackSearched && (
              <div>
                {trackedComplaint ? (
                  <div className="space-y-6 pt-4 border-t border-stone-200">
                    
                    {/* Header info */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-amber-50 rounded-lg border border-amber-200 gap-2">
                      <div>
                        <div className="text-xs text-amber-900 font-bold">ରେଫରେନ୍ସ ନମ୍ବର:</div>
                        <div className="text-lg font-mono font-black text-red-700">
                          {trackedComplaint.refNumber}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-stone-500">ବର୍ତ୍ତମାନ ସ୍ଥିତି:</div>
                        <span className="inline-block px-3 py-1 rounded bg-amber-200 text-amber-950 font-bold text-xs">
                          {trackedComplaint.status}
                        </span>
                      </div>
                    </div>

                    {/* Complaint details */}
                    <div className="p-4 bg-stone-50 rounded border border-stone-200 text-xs space-y-2">
                      <div>
                        <span className="font-bold text-stone-700">ଅଭିଯୋଗକାରୀ:</span> {trackedComplaint.name} ({trackedComplaint.mobile})
                      </div>
                      <div>
                        <span className="font-bold text-stone-700">ସ୍ଥାନ:</span> {trackedComplaint.location}, {trackedComplaint.block}, {trackedComplaint.district}
                      </div>
                      <div>
                        <span className="font-bold text-stone-700">ଶୀର୍ଷକ:</span> {trackedComplaint.problemTitle}
                      </div>
                      <div>
                        <span className="font-bold text-stone-700">ବିବରଣୀ:</span> {trackedComplaint.description}
                      </div>
                      {trackedComplaint.reporterAssigned && (
                        <div className="text-red-700 font-bold">
                          ନ୍ୟସ୍ତ କରାଯାଇଥିବା ରିପୋର୍ଟର: {trackedComplaint.reporterAssigned}
                        </div>
                      )}
                    </div>

                    {/* Multi-step Status Progress Bar */}
                    <div>
                      <h4 className="font-serif-odia font-bold text-sm text-stone-900 mb-3">
                        ଅଭିଯୋଗ ସମାଧାନ ପ୍ରଗତି (Resolution Lifecycle)
                      </h4>

                      <div className="relative flex items-center justify-between w-full overflow-x-auto py-2">
                        {allStatuses.map((st, idx) => {
                          const isDone = getStatusIndex(trackedComplaint.status) >= idx;
                          const isCurrent = trackedComplaint.status === st;

                          return (
                            <div key={st} className="flex-1 min-w-[90px] flex flex-col items-center text-center relative px-1">
                              {/* Circle indicator */}
                              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                                isDone 
                                  ? 'bg-red-700 text-white shadow' 
                                  : 'bg-stone-200 text-stone-500'
                              } ${isCurrent ? 'ring-4 ring-red-200' : ''}`}>
                                {isDone ? '✓' : idx + 1}
                              </div>

                              <span className={`text-[10px] mt-1.5 leading-tight ${
                                isCurrent ? 'font-bold text-red-700' : 'text-stone-600'
                              }`}>
                                {st}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Status Timeline History */}
                    <div>
                      <h4 className="font-serif-odia font-bold text-sm text-stone-900 mb-3">
                        ଘଟଣାକ୍ରମ ଓ ଟିପ୍ପଣୀ (Timeline History)
                      </h4>

                      <div className="space-y-2.5">
                        {trackedComplaint.statusTimeline.map((item, idx) => (
                          <div key={idx} className="flex gap-3 text-xs p-3 rounded bg-white border border-stone-200">
                            <Clock className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                            <div>
                              <div className="font-bold text-stone-800">
                                {item.status} • <span className="font-normal text-stone-500">{item.timestamp}</span>
                              </div>
                              <div className="text-stone-600 font-serif-odia mt-0.5">
                                {item.note}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                ) : (
                  <div className="p-6 text-center bg-red-50 text-red-800 rounded border border-red-200 text-xs">
                    କୌଣସି ଅଭିଯୋଗ ମିଳିଲା ନାହିଁ। ଦୟାକରି ସଠିକ୍ ରେଫରେନ୍ସ ନମ୍ବର (ଯଥା: PTP-2026-MAY-7842) ପ୍ରବେଶ କରନ୍ତୁ।
                  </div>
                )}
              </div>
            )}

          </div>
        )}

      </div>
    </div>
  );
};

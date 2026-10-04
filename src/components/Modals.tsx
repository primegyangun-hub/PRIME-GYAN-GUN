import React, { useState } from 'react';
import { X, Sparkles, Phone, Mail, MapPin, Check, Shield, User, Lock, Eye, EyeOff, KeyRound } from 'lucide-react';
import { useNews } from '../context/NewsContext';
import { SITE_INFO, DEFAULT_CREDENTIALS } from '../data/initialData';
import { UserRole } from '../types';

interface ModalsProps {
  loginOpen: boolean;
  onCloseLogin: () => void;
  advertiseOpen: boolean;
  onCloseAdvertise: () => void;
}

export const Modals: React.FC<ModalsProps> = ({
  loginOpen,
  onCloseLogin,
  advertiseOpen,
  onCloseAdvertise
}) => {
  const { loginUser, setCurrentView } = useNews();

  const [email, setEmail] = useState('Primetimepress24@gmail.com');
  const [password, setPassword] = useState('admin123');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<UserRole>('admin');
  const [loginError, setLoginError] = useState<string | null>(null);

  // Advertise Form
  const [adName, setAdName] = useState('');
  const [adPhone, setAdPhone] = useState('');
  const [adSize, setAdSize] = useState('Leaderboard (970x120)');
  const [adSuccess, setAdSuccess] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError(null);

    const result = loginUser(email, password, role);
    if (!result.success) {
      setLoginError(result.message || 'ଭୁଲ୍ ଇମେଲ୍ କିମ୍ବା ପାସୱାର୍ଡ!');
      return;
    }

    onCloseLogin();
    if (role === 'admin' || role === 'editor' || email.toLowerCase().includes('admin')) {
      setCurrentView('admin');
    } else {
      setCurrentView('reporter');
    }
  };

  const handleSelectCredential = (cred: typeof DEFAULT_CREDENTIALS[0]) => {
    setEmail(cred.email);
    setPassword(cred.password);
    setRole(cred.role);
    setLoginError(null);
  };

  const handleQuickLogin = (cred: typeof DEFAULT_CREDENTIALS[0]) => {
    setEmail(cred.email);
    setPassword(cred.password);
    setRole(cred.role);
    setLoginError(null);
    const result = loginUser(cred.email, cred.password, cred.role);
    if (result.success) {
      onCloseLogin();
      if (cred.role === 'admin' || cred.role === 'editor') {
        setCurrentView('admin');
      } else {
        setCurrentView('reporter');
      }
    }
  };

  const handleAdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAdSuccess(true);
    setTimeout(() => {
      setAdSuccess(false);
      onCloseAdvertise();
    }, 2500);
  };

  return (
    <>
      {/* 1. LOGIN MODAL */}
      {loginOpen && (
        <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-2xl border border-stone-300">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-700">
                  <Shield className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif-odia font-bold text-stone-900 text-base leading-tight">
                    ପ୍ରାଇମ ଟାଇମ୍ ପ୍ରେସ୍ ଆଡମିନ୍ ଲଗଇନ୍
                  </h3>
                  <p className="text-[11px] text-stone-500 font-sans">
                    Prime Time Press Staff & Admin Portal Login
                  </p>
                </div>
              </div>
              <button onClick={onCloseLogin} className="p-1 rounded hover:bg-stone-100 text-stone-500">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Official Credentials Box for easy reference */}
            <div className="mb-5 p-3.5 bg-amber-50/80 rounded border border-amber-300 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-amber-900 mb-2">
                <KeyRound className="w-4 h-4 text-amber-700" />
                <span>ଅଫିସିଆଲ୍ ଲଗଇନ୍ ଆଇଡି ଓ ପାସୱାର୍ଡ (Official Credentials):</span>
              </div>
              
              <div className="space-y-2">
                {DEFAULT_CREDENTIALS.map((cred) => (
                  <div 
                    key={cred.role} 
                    className="p-2 bg-white rounded border border-amber-200 flex items-center justify-between gap-2"
                  >
                    <div>
                      <div className="font-bold text-stone-900 text-xs">
                        {cred.roleOdia}
                      </div>
                      <div className="text-[11px] text-stone-600 font-mono">
                        ID: <span className="font-bold text-red-700">{cred.email}</span>
                      </div>
                      <div className="text-[11px] text-stone-600 font-mono">
                        Password: <span className="font-bold text-emerald-800 bg-emerald-50 px-1 py-0.2 rounded border border-emerald-200">{cred.password}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleQuickLogin(cred)}
                      className="px-2.5 py-1.5 bg-red-700 hover:bg-red-800 text-white rounded text-[11px] font-bold shrink-0 transition-colors shadow-2xs"
                    >
                      ଏବେ ଲଗଇନ୍ →
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Error Message */}
            {loginError && (
              <div className="mb-4 p-2.5 bg-red-50 border border-red-200 rounded text-red-700 text-xs font-semibold">
                {loginError}
              </div>
            )}

            {/* Standard Login Form */}
            <form onSubmit={handleLoginSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  ଲଗଇନ୍ ଆଇଡି / ଇମେଲ୍ (Login ID / Email) *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Primetimepress24@gmail.com"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setLoginError(null); }}
                    className="w-full pl-3 pr-3 py-2 border border-stone-300 rounded focus:ring-1 focus:ring-red-700 font-mono text-xs focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  ପାସୱାର୍ଡ (Password) *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="admin123"
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); setLoginError(null); }}
                    className="w-full pl-3 pr-10 py-2 border border-stone-300 rounded focus:ring-1 focus:ring-red-700 font-mono text-xs focus:outline-hidden"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                    title={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-bold text-stone-700 mb-1">
                  ପଦବୀ / ଭୂମିକା (Role):
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value as UserRole)}
                  className="w-full px-3 py-2 border border-stone-300 rounded bg-white font-medium text-xs focus:outline-hidden"
                >
                  <option value="admin">ମୁଖ୍ୟ ପ୍ରଶାସକ (Admin / Editor-in-Chief)</option>
                  <option value="editor">ବରିଷ୍ଠ ସମ୍ପାଦକ (Editor)</option>
                  <option value="reporter">ଜିଲ୍ଲା ସମ୍ବାଦଦାତା (Reporter)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-red-700 hover:bg-red-800 text-white rounded font-bold text-xs transition-colors shadow-sm"
                >
                  ଡ୍ୟାସବୋର୍ଡରେ ପ୍ରବେଶ କରନ୍ତୁ (Login)
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 2. ADVERTISE MODAL */}
      {advertiseOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-2xl">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-stone-200">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif-odia font-bold text-stone-900 text-base">
                  ବିଜ୍ଞାପନ ଦିଅନ୍ତୁ (Advertise With Prime Time Press)
                </h3>
              </div>
              <button onClick={onCloseAdvertise} className="p-1 rounded hover:bg-stone-100">
                <X className="w-5 h-5" />
              </button>
            </div>

            {adSuccess ? (
              <div className="py-8 text-center text-xs">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif-odia font-bold text-base text-stone-900">
                  ଆପଣଙ୍କ ଅନୁରୋଧ ଗ୍ରହଣ କରାଗଲା!
                </h4>
                <p className="text-stone-600 mt-1">
                  ଆମର ବିଜ୍ଞାପନ ବିଭାଗ ଖୁବ୍ ଶୀଘ୍ର ଆପଣଙ୍କ ସହ ଯୋଗାଯୋଗ କରିବ।
                </p>
              </div>
            ) : (
              <form onSubmit={handleAdSubmit} className="space-y-3 text-xs">
                <div className="p-3 bg-amber-50 rounded border border-amber-200 text-stone-700 leading-relaxed">
                  <strong>ମୟୂରଭଞ୍ଜ ଓ ସମଗ୍ର ଓଡ଼ିଶାରେ ଲକ୍ଷାଧିକ ପାଠକଙ୍କ ନିକଟରେ ପହଞ୍ଚନ୍ତୁ!</strong>
                  <br />ଦୈନିକ ପ୍ରିଣ୍ଟ୍ ଏବଂ ଡିଜିଟାଲ୍ ବ୍ୟାନର ସ୍ପେସ୍ ଉପଲବ୍ଧ।
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">
                    ବ୍ୟବସାୟ / ସଂସ୍ଥାର ନାମ *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="ଆପଣଙ୍କ ପ୍ରତିଷ୍ଠାନର ନାମ"
                    value={adName}
                    onChange={(e) => setAdName(e.target.value)}
                    className="w-full px-3 py-2 border border-stone-300 rounded"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      ମୋବାଇଲ୍ ନମ୍ବର *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="9114832950"
                      value={adPhone}
                      onChange={(e) => setAdPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-stone-700 mb-1">
                      ସ୍ଥାନ ଚୟନ କରନ୍ତୁ:
                    </label>
                    <select
                      value={adSize}
                      onChange={(e) => setAdSize(e.target.value)}
                      className="w-full px-3 py-2 border border-stone-300 rounded bg-white"
                    >
                      <option value="Header Leaderboard">Header Banner (୭୨୮x୯୦)</option>
                      <option value="Sidebar MPU">Sidebar MPU (୩୦୦x୨୫୦)</option>
                      <option value="In-Article Banner">In-Article Banner</option>
                      <option value="Print E-Paper">ଦୈନିକ ଇ-ପେପର୍ ପ୍ରିଣ୍ଟ୍ ସ୍ପେସ୍</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded font-bold transition-colors shadow-xs"
                  >
                    ବିଜ୍ଞାପନ ପାଇଁ ଯୋଗାଯୋଗ କରନ୍ତୁ
                  </button>
                </div>

                <div className="pt-3 border-t border-stone-200 text-[11px] text-stone-500 space-y-1">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-stone-400" />
                    <span>ଫୋନ୍/ହ୍ୱାଟ୍ସଆପ୍: {SITE_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-stone-400" />
                    <span>ଇମେଲ୍: {SITE_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-stone-400" />
                    <span>କାର୍ଯ୍ୟାଳୟ: {SITE_INFO.address}</span>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

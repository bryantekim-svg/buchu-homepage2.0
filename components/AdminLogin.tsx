import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

interface AdminLoginProps {
  onLogin: () => void;
  onCancel: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onCancel }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'buchu365' && password === 'a506023z4?') {
      onLogin();
    } else {
      setError('접속 정보가 올바르지 않습니다.');
    }
  };

  return (
    <div 
        className="fixed inset-0 z-[9999] bg-stone-950/98 backdrop-blur-xl flex items-center justify-center p-4"
        style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-md border border-stone-200 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-stone-800 via-emerald-600 to-stone-800"></div>

        <div className="flex justify-center mb-8">
          <div className="p-4 bg-stone-100 rounded-full shadow-inner">
            <ShieldCheck className="w-12 h-12 text-stone-800" />
          </div>
        </div>
        
        <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-2">Administrator</h2>
        <p className="text-center text-stone-500 mb-10 text-sm tracking-wide">관리자 전용 보안 접속</p>

        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">ID</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-600 outline-none transition-all font-sans text-lg"
              placeholder="아이디"
              autoFocus
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-stone-500 uppercase tracking-widest mb-2 ml-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-stone-50 border border-stone-200 rounded-lg text-stone-900 focus:ring-2 focus:ring-emerald-600 outline-none transition-all font-sans text-lg"
              placeholder="비밀번호"
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-600 text-sm text-center rounded-lg border border-red-100 font-bold">
                {error}
            </div>
          )}

          <div className="flex gap-4 pt-6">
            <button 
              type="button" 
              onClick={onCancel}
              className="flex-1 py-4 text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-lg transition-colors font-bold text-sm"
            >
              취소
            </button>
            <button 
              type="submit" 
              className="flex-1 py-4 bg-stone-900 text-white rounded-lg hover:bg-emerald-900 transition-all shadow-lg font-bold text-sm"
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
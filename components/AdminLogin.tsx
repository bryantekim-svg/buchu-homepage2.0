import React, { useState } from 'react';
import { Lock } from 'lucide-react';

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
    // Simple hardcoded credential check for demonstration
    // In a real app, this should be verified against a backend
    if (username === 'admin' && password === 'buchu1234!') {
      onLogin();
    } else {
      setError('아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-stone-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-emerald-100 rounded-full">
            <Lock className="w-8 h-8 text-emerald-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-center text-stone-800 mb-2">관리자 로그인</h2>
        <p className="text-center text-stone-500 mb-8 text-sm">관계자 외 접근을 금지합니다.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">아이디</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder="admin"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-stone-700 mb-2">비밀번호</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-stone-300 rounded focus:ring-2 focus:ring-emerald-500 outline-none"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div className="flex gap-4 pt-2">
            <button 
              type="button" 
              onClick={onCancel}
              className="flex-1 py-3 text-stone-600 hover:bg-stone-100 rounded transition-colors"
            >
              취소
            </button>
            <button 
              type="submit" 
              className="flex-1 py-3 bg-stone-900 text-white rounded hover:bg-emerald-800 transition-colors font-bold"
            >
              로그인
            </button>
          </div>
        </form>
        <p className="mt-8 text-center text-xs text-stone-400">
            초기 비밀번호: buchu1234!
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
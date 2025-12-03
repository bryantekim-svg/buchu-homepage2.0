import React, { useState } from 'react';

interface AdminLoginProps { onLogin: () => void; onCancel: () => void; }

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin, onCancel }) => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id === 'buchu365' && pw === 'a506023z4?') onLogin();
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-white/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full border border-stone-200">
        <h2 className="text-3xl font-serif font-bold text-center text-stone-900 mb-8">관리자 접속</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input autoFocus className="w-full p-4 border rounded-xl text-lg bg-stone-50" placeholder="아이디" value={id} onChange={e=>setId(e.target.value)} />
          <input type="password" className="w-full p-4 border rounded-xl text-lg bg-stone-50" placeholder="비밀번호" value={pw} onChange={e=>setPw(e.target.value)} />
          <div className="flex gap-4">
            <button type="button" onClick={onCancel} className="flex-1 py-4 text-stone-500 font-bold">취소</button>
            <button type="submit" className="flex-1 py-4 bg-stone-900 text-white rounded-xl font-bold">로그인</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
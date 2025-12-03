import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', note: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('admin_leads') || '[]');
    localStorage.setItem('admin_leads', JSON.stringify([...existing, { ...formData, date: new Date().toLocaleString() }]));
    localStorage.setItem('admin_conversions', (parseInt(localStorage.getItem('admin_conversions') || '0') + 1).toString());
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-white py-24 md:py-32 border-t border-stone-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-6">입소 상담 신청</h2>
        <p className="text-center text-xl text-stone-500 mb-16 break-keep">
            전문 사회복지사가 <span className="text-[#8C7335] font-bold">24시간 이내</span>에 친절하게 안내해 드립니다.
        </p>

        <div className="bg-[#fdfbf7] p-8 md:p-16 rounded-3xl shadow-xl border border-stone-200">
            {submitted ? (
                <div className="text-center py-20">
                    <h3 className="text-3xl font-bold text-[#8C7335] mb-4">신청 완료되었습니다.</h3>
                    <p className="text-xl text-stone-600">곧 연락드리겠습니다.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-10">
                    <div>
                        <label className="block text-stone-500 font-bold mb-3 text-lg">보호자 성함</label>
                        <input required className="w-full p-5 bg-white border border-stone-300 rounded-xl text-xl focus:border-[#C5A059] outline-none" placeholder="입력해주세요" onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div>
                        <label className="block text-stone-500 font-bold mb-3 text-lg">연락처</label>
                        <input required className="w-full p-5 bg-white border border-stone-300 rounded-xl text-xl focus:border-[#C5A059] outline-none" placeholder="010-0000-0000" onChange={e => setFormData({...formData, phone: e.target.value})} />
                    </div>
                    <div>
                        <label className="block text-stone-500 font-bold mb-3 text-lg">문의 내용 (선택)</label>
                        <textarea className="w-full p-5 bg-white border border-stone-300 rounded-xl text-xl focus:border-[#C5A059] outline-none h-40 resize-none" placeholder="어르신 연세, 등급 등 궁금한 점을 적어주세요." onChange={e => setFormData({...formData, note: e.target.value})} />
                    </div>
                    <button type="submit" className="w-full py-6 bg-stone-900 text-white rounded-xl text-2xl font-bold hover:bg-[#8C7335] transition-all shadow-lg flex items-center justify-center gap-3">
                        <Send /> 상담 신청하기
                    </button>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
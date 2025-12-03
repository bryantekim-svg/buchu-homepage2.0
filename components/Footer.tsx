import React from 'react';

interface FooterProps { onAdminClick?: () => void; }

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-stone-100 text-stone-600 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
            <div>
                <img src="./logo.png" alt="Logo" className="h-24 mb-8 object-contain" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <h3 className="text-3xl font-serif font-bold text-stone-900 mb-6">부추꽃더클래식</h3>
                <p className="text-lg leading-relaxed">
                    도심의 편리함과 자연의 휴식이 공존하는<br/>
                    대한민국 상위 1% 프리미엄 요양원
                </p>
            </div>
            <div className="space-y-4 text-lg">
                <p><strong className="text-stone-900">대표</strong> 김선규 외 3명</p>
                <p><strong className="text-stone-900">주소</strong> 경기도 김포시 김포한강7로22번길 123 (마산동)</p>
                <p><strong className="text-stone-900">전화</strong> 031-998-8369</p>
                <p><strong className="text-stone-900">사업자번호</strong> 126-80-30623</p>
            </div>
        </div>
        <div className="border-t border-stone-200 pt-8 flex justify-between items-center">
            <p>&copy; 2024 Buchukkot. All rights reserved.</p>
            <button onClick={onAdminClick} className="text-sm font-bold text-stone-400 hover:text-[#C5A059]">Admin</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
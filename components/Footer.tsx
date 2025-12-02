import React from 'react';

interface FooterProps {
    onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-stone-950 text-stone-500 py-16 border-t border-stone-900 text-xs">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="flex flex-col items-start max-w-lg">
           {/* Footer Logo - Increased Size */}
           <img 
              src="./logo.png" 
              alt="부추꽃더클래식" 
              className="h-16 md:h-20 w-auto mb-8 brightness-0 invert opacity-90 object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden text-white font-bold text-2xl tracking-widest mb-6">부추꽃 더 클래식</span>
            
          <p className="mb-8 font-serif text-stone-400 text-base leading-relaxed">
            Premium Senior Care Center<br/>
            어르신의 품격 있는 노후를 위한 최고의 선택
          </p>
          <div className="text-stone-500 leading-7 text-sm">
            <p><span className="font-bold text-stone-400">대표:</span> 김선규 외 4명</p>
            <p><span className="font-bold text-stone-400">사업자등록번호:</span> 126-80-30623</p>
            <p><span className="font-bold text-stone-400">주소:</span> 경기도 김포시 김포한강7로22번길 123</p>
            <p><span className="font-bold text-stone-400">전화번호:</span> 031-998-8369</p>
          </div>
        </div>
        
        <div className="flex flex-col md:items-end gap-6 w-full md:w-auto mt-8 md:mt-0">
             <div className="flex flex-wrap gap-8 md:justify-end text-sm">
                <a href="#philosophy" className="hover:text-white transition-colors">시설안내</a>
                <a href="#contact" className="hover:text-white transition-colors">입소절차</a>
                <a href="#" className="hover:text-white transition-colors">이용약관</a>
                <a href="#" className="hover:text-white transition-colors font-bold text-stone-400">개인정보처리방침</a>
            </div>
            <div className="h-px w-full bg-stone-900 md:hidden"></div>
            <p className="mt-auto pt-4 text-stone-600">&copy; 2024 Buchukkot The Classic. All rights reserved.</p>
            
            <button 
                onClick={onAdminClick}
                className="mt-4 flex items-center gap-2 text-stone-800 hover:text-stone-600 text-[10px] uppercase tracking-wider bg-stone-900 px-4 py-2 rounded transition-colors"
            >
                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                Administrator Access
            </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
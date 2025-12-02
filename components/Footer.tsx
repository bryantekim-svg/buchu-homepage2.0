import React from 'react';

interface FooterProps {
    onAdminClick?: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-24 border-t border-stone-900 reveal relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-24">
            
            {/* Brand Section */}
            <div className="flex flex-col items-start max-w-lg">
                {/* Logo Size Significantly Increased (4x) */}
                <img 
                    src="./logo.png" 
                    alt="부추꽃더클래식" 
                    className="h-32 md:h-48 w-auto mb-12 brightness-0 invert opacity-90 object-contain"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                />
                <span className="hidden text-white font-serif font-bold text-5xl tracking-tighter mb-8">
                    부추꽃 더 클래식
                </span>
                
                <p className="font-serif text-stone-500 text-xl leading-relaxed mb-10 break-keep">
                    도심의 편리함과 자연의 휴식이 공존하는 곳.<br/>
                    접근성 좋은 김포 한강신도시에서 누리는<br/>
                    <span className="text-stone-300 font-bold">대한민국 상위 1%를 위한 프리미엄 요양원</span>입니다.
                </p>
            </div>

            {/* Info Section - Grid Layout */}
            <div className="w-full lg:w-auto flex-1 max-w-2xl">
                <h4 className="text-white font-bold tracking-[0.2em] uppercase mb-10 text-xs flex items-center gap-4">
                    <span className="w-8 h-px bg-emerald-600"></span>
                    Premium Senior Care Information
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 text-sm font-light tracking-wide">
                    <div className="space-y-2">
                        <span className="block text-emerald-700/70 text-[10px] uppercase font-bold tracking-widest">Representative</span>
                        <p className="text-stone-200 text-lg font-medium">김선규 외 4명</p>
                    </div>
                    <div className="space-y-2">
                        <span className="block text-emerald-700/70 text-[10px] uppercase font-bold tracking-widest">Registration No.</span>
                        <p className="text-stone-300">126-80-30623</p>
                    </div>
                    <div className="md:col-span-2 space-y-2 border-t border-stone-900 pt-6">
                        <span className="block text-emerald-700/70 text-[10px] uppercase font-bold tracking-widest">Address</span>
                        <p className="text-stone-300 text-lg">경기도 김포시 김포한강7로22번길 123 <br/><span className="text-stone-500 text-base">(마산동, 부추꽃더클래식너싱홈)</span></p>
                    </div>
                     <div className="md:col-span-2 space-y-2 border-t border-stone-900 pt-6">
                        <span className="block text-emerald-700/70 text-[10px] uppercase font-bold tracking-widest">Concierge Center</span>
                        <a href="tel:031-998-8369" className="text-3xl md:text-4xl text-emerald-500 font-serif font-bold hover:text-white transition-colors inline-block mt-2">
                            031-998-8369
                        </a>
                        <p className="text-stone-600 text-xs mt-2">365일 24시간 입소 상담 가능</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-stone-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-stone-600 font-medium tracking-wide">
            <p>&copy; {new Date().getFullYear()} Buchukkot The Classic. All rights reserved.</p>
            
            <div className="flex items-center gap-8">
                 <a href="#" className="hover:text-white transition-colors">이용약관</a>
                 <a href="#" className="hover:text-white transition-colors font-bold text-stone-400">개인정보처리방침</a>
                 <button 
                    onClick={onAdminClick}
                    className="flex items-center gap-2 hover:text-emerald-500 transition-colors uppercase tracking-widest opacity-50 hover:opacity-100"
                >
                    Admin Access
                </button>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
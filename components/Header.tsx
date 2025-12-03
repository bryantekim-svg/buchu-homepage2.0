import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'}`}
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 flex justify-between items-center h-20">
          
          {/* Logo - 밝은 배경에 맞게 색상 필터 조정 */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block relative group">
            <img 
              src="./logo.png" 
              alt="부추꽃더클래식" 
              className="object-contain h-24 md:h-32 transition-all duration-500"
              style={{ filter: 'none' }} // 로고가 원래 금색/갈색이라면 필터 제거, 흰색이면 invert 필요. 여기선 원본이 금색이라 가정하고 원본 사용
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            {/* 텍스트 로고 백업 (이미지 깨질 시) */}
            <span className="hidden font-serif text-3xl md:text-4xl font-bold tracking-tighter text-[#8C7335] whitespace-nowrap">
              부추꽃더클래식
            </span>
          </a>

          {/* Desktop Nav - Dark Text for Light Theme */}
          <nav className="hidden md:flex items-center gap-12">
            {['REALITY', 'PHILOSOPHY', 'LIFESTYLE'].map((item) => (
                <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === 'lifestyle' ? 'walk' : item.toLowerCase())} 
                    className="text-sm font-bold text-stone-600 hover:text-[#C5A059] uppercase tracking-[0.15em] transition-colors py-2"
                >
                    {item}
                </button>
            ))}
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border border-[#C5A059] rounded-full text-xs font-bold text-[#8C7335] uppercase tracking-widest hover:bg-[#C5A059] hover:text-white transition-all duration-300"
            >
              상담 예약하기
            </button>
          </nav>

          {/* Mobile Menu Button - Dark Color */}
          <button 
            className="md:hidden z-50 p-2 text-stone-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay - Bright & Large Fonts */}
      <div className={`fixed inset-0 z-[60] bg-[#fdfbf7] flex flex-col items-center justify-center transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <button className="absolute top-6 right-6 text-stone-800 p-4" onClick={() => setMobileMenuOpen(false)}>
            <X size={36} />
          </button>
          
          <nav className="flex flex-col gap-10 text-center">
            <button onClick={() => scrollToSection('reality')} className="text-3xl font-serif text-stone-800 hover:text-[#C5A059] font-medium">현실 점검</button>
            <button onClick={() => scrollToSection('philosophy')} className="text-3xl font-serif text-stone-800 hover:text-[#C5A059] font-medium">공간과 철학</button>
            <button onClick={() => scrollToSection('walk')} className="text-3xl font-serif text-stone-800 hover:text-[#C5A059] font-medium">산책이 있는 삶</button>
            <button onClick={() => scrollToSection('contact')} className="mt-8 px-12 py-5 bg-[#C5A059] text-white rounded-full text-xl font-bold shadow-lg">상담 예약하기</button>
          </nav>
      </div>
    </>
  );
};

export default Header;
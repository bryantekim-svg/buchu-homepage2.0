import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        className="fixed top-0 left-0 right-0 z-50 py-8 transition-all duration-700 mix-blend-difference text-white pointer-events-none"
      >
        <div className="w-full max-w-[1920px] mx-auto px-6 md:px-16 flex justify-between items-center h-20 md:h-28 pointer-events-auto">
          
          {/* Logo */}
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="block relative group">
            <img 
              src="./logo.png" 
              alt="부추꽃더클래식" 
              className="object-contain h-24 md:h-32 brightness-0 invert"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <span className="hidden font-serif text-3xl md:text-5xl font-bold tracking-tighter whitespace-nowrap">
              부추꽃더클래식
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-16">
            {['REALITY', 'PHILOSOPHY', 'LIFESTYLE'].map((item) => (
                <button 
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase() === 'lifestyle' ? 'walk' : item.toLowerCase())} 
                    className="text-xs font-bold hover:opacity-70 uppercase tracking-[0.25em] transition-all hover:-translate-y-1 relative group py-2"
                >
                    {item}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </button>
            ))}
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 border border-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 transform hover:scale-105"
            >
              Consultation
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden z-50 p-2 hover:opacity-70 transition-opacity"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 z-[60] bg-stone-950 flex flex-col items-center justify-center transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <button className="absolute top-8 right-8 text-white p-4" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
          <nav className="flex flex-col gap-10 text-3xl font-serif items-center relative z-10 text-white">
            <button onClick={() => scrollToSection('reality')} className="text-stone-400 hover:text-white transition-colors duration-300 hover:scale-110">현실 점검</button>
            <button onClick={() => scrollToSection('philosophy')} className="text-stone-400 hover:text-white transition-colors duration-300 hover:scale-110">공간과 철학</button>
            <button onClick={() => scrollToSection('walk')} className="text-stone-400 hover:text-white transition-colors duration-300 hover:scale-110">산책이 있는 삶</button>
            <button onClick={() => scrollToSection('contact')} className="mt-8 px-12 py-5 bg-white text-stone-950 rounded-full text-xl font-bold shadow-2xl hover:bg-emerald-500 hover:text-white transition-all">상담 예약하기</button>
          </nav>
      </div>
    </>
  );
};

export default Header;
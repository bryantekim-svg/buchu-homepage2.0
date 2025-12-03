
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-[#fdfbf7]">
      {/* Background Image - Fullscreen */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./hero.jpg" 
          alt="따뜻한 햇살 아래 손을 잡은 모습" 
          className="w-full h-full object-cover opacity-90 scale-105 animate-[zoomIn_20s_infinite_alternate]" 
          onError={(e) => { 
            e.currentTarget.style.display = 'none'; 
            e.currentTarget.parentElement!.style.backgroundColor = '#fdfbf7';
          }}
        />
        {/* Base overlay for contrast */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* 
        Content Container 
        Positioned at bottom-left as requested 
      */}
      <div className="absolute bottom-[15%] left-0 w-full md:w-auto md:max-w-4xl z-10 px-6 md:px-12">
        
        {/* Animated Text Box Container */}
        <div className="relative overflow-hidden group">
            {/* Gradient Background Layer that slides in */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent translate-x-[-100%] animate-[slideRight_1.5s_cubic-bezier(0.16,1,0.3,1)_0.5s_forwards] backdrop-blur-sm rounded-r-3xl"></div>

            {/* Content inside the box */}
            <div className="relative p-8 md:p-12 opacity-0 animate-[fadeIn_1s_ease-out_1.2s_forwards]">
                <span className="inline-block mb-4 px-3 py-1 border border-[#8C7335] rounded-full text-[#8C7335] text-xs md:text-sm font-bold tracking-widest bg-white/50">
                    PREMIUM SENIOR CARE
                </span>

                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-stone-900 mb-6 drop-shadow-sm whitespace-pre-line">
                  "엄마, 미안해..."<br/>
                  <span className="text-[#8C7335] text-2xl md:text-5xl lg:text-5xl mt-2 block font-normal">
                     그 말 대신, 엄마의 웃음을 지켜주세요.
                  </span>
                </h1>

                <div className="w-24 h-1 bg-[#C5A059] mb-8"></div>

                <p className="font-sans text-stone-700 text-lg md:text-xl font-medium leading-loose break-keep max-w-2xl mb-10">
                    가까운 김포 도심 속, 자연이 보이는 가장 편안한 1인실.<br/>
                    <span className="bg-[#C5A059]/20 px-1 font-bold text-stone-900">부모님의 두 번째 인생</span>은 가족 곁에서 시작되어야 합니다.
                </p>

                {/* Buttons with line break spacing */}
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                    <a href="#philosophy" className="px-8 py-4 bg-[#C5A059] text-white rounded-full text-lg font-bold shadow-lg hover:bg-[#8C7335] transition-all text-center">
                     부추꽃더클래식 이야기
                    </a>
                    <a href="#reality" className="px-8 py-4 bg-white/80 border border-[#C5A059] text-[#8C7335] rounded-full text-lg font-bold hover:bg-white transition-all text-center">
                        우리가 걱정하는 현실
                    </a>
                </div>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes slideRight {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0); }
        }
        @keyframes zoomIn {
            0% { transform: scale(1); }
            100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;

import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to center of screen
      const x = (e.clientX - window.innerWidth / 2) / 50; // Divided by 50 for subtle effect
      const y = (e.clientY - window.innerHeight / 2) / 50;
      setOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-[#fdfbf7] flex items-center justify-center">
      {/* Background Image - Fullscreen */}
      <div className="absolute inset-0 z-0">
        <img 
          src="./hero.jpg" 
          alt="따뜻한 햇살 아래 손을 잡은 모습" 
          className="w-full h-full object-cover opacity-90 scale-105 animate-[zoomIn_20s_infinite_alternate]"
          style={{ 
            transform: `scale(1.05) translate(${offset.x * -1}px, ${offset.y * -1}px)` 
          }}
          onError={(e) => { 
            e.currentTarget.style.display = 'none'; 
            e.currentTarget.parentElement!.style.backgroundColor = '#fdfbf7';
          }}
        />
        {/* Base overlay for contrast - gradient from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"></div>
      </div>

      {/* 
        Content Container 
        Centered layout with no background box.
        Text has shadow for readability.
        Parallax effect applied.
      */}
      <div 
        className="relative z-10 px-6 md:px-16 text-center"
        style={{ 
          transform: `translate(${offset.x}px, ${offset.y}px)` 
        }}
      >
        
        {/* Animated Text Wrapper */}
        <div className="relative opacity-0 animate-[slideUp_1s_ease-out_0.5s_forwards] max-w-5xl mx-auto">
            
            {/* Content inside - No background box */}
            <div className="relative p-4 md:p-12 opacity-0 animate-[fadeIn_0.8s_ease-out_1.0s_forwards]">
                <span className="inline-block mb-6 px-4 py-1 border border-white/40 text-white rounded-full text-xs md:text-sm font-bold tracking-widest backdrop-blur-sm shadow-sm">
                    PREMIUM SENIOR CARE
                </span>

                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-white mb-2 text-shadow-lg whitespace-pre-line">
                  "엄마, 미안해..."
                </h1>
                <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-[#ffebb8] mb-8 text-shadow-lg whitespace-pre-line">
                  그 말 대신,<br className="md:hidden"/> 엄마의 웃음을 지켜주세요.
                </h1>
                
                {/* Underline */}
                <div className="w-24 h-1 bg-[#C5A059] mx-auto mb-8 shadow-md"></div>

                <p className="font-sans text-white text-lg md:text-xl font-medium leading-loose break-keep max-w-2xl mx-auto mb-12 text-shadow-md">
                    가까운 김포 도심 속, 자연이 보이는 가장 편안한 1인실.<br/>
                    <span className="font-bold border-b border-white/50 pb-1">부모님의 두 번째 인생</span>은 가족 곁에서 시작되어야 합니다.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
                    <a href="#philosophy" className="px-10 py-4 bg-[#C5A059] text-white rounded-full text-lg font-bold shadow-lg hover:bg-[#8C7335] hover:scale-105 transition-all text-center">
                     부추꽃더클래식 이야기
                    </a>
                    <a href="#reality" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/40 text-white rounded-full text-lg font-bold hover:bg-white/20 hover:scale-105 transition-all text-center text-shadow-md">
                        우리가 걱정하는 현실
                    </a>
                </div>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
            0% { transform: translateY(50px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }
        @keyframes zoomIn {
            0% { transform: scale(1.05); }
            100% { transform: scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
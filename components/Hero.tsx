import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[100dvh] flex flex-col justify-center items-center bg-stone-950 overflow-hidden px-6 perspective-1000">
      {/* Parallax Background Image with Scale Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/60 via-stone-950/30 to-stone-950 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-stone-950/20 z-10"></div>
        <img 
          src="./hero.jpg" 
          alt="부추꽃더클래식" 
          className="w-full h-full object-cover animate-parallax opacity-80 origin-center"
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </div>

      <div className="z-20 text-center max-w-7xl w-full flex flex-col items-center pt-12 md:pt-24">
        
        {/* Animated Badge */}
        <div className="mb-6 md:mb-12 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="px-3 py-1 md:px-5 md:py-2 border border-emerald-500/30 rounded-full text-emerald-300 text-[10px] md:text-sm font-bold tracking-[0.2em] md:tracking-[0.4em] uppercase bg-stone-900/60 backdrop-blur-xl shadow-lg">
                Urban Premium Sanctuary
            </span>
        </div>

        {/* Main Headline - Responsive Text Sizes */}
        <h1 className="font-serif text-3xl md:text-7xl lg:text-8xl leading-[1.2] md:leading-[1.1] text-white mb-8 md:mb-14 tracking-tight animate-fade-up opacity-0 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] break-keep" style={{ animationDelay: '0.5s' }}>
          "엄마, 요양원 갈래?"<br/>
          <span className="text-stone-300 text-lg md:text-5xl lg:text-6xl mt-4 md:mt-6 block font-light opacity-90">
             그 말 한마디가 왜 그리 힘들었을까요.
          </span>
        </h1>

        {/* Divider */}
        <div className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent via-emerald-500 to-transparent mb-8 md:mb-14 animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}></div>

        {/* Empathy Text - Refined Copy for Urban/Nature Balance */}
        <div className="animate-fade-up opacity-0 max-w-4xl mx-auto px-2" style={{ animationDelay: '1.1s' }}>
            <p className="font-sans text-stone-200 text-sm md:text-2xl font-light leading-relaxed break-keep drop-shadow-lg opacity-90 mb-6 md:mb-8">
            가까운 도심 속, 자연이 보이는 가장 편안한 1인실.<br/>
            <span className="text-white font-bold border-b-2 border-emerald-600/50 pb-1">부모님의 두 번째 인생</span>은 가족 곁에서 시작되어야 합니다.
            </p>
            <p className="text-emerald-400 font-serif text-base md:text-3xl font-medium tracking-wide break-keep">
                우리는 그 두려움을 이해하는 것에서부터 시작했습니다.
            </p>
        </div>

        {/* CTA Buttons - Stacked on Mobile */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-12 md:mt-20 animate-fade-up opacity-0 w-full md:w-auto px-6" style={{ animationDelay: '1.5s' }}>
            <a href="#reality" className="group relative px-8 py-4 md:px-10 md:py-5 bg-transparent border border-stone-600 text-stone-300 rounded-full text-sm md:text-lg tracking-widest overflow-hidden transition-all duration-500 hover:border-white hover:text-white w-full md:w-auto">
                <span className="relative z-10">우리가 걱정하는 현실</span>
                <div className="absolute inset-0 bg-white/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            </a>
            <a href="#philosophy" className="group px-8 py-4 md:px-12 md:py-5 bg-white text-stone-950 rounded-full text-sm md:text-lg font-bold tracking-widest hover:bg-emerald-500 hover:text-white hover:scale-105 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.3)] w-full md:w-auto">
             부추꽃더클래식 이야기
            </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 md:bottom-10 animate-pulse-slow text-stone-500 flex flex-col items-center gap-3 opacity-60">
        <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Scroll Down</span>
        <div className="w-px h-10 md:h-16 bg-gradient-to-b from-stone-500 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
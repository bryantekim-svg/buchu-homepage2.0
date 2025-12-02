import React from 'react';

const ClimaxWalk: React.FC = () => {
  return (
    <section id="walk" className="relative bg-white text-black py-32 md:py-48 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-24 pb-12 border-b border-stone-200 reveal">
            <div>
                 <p className="text-emerald-700 font-bold tracking-[0.3em] uppercase mb-6 text-sm">The Lifestyle</p>
                <h2 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] text-stone-900 break-keep">
                안전이 보장되기에,<br/>
                우리는 <span className="text-emerald-800 italic relative">
                    갇혀 있지 않습니다.
                    <svg className="absolute w-full h-3 -bottom-2 left-0 text-emerald-300 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                        <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                    </svg>
                </span>
                </h2>
            </div>
            <div className="max-w-md mt-12 md:mt-0 text-right">
                <p className="text-xl md:text-2xl font-light leading-tight text-stone-600 break-keep">
                    낙상 사고가 두려워 산책을 기피하는 요양원들.<br/>
                    하지만 <span className="font-bold text-stone-900 border-b-2 border-stone-900">부추꽃더클래식은 다릅니다.</span>
                </p>
            </div>
        </div>

        {/* Cinematic Image Reveal with 3D feel */}
        <div className="reveal w-full aspect-video md:aspect-[2.35/1] bg-stone-200 mb-20 overflow-hidden rounded-2xl shadow-2xl relative group transform-gpu perspective-1000">
            <img 
                src="./walk.jpg" 
                alt="어르신과 함께하는 산책" 
                className="w-full h-full object-cover transition-transform duration-[3s] ease-in-out group-hover:scale-110 will-change-transform"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>
            
            <div className="absolute bottom-10 left-6 md:bottom-20 md:left-20 max-w-3xl text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                <h3 className="text-3xl md:text-6xl font-serif font-bold mb-8 drop-shadow-lg">
                    "매일, 자연을 걷습니다"
                </h3>
                <p className="text-lg md:text-2xl font-light leading-relaxed drop-shadow-md border-l-4 border-emerald-500 pl-8 bg-black/40 backdrop-blur-md p-6 rounded-r-2xl">
                    햇살, 바람, 계절의 냄새.<br/>
                    살아있음을 느끼는 이 순간이 최고의 재활입니다.
                </p>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 mt-24">
            <div className="space-y-10 reveal">
                 <h3 className="text-4xl font-serif font-bold text-stone-900 leading-tight">
                    <span className="text-emerald-700">1.5배의 인력</span>이<br/>
                    만들어내는 기적
                 </h3>
                <p className="text-stone-600 text-lg leading-loose break-keep">
                    산책은 단순한 걷기가 아닙니다. 어르신들에게는 
                    '내가 아직 건강하게 살아있다'는 자존감의 확인입니다.<br/><br/>
                    혹시 넘어지실까 봐 곁을 떠나지 않는 선생님들, 
                    그리고 만약의 상황에 대비하는 의료진이 뒤에서 묵묵히 지켜주기에,
                    우리는 오늘도 과감하게 문을 열고 세상 밖으로 나갑니다.
                </p>
            </div>
            
            <div className="bg-stone-50 p-12 border border-stone-200 flex flex-col justify-center items-center text-center rounded-3xl shadow-xl reveal hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <h4 className="text-3xl font-serif font-bold mb-6 text-stone-800">
                    부모님께 '갇힌 삶'이 아닌<br/>'누리는 삶'을 선물하세요.
                </h4>
                <p className="text-stone-500 mb-12 text-base break-keep leading-relaxed">
                    백 번의 인터넷 검색보다 한 번의 방문이 부모님의 마음을 움직입니다.<br/>
                    직접 오셔서 어르신들의 편안한 표정을 확인하세요.
                </p>
                <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({behavior:'smooth'}); }} className="group relative overflow-hidden inline-flex items-center justify-center gap-3 bg-stone-900 text-white px-12 py-6 w-full rounded-2xl text-xl font-bold transition-all hover:bg-emerald-900 shadow-xl">
                    <span className="relative z-10">VIP 입소 대기 및 상담 신청하기</span>
                    <span className="absolute inset-0 bg-emerald-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ClimaxWalk;
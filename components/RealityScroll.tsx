import React from 'react';

const RealityScroll: React.FC = () => {
  const problems = [
    {
      id: "01",
      title: "삭막한 병원",
      subtitle: "멈춰버린 시간 속의 고립",
      desc: "\"치료를 위해 하루 종일 침대에만 갇혀 있어야 하나요?\"\n\n통제된 생활 속에서 어르신은 '나 자신'을 잃어버립니다. \n창살 없는 감옥처럼 느껴지는 답답한 병실.\n어르신께 필요한 것은 차가운 치료가 아니라, 따뜻한 보살핌과 살아있는 일상입니다.",
      imgBg: "bg-stone-800"
    },
    {
      id: "02",
      title: "위험한 집",
      subtitle: "가족의 사랑만으로는 부족한 안전",
      desc: "\"익숙해서 좋지만, 밤이 너무 무섭습니다.\"\n\n밤새 일어날지 모르는 낙상 사고, 갑작스러운 응급 상황.\n자녀분들도 불안함에 휴대폰만 바라보며 뜬눈으로 밤을 지새우지 않으셨나요?\n효도라는 이름으로 방치하고 있는 것은 아닌지, 현실을 직시해야 합니다.",
      imgBg: "bg-stone-900"
    },
    {
      id: "03",
      title: "낯선 동거",
      subtitle: "프라이버시가 사라진 고통",
      desc: "\"평생을 내 집에서 살았는데...\"\n\n갑자기 모르는 사람과 24시간을 부대끼며 살아야 한다면?\n다인실의 소음, 냄새, 그리고 끊임없이 느껴지는 타인의 시선.\n이런 스트레스는 어르신이 마음의 문을 닫게 만드는 가장 큰 이유입니다.",
      imgBg: "bg-stone-950"
    }
  ];

  return (
    <section id="reality" className="bg-stone-100 text-stone-900 py-32 md:py-48 overflow-hidden relative">
      
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-0 w-full text-center overflow-hidden opacity-5 pointer-events-none select-none">
        <span className="text-[20vw] font-serif font-bold leading-none whitespace-nowrap">REALITY CHECK</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-32 reveal">
            <span className="text-emerald-600 font-bold tracking-[0.3em] uppercase text-sm mb-6 block">The Problem</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-stone-900 mb-10 leading-tight">
                가장 큰 걱정은 결국<br/>
                <span className="relative inline-block px-4">
                    '적응'
                    <span className="absolute bottom-2 left-0 w-full h-4 bg-emerald-200/50 -z-10 skew-x-12"></span>
                </span>
                의 문제입니다.
            </h2>
            <p className="text-stone-600 text-xl md:text-2xl max-w-3xl mx-auto break-keep leading-relaxed font-light">
                시설이 아무리 화려해도, 마음이 불편하면 지옥과 같습니다.<br/>
                <span className="font-bold text-stone-900">우리 부모님이 겪으실 세 가지 두려움</span>, 우리는 이것부터 해결해야 했습니다.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {problems.map((item, idx) => (
            <div key={item.id} className="reveal group flex flex-col h-full bg-white rounded-2xl shadow-xl overflow-hidden hover:-translate-y-4 hover:shadow-2xl transition-all duration-700 ease-out border border-stone-100" style={{ transitionDelay: `${idx * 150}ms` }}>
              
              {/* Image Area - Abstract / Moody */}
              <div className={`h-72 ${item.imgBg} relative flex items-center justify-center overflow-hidden`}>
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 
                 <span className="absolute top-6 right-8 text-7xl font-serif font-bold text-white/5 group-hover:text-white/10 group-hover:scale-110 transition-all duration-700">
                    {item.id}
                 </span>
                 
                 <div className="relative z-10 text-center px-6 transform group-hover:scale-105 transition-transform duration-500">
                    <h3 className="text-3xl font-serif font-bold text-white mb-3">{item.title}</h3>
                    <div className="w-16 h-1 bg-emerald-500 mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"></div>
                 </div>
              </div>
              
              <div className="p-10 flex-grow flex flex-col relative bg-white">
                <h4 className="text-lg font-bold text-stone-800 mb-6 pb-4 border-b border-stone-100">
                    {item.subtitle}
                </h4>
                <p className="text-stone-600 text-base leading-7 whitespace-pre-line break-keep flex-grow">
                  {item.desc}
                </p>
                
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealityScroll;

import React from 'react';

const RealityScroll: React.FC = () => {
  const problems = [
    {
      title: "삭막한 병원",
      subtitle: "멈춰버린 시간",
      desc: "치료를 위해 하루 종일 침대에만 갇혀 있어야 하나요?\n통제된 생활 속에서 어르신은 '나 자신'을 잃어버립니다.",
      img: "./hospital_sad.jpg",
      fallbackColor: "bg-stone-200"
    },
    {
      title: "위험한 집",
      subtitle: "불안한 밤",
      desc: "익숙해서 좋지만, 낙상 사고와 응급 상황엔 무방비합니다.\n불안함 때문에 자녀분들도 뜬눈으로 밤을 지새우셨을 겁니다.",
      img: "./home_alone.jpg",
      fallbackColor: "bg-stone-300"
    },
    {
      title: "낯선 동거",
      subtitle: "사라진 프라이버시",
      desc: "모르는 사람과 24시간을 부대끼는 스트레스.\n다인실의 소음과 시선은 마음의 문을 닫게 만듭니다.",
      img: "./crowded_room.jpg",
      fallbackColor: "bg-stone-400"
    }
  ];

  return (
    <section id="reality" className="bg-[#fdfbf7] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 reveal">
            <span className="text-[#8C7335] font-bold tracking-widest uppercase text-sm mb-4 block">Reality Check</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-8 leading-tight">
                가장 큰 걱정은 결국<br/>
                <span className="text-[#C5A059]">'적응'</span>의 문제입니다.
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div key={idx} className="reveal bg-white rounded-2xl shadow-xl overflow-hidden border border-[#C5A059]/10 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
              
              {/* Image Section */}
              <div className={`h-64 relative group overflow-hidden ${item.fallbackColor}`}>
                 <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                    }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                 <span className="absolute top-4 left-4 text-4xl text-white/80 font-serif font-bold opacity-80 z-10">{idx + 1}</span>
                 <h3 className="absolute bottom-4 left-4 text-2xl font-serif font-bold text-white z-10">{item.title}</h3>
              </div>
              
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                    <h4 className="text-xl font-bold text-[#8C7335] mb-4">{item.subtitle}</h4>
                    <p className="text-stone-600 text-lg leading-relaxed whitespace-pre-line break-keep">
                    {item.desc}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealityScroll;

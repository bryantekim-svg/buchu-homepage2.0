import React from 'react';

const RealityScroll: React.FC = () => {
  const problems = [
    {
      title: "삭막한 병원",
      subtitle: "멈춰버린 시간",
      desc: "치료를 위해 하루 종일 침대에만 갇혀 있어야 하나요?\n통제된 생활 속에서 어르신은 '나 자신'을 잃어버립니다.\n단순히 수명을 연장하는 것이 아닌, '살아있는 시간'이 필요합니다.",
      img: "./hospital_sad.jpg",
      fallbackColor: "bg-stone-200"
    },
    {
      title: "위험한 집",
      subtitle: "불안한 밤",
      desc: "익숙해서 좋지만, 낙상 사고와 응급 상황엔 무방비합니다.\n불안함 때문에 자녀분들도 뜬눈으로 밤을 지새우셨을 겁니다.\n가족의 사랑만으로는 채울 수 없는 의료적 공백이 있습니다.",
      img: "./home_alone.jpg",
      fallbackColor: "bg-stone-300"
    },
    {
      title: "낯선 동거",
      subtitle: "사라진 프라이버시",
      desc: "모르는 사람과 24시간을 부대끼는 스트레스.\n다인실의 소음과 시선은 마음의 문을 닫게 만듭니다.\n가장 큰 걱정은 결국 '적응'의 문제입니다.",
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
            <div key={idx} className="group reveal bg-white rounded-2xl shadow-xl overflow-hidden border border-[#C5A059]/10 flex flex-col h-full hover:-translate-y-4 hover:shadow-2xl transition-all duration-500 ease-out">
              
              {/* Image Section */}
              <div className={`h-72 relative overflow-hidden ${item.fallbackColor}`}>
                 <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.classList.add('bg-stone-200');
                    }}
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                 <span className="absolute top-4 left-4 text-5xl text-white/90 font-serif font-bold opacity-50 z-10 transition-transform group-hover:translate-x-2">0{idx + 1}</span>
                 <h3 className="absolute bottom-6 left-6 text-3xl font-serif font-bold text-white z-10 drop-shadow-md group-hover:translate-x-2 transition-transform">{item.title}</h3>
              </div>
              
              <div className="p-8 flex-grow flex flex-col justify-between relative bg-white z-10">
                <div>
                    <h4 className="text-xl font-bold text-[#8C7335] mb-6 border-b border-[#C5A059]/20 pb-4 group-hover:border-[#C5A059] transition-colors">{item.subtitle}</h4>
                    <p className="text-stone-600 text-lg leading-loose whitespace-pre-line break-keep font-medium">
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
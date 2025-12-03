
import React, { useRef, useEffect } from 'react';

const PhilosophyList: React.FC = () => {
  const items = [
    {
      id: 'space',
      tag: '01 SPACE',
      title: '외로워서 다인실?\n그것은 환상입니다.',
      problem: '보호자님은 부모님보다 건강한 말동무를 원하시죠?\n하지만 상대방도 똑같은 마음입니다.\n현실적인 다인실은 대화가 끊긴 침묵의 공간일 뿐입니다.',
      solution: '그래서 부추꽃은 \'완벽한 1인실\'을 고집합니다.\n힘들고 지친 밤에는 남의 눈치 볼 것 없이\n오롯이 나만의 공간에서 쉬셔야 합니다.',
      img: './room.jpg'
    },
    {
      id: 'people',
      tag: '02 PEOPLE',
      title: '친절한 요양보호사?\n\'여유\'가 만듭니다.',
      problem: '직원 한 명이 너무 많은 어르신을 케어해야 한다면,\n식사와 배변은 빨리 해치워야 할 \'업무\'가 됩니다.\n여유 없는 직원에게 친절을 강요할 순 없습니다.',
      solution: '우리는 인력을 1.5배 더 배치하여 \'시간\'을 선물했습니다.\n눈을 맞추고 손을 잡아드릴 수 있는 그 5분의 여유.\n그것이 진짜 효도입니다.',
      img: './hug.jpg'
    },
    {
      id: 'safety',
      tag: '03 SAFETY',
      title: '병원이 아닌,\n존중받는 \'어르신\'으로.',
      problem: '안전 때문에 요양병원을 고민하시나요?\n병원의 우선순위는 치료와 통제입니다.\n낙상을 막기 위해 묶어야 한다면, 그것은 삶이 아닙니다.',
      solution: '우리는 병원처럼 통제하지 않습니다.\n대신 보이지 않는 곳에 대학병원 핫라인을 심었습니다.\n자유롭게 지내시되, 위급 시엔 누구보다 빠르게 대처합니다.',
      img: './hospital.jpg'
    }
  ];

  return (
    <section id="philosophy" className="bg-[#fdfbf7]">
      {items.map((item, idx) => (
        <div key={item.id} className="relative w-full">
          
          {/* 
            MOBILE LAYOUT (Vertical Stack) - No Overlap
            Image Top -> Text Bottom
          */}
          <div className="md:hidden flex flex-col mb-16">
            <div className="w-full aspect-[4/3] relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.backgroundColor = '#e5e5e5'; }} />
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold text-[#8C7335] border border-[#8C7335]">{item.tag}</div>
            </div>
            <div className="px-6 py-10 bg-white border-b border-stone-200">
                <h2 className="text-3xl font-serif font-bold text-stone-900 mb-6 leading-tight whitespace-pre-line break-keep">{item.title}</h2>
                <div className="mb-8 pl-4 border-l-4 border-stone-300">
                    <p className="text-lg text-stone-600 leading-relaxed whitespace-pre-line break-keep">{item.problem}</p>
                </div>
                <div className="bg-[#fdfbf7] p-6 rounded-xl border border-[#C5A059]/30">
                    <p className="text-xl text-[#8C7335] font-bold leading-relaxed whitespace-pre-line break-keep">{item.solution}</p>
                </div>
            </div>
          </div>

          {/* 
            DESKTOP LAYOUT (Gradient Reveal Scrollytelling)
            1. Image is sticky.
            2. As you scroll, a gradient text box slides in from the left.
          */}
          <div className="hidden md:block h-[200vh] relative z-10 group">
            {/* Sticky Background Image */}
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-[2s] scale-100 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Spacer to allow scrolling time */}
            <div className="absolute top-0 w-full h-full pointer-events-none"></div>

            {/* 
                Text Container
                Positioned absolute at the bottom/middle of the section scroll area 
                so it slides into view as user scrolls down.
            */}
            <div className="absolute top-[40%] left-0 w-full h-screen flex flex-col justify-center px-24 pointer-events-none z-20">
                
                {/* The "Box" that slides in with gradient */}
                <div className="max-w-4xl relative transform transition-all duration-1000 ease-out translate-x-[-100px] opacity-0 group-hover:translate-x-0 group-hover:opacity-100 reveal-box">
                    {/* Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-transparent rounded-r-3xl backdrop-blur-md"></div>
                    
                    {/* Text Content */}
                    <div className="relative p-16 pointer-events-auto">
                        <span className="text-[#C5A059] font-bold tracking-[0.4em] mb-8 block text-lg">{item.tag}</span>
                        <h2 className="text-5xl font-serif font-bold text-stone-900 mb-10 leading-tight whitespace-pre-line">{item.title}</h2>
                        <div className="grid grid-cols-2 gap-16">
                            <div className="border-l-4 border-stone-300 pl-8">
                                <h4 className="text-sm font-bold text-stone-400 mb-4 uppercase tracking-widest">Problem</h4>
                                <p className="text-xl text-stone-600 leading-relaxed whitespace-pre-line font-medium">{item.problem}</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-[#C5A059] mb-4 uppercase tracking-widest">Solution</h4>
                                <p className="text-2xl text-[#8C7335] font-bold leading-relaxed whitespace-pre-line">{item.solution}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>

        </div>
      ))}

      {/* Helper CSS for the scroll reveal trigger */}
      <style>{`
        .reveal-box {
            /* This mimics the IntersectionObserver effect using CSS hover on parent container for simplicity in this demo structure. 
               In a real advanced scrollytelling, we would use scroll progress. 
               Here, keeping the sticky logic + reveal class structure. */
        }
      `}</style>
    </section>
  );
};

export default PhilosophyList;

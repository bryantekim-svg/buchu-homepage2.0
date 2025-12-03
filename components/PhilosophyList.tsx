import React, { useEffect, useRef, useState } from 'react';

interface PhilosophyItemProps {
    item: {
        id: string;
        tag: string;
        title: string;
        problem: string;
        solution: string;
        img: string;
    };
}

const PhilosophyItemPC: React.FC<PhilosophyItemProps> = ({ item }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                    } else {
                        // Optional: Reset visibility when scrolling up to re-trigger effect
                        // setIsVisible(false);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, []);

    return (
        <div ref={containerRef} className="h-[150vh] relative z-10 group overflow-hidden">
            {/* Sticky Background Image */}
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <img 
                    src={item.img} 
                    alt={item.title} 
                    className={`w-full h-full object-cover transition-transform duration-[3s] ease-out ${isVisible ? 'scale-105' : 'scale-100'}`} 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
                
                {/* 1. Global subtle darkening */}
                <div className="absolute inset-0 bg-black/10"></div>

                {/* 2. Strong Gradient from Left (Text Background) */}
                <div className={`absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}></div>
            </div>

            {/* Scroll Spacer */}
            <div className="absolute top-0 w-full h-full pointer-events-none"></div>

            {/* 
                Text Container
                Triggered by IntersectionObserver state (isVisible)
            */}
            <div className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center px-12 md:px-24 pointer-events-none z-20">
                
                {/* Text Reveal Animation */}
                <div className={`max-w-2xl relative transform transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[-50px] opacity-0'}`}>
                    
                    <div className="relative p-0 pointer-events-auto">
                        <span className="text-[#C5A059] font-bold tracking-[0.4em] mb-8 block text-xl animate-pulse-slow">{item.tag}</span>
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-12 leading-tight whitespace-pre-line drop-shadow-xl">{item.title}</h2>
                        
                        <div className="space-y-12">
                            {/* Problem */}
                            <div className="border-l-4 border-stone-500/50 pl-8 transition-all duration-700 delay-300 hover:border-stone-400">
                                <h4 className="text-sm font-bold text-stone-400 mb-4 uppercase tracking-widest">Problem</h4>
                                <p className="text-xl text-stone-300 leading-relaxed whitespace-pre-line font-medium break-keep">{item.problem}</p>
                            </div>
                            
                            {/* Solution - Stacked below Problem */}
                            <div className="pl-8 border-l-4 border-[#C5A059] transition-all duration-700 delay-500 hover:bg-white/5 hover:pl-10">
                                <h4 className="text-sm font-bold text-[#C5A059] mb-4 uppercase tracking-widest">Solution</h4>
                                <p className="text-2xl text-white font-bold leading-relaxed whitespace-pre-line break-keep text-shadow-md">{item.solution}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PhilosophyList: React.FC = () => {
  const items = [
    {
      id: 'space',
      tag: '01 SPACE',
      title: '외로워서 다인실?\n그것은 환상입니다.',
      problem: '보호자님은 부모님보다 건강한 말동무를 원하시죠?\n하지만 상대방도 똑같은 마음입니다.\n현실적인 다인실은 대화가 끊긴 침묵의 공간이거나,\n서로의 아픔만 공유하는 고통의 공간이 될 수 있습니다.',
      solution: '그래서 부추꽃은 \'완벽한 1인실\'을 고집합니다.\n힘들고 지친 밤에는 남의 눈치 볼 것 없이\n오롯이 나만의 공간에서 쉬셔야 합니다.\n방문을 닫으면 존엄이 지켜지는 곳, 그것이 집입니다.',
      img: './room.jpg'
    },
    {
      id: 'people',
      tag: '02 PEOPLE',
      title: '친절한 요양보호사?\n\'여유\'가 만듭니다.',
      problem: '직원 한 명이 너무 많은 어르신을 케어해야 한다면,\n식사와 배변은 빨리 해치워야 할 \'업무\'가 됩니다.\n시간에 쫓기는 직원에게 진심 어린 친절을 강요할 순 없습니다.',
      solution: '우리는 인력을 1.5배 더 배치하여 \'시간\'을 선물했습니다.\n(법적기준 2.1명 대비 여유로운 인력)\n눈을 맞추고 손을 잡아드릴 수 있는 그 5분의 여유.\n그것이 진짜 효도입니다.',
      img: './hug.jpg'
    },
    {
      id: 'safety',
      tag: '03 SAFETY',
      title: '병원이 아닌,\n존중받는 \'어르신\'으로.',
      problem: '안전 때문에 요양병원을 고민하시나요?\n병원의 우선순위는 치료와 통제입니다.\n낙상을 막기 위해 묶고, 조용히 시키기 위해 약을 쓴다면\n그것은 \'사육\'이지 \'삶\'이 아닙니다.',
      solution: '우리는 병원처럼 통제하지 않습니다.\n대신 보이지 않는 곳에 세브란스 연계 핫라인을 심었습니다.\n자유롭게 지내시되, 위급 시엔 누구보다 빠르게 대처합니다.\n안전한 자유, 그것이 우리가 드리는 약속입니다.',
      img: './hospital.jpg'
    }
  ];

  return (
    <section id="philosophy" className="bg-[#fdfbf7]">
      {items.map((item) => (
        <React.Fragment key={item.id}>
            {/* MOBILE LAYOUT (Vertical Stack) - No Overlap */}
            <div className="md:hidden flex flex-col mb-16">
                <div className="w-full aspect-[4/3] relative">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.style.backgroundColor = '#e5e5e5'; }} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 text-xs font-bold text-[#8C7335] border border-[#8C7335]">{item.tag}</div>
                </div>
                <div className="px-6 py-10 bg-white border-b border-stone-200">
                    <h2 className="text-3xl font-serif font-bold text-stone-900 mb-8 leading-tight whitespace-pre-line break-keep">{item.title}</h2>
                    <div className="mb-10 pl-4 border-l-4 border-stone-300">
                        <h4 className="text-sm font-bold text-stone-400 mb-2 uppercase">Problem</h4>
                        <p className="text-lg text-stone-600 leading-relaxed whitespace-pre-line break-keep">{item.problem}</p>
                    </div>
                    <div className="bg-[#fdfbf7] p-6 rounded-xl border border-[#C5A059]/30 shadow-sm">
                        <h4 className="text-sm font-bold text-[#C5A059] mb-2 uppercase">Solution</h4>
                        <p className="text-xl text-[#8C7335] font-bold leading-relaxed whitespace-pre-line break-keep">{item.solution}</p>
                    </div>
                </div>
            </div>

            {/* DESKTOP LAYOUT (Gradient Reveal Scrollytelling) */}
            <div className="hidden md:block">
                <PhilosophyItemPC item={item} />
            </div>
        </React.Fragment>
      ))}
    </section>
  );
};

export default PhilosophyList;
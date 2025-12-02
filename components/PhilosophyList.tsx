import React, { useEffect, useRef, useState } from 'react';

interface PhilosophyItem {
  id: string;
  title: string;
  tagline: string;
  subtitle: string;
  content: string;
  subContent: string;
  image: string;
}

const PhilosophyList: React.FC = () => {
  const items: PhilosophyItem[] = [
    {
      id: 'space',
      title: 'Space',
      tagline: '철학 01. 공간',
      subtitle: '적응의 시작,\n내 집보다 편안한 \'나만의 방\'',
      content: '남의 눈치를 보지 않고 숨을 고를 수 있는 독립된 공간이 필수적입니다. 저희는 수익성을 포기하고 과감하게 1인실(80%)과 2인실(20%) 위주로 설계했습니다.',
      subContent: '방문을 닫으면 온전한 휴식이 보장되는 곳. 나의 가구, 나의 냄새, 나의 추억이 깃든 물건들을 그대로 가져오세요. 낯선 시설이 아닌, "새로운 내 집"이라고 느낄 때 어르신은 비로소 마음의 안정을 찾고 건강을 회복하십니다.',
      image: './room.jpg' 
    },
    {
      id: 'people',
      title: 'People',
      tagline: '철학 02. 사람',
      subtitle: '외롭지 않게 곁을 지키는\n따뜻한 \'친구\'',
      content: '호텔 같은 시설도 사람이 없으면 차가운 감옥일 뿐입니다. 어르신의 마음을 여는 것은 결국 사람의 온기입니다. 저희는 공단 기준 1.5배의 전문 인력을 배치하여 진심 어린 케어를 실현합니다.',
      subContent: '직원들에게 \'마음의 여유\'가 있어야 그 사랑이 어르신께 향합니다. 시간에 쫓기지 않는 선생님이 어르신의 눈을 한 번 더 맞추고, 손을 한 번 더 잡아드립니다. 단순한 기저귀 교체나 식사 보조를 넘어, 말벗이 되어드리고 정서적 교감을 나누는 것. 그것이 부추꽃더클래식이 약속하는 \'사람 중심\'의 케어입니다.',
      image: './hug.jpg' 
    },
    {
      id: 'safety',
      title: 'Safety',
      tagline: '철학 03. 안전',
      subtitle: '불안하지 않은\n완벽한 의료 안전망',
      content: '"혹시 밤에 아프시면 어쩌지?" 하는 걱정, 이제 내려놓으세요. 세브란스 병원 출신 원장의 노하우와 협력 병원 핫라인이 24시간 든든하게 어르신을 지킵니다.',
      subContent: '우리는 병원처럼 삭막하게 통제하지 않습니다. 겉으로는 자유로운 가정집 같지만, 보이지 않는 곳에서는 대학병원급의 꼼꼼한 건강 관리가 이루어집니다. 매일의 바이탈 체크부터 응급 상황 대처까지, 전문가가 24시간 곁에 있습니다. 어르신은 편안한 일상을 누리시고, 안전은 저희가 책임지겠습니다.',
      image: './hospital.jpg' 
    }
  ];

  const [activeId, setActiveId] = useState('space');
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.getAttribute('data-index'));
          setActiveId(items[index].id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.5,
    });

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <section id="philosophy" className="bg-stone-950 text-white min-h-screen relative">
      <div className="flex flex-col md:flex-row">
        
        {/* Sticky Sidebar */}
        <div className="hidden md:flex md:w-1/3 md:h-screen sticky top-0 flex-col justify-center px-10 py-12 md:pl-24 z-20 bg-stone-950 border-r border-white/5 shadow-2xl">
          <p className="text-emerald-500 text-xs tracking-[0.4em] uppercase mb-16 font-bold">The Philosophy</p>
          <ul className="space-y-12">
            {items.map((item) => (
              <li key={item.id} className="relative group cursor-pointer">
                <a 
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); document.getElementById(item.id)?.scrollIntoView({behavior:'smooth'}); }}
                  className={`text-4xl lg:text-5xl font-serif transition-all duration-700 block flex items-center gap-4 ${
                    activeId === item.id 
                      ? 'text-white translate-x-4 font-bold scale-105' 
                      : 'text-stone-700 group-hover:text-stone-500'
                  }`}
                >
                  <span className={`text-xs tracking-normal font-sans text-emerald-500 block mb-1 absolute -top-5 left-0 w-full transition-opacity duration-500 ${activeId === item.id ? 'opacity-100' : 'opacity-0'}`}>
                    {item.tagline}
                  </span>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Scrolling Content */}
        <div className="w-full md:w-2/3">
          {items.map((item, index) => (
            <div 
              key={item.id} 
              id={item.id}
              data-index={index}
              ref={(el) => { sectionRefs.current[index] = el; }}
              className="min-h-screen flex flex-col justify-center p-8 md:p-32 border-b border-white/5 relative overflow-hidden group"
            >
              {/* Background Image with Parallax-like scaling */}
              <div className="absolute inset-0 z-0 bg-stone-900 overflow-hidden">
                 <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-40 transition-all duration-[2s] scale-110 group-hover:scale-100" 
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                 {/* Darker gradient overlay for better text readability */}
                 <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/90 to-transparent"></div>
              </div>

              <div className="relative z-10 max-w-4xl mt-20 md:mt-0 reveal">
                 <span className="md:hidden text-emerald-400 text-sm font-bold uppercase tracking-widest mb-4 block">
                    {item.tagline}
                 </span>
                 <h3 className="text-4xl md:text-6xl font-serif font-bold mb-10 text-white leading-tight break-keep whitespace-pre-line drop-shadow-2xl">
                    {item.subtitle}
                 </h3>
                 <div className="h-1 w-24 bg-emerald-600 mb-12 shadow-[0_0_15px_rgba(5,150,105,0.8)] rounded-full"></div>
                 <p className="text-stone-100 text-xl md:text-2xl leading-relaxed mb-10 font-light break-keep drop-shadow-lg">
                    {item.content}
                 </p>
                 <div className="bg-white/5 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl hover:bg-white/10 transition-colors">
                    <p className="text-stone-300 text-base md:text-lg leading-loose break-keep">
                        {item.subContent}
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

export default PhilosophyList;
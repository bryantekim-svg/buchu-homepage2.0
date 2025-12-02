import React from 'react';

const PhilosophyList: React.FC = () => {
  const items = [
    {
      id: 'space',
      tag: '01 SPACE',
      title: '감옥 같은 다인실이 아닌,\n호텔 같은 \'나만의 집\'',
      desc: '다인실의 소음과 시선은 어르신을 병들게 합니다.\n우리는 수익성을 포기하고, 과감하게 프라이빗 1인실 위주로 설계했습니다.',
      detail: '내 집처럼 편안한 가구, 독립된 화장실, 탁 트인 창문.\n자존감을 지키는 공간에서 어르신은 비로소 안정을 되찾습니다.',
      img: './room.jpg'
    },
    {
      id: 'people',
      tag: '02 PEOPLE',
      title: '방치되는 시간이 없는\n1.5배의 촘촘한 케어',
      desc: '시설이 좋아도 사람이 없으면 방치입니다.\n법적 기준을 훨씬 웃도는 1.5배의 전문 인력이 24시간 어르신 곁을 지킵니다.',
      detail: '시간에 쫓기지 않는 선생님은 어르신의 눈을 한 번 더 맞춥니다.\n단순한 수발이 아닌, 정서적 교감을 나누는 진짜 가족이 되어드립니다.',
      img: './hug.jpg'
    },
    {
      id: 'safety',
      tag: '03 SAFETY',
      title: '대학병원급 의료 시스템이\n지키는 안전한 일상',
      desc: '집보다 안전해야 요양원입니다.\n세브란스 병원 출신 원장의 노하우와 협력 병원 핫라인이 골든타임을 지킵니다.',
      detail: '매일의 바이탈 체크부터 응급 상황 대처까지.\n보이지 않는 곳에서 작동하는 완벽한 의료 안전망이 있기에, 보호자님은 두 다리 뻗고 주무실 수 있습니다.',
      img: './hospital.jpg'
    }
  ];

  return (
    <section id="philosophy" className="bg-stone-950 relative">
      {items.map((item, idx) => (
        <div key={item.id} className="relative w-full">
          {/* 
            Container Height Control: 
            Allows scrolling 'through' the image before text appears. 
            Total height approx 200vh-250vh.
          */}
          <div className="h-[230vh] relative z-10">
            
            {/* Sticky Image Section */}
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-[2s] ease-out hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                {/* Initial dark overlay for subtle readability if needed, but mostly clear */}
                <div className="absolute inset-0 bg-stone-950/10"></div>
            </div>

            {/* Scroll Trigger Spacer */}
            {/* This empty space ensures the user sees ONLY the photo for the first part of the scroll */}
            <div className="absolute top-0 w-full h-[80vh] pointer-events-none"></div>

            {/* Text Content Overlay */}
            {/* This slides up over the sticky image as you keep scrolling */}
            <div className="relative z-20 flex flex-col justify-center min-h-screen bg-gradient-to-b md:bg-gradient-to-r from-stone-950 via-stone-950/90 to-transparent pt-32 md:pt-0 px-6 md:px-24">
                <div className="max-w-3xl reveal">
                    <span className="text-emerald-500 font-bold tracking-[0.4em] text-sm md:text-base mb-8 block animate-pulse-slow">
                        THE SOLUTION {item.tag}
                    </span>
                    <h2 className="text-4xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.1] whitespace-pre-line drop-shadow-2xl">
                        {item.title}
                    </h2>
                    <div className="w-24 h-1.5 bg-emerald-600 mb-12 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
                    <p className="text-xl md:text-3xl text-stone-200 font-light leading-relaxed mb-10 whitespace-pre-line drop-shadow-lg">
                        {item.desc}
                    </p>
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl max-w-2xl transform hover:-translate-y-2 transition-transform duration-500 shadow-2xl">
                        <p className="text-stone-300 text-lg md:text-xl leading-loose whitespace-pre-line">
                            {item.detail}
                        </p>
                    </div>
                </div>
            </div>

          </div>
        </div>
      ))}
    </section>
  );
};

export default PhilosophyList;
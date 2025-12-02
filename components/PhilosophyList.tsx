import React from 'react';

const PhilosophyList: React.FC = () => {
  const items = [
    {
      id: 'space',
      tag: '01 SPACE',
      title: '외로워서 다인실을 찾으시나요?\n그것은 \'환상\'입니다.',
      // 문제 제기 (The Pain) - 사용자의 논리를 적용하여 환상 타파
      problem: '보호자님은 우리 부모님보다 더 건강하고, 말동무가 되어줄 짝꿍을 원하시죠?\n하지만 상대방 보호자도 똑같은 마음입니다.\n\n현실적인 요양원의 방 배정은 냉정합니다. 비슷한 인지 능력과 신체 상태를 가진 분들끼리 맺어집니다.\n대화가 어려운 분 옆에는 침묵뿐이고, 위급 시 벨을 눌러줄 수 있는 분은 없습니다.\n결국 다인실은 서로의 외로움과 고통을 공유하는 공간이 될 뿐입니다.',
      // 해결책 (The Solution)
      solution: '그래서 부추꽃더클래식은 \'화려한 다인실\' 대신 \'완벽한 1인실\'을 선택했습니다.\n진정한 교류는 컨디션 좋은 날 거실 프로그램에서 웃으며 하시고,\n힘들고 지친 밤에는 남의 눈치 볼 것 없이 오롯이 나만의 공간에서 쉬셔야 합니다.\n이것이 선진국형 시니어 케어의 기본입니다.',
      img: './room.jpg'
    },
    {
      id: 'people',
      tag: '02 PEOPLE',
      title: '천사 같은 요양보호사?\n\'환경\'이 만듭니다.',
      // 문제 제기
      problem: '모든 보호자님이 "내 부모님처럼 모셔달라"고 부탁하십니다.\n하지만 직원 한 명이 법적 기준(2.5명)대로 어르신을 케어해야 한다면 어떨까요?\n\n시간에 쫓기면 어르신은 \'짐\'이 되고, 식사와 배변은 빨리 해치워야 할 \'업무\'가 됩니다.\n여유가 없는 직원에게 무조건적인 친절을 강요할 수는 없습니다.',
      // 해결책
      solution: '우리는 인력을 1.5배 더 배치하여 직원들에게 \'시간\'을 선물했습니다.\n기저귀를 갈고 쫓기듯 나가는 것이 아니라,\n눈을 맞추고 손을 잡아드리며 "잘 주무셨어요?"라고 물을 수 있는 그 5분의 여유.\n어르신의 자존감을 지켜드리는 것은 직원의 인성이 아니라, 회사의 아낌없는 투자입니다.',
      img: './hug.jpg'
    },
    {
      id: 'safety',
      tag: '03 SAFETY',
      title: '병원에 가면 \'환자\'가 되지만\n여기서는 \'어르신\'으로 남습니다.',
      // 문제 제기
      problem: '혹시 응급상황이 걱정되어 요양병원을 고민하시나요?\n병원의 최우선 가치는 \'치료\'와 \'통제\'입니다.\n\n낙상 사고를 막기 위해 침대에 묶어야 하고, 안정을 위해 약물로 재워야 한다면...\n그것은 안전할지는 몰라도, 결코 \'살아있는 삶\'이라고 할 수 없습니다.',
      // 해결책
      solution: '우리는 병원처럼 삭막하게 통제하지 않습니다.\n대신 보이지 않는 곳에 세브란스 출신 의료진과 대학병원 핫라인을 심어두었습니다.\n\n평소에는 내 집처럼 자유롭게 산책하고 생활하시되,\n아픈 순간에는 그 어떤 병원보다 신속하게 개입합니다.\n억압 없는 안전, 이것이 우리가 지향하는 프리미엄의 기준입니다.',
      img: './hospital.jpg'
    }
  ];

  return (
    <section id="philosophy" className="bg-stone-950 relative">
      {items.map((item, idx) => (
        <div key={item.id} className="relative w-full">
          {/* 
            Container Height Control: 
            250vh allows for a long scroll where:
            0-40%: Image only (Cinematic moment)
            40-100%: Text reveals and scrolls
          */}
          <div className="h-[250vh] relative z-10">
            
            {/* Sticky Image Section */}
            <div className="sticky top-0 w-full h-screen overflow-hidden">
                <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-[3s] ease-out hover:scale-105"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent opacity-0 md:opacity-100 transition-opacity duration-1000"></div>
                {/* Mobile Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-stone-950/90 to-stone-950 md:hidden"></div>
            </div>

            {/* Scroll Trigger Spacer */}
            {/* This empty space ensures the user sees ONLY the photo for the first part of the scroll */}
            <div className="absolute top-0 w-full h-[90vh] pointer-events-none"></div>

            {/* Text Content Overlay */}
            {/* This slides up/in over the sticky image as you keep scrolling */}
            <div className="relative z-20 flex flex-col justify-center min-h-screen pt-32 md:pt-0 px-6 md:px-24 pointer-events-none">
                <div className="max-w-4xl reveal pointer-events-auto bg-stone-950/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none p-8 md:p-0 rounded-3xl md:rounded-none border border-white/10 md:border-none shadow-2xl md:shadow-none">
                    <span className="text-emerald-500 font-bold tracking-[0.4em] text-sm md:text-base mb-8 block animate-pulse-slow uppercase">
                        THE TRUTH about {item.tag.split(' ')[1]}
                    </span>
                    
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-12 leading-[1.3] whitespace-pre-line drop-shadow-2xl">
                        {item.title}
                    </h2>
                    
                    <div className="w-24 h-1.5 bg-emerald-600 mb-12 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>

                    {/* Problem Statement (Contrast) */}
                    <div className="mb-12 pl-6 border-l-2 border-stone-600">
                        <p className="text-lg md:text-xl text-stone-400 font-light leading-relaxed whitespace-pre-line break-keep">
                            {item.problem}
                        </p>
                    </div>

                    {/* Solution Statement (Main) */}
                    <div className="bg-stone-900/90 md:bg-stone-900/70 backdrop-blur-xl border-l-4 border-emerald-500 p-8 md:p-12 rounded-r-3xl shadow-2xl transform transition-transform duration-500 hover:translate-x-2">
                        <p className="text-xl md:text-2xl text-stone-100 leading-loose whitespace-pre-line font-medium break-keep">
                            {item.solution}
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
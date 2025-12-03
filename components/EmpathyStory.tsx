import React from 'react';

const EmpathyStory: React.FC = () => {
  return (
    <section className="py-20 md:py-56 bg-stone-950 text-white relative overflow-hidden">
        {/* Subtle Background Effect - Gold */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-[#C5A059]/10 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
            <div className="space-y-32 md:space-y-48">
                
                {/* Stage 1: The Struggle - Guilt */}
                <div className="reveal text-center group">
                    <h3 className="text-stone-500 font-bold tracking-[0.4em] uppercase text-sm mb-8 md:mb-10 group-hover:text-[#C5A059] transition-colors duration-700">The Conflict</h3>
                    <p className="font-serif text-3xl md:text-6xl leading-tight mb-8 md:mb-12 text-stone-300 transition-colors duration-700 group-hover:text-white break-keep">
                        "내가 불효하는 건 아닐까?"
                    </p>
                    <div className="w-20 md:w-24 h-1 bg-stone-800 mx-auto mb-8 md:mb-12 group-hover:bg-[#C5A059] transition-colors duration-700"></div>
                    <p className="text-xl md:text-3xl text-stone-400 font-light leading-loose max-w-3xl mx-auto break-keep transition-colors duration-700 group-hover:text-stone-200">
                        퇴근 후 쏟아지는 피로, 밤새 울리는 전화벨 소리.<br className="hidden md:block"/>
                        점점 야위어가는 부모님을 보며 가슴이 무너지셨죠.<br/><br/>
                        가족의 사랑만으로 버티기엔,<br/>
                        <span className="text-white font-medium border-b border-stone-700 pb-1 group-hover:border-[#C5A059] transition-colors duration-700">치매와 노인성 질환은 너무나 가혹한 현실입니다.</span>
                    </p>
                </div>

                {/* Stage 2: The Reframing - Turning Point */}
                <div className="reveal flex flex-col items-center">
                     <div className="w-px h-24 md:h-32 bg-gradient-to-b from-stone-900 via-[#C5A059] to-stone-900 mb-12 md:mb-16"></div>
                     <p className="font-serif text-2xl md:text-5xl text-center leading-relaxed text-[#E5C585] mb-12 md:mb-16 drop-shadow-xl break-keep">
                        효도라는 이름으로<br/>
                        <span className="font-bold text-white">서로가 무너지고 있지는 않나요?</span>
                     </p>
                     <div className="bg-gradient-to-b from-stone-900 to-stone-950 border border-stone-800/50 p-8 md:p-16 rounded-[2rem] max-w-4xl text-center shadow-2xl hover:border-[#C5A059]/50 transition-colors duration-700 w-full">
                        <p className="text-lg md:text-2xl text-stone-300 leading-loose break-keep font-light">
                            집에 계시는 것이 효도라고 생각했지만, <br className="hidden md:block"/>
                            오히려 전문적인 케어를 받지 못해 병세가 깊어지는 경우가 많습니다.<br/><br/>
                            <span className="text-[#C5A059] font-bold text-2xl md:text-3xl block my-6">이제 죄책감을 내려놓으세요.</span>
                            부모님께 필요한 것은 지친 가족의 희생이 아니라,<br/>
                            <span className="text-white font-bold border-b-2 border-[#C5A059]">24시간 곁을 지키는 전문가의 따뜻한 손길</span>입니다.
                        </p>
                     </div>
                </div>

                {/* Stage 3: The Promise - Our Mission */}
                <div className="reveal text-center pt-12">
                    <p className="text-stone-500 text-xs md:text-sm tracking-[0.4em] uppercase mb-6 md:mb-8">Our Philosophy</p>
                    <h2 className="font-serif text-3xl md:text-6xl font-bold text-white leading-tight mb-8 md:mb-10 break-keep">
                        그래서 부추꽃더클래식은<br/>
                        '집'보다 더 편안한 '집'을 지었습니다.
                    </h2>
                    <p className="text-xl md:text-3xl text-stone-400 font-light leading-loose break-keep">
                        자녀분들은 <span className="text-[#C5A059] font-bold">도심</span> 속에 있어 언제든 오실 수 있고,<br/>
                        어르신은 <span className="text-[#C5A059] font-bold">자연</span> 속에서 편안히 숨 쉴 수 있는 곳.
                    </p>
                </div>

            </div>
        </div>
    </section>
  );
};

export default EmpathyStory;
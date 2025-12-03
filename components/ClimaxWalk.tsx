import React from 'react';

const ClimaxWalk: React.FC = () => {
  return (
    <section id="walk" className="bg-[#fdfbf7] py-24 md:py-48 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Text */}
        <div className="text-center mb-16 md:mb-24 reveal">
            <p className="text-[#8C7335] font-bold tracking-[0.3em] uppercase mb-6 text-sm">The Lifestyle</p>
            <h2 className="text-4xl md:text-7xl font-serif font-bold leading-tight text-stone-900 break-keep">
                안전이 보장되기에,<br/>
                우리는 <span className="text-[#C5A059] inline-block border-b-4 border-[#C5A059]">갇혀 있지 않습니다.</span>
            </h2>
        </div>

        {/* 
            Main Image Section 
            Mobile: Image fills width, Text block BELOW image (No overlapping)
            Desktop: Image large, Text clean
        */}
        <div className="flex flex-col gap-0 reveal rounded-3xl overflow-hidden shadow-2xl">
            <div className="w-full aspect-square md:aspect-[21/9] bg-stone-200 relative">
                <img 
                    src="./walk.jpg" 
                    alt="산책하는 어르신" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
            </div>
            
            {/* Text Block - BELOW Image for Mobile */}
            <div className="bg-white p-10 md:p-16 border-t border-stone-100 text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div>
                        <h3 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-stone-900">
                            "매일, 자연을 걷습니다"
                        </h3>
                        <p className="text-xl md:text-2xl font-light leading-relaxed text-stone-600 break-keep">
                            햇살, 바람, 계절의 냄새.<br/>
                            살아있음을 느끼는 이 순간이 최고의 재활입니다.
                        </p>
                    </div>
                    
                    <div className="bg-[#fdfbf7] p-8 rounded-2xl border border-[#C5A059]/30 max-w-lg w-full">
                        <h4 className="font-bold text-[#8C7335] text-xl mb-4">1.5배 인력의 기적</h4>
                        <p className="text-stone-600 text-lg leading-relaxed break-keep">
                            혹시 넘어지실까 봐 곁을 떠나지 않는 선생님들 덕분에, 
                            우리는 오늘도 과감하게 문을 열고 세상 밖으로 나갑니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center reveal">
            <p className="text-xl md:text-2xl text-stone-500 mb-10 break-keep">
                직접 오셔서 어르신들의 <strong>편안한 표정</strong>을 확인하세요.
            </p>
            <a href="#contact" className="inline-block px-12 py-6 bg-stone-900 text-white rounded-full text-xl font-bold shadow-xl hover:bg-[#8C7335] transition-all hover:-translate-y-1">
                VIP 입소 대기 및 상담 신청
            </a>
        </div>
      </div>
    </section>
  );
};

export default ClimaxWalk;
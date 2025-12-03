import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial: React.FC = () => {
  return (
    <section id="testimonial" className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-[#C5A059]/30 to-transparent"></div>

        <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="mb-12 reveal">
                <Quote className="w-16 h-16 text-[#C5A059]/20 mx-auto mb-6" />
                <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-4">보호자의 진심</h2>
                <p className="text-stone-500 text-sm tracking-widest uppercase">From Family</p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 reveal">
                {/* Letter Image */}
                <div className="w-full md:w-1/2 aspect-[3/4] bg-stone-100 rounded-lg overflow-hidden shadow-lg rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border border-stone-200">
                    <img 
                        src="./letter.jpg" 
                        alt="보호자 손편지" 
                        className="w-full h-full object-cover"
                        onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'text-stone-400', 'text-sm'); e.currentTarget.parentElement!.innerText = "손편지 이미지"; }}
                    />
                </div>

                {/* Review Text */}
                <div className="w-full md:w-1/2 text-left">
                    <div className="bg-[#fdfbf7] p-8 md:p-12 rounded-3xl border border-[#C5A059]/20 shadow-sm relative">
                        {/* Decorative Quote Icon */}
                        <Quote className="absolute top-6 right-6 w-8 h-8 text-[#C5A059]/10 rotate-180" />
                        
                        <blockquote className="font-serif text-xl md:text-2xl text-stone-800 leading-relaxed mb-8 break-keep">
                        "긴 시간 가족 같은 마음으로 보살펴 주셔서 진심으로 감사합니다.<br/>
                        평생 잊지 못합니다.<br/><br/>
                        엄마는 잘 견디고 계십니다.<br/>
                        항상 감사하는 마음으로 부추꽃을 위해 기도하겠습니다."
                        </blockquote>
                        
                        <cite className="not-italic text-stone-500 text-sm tracking-widest uppercase block border-t border-stone-200 pt-6">
                        - 이OO 어르신 따님 -
                        </cite>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Testimonial;
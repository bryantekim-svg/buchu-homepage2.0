import React, { useRef, useState } from 'react';

const EmpathyStory: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-5 to 5 degrees)
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;
    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  return (
    <section className="py-24 md:py-32 bg-[#fdfbf7] relative">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center perspective-1000">
            
            {/* The Conflict */}
            <div className="reveal mb-24">
                <h3 className="text-[#8C7335] font-bold tracking-[0.3em] uppercase text-sm mb-6">Story of Daughter</h3>
                <p className="font-serif text-3xl md:text-5xl leading-tight mb-8 text-stone-800 break-keep">
                    "내가 불효하는 건 아닐까?"
                </p>
                <div className="w-16 h-1 bg-[#C5A059] mx-auto mb-10"></div>
                <p className="text-xl md:text-2xl text-stone-600 font-light leading-loose break-keep max-w-3xl mx-auto">
                    퇴근 후 쏟아지는 피로, 밤새 울리는 전화벨 소리.<br/>
                    점점 야위어가는 부모님을 보며 가슴이 무너지셨죠.<br/><br/>
                    가족의 사랑만으로 버티기엔,<br/>
                    <span className="font-bold text-stone-800 border-b-2 border-[#C5A059]/30">치매와 노인성 질환은 너무나 가혹한 현실입니다.</span>
                </p>
            </div>

            {/* The Solution - Interactive Tilt Card */}
            <div 
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                className="reveal bg-white border border-[#C5A059]/20 p-8 md:py-16 md:px-24 rounded-3xl shadow-xl max-w-4xl mx-auto transform transition-transform duration-200 ease-out preserve-3d"
                style={{
                    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
                }}
            >
                 <p className="font-serif text-2xl md:text-4xl text-center leading-relaxed text-[#8C7335] mb-8 break-keep transform translate-z-10">
                    이제 죄책감을 내려놓으세요.
                 </p>
                 <p className="text-lg md:text-2xl text-stone-600 leading-loose break-keep">
                    집에 계시는 것이 꼭 효도는 아닙니다.<br/>
                    오히려 전문적인 케어를 받지 못해 병세가 깊어지기도 합니다.<br/><br/>
                    부모님께 진짜 필요한 것은 지친 가족의 희생이 아니라,<br/>
                    <span className="text-stone-900 font-bold bg-[#C5A059]/20 px-2 box-decoration-clone">24시간 곁을 지키는 전문가의 따뜻한 손길</span>입니다.
                </p>
            </div>

        </div>
    </section>
  );
};

export default EmpathyStory;
import React, { useState } from 'react';
import { MapPin, Phone, Clock, Send, CheckCircle2 } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    guardianName: '', contact: '', referralPath: '', seniorName: '', seniorDob: '',
    seniorGender: 'female', careGrade: '', heightWeight: '', religion: '', currentLocation: '',
    disease: '', notes: '', dietType: '일반식', diaper: '미사용', sleepState: '양호',
    walkState: '가능', cognitionState: '양호', violenceState: '없음'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingLeads = JSON.parse(localStorage.getItem('admin_leads') || '[]');
    const newLead = { ...formData, id: Date.now(), date: new Date().toLocaleString() };
    localStorage.setItem('admin_leads', JSON.stringify([...existingLeads, newLead]));
    const conversions = parseInt(localStorage.getItem('admin_conversions') || '0');
    localStorage.setItem('admin_conversions', (conversions + 1).toString());
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-stone-950 text-stone-200 py-32 border-t border-stone-900 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 reveal">
            <h2 className="text-[#C5A059] font-bold tracking-[0.3em] uppercase text-sm mb-6">Reservation</h2>
            <h3 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">입소 상담 및 대기 신청</h3>
            <p className="text-stone-400 max-w-2xl mx-auto leading-relaxed text-xl">
                부모님을 모시는 일은 인생에서 가장 중요한 결정 중 하나입니다.<br/>
                가벼운 마음으로 문의주셔도 좋습니다. 전문가가 진심을 다해 안내해 드립니다.
            </p>
        </div>

        {/* Map & Info Card - Premium Dark Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-stone-900 rounded-3xl overflow-hidden shadow-2xl mb-24 border border-stone-800 reveal">
            <div className="lg:col-span-5 p-10 md:p-14 flex flex-col justify-center gap-10 bg-gradient-to-br from-stone-900 to-stone-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                
                <div>
                    <div className="flex items-center gap-4 mb-3 text-[#C5A059]">
                        <MapPin className="w-6 h-6" />
                        <h4 className="font-bold text-lg tracking-widest uppercase">Location</h4>
                    </div>
                    <p className="text-xl text-white font-serif pl-10 leading-relaxed border-l-2 border-stone-800 ml-3">
                        경기도 김포시 김포한강7로22번길 123<br/>
                        <span className="text-stone-500 text-lg font-sans mt-2 block">(마산동, 부추꽃더클래식너싱홈)</span>
                    </p>
                </div>
                <div>
                    <div className="flex items-center gap-4 mb-3 text-[#C5A059]">
                        <Phone className="w-6 h-6" />
                        <h4 className="font-bold text-lg tracking-widest uppercase">Contact</h4>
                    </div>
                    <a href="tel:031-998-8369" className="text-3xl md:text-4xl text-white font-serif font-bold pl-10 block hover:text-[#C5A059] transition-colors">
                        031-998-8369
                    </a>
                </div>
                <div>
                    <div className="flex items-center gap-4 mb-3 text-[#C5A059]">
                        <Clock className="w-6 h-6" />
                        <h4 className="font-bold text-lg tracking-widest uppercase">Hours</h4>
                    </div>
                    <div className="pl-10 text-stone-400 text-lg">
                        <p className="mb-1"><span className="text-white w-24 inline-block">평일</span> 09:00 - 18:00</p>
                        <p><span className="text-white w-24 inline-block">주말/공휴일</span> 사전 예약제</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-7 h-[400px] lg:h-auto bg-stone-800 relative group">
                <iframe 
                    title="부추꽃더클래식 위치"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3161.419472719277!2d126.6347!3d37.6441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDM4JzM4LjgiTiAxMjbCsDM4JzA0LjkiRQ!5e0!3m2!1sko!2skr!4v1600000000000!5m2!1sko!2skr"
                    className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                ></iframe>
                {/* Overlay text on map */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition-opacity duration-500">
                    <span className="bg-black/70 text-white px-6 py-3 rounded-full text-sm font-bold backdrop-blur-sm border border-white/10">지도 크게 보기</span>
                </div>
            </div>
        </div>

        {/* VIP Application Form */}
        <div className="max-w-5xl mx-auto bg-white text-stone-900 rounded-3xl p-8 md:p-20 shadow-2xl reveal relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-stone-200 via-[#C5A059] to-stone-200"></div>
            
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">VIP 입소 대기 신청서</h2>
            <p className="text-center text-stone-500 mb-16 max-w-2xl mx-auto text-lg">
                작성해주신 내용을 바탕으로 <span className="text-[#8C7335] font-bold">맞춤형 케어 플랜</span>을 미리 설계합니다.<br/>
                모든 정보는 상담 목적 외에는 절대 사용되지 않습니다.
            </p>

            {submitted ? (
                <div className="text-center py-32 animate-fade-up">
                    <CheckCircle2 className="w-24 h-24 text-[#C5A059] mx-auto mb-8" />
                    <h3 className="text-3xl font-bold text-stone-900 mb-4">신청이 완료되었습니다.</h3>
                    <p className="text-stone-600 text-xl">
                        담당 사회복지사가 내용 확인 후,<br/>
                        <span className="font-bold text-[#8C7335]">24시간 이내</span>에 우선적으로 연락드리겠습니다.
                    </p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                    {/* Form sections with premium styling */}
                    {[
                        { title: "보호자 정보", icon: "01", content: (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputField label="보호자 성함" name="guardianName" ph="성함 입력" req onChange={handleChange} />
                                <InputField label="연락처" name="contact" ph="010-0000-0000" req onChange={handleChange} />
                                <div className="md:col-span-2">
                                    <InputField label="방문 경로" name="referralPath" ph="예: 네이버 검색, 지인 소개" onChange={handleChange} />
                                </div>
                            </div>
                        )},
                        { title: "어르신 정보", icon: "02", content: (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <InputField label="어르신 성함" name="seniorName" ph="성함 입력" req onChange={handleChange} />
                                <InputField label="생년월일 (또는 연세)" name="seniorDob" ph="예: 84세" req onChange={handleChange} />
                                
                                <SelectField label="성별" name="seniorGender" options={["여성", "남성"]} onChange={handleChange} />
                                <InputField label="장기요양등급" name="careGrade" ph="예: 3등급, 없음" onChange={handleChange} />
                                
                                <InputField label="신장 / 체중" name="heightWeight" ph="예: 160cm / 50kg" onChange={handleChange} />
                                <SelectField label="현재 계신 곳" name="currentLocation" options={["자택", "요양병원", "병원(대학/종합)", "주야간센터", "기타"]} onChange={handleChange} />
                            </div>
                        )},
                        { title: "상세 돌봄 정보", icon: "03", content: (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="md:col-span-2">
                                    <InputField label="주요 질병 및 병력" name="disease" ph="고혈압, 당뇨, 치매 등 상세 기재" onChange={handleChange} />
                                </div>
                                <SelectField label="식사 형태" name="dietType" options={["일반식", "다진식", "죽식", "갈은식(유동식)", "경관식(L-tube)"]} onChange={handleChange} />
                                <SelectField label="기저귀 사용" name="diaper" options={["미사용", "밤에만 사용", "전일 사용"]} onChange={handleChange} />
                                <SelectField label="보행 상태" name="walkState" options={["자립 보행", "지팡이/워커", "휠체어", "와상(침대)"]} onChange={handleChange} />
                                <SelectField label="인지 상태 (치매)" name="cognitionState" options={["정상", "경증(깜빡함)", "중증(배회/망상)", "말기"]} onChange={handleChange} />
                                <SelectField label="공격성/폭력성" name="violenceState" options={["없음(온순함)", "가끔 화냄", "거부 심함", "폭력성 있음"]} onChange={handleChange} />
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">특이사항 및 요청사항</label>
                                    <textarea 
                                        name="notes" 
                                        onChange={handleChange} 
                                        rows={4} 
                                        className="w-full border-b border-stone-300 py-4 focus:border-[#C5A059] focus:outline-none transition-colors bg-transparent resize-none text-xl" 
                                        placeholder="어르신이 좋아하시는 음식, 노래, 혹은 피해야 할 주제 등을 자유롭게 적어주세요." 
                                    />
                                </div>
                            </div>
                        )}
                    ].map((section) => (
                        <div key={section.title} className="pb-8 border-b border-stone-100 last:border-0">
                            <h3 className="flex items-center gap-4 mb-8">
                                <span className="text-5xl font-serif font-bold text-stone-100 select-none">{section.icon}</span>
                                <span className="text-2xl font-bold text-stone-800">{section.title}</span>
                            </h3>
                            {section.content}
                        </div>
                    ))}

                    <button type="submit" className="w-full bg-stone-900 text-white font-bold py-6 rounded-xl text-xl hover:bg-[#8C7335] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center gap-3">
                        <Send className="w-6 h-6" />
                        상담 신청서 제출하기
                    </button>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};

// UI Helpers - Larger Fonts for Accessibility
const InputField = ({ label, name, ph, req, onChange }: any) => (
    <div>
        <label className="block text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">{label} {req && <span className="text-[#C5A059]">*</span>}</label>
        <input 
            required={req} 
            name={name} 
            onChange={onChange} 
            className="w-full border-b border-stone-300 py-4 focus:border-[#C5A059] focus:outline-none transition-colors bg-transparent text-xl placeholder-stone-300" 
            placeholder={ph} 
        />
    </div>
);

const SelectField = ({ label, name, options, onChange }: any) => (
    <div>
        <label className="block text-sm font-bold text-stone-400 uppercase tracking-wider mb-2">{label}</label>
        <div className="relative">
            <select name={name} onChange={onChange} className="w-full border-b border-stone-300 py-4 focus:border-[#C5A059] focus:outline-none transition-colors bg-transparent text-xl appearance-none cursor-pointer">
                {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">▼</div>
        </div>
    </div>
);

export default ContactSection;
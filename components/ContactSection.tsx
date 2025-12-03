
import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<any>({ 
    protectorName: '', phone: '', relation: '', visitPath: '',
    seniorName: '', dob: '', gender: 'female', grade: '',
    heightWeight: '', religion: '', currentLocation: '',
    disease: '', specifics: '',
    meal: 'general', diaper: 'no', sleep: 'good',
    walking: 'yes', cognitive: 'good', violence: 'none'
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('admin_leads') || '[]');
    localStorage.setItem('admin_leads', JSON.stringify([...existing, { ...formData, date: new Date().toLocaleString() }]));
    localStorage.setItem('admin_conversions', (parseInt(localStorage.getItem('admin_conversions') || '0') + 1).toString());
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="bg-white py-24 md:py-32 border-t border-stone-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Map Section */}
        <div className="mb-20">
             <h3 className="text-xl font-bold text-[#8C7335] mb-4">오시는 길</h3>
             <div className="w-full aspect-video bg-stone-100 rounded-2xl overflow-hidden mb-6 relative">
                 {/* Placeholder for map - In real app, use Naver/Kakao map API */}
                 <div className="absolute inset-0 flex items-center justify-center text-stone-400 bg-stone-100">
                    지도 영역 (네이버/카카오 지도 API 연동 필요)
                 </div>
                 <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.260654763836!2d126.6347063153173!3d37.64332997978393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9a9051555555%3A0x1234567890abcdef!2zZ3llb25nZ2ktZG8sIEdpbXBvLXNpLCBNYXNhbi1kb25nLCBCdWNodWtrb3Q!5e0!3m2!1sen!2skr!4v1620000000000!5m2!1sen!2skr" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    className="absolute inset-0 grayscale opacity-80 hover:grayscale-0 transition-all"
                 ></iframe>
             </div>
             <p className="text-lg text-stone-700"><strong>주소:</strong> 경기도 김포시 김포한강7로22번길 123 (마산동, 부추꽃더클래식너싱홈)</p>
        </div>

        <h2 className="text-center text-4xl md:text-5xl font-serif font-bold text-stone-900 mb-6">VIP 입소 대기 신청</h2>
        <p className="text-center text-xl text-stone-600 mb-12 break-keep leading-relaxed">
            상세하게 적어주실수록 어르신의 <strong>빠른 적응</strong>과 <strong>맞춤 케어</strong>에 큰 도움이 됩니다.<br/>
            전문 사회복지사가 내용을 확인 후 24시간 이내에 연락드립니다.
        </p>

        <div className="bg-[#fdfbf7] p-8 md:p-12 rounded-3xl shadow-xl border border-stone-200">
            {submitted ? (
                <div className="text-center py-20">
                    <h3 className="text-3xl font-bold text-[#8C7335] mb-4">신청 완료되었습니다.</h3>
                    <p className="text-xl text-stone-600">내용을 검토하여 곧 연락드리겠습니다.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                    
                    {/* Protector Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">보호자 정보</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">보호자 성함</label>
                                <input required name="protectorName" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" placeholder="입력해주세요" onChange={handleChange} />
                            </div>
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">연락처</label>
                                <input required name="phone" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" placeholder="010-0000-0000" onChange={handleChange} />
                            </div>
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">어르신과의 관계</label>
                                <input required name="relation" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" placeholder="예: 자녀, 배우자" onChange={handleChange} />
                            </div>
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">방문 경로</label>
                                <select name="visitPath" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" onChange={handleChange}>
                                    <option value="">선택해주세요</option>
                                    <option value="blog">블로그</option>
                                    <option value="search">검색(네이버/구글)</option>
                                    <option value="referral">지인 추천</option>
                                    <option value="other">기타</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Senior Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">어르신 기본 정보</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">어르신 성함</label>
                                <input required name="seniorName" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" onChange={handleChange} />
                            </div>
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">생년월일 (또는 연세)</label>
                                <input required name="dob" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" placeholder="예: 1945년생" onChange={handleChange} />
                            </div>
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">성별</label>
                                <div className="flex gap-4">
                                    <label className="flex items-center gap-2 text-lg"><input type="radio" name="gender" value="male" onChange={handleChange} /> 남성</label>
                                    <label className="flex items-center gap-2 text-lg"><input type="radio" name="gender" value="female" defaultChecked onChange={handleChange} /> 여성</label>
                                </div>
                            </div>
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">장기요양 등급</label>
                                <select name="grade" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" onChange={handleChange}>
                                    <option value="">선택해주세요</option>
                                    <option value="none">등급 없음 (신청 예정)</option>
                                    <option value="1">1등급</option>
                                    <option value="2">2등급</option>
                                    <option value="3">3등급</option>
                                    <option value="4">4등급</option>
                                    <option value="5">5등급</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">현재 계신 곳</label>
                                <select name="currentLocation" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" onChange={handleChange}>
                                    <option value="">선택해주세요</option>
                                    <option value="home">자택</option>
                                    <option value="hospital">병원/요양병원</option>
                                    <option value="center">주야간보호센터</option>
                                    <option value="other_nursing">다른 요양원</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">종교</label>
                                <input name="religion" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    {/* Care Info */}
                    <div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-6 border-b border-stone-200 pb-2">건강 및 케어 정보</h3>
                        <div className="grid grid-cols-1 gap-6">
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">주요 질병 (진단명)</label>
                                <input name="disease" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" placeholder="예: 치매, 당뇨, 고혈압, 파킨슨 등" onChange={handleChange} />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-stone-600 font-bold mb-2">식사 형태</label>
                                    <select name="meal" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" onChange={handleChange}>
                                        <option value="general">일반식 (스스로 식사 가능)</option>
                                        <option value="minced">다진식 (치아 불편)</option>
                                        <option value="blended">갈은식 (연하 곤란)</option>
                                        <option value="porridge">죽식</option>
                                        <option value="ltube">경관식 (L-tube/콧줄)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-stone-600 font-bold mb-2">기저귀 사용</label>
                                    <select name="diaper" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" onChange={handleChange}>
                                        <option value="no">사용 안 함 (스스로 화장실 이용)</option>
                                        <option value="mixed">병행 (밤에만 사용)</option>
                                        <option value="yes">전적으로 사용</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-stone-600 font-bold mb-2">보행 상태</label>
                                    <select name="walking" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" onChange={handleChange}>
                                        <option value="yes">자립 보행 가능</option>
                                        <option value="walker">워커/지팡이 사용</option>
                                        <option value="wheelchair">휠체어 사용</option>
                                        <option value="bedridden">와상 (침상 생활)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-stone-600 font-bold mb-2">인지 상태</label>
                                    <select name="cognitive" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" onChange={handleChange}>
                                        <option value="good">양호 (의사소통 원활)</option>
                                        <option value="dementia_low">치매 초기 (가벼운 건망증)</option>
                                        <option value="dementia_mid">치매 중기</option>
                                        <option value="dementia_high">치매 말기 (인지 저하 심함)</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-stone-600 font-bold mb-2">수면 상태</label>
                                    <select name="sleep" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" onChange={handleChange}>
                                        <option value="good">양호</option>
                                        <option value="bad">불면/배회 있음</option>
                                        <option value="meds">수면유도제 복용 중</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-stone-600 font-bold mb-2">공격성/폭력성</label>
                                    <select name="violence" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none" onChange={handleChange}>
                                        <option value="none">없음 (온순함)</option>
                                        <option value="low">가끔 화를 냄</option>
                                        <option value="mid">욕설이나 거부 반응 있음</option>
                                        <option value="high">심한 공격성 있음</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div>
                                <label className="block text-stone-600 font-bold mb-2">기타 특이사항 (메모)</label>
                                <textarea name="specifics" className="w-full p-4 bg-white border border-stone-300 rounded-xl text-lg focus:border-[#C5A059] outline-none h-32 resize-none" placeholder="어르신의 성격, 좋아하시는 것, 주의할 점 등을 자유롭게 적어주세요." onChange={handleChange} />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="w-full py-6 bg-stone-900 text-white rounded-xl text-2xl font-bold hover:bg-[#8C7335] transition-all shadow-lg flex items-center justify-center gap-3">
                        <Send /> 입소 대기 신청하기
                    </button>
                </form>
            )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

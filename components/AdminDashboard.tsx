import React, { useEffect, useState } from 'react';
import { X, Users, Clock, Phone, TrendingUp, Download, FileSpreadsheet } from 'lucide-react';

interface AdminDashboardProps {
    onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
    const [stats, setStats] = useState({
        visits: 0,
        leads: [],
        conversions: 0
    });

    useEffect(() => {
        const visits = parseInt(localStorage.getItem('admin_visits') || '0');
        const leads = JSON.parse(localStorage.getItem('admin_leads') || '[]');
        const conversions = parseInt(localStorage.getItem('admin_conversions') || '0');
        setStats({ visits, leads, conversions });
    }, []);

    const conversionRate = stats.visits > 0 ? ((stats.conversions / stats.visits) * 100).toFixed(1) : '0';

    // Function to convert JSON to CSV and download
    const downloadCSV = () => {
        if (stats.leads.length === 0) {
            alert('다운로드할 데이터가 없습니다.');
            return;
        }

        const headers = ["접수일시", "보호자명", "연락처", "방문경로", "어르신성함", "생년월일", "성별", "등급", "신장/체중", "종교", "현재위치", "질병", "식사", "기저귀", "수면", "보행", "인지", "폭력성", "특이사항"];
        
        const rows = stats.leads.map((lead: any) => [
            lead.date,
            lead.guardianName,
            lead.contact,
            lead.referralPath,
            lead.seniorName,
            lead.seniorDob,
            lead.seniorGender,
            lead.careGrade,
            lead.heightWeight,
            lead.religion,
            lead.currentLocation,
            lead.disease,
            lead.dietType,
            lead.diaper,
            lead.sleepState,
            lead.walkState,
            lead.cognitionState,
            lead.violenceState,
            (lead.notes || "").replace(/,/g, " ") // Comma in text breaks CSV format
        ]);

        const csvContent = "data:text/csv;charset=utf-8,\uFEFF" 
            + headers.join(",") + "\n" 
            + rows.map(e => e.join(",")).join("\n");

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", `상담신청내역_${new Date().toISOString().slice(0,10)}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
            <header className="bg-stone-900 text-white p-6 shadow-md flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-bold">Admin Dashboard</h1>
                    <p className="text-xs text-stone-400">부추꽃더클래식 데이터 분석</p>
                </div>
                <button onClick={onLogout} className="flex items-center gap-2 text-sm hover:text-[#C5A059]">
                    <X size={18} /> 나가기
                </button>
            </header>

            <main className="max-w-7xl mx-auto p-8">
                {/* Google Sync Notice */}
                <div className="bg-[#C5A059]/10 border border-[#C5A059]/30 p-4 rounded-lg mb-8 flex items-start gap-3">
                    <FileSpreadsheet className="text-[#8C7335] flex-shrink-0 mt-1" />
                    <div>
                        <h3 className="font-bold text-[#8C7335]">구글 드라이브(스프레드시트) 연동 안내</h3>
                        <p className="text-sm text-[#8C7335] mt-1">
                            현재 보안상의 이유로 정적 웹사이트에서는 구글 자동 연동이 제한됩니다.<br/>
                            대신 <strong>[데이터 엑셀 다운로드]</strong> 버튼을 눌러 파일을 받은 후, 구글 스프레드시트에 업로드하여 AI 분석을 진행하실 수 있습니다.
                        </p>
                    </div>
                </div>

                {/* Stats Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                        <div className="flex items-center gap-4 mb-2">
                            <Users className="text-blue-500" />
                            <span className="text-gray-500 text-sm font-bold">총 방문자 수</span>
                        </div>
                        <p className="text-3xl font-bold">{stats.visits.toLocaleString()}<span className="text-sm font-normal text-gray-400 ml-2">명</span></p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-[#C5A059]">
                        <div className="flex items-center gap-4 mb-2">
                            <Phone className="text-[#C5A059]" />
                            <span className="text-gray-500 text-sm font-bold">상담 신청 건수</span>
                        </div>
                        <p className="text-3xl font-bold">{stats.conversions}<span className="text-sm font-normal text-gray-400 ml-2">건</span></p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                         <div className="flex items-center gap-4 mb-2">
                            <TrendingUp className="text-purple-500" />
                            <span className="text-gray-500 text-sm font-bold">전환율</span>
                        </div>
                        <p className="text-3xl font-bold">{conversionRate}%</p>
                    </div>
                     <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-orange-500">
                         <div className="flex items-center gap-4 mb-2">
                            <Clock className="text-orange-500" />
                            <span className="text-gray-500 text-sm font-bold">평균 체류 시간</span>
                        </div>
                        <p className="text-3xl font-bold">4분 12초<span className="text-xs text-gray-400 block font-normal">(시뮬레이션 데이터)</span></p>
                    </div>
                </div>

                {/* Leads Table */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
                        <h2 className="text-lg font-bold">최근 상담 신청 내역</h2>
                        <button 
                            onClick={downloadCSV}
                            className="flex items-center gap-2 bg-[#8C7335] text-white px-4 py-2 rounded text-sm hover:bg-[#6B5628] transition-colors"
                        >
                            <Download size={16} />
                            데이터 엑셀 다운로드
                        </button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500 uppercase">
                                <tr>
                                    <th className="px-6 py-3">접수일시</th>
                                    <th className="px-6 py-3">보호자명</th>
                                    <th className="px-6 py-3">연락처</th>
                                    <th className="px-6 py-3">어르신 성함</th>
                                    <th className="px-6 py-3">등급/상태</th>
                                    <th className="px-6 py-3">유입경로</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stats.leads.length === 0 ? (
                                    <tr>
                                        <td colSpan={6} className="px-6 py-8 text-center text-gray-400">
                                            아직 접수된 상담 내역이 없습니다.
                                        </td>
                                    </tr>
                                ) : (
                                    stats.leads.slice().reverse().map((lead: any) => (
                                        <tr key={lead.id} className="border-b hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4">{lead.date}</td>
                                            <td className="px-6 py-4 font-bold">{lead.guardianName}</td>
                                            <td className="px-6 py-4">{lead.contact}</td>
                                            <td className="px-6 py-4">{lead.seniorName} ({lead.seniorGender === 'female' ? '여' : '남'})</td>
                                            <td className="px-6 py-4">
                                                <span className="block">{lead.careGrade || '등급미기재'}</span>
                                                <span className="text-xs text-gray-400">{lead.cognitionState} / {lead.walkState}</span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-500">{lead.referralPath}</td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
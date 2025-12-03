import React, { useEffect, useState } from 'react';
import { Download, X } from 'lucide-react';

const AdminDashboard: React.FC<{onLogout:()=>void}> = ({onLogout}) => {
    const [leads, setLeads] = useState<any[]>([]);
    
    useEffect(() => {
        setLeads(JSON.parse(localStorage.getItem('admin_leads') || '[]'));
    }, []);

    const downloadCSV = () => {
        const csv = "날짜,이름,전화,내용\n" + leads.map(l => `${l.date},${l.name},${l.phone},${l.note}`).join("\n");
        const link = document.createElement("a");
        link.href = "data:text/csv;charset=utf-8,\uFEFF" + encodeURI(csv);
        link.download = "leads.csv";
        link.click();
    };

    return (
        <div className="min-h-screen bg-stone-50 text-stone-800 p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center mb-12">
                    <h1 className="text-3xl font-bold text-stone-900">상담 신청 현황</h1>
                    <div className="flex gap-4">
                        <button onClick={downloadCSV} className="flex items-center gap-2 bg-[#C5A059] text-white px-6 py-3 rounded-xl font-bold"><Download/> 엑셀 다운로드</button>
                        <button onClick={onLogout} className="text-stone-500 font-bold"><X/></button>
                    </div>
                </div>
                <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden">
                    <table className="w-full text-left">
                        <thead className="bg-stone-100 text-stone-500 uppercase text-sm">
                            <tr>
                                <th className="p-6">날짜</th>
                                <th className="p-6">성함</th>
                                <th className="p-6">연락처</th>
                                <th className="p-6">내용</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-stone-100">
                            {leads.slice().reverse().map((lead:any, i) => (
                                <tr key={i} className="hover:bg-stone-50">
                                    <td className="p-6">{lead.date}</td>
                                    <td className="p-6 font-bold">{lead.name}</td>
                                    <td className="p-6">{lead.phone}</td>
                                    <td className="p-6 text-stone-500">{lead.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {leads.length === 0 && <p className="p-12 text-center text-stone-400">데이터가 없습니다.</p>}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
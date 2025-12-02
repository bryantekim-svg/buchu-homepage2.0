import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EmpathyStory from './components/EmpathyStory';
import RealityScroll from './components/RealityScroll';
import PhilosophyList from './components/PhilosophyList';
import ClimaxWalk from './components/ClimaxWalk';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 시뮬레이션: 방문자 수 카운트 (로컬 스토리지 활용)
  useEffect(() => {
    const visits = parseInt(localStorage.getItem('admin_visits') || '0');
    localStorage.setItem('admin_visits', (visits + 1).toString());
  }, []);

  if (isAdminMode) {
    if (isLoggedIn) {
        return <AdminDashboard onLogout={() => { setIsAdminMode(false); setIsLoggedIn(false); }} />;
    }
    return (
        <AdminLogin 
            onLogin={() => setIsLoggedIn(true)} 
            onCancel={() => setIsAdminMode(false)} 
        />
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-white selection:bg-emerald-500 selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        {/* 공감 스토리: 문제 인식 -> 해결책 제시의 가교 역할 */}
        <EmpathyStory />
        <RealityScroll />
        <PhilosophyList />
        <ClimaxWalk />
        <ContactSection />
      </main>

      <Footer onAdminClick={() => setIsAdminMode(true)} />
    </div>
  );
};

export default App;
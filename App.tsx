import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EmpathyStory from './components/EmpathyStory';
import RealityScroll from './components/RealityScroll';
import PhilosophyList from './components/PhilosophyList';
import ClimaxWalk from './components/ClimaxWalk';
import Testimonial from './components/Testimonial';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AdminDashboard from './components/AdminDashboard';
import AdminLogin from './components/AdminLogin';

const App: React.FC = () => {
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
    // 배경색을 밝은 색(#fdfbf7)으로 확실하게 지정
    <div className="min-h-screen flex flex-col font-sans bg-[#fdfbf7] text-stone-800">
      <Header />
      <main className="flex-grow">
        <Hero />
        <EmpathyStory />
        <RealityScroll />
        <PhilosophyList />
        <ClimaxWalk />
        <Testimonial />
        <ContactSection />
      </main>
      <Footer onAdminClick={() => setIsAdminMode(true)} />
    </div>
  );
};

export default App;
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProfileSection from '@/components/ProfileSection';
import GallerySection from '@/components/GallerySection';
import UMKMSection from '@/components/UMKMSection';
import Footer from '@/components/Footer';
import AdminPanel from '@/components/AdminPanel';
import LoginModal from '@/components/LoginModal';
import { Toaster } from '@/components/ui/toaster';

function App() {
  const [isAdminView, setIsAdminView] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('adminAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleAdminClick = () => {
    if (isAuthenticated) {
      setIsAdminView(true);
    } else {
      setShowLoginModal(true);
    }
  };

  const handleLogin = (success) => {
    if (success) {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      setShowLoginModal(false);
      setIsAdminView(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdminView(false);
    localStorage.removeItem('adminAuthenticated');
  };

  if (isAdminView) {
    return (
      <>
        <Helmet>
          <title>Admin Panel - Desa Cibunigeulis</title>
          <meta name="description" content="Panel administrasi untuk mengelola data UMKM Desa Cibunigeulis" />
        </Helmet>
        <AdminPanel onBack={() => setIsAdminView(false)} onLogout={handleLogout} />
        <Toaster />
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Desa Cibunigeulis - Profil Desa & UMKM</title>
        <meta name="description" content="Website resmi Desa Cibunigeulis menampilkan profil desa, galeri foto, dan daftar UMKM lokal" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <Navbar onAdminClick={handleAdminClick} />
        <Hero />
        <ProfileSection />
        <GallerySection />
        <UMKMSection />
        <Footer />
        {showLoginModal && (
          <LoginModal 
            onClose={() => setShowLoginModal(false)} 
            onLogin={handleLogin}
          />
        )}
        <Toaster />
      </div>
    </>
  );
}

export default App;
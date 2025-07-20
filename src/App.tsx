import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import { useAuth } from './contexts/AuthContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Footer from './components/Footer'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { useState, useEffect, useMemo } from 'react'

function AppContent() {
  const { currentUser } = useAuth();
  const [currentPage, setCurrentPage] = useState('home');

  // Auto-redirect to dashboard if user is logged in and on login page
  useEffect(() => {
    if (currentUser && currentPage === 'login') {
      setCurrentPage('dashboard');
    }
  }, [currentUser, currentPage]);

  // Performance optimization - memoize the navigation function
  const handleNavigate = useMemo(() => (page: string) => {
    setCurrentPage(page);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onBack={() => setCurrentPage('home')} onLoginSuccess={() => setCurrentPage('dashboard')} />;
      case 'dashboard':
        return currentUser ? <Dashboard onBack={() => setCurrentPage('home')} /> : <Login onBack={() => setCurrentPage('home')} onLoginSuccess={() => setCurrentPage('dashboard')} />;
      default:
        return (
          <div className="App">
            <Header onNavigate={handleNavigate} currentUser={currentUser} />
            <Hero onNavigate={handleNavigate} />
            <Features onNavigate={handleNavigate} />
            <About onNavigate={handleNavigate} />
            <Footer />
          </div>
        );
    }
  };

  return renderPage();
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App 
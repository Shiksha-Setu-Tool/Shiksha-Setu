import { User } from 'firebase/auth';
import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentUser: User | null;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentUser }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { logout } = useAuth();

  const getUserInitials = (email: string) => {
    return email.split('@')[0].substring(0, 2).toUpperCase();
  };

  const handleLogout = async () => {
    try {
      await logout();
      setShowUserMenu(false);
      onNavigate('home');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '1rem 0'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div 
          style={{ fontSize: '1.5rem', fontWeight: 'bold', cursor: 'pointer' }}
          onClick={() => onNavigate('home')}
        >
          Shiksha Setu
        </div>
        <nav>
          <ul style={{ 
            display: 'flex', 
            listStyle: 'none', 
            gap: '2rem',
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }}>
            <li><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#features" style={{ color: 'white', textDecoration: 'none' }}>Features</a></li>
            <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
            <li><a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
            {currentUser ? (
              <li style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  style={{
                    background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
                  }}
                  title={currentUser.email || 'User'}
                >
                  {currentUser.photoURL ? (
                    <img 
                      src={currentUser.photoURL} 
                      alt="Profile" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        borderRadius: '50%',
                        objectFit: 'cover'
                      }} 
                    />
                  ) : (
                    getUserInitials(currentUser.email || '')
                  )}
                </button>
                
                {showUserMenu && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '0.5rem',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '10px',
                    padding: '0.5rem 0',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    minWidth: '150px'
                  }}>
                    <div style={{
                      padding: '0.5rem 1rem',
                      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                      fontSize: '0.9rem',
                      color: '#666',
                      fontWeight: '500'
                    }}>
                      {currentUser.email}
                    </div>
                    <button
                      onClick={() => {
                        onNavigate('dashboard');
                        setShowUserMenu(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '0.5rem 1rem',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: '#333',
                        fontSize: '0.9rem'
                      }}
                    >
                      Dashboard
                    </button>
                    <button
                      onClick={() => {
                        onNavigate('home');
                        setShowUserMenu(false);
                      }}
                      style={{
                        width: '100%',
                        padding: '0.5rem 1rem',
                        background: 'none',
                        border: 'none',
                        textAlign: 'left',
                        cursor: 'pointer',
                        color: '#333',
                        fontSize: '0.9rem'
                      }}
                    >
                      Back to Home
                    </button>
                    <div style={{
                      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                      marginTop: '0.5rem',
                      paddingTop: '0.5rem'
                    }}>
                      <button
                        onClick={handleLogout}
                        style={{
                          width: '100%',
                          padding: '0.5rem 1rem',
                          background: 'none',
                          border: 'none',
                          textAlign: 'left',
                          cursor: 'pointer',
                          color: '#ff6b6b',
                          fontSize: '0.9rem',
                          fontWeight: '500'
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </li>
            ) : (
              <li>
                <button
                  onClick={() => onNavigate('login')}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: '600'
                  }}
                >
                  Login
                </button>
              </li>
            )}
          </ul>
        </nav>
      </div>
      
      {/* Click outside to close user menu */}
      {showUserMenu && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 999
          }}
          onClick={() => setShowUserMenu(false)}
        />
      )}
    </header>
  )
}

export default Header 
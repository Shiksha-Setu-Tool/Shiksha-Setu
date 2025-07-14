import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';

interface LoginProps {
  onBack: () => void;
  onLoginSuccess?: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, signup, loginWithGoogle } = useAuth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (password.length < 6) {
      return setError('Password must be at least 6 characters');
    }

    try {
      setError('');
      setLoading(true);
      if (isSignup) {
        await signup(email, password);
      } else {
        await login(email, password);
      }
      // Call onLoginSuccess if provided
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleGoogleLogin() {
    try {
      setError('');
      setLoading(true);
      await loginWithGoogle();
      // Call onLoginSuccess if provided
      if (onLoginSuccess) {
        onLoginSuccess();
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      padding: '20px'
    }}>
      <div style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(20px)',
        borderRadius: '20px',
        padding: '40px',
        width: '100%',
        maxWidth: '400px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
        position: 'relative'
      }}>
        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            top: '20px',
            left: '20px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem'
          }}
        >
          ←
        </button>

        <h2 style={{
          textAlign: 'center',
          fontSize: '2rem',
          fontWeight: '700',
          marginBottom: '2rem',
          color: 'white'
        }}>
          {isSignup ? 'Create Account' : 'Welcome Back'}
        </h2>

        {error && (
          <div style={{
            background: 'rgba(255, 107, 107, 0.2)',
            color: '#ff6b6b',
            padding: '12px',
            borderRadius: '8px',
            marginBottom: '1rem',
            border: '1px solid rgba(255, 107, 107, 0.3)'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'white',
              fontWeight: '500'
            }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '1rem'
              }}
              placeholder="Enter your email"
            />
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              color: 'white',
              fontWeight: '500'
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                background: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '1rem'
              }}
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              marginBottom: '1rem'
            }}
          >
            {loading ? 'Loading...' : (isSignup ? 'Sign Up' : 'Log In')}
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          marginBottom: '1.5rem',
          color: 'rgba(255, 255, 255, 0.8)'
        }}>
          or
        </div>

        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          style={{
            width: '100%',
            padding: '12px',
            background: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '8px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
            marginBottom: '2rem'
          }}
        >
          Continue with Google
        </button>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={() => setIsSignup(!isSignup)}
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}
          >
            {isSignup ? 'Already have an account? Log In' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login; 
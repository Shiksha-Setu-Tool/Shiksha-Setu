import React from 'react'

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="section" style={{ 
      paddingTop: '120px', 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }}>
      {/* Floating Shapes */}
      <div className="floating-shapes">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      
      <div className="container">
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <h1 style={{ 
            fontSize: '4rem', 
            fontWeight: '900', 
            marginBottom: '2rem',
            background: 'linear-gradient(45deg, #fff, #f0f0f0, #fff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
            lineHeight: '1.2'
          }}>
            Bridging Educational Gaps
          </h1>
          <p style={{ 
            fontSize: '1.5rem', 
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem auto',
            opacity: 0.95,
            lineHeight: '1.7',
            fontWeight: '300'
          }}>
            Shiksha Setu empowers tutors to create personalized learning experiences that help students bridge the gap between where they are and where they need to be.
          </p>
          
          <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <button 
              onClick={() => onNavigate('login')}
              className="btn"
              type="button"
            >
              Get Started Today
            </button>
            <button
              onClick={scrollToAbout}
              className="btn btn-secondary"
              type="button"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
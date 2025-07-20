import React from 'react';

interface AboutProps {
  onNavigate?: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  return (
    <section id="about" className="section" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
      <div className="container">
        <h2 className="section-title">About Shiksha Setu</h2>
        <p className="section-subtitle">
          Transforming education through personalized learning and AI-powered insights that make a real difference
        </p>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '4rem',
          marginTop: '4rem'
        }}>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '700' }}>Our Mission</h3>
            <p style={{ lineHeight: '1.8', opacity: 0.95, fontSize: '1.1rem', marginBottom: '2rem' }}>
              Shiksha Setu is dedicated to bridging the educational gaps that prevent students from reaching their full potential. 
              We believe every student deserves a personalized learning experience that adapts to their unique needs and learning style.
            </p>
            <p style={{ lineHeight: '1.8', opacity: 0.95, fontSize: '1.1rem' }}>
              Our platform combines the expertise of qualified educators with cutting-edge technology to create learning environments 
              that are both effective and engaging.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontWeight: '700' }}>Our Approach</h3>
            <p style={{ lineHeight: '1.8', opacity: 0.95, fontSize: '1.1rem', marginBottom: '2rem' }}>
              By combining the expertise of qualified tutors with cutting-edge AI technology, we create adaptive learning environments 
              that identify knowledge gaps and provide targeted support to help students succeed.
            </p>
            <p style={{ lineHeight: '1.8', opacity: 0.95, fontSize: '1.1rem' }}>
              We focus on data-driven insights, continuous improvement, and creating meaningful connections between educators and learners.
            </p>
          </div>
        </div>
        
        <div style={{ 
          marginTop: '4rem',
          textAlign: 'center'
        }}>
          <button 
            onClick={() => onNavigate ? onNavigate('login') : window.location.href = '#contact'}
            className="btn"
            type="button"
            style={{
              cursor: 'pointer',
              userSelect: 'none',
              outline: 'none'
            }}
          >
            Join Our Platform
          </button>
        </div>
      </div>
    </section>
  )
}

export default About 
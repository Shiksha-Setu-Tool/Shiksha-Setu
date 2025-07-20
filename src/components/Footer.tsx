const Footer: React.FC = () => {
  return (
    <footer id="contact" style={{ 
      background: 'rgba(0, 0, 0, 0.3)', 
      padding: '3rem 0',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Shiksha Setu</h3>
            <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
              Bridging educational gaps through personalized learning and AI-powered insights.
            </p>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}><a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#features" style={{ color: 'white', textDecoration: 'none' }}>Features</a></li>
              <li style={{ marginBottom: '0.5rem' }}><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Contact</h4>
            <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Email: info@shikshasetu.com</p>
            <p style={{ opacity: 0.8, marginBottom: '0.5rem' }}>Phone: +1 (555) 123-4567</p>
            <p style={{ opacity: 0.8 }}>Address: Education Hub, Learning Street</p>
          </div>
        </div>
        <div style={{ 
          borderTop: '1px solid rgba(255, 255, 255, 0.1)', 
          paddingTop: '2rem',
          textAlign: 'center',
          opacity: 0.7
        }}>
          <p>&copy; 2024 Shiksha Setu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
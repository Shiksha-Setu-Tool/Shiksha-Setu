import React from 'react';

interface FeaturesProps {
  onNavigate: (page: string) => void;
}

const Features: React.FC<FeaturesProps> = ({ onNavigate }) => {
  const features = [
    {
      title: "Personalized Curriculum",
      description: "Create tailored learning paths that adapt to each student's unique needs and learning pace. Our AI analyzes learning patterns to suggest the most effective approach.",
      highlight: "Adaptive Learning"
    },
    {
      title: "AI-Powered Insights",
      description: "Leverage cutting-edge artificial intelligence to identify learning gaps and suggest targeted improvements. Get real-time analytics on student progress and performance.",
      highlight: "Smart Analytics"
    },
    {
      title: "Progress Tracking",
      description: "Monitor student advancement with detailed analytics and comprehensive reporting tools. Visualize learning journeys with interactive dashboards and progress charts.",
      highlight: "Real-time Monitoring"
    },
    {
      title: "Flexible Learning",
      description: "Support both in-person and remote tutoring with our versatile platform design. Seamlessly switch between online and offline learning modes.",
      highlight: "Hybrid Ready"
    },
    {
      title: "Content Generation",
      description: "AI-assisted creation of engaging educational materials and practice exercises. Generate quizzes, worksheets, and interactive content in seconds.",
      highlight: "Auto-Generated Content"
    },
    {
      title: "Collaborative Tools",
      description: "Enable seamless communication between tutors, students, and parents. Share progress reports, schedule sessions, and maintain transparent communication.",
      highlight: "Team Collaboration"
    }
  ]

  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title">Platform Features</h2>
        <p className="section-subtitle">
          Everything you need to create effective, personalized learning experiences that drive real results
        </p>
        <div className="grid">
          {features.map((feature, index) => (
            <div key={index} className="card">
              <div style={{
                background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                color: 'white',
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '0.9rem',
                fontWeight: '600',
                display: 'inline-block',
                marginBottom: '1.5rem'
              }}>
                {feature.highlight}
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                marginBottom: '1.5rem',
                fontWeight: '700'
              }}>
                {feature.title}
              </h3>
              <p style={{ 
                opacity: 0.95, 
                lineHeight: '1.7',
                fontSize: '1.1rem'
              }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '4rem',
          padding: '3rem',
          background: 'rgba(255, 255, 255, 0.15)',
          borderRadius: '20px'
        }}>
          <h3 style={{ 
            fontSize: '2rem', 
            marginBottom: '1rem',
            fontWeight: '700'
          }}>
            Ready to Transform Education?
          </h3>
          <p style={{ 
            fontSize: '1.2rem', 
            marginBottom: '2rem',
            opacity: 0.9
          }}>
            Start creating personalized learning experiences that make a real difference in student outcomes.
          </p>
          <button 
            onClick={() => onNavigate('login')}
            className="btn"
          >
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features 
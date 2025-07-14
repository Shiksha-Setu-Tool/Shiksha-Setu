import React from 'react';

interface PricingProps {
  onBack: () => void;
  onSelectPlan: (plan: 'free' | 'premium') => void;
}

const Pricing: React.FC<PricingProps> = ({ onBack, onSelectPlan }) => {
  const plans = [
    {
      name: 'Free Plan',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started with personalized learning',
      features: [
        'Create up to 3 personalized curriculums',
        'Basic AI-powered insights',
        'Progress tracking for up to 5 students',
        'Email support',
        'Standard templates and resources'
      ],
      buttonText: 'Start Free',
      popular: false,
      type: 'free' as const
    },
    {
      name: 'Premium Plan',
      price: '$5',
      period: 'per month',
      description: 'Unlock the full potential of personalized education',
      features: [
        'Unlimited personalized curriculums',
        'Advanced AI-powered insights and analytics',
        'Progress tracking for unlimited students',
        'Priority email and chat support',
        'Premium templates and resources',
        'Advanced reporting and analytics',
        'Custom branding options',
        'API access for integrations'
      ],
      buttonText: 'Start Premium Trial',
      popular: true,
      type: 'premium' as const
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
      color: 'white',
      padding: '20px'
    }}>
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          marginBottom: '3rem',
          padding: '1rem 0'
        }}>
          <button
            onClick={onBack}
            style={{
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
          <div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
              Choose Your Plan
            </h1>
            <p style={{ opacity: 0.9, fontSize: '1.1rem' }}>
              Start your journey with personalized education
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {plans.map((plan, index) => (
            <div key={index} style={{
              background: plan.popular ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              padding: '2.5rem',
              border: plan.popular ? '2px solid rgba(255, 255, 255, 0.4)' : '1px solid rgba(255, 255, 255, 0.2)',
              position: 'relative',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            onClick={() => onSelectPlan(plan.type)}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  fontWeight: '600'
                }}>
                  Most Popular
                </div>
              )}
              
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
                  {plan.name}
                </h3>
                <div style={{ marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '800' }}>{plan.price}</span>
                  {plan.period !== 'forever' && (
                    <span style={{ fontSize: '1.2rem', opacity: 0.8 }}>/{plan.period}</span>
                  )}
                  {plan.period === 'forever' && (
                    <span style={{ fontSize: '1.2rem', opacity: 0.8 }}> {plan.period}</span>
                  )}
                </div>
                <p style={{ opacity: 0.9, fontSize: '1rem' }}>
                  {plan.description}
                </p>
              </div>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                marginBottom: '2rem'
              }}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} style={{
                    padding: '0.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      color: '#4CAF50',
                      fontSize: '1.2rem',
                      fontWeight: 'bold'
                    }}>✓</span>
                    <span style={{ opacity: 0.9 }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                style={{
                  width: '100%',
                  padding: '15px',
                  background: plan.popular 
                    ? 'linear-gradient(45deg, #ff6b6b, #ee5a24)' 
                    : 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: plan.popular ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '10px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div style={{
          textAlign: 'center',
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '15px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontWeight: '600' }}>
            All Plans Include
          </h3>
          <p style={{ opacity: 0.9, lineHeight: '1.6' }}>
            Secure data storage, regular platform updates, and access to our educational resources library. 
            Cancel or upgrade your plan at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing; 
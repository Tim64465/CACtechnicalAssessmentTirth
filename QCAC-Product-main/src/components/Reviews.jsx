import React from 'react';

export default function Reviews({ reviews }) {
  
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span 
          key={i}
          style={{
            color: i <= rating ? '#FFD700' : '#ddd',  
            fontSize: '1.2rem'
          }}
        >
          {i <= rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <section style={{ 
      padding: '40px 20px',
      backgroundColor: '#f9f9f9',
      flex: '1 1 400px',  
      minWidth: '300px'
    }}>
      <h2 style={{ 
        textAlign: 'center', 
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        marginBottom: '30px',
        color: '#333'
      }}>
        Customer Reviews
      </h2>

      {reviews.length === 0 ? (
        <p style={{ 
          textAlign: 'center', 
          color: '#999',
          fontSize: '1.1rem',
          padding: '40px 20px'
        }}>
          No reviews yet. Be the first to review!
        </p>
      ) : (
        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
          {reviews.map((review) => (
            <div 
              key={review.id}
              style={{
                padding: '20px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                border: '1px solid #e0e0e0',
                transition: 'transform 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
              }}
            >
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '12px',
                flexWrap: 'wrap',
                gap: '10px'
              }}>
                <h3 style={{ 
                  fontSize: '1.2rem',
                  color: '#333',
                  margin: 0,
                  fontWeight: 'bold'
                }}>
                  {review.name}
                </h3>
                <div style={{ 
                  fontSize: '1.2rem',
                  whiteSpace: 'nowrap'
                }}>
                  {renderStars(review.rating)}
                </div>
              </div>

              <p style={{ 
                color: '#666',
                lineHeight: '1.6',
                margin: 0,
                fontSize: '1rem'
              }}>
                {review.message}
              </p>

              {review.timestamp && (
                <p style={{
                  fontSize: '0.85rem',
                  color: '#999',
                  marginTop: '10px',
                  fontStyle: 'italic'
                }}>
                  Posted: {new Date(review.timestamp).toLocaleDateString()}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
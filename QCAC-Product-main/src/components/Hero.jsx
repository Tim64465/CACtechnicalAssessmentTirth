import React from 'react';
import visionProImg from '../images/visionProImg.png';

export default function Hero() {
  return (
    <section style={{ 
      padding: '40px 20px', 
      backgroundColor: '#f5f5f5',
      borderBottom: '2px solid #e0e0e0'
    }}>
      
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'row',  
        alignItems: 'center',
        gap: '40px',
        flexWrap: 'wrap'  
      }}>
        
        <div style={{
          flex: '1 1 400px',  
          textAlign: 'center'
        }}>
          <img 
            src={visionProImg} 
            alt="Apple Vision Pro"
            style={{
              maxWidth: '100%',
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.8)'
            }} 
          />
        </div>

        <div style={{
          flex: '1 1 400px',  
          textAlign: 'left',
          padding: '0 20px'
        }}>
          
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',  
            marginBottom: '15px',
            color: '#000',  
            fontWeight: 'bold',  
            lineHeight: '1.2'
          }}>
            Apple Vision Pro
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',  
            color: '#666',  
            lineHeight: '1.6',
            marginBottom: '20px',
            fontWeight: 'normal'  
          }}>
          Say hello to Vision Pro, a new era of spatial computing. Apple Vision Pro seamlessly blends digital content with your physical space.
          So you can work, watch, relive memories and connect in ways never before possible.
          <p>*Description is taken from official Apple website.  </p> 
          <p>*This is for demonstration and testing purposes only.</p>
          </p>

          <div style={{
            fontSize: 'clamp(1.5rem, 4vw, 2rem)',  
            color: '#000',
            fontWeight: 'bold',
            marginBottom: '10px'
          }}>
            $4,999
          </div>

          <p style={{
            fontSize: '0.9rem',
            color: '#999',
            fontStyle: 'italic',
            margin: 0
          }}>
            *This is the starting price
          </p>

        </div>

      </div>
      
    </section>
  );
}
import React from 'react';
import visionProImg from '../images/visionProImg.png';

export default function Hero() {
  return (
    <section style={{ padding: '40px 20px', 
      textAlign: 'center' , 
      backgroundColor : '#f5f5f5',
      borderBottom: '2px solid #e0e0e0'
     }}>
      <h1 style = {{
        fontSize: '2.5rem', 
        marginBottom:'20px',
        color:'#333',
        padding: '0 10px'
      }}>
        Apple Vision Pro  
      </h1>
      <img src={visionProImg} alt="Apple Vision Pro"
      style = {{
        maxWidth: '400px', 
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        marginBottom: '20px'
      }} 
      />
      <p style = {{
        fontSize: '1.1rem',
        maxWidth: '600px',
        margin: '0 auto',
        color: '#666',
        lineHeight: '1.6',
        padding: '0 10px'
      }}>
        A new era of spatial computing, say hello to Vision Pro.</p>
      
    </section>
  );
}

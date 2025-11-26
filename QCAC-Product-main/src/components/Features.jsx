import React from 'react';

export default function Features() {
  const features = [
    {
      id: "Display",
      title: "Display", 
      description: "Has 3D display system with Micro-OLED and 23 million pixels"
    },
    {
      id: "Chip",
      title: "Chip", 
      description: "Has an Apple M5 Chip with 10-core CPU with 4 performance core"
    },
    {
      id: "Camera",
      title: "Camera", 
      description: "Has stereoscopic 3D main camera system"
    },
    {
      id: "Sensors",
      title: "Sensors", 
      description: "Has LiDAR sensor with a flicker and ambient light sensor"
    },
    {
      id: "Battery",
      title: "Battery", 
      description: "Has up to 2.5 hr of general use, and video playback up to 3 hours"
    },
  ];

  return (
    <section style={{ 
      padding: '40px 20px', 
      backgroundColor: '#fff'
     }}>
      <h2 style = {{
        textAlign: 'center',
        fontSize: 'clamp(1.5rem, 5vw, 2rem)',
        marginBottom: '30px', //space below the heading
        color: '#000',  //colour - can be changed according to the design 
        padding: '0 10px' //padding for smaller screens  
      }}>
        Features
      </h2>
      <div style ={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
        gap: '20px',
        maxWidth: '1200PX',
        margin: '0 auto',
        padding: '0 10px'
      }}>
        {features.map((feature) => (
        <div 
        key={feature.id}
        style={{
          padding: '20px',
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          backgroundColor: '#f9f9f9',
          transition: 'transform 0.2s, box-shadow 0.2s', //animation
          minHeight: '120px',
          textAlign: 'center' //keeping text in the center 
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)'; //moving up 5px
          e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.8)'; //adding shadow
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)'; //return back to original position
          e.currentTarget.style.boxShadow = 'none'; //removing shadow
        }}
        >
        <h3 style={{
          fontSize: 'clamp(1.1rem, 3vw, 1.3rem)',
          marginBottom: '10px',
          color: '#333',
          wordBreak: 'break-word' //prevents overflowing of long words
        }}>
          {feature.title}
        </h3>
        <p style={{
          fonrSize: 'clamp(0.9rem, 2.5vw, 1rem)',
          color: '#666',
          lineHeight: '1.5',
          margin: 0,
          wordBreak: 'break-word'
        }}>
          {feature.description}
        </p>

        </div>
      ))}
      </div>
      
    </section>
  );
}

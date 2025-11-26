import React, { useState } from 'react';

export default function Form({ onAddReview }) {
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,  //initial stage, where no stars are selected 
    message: ''
  });
  
  const [showSuccess, setShowSuccess] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);  
  const [errors, setErrors] = useState({});  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev, 
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleStarClick = (rating) => {
    setFormData(prev => ({
      ...prev,
      rating: rating
    }));
    
    if (errors.rating) {
      setErrors(prev => ({
        ...prev,
        rating: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Your name is missing, please add!';
    }
    if (formData.rating === 0) {
      newErrors.rating = 'Rating is missing, please add here!!';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please add a brief message here!!';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    //this sends form data to App.jsx 
    onAddReview(formData);

    setFormData({
      name: '',
      rating: 0,
      message: ''
    });
    
    setErrors({});

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };


  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      const isFilled = i <= (hoveredRating || formData.rating);
      
      stars.push(
        <span
          key={i}
          onClick={() => handleStarClick(i)}
          onMouseEnter={() => setHoveredRating(i)}
          onMouseLeave={() => setHoveredRating(0)}
          style={{
            fontSize: '2.5rem',
            cursor: 'pointer',
            color: isFilled ? '#FFD700' : '#ddd',  // Gold or gray
            transition: 'color 0.2s',
            userSelect: 'none'  
          }}
        >
          {isFilled ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <section style={{
      padding: '40px 20px',
      backgroundColor: '#fff',
      flex: '1 1 400px',  
      minWidth: '300px'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        marginBottom: '30px',
        color: '#333'
      }}>
        Add a Review
      </h2>

      {showSuccess && (
        <div style={{
          maxWidth: '600px',
          margin: '0 auto 20px',
          padding: '15px',
          backgroundColor: '#4CAF50',
          color: 'white',
          borderRadius: '8px',
          textAlign: 'center',
          fontWeight: 'bold'
        }}>
            Review added successfully, thank you!
        </div>
      )}

      <form 
        onSubmit={handleSubmit}
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '30px',
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}
      >
        <div style={{ marginBottom: '25px' }}>
          <label 
            style={{ 
              display: 'block',
              marginBottom: '12px',
              fontWeight: 'bold',
              color: '#333',
              textAlign: 'center',
              fontSize: '1rem'
            }}
          >
            Rating 
          </label>
          <div style={{ 
            textAlign: 'center',
            padding: '10px',
            backgroundColor: '#fff',
            borderRadius: '8px',
            border: errors.rating ? '1px solid #f44336' : '1px solid #e0e0e0'  
          }}>
            {renderStars()}
          </div>
          
          {errors.rating ? (
            <p style={{
              textAlign: 'center',
              marginTop: '8px',
              color: '#f44336',  //error message colour 
              fontSize: '0.9rem',
              fontWeight: 'bold'
            }}>
              ⚠️ {errors.rating}
            </p>
          ) : formData.rating > 0 ? (
            <p style={{
              textAlign: 'center',
              marginTop: '8px',
              color: '#4CAF50',  
              fontSize: '0.9rem'
            }}>
              You selected {formData.rating} star{formData.rating > 1 ? 's' : ''}
            </p>
          ) : null}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label 
            htmlFor="name"
            style={{ 
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#333'
            }}
          >
            Your Name 
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: errors.name ? '1px solid #f44336' : '1px solid #ddd',  //red highlight for error
              borderRadius: '4px',
              textAlign: 'center',
              boxSizing: 'border-box'
            }}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p style={{
              marginTop: '5px',
              color: '#f44336',
              fontSize: '0.85rem',
              margin: '5px 0 0 0'
            }}>
              ⚠️ {errors.name}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label 
            htmlFor="message"
            style={{ 
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#333'
            }}
          >
            Your Review 
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={5}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: errors.message ? '1px solid #f44336' : '1px solid #ddd',  
              borderRadius: '4px',
              boxSizing: 'border-box',
              resize: 'vertical',
              textAlign: 'center',
              fontFamily: 'inherit'
            }}
            placeholder="Share your experience with this product..."
          />
          {errors.message && (
            <p style={{
              marginTop: '5px',
              color: '#f44336',
              fontSize: '0.85rem',
              margin: '5px 0 0 0'
            }}>
              ⚠️ {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '15px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            color: 'white',
            backgroundColor: '#4A90E2',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#357ABD'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#4A90E2'}
        >
          Submit 
        </button>
      </form>
    </section>
  );
}
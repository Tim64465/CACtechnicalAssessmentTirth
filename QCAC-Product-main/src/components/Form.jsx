import React, {useState} from 'react';

export default function Form({onAddReview}){
    const[formData, setFormData] = useState({
        name: '',
        rating: 5,
        message: ''
    });
    const[showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e) => {
        const{name, value} = e.target;
        setFormData(prev => ({
            ...prev, 
            [name]: value
        }));
    };

    const handleRatingChange = (e) =>{
        setFormData(prev => ({
            ...prev,
            rating: parseInt(e.target.value)
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name.trim()){
            alert('Name missing, please enter your name!');
            return;
        }
        if(!formData.message.trim()){
            alert('Please add a review message!!');
            return;
        }
        onAddReview(formData);
        setFormData({
            name:'',
            rating: 5,
            message: ''  
        });
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
    };
    return (
        <section style={{
            padding: '40px 20px',
            backgroundColor: '#fff',
        }}>
            <h2 style={{
                textAlign: 'center',
                fontSize: '2rem',
                marginBottom: '30px',
                color: '#333'
            }}>
                Reviews 
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
          Review added, Thank you for the review !
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
        <div style={{ marginBottom: '20px' }}>
          <label 
            htmlFor="name"
            style={{ 
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333',
              textAlign: 'center'
            }}
          >
            Your Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxSizing: 'border-box',
              textAlign: 'center'
            }}
            placeholder="Enter your name here"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label 
            htmlFor="rating"
            style={{ 
              display: 'block',
              marginBottom: '8px',
              fontWeight: 'bold',
              color: '#333',
              textAlign: 'center'
            }}
          >
            Rating:
          </label>
          <select
            id="rating"
            name="rating"
            value={formData.rating}
            onChange={handleRatingChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxSizing: 'border-box',
              backgroundColor: 'white'
            }}
          >
            <option value={5}>⭐⭐⭐⭐⭐ (5 stars)</option>
            <option value={4}>⭐⭐⭐⭐ (4 stars)</option>
            <option value={3}>⭐⭐⭐ (3 stars)</option>
            <option value={2}>⭐⭐ (2 stars)</option>
            <option value={1}>⭐ (1 star)</option>
          </select>
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
            Review message: 
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            style={{
              width: '100%',
              padding: '12px',
              fontSize: '1rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              boxSizing: 'border-box',
              resize: 'vertical',
              textAlign: 'center',
              fontFamily: 'inherit'
            }}
            placeholder="Share your experience about this product..."
          />
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
    )
}
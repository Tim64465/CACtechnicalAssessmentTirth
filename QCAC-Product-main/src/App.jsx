import React, { useState, useEffect } from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Reviews from './components/Reviews.jsx';
import Form from './components/Form.jsx';

export default function App() {
  
  const SAMPLE_REVIEWS = [
    {
      id: 'sample-one',
      name: 'Tirth',
      rating: 5,
      message: 'This is the best product so far.',
      timestamp: '2024-01-15T10:00:00.000Z'
    },
    {
      id: 'sample-two',
      name: 'Dhruv',
      rating: 4,
      message: 'Great product by Apple, never disappoints!!',
      timestamp: '2024-01-18T14:30:00.000Z'
    },
    {
      id: 'sample-three',
      name: 'Sean',
      rating: 5,
      message: 'Great glasses, great experience',
      timestamp: '2024-01-22T09:15:00.000Z'
    }
  ];


  const [reviews, setReviews] = useState(SAMPLE_REVIEWS);

 
  useEffect(() => {
    const savedReviews = localStorage.getItem('visionProReviews');
    
    if (savedReviews) {
      try {
        const parsedReviews = JSON.parse(savedReviews);
        const allReviews = [...SAMPLE_REVIEWS, ...parsedReviews];
        allReviews.sort((a, b) => {
          const timeA = new Date(a.timestamp || 0).getTime();
          const timeB = new Date(b.timestamp || 0).getTime();
          return timeB - timeA;  // newest review first
        });
        //if there is any error, then go back to sample reviews
        setReviews(allReviews);
      } catch (error) {
        console.error('Error loading reviews from localStorage:', error);
        setReviews(SAMPLE_REVIEWS);
      }
    }
  }, []); 

  const addReview = (reviewData) => {
    const newReview = { //generating unique id based on the time stamp
      id: `review-${Date.now()}`, 
      name: reviewData.name,  //username from the form
      rating: reviewData.rating,   //rating added by user 
      message: reviewData.message,  //text message written 
      timestamp: new Date().toISOString()   //getting current time
    };

    const currentUserReviews = reviews.filter(
      review => !review.id.startsWith('sample-')
    );
    //keeping the latest reviews on the top
    const updatedUserReviews = [newReview, ...currentUserReviews];
    //saving the actual reviews to the storage 
    try {
      localStorage.setItem('visionProReviews', JSON.stringify(updatedUserReviews));
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      alert('Error saving review. Please try again.');
      return;
    }
    //adding the new reviews on top of the sample reviws 
    const allReviews = [...SAMPLE_REVIEWS, ...updatedUserReviews];
    //sorting the latest reviews based on time stamps, to keep the latest on top
    allReviews.sort((a, b) => {
      const timeA = new Date(a.timestamp || 0).getTime();
      const timeB = new Date(b.timestamp || 0).getTime();
      return timeB - timeA;
    });
    
    setReviews(allReviews);
  };

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Inter", "Helvetica Neue", Arial, sans-serif'
    }}>
      <Hero />

      <Features />

      <div style={{
        display: 'flex',
        flexDirection: 'row',  
        flexWrap: 'wrap',      
        maxWidth: '1400px',
        margin: '0 auto',
        gap: '0'               
      }}>
        
        <div style={{
          flex: '1 1 500px',
          minWidth: '300px',
          order: 2  
        }}>
          <Reviews reviews={reviews} />
        </div>

        <div style={{
          flex: '1 1 500px',
          minWidth: '300px',
          order: 1  
        }}>
          <Form onAddReview={addReview} />
        </div>

      </div>
    </div>
  );
}
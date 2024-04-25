import React from 'react';
import backgroundImage from './sportsbg2.jpg'; // Correct import path to the background image

const NewsUpdates = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '500px', padding: '20px', color: 'white', textAlign: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1, backdropFilter: 'blur(4px)' }}></div>
      <h2 style={{ fontSize: '28px', marginBottom: '20px', zIndex: 2, position: 'relative' }}>News & Updates</h2>
      <div style={{ marginBottom: '20px', zIndex: 2, position: 'relative' }}>
        <p><b>JNTUGV UNIVERSITY COLLEGE OF ENGINEERING, VIZIANAGARAM conducted KHO-KHO Men and Women Inter College Tournament cum Inter University Selection Trials on Nov-16, 2023.</b></p>
        <p><b>JNTUGV UNIVERSITY COLLEGE OF ENGINEERING, VIZIANAGARAM conducted Taekwondo Men and Women Inter College Tournament cum Inter University Selection Trials on Nov-26, 2023.</b></p>
        <p><b>JNTUGV UNIVERSITY COLLEGE OF ENGINEERING, VIZIANAGARAM conducted Table Tennis Men Inter College Tournament cum Inter University Selection Trials on Nov-26, 2023.</b></p>
      </div>
    </div>
  );
};

export default NewsUpdates;

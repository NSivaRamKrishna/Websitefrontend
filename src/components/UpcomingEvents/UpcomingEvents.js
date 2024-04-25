import React from 'react';
import backgroundImage from './sportsbg3.jpg'; // Correct import path to the background image

const UpcomingEvents = () => {
  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '500px', padding: '20px', color: 'black', textAlign: 'center', position: 'relative' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 1, backdropFilter: 'blur(4px)' }}></div>
      <h2 style={{ fontSize: '28px', marginBottom: '20px', zIndex: 2, position: 'relative' }}><u>Upcoming Events</u></h2>
      <div style={{ marginBottom: '20px', zIndex: 2, position: 'relative' }}>
        <p style={{ fontSize: '18px' }}><b>Get ready for a day of serenity and wellness as we celebrate International Yoga Day on June 21st! It's a time to stretch, breathe, and rejuvenate.<br />
        Mark your calendars for the excitement of National Sports Day on August 29th! Let's come together to celebrate the spirit of sportsmanship and fitness.</b></p>
        <p style={{ fontSize: '18px' }}><b>INTERNATIONAL YOGA DAY will be conducted on 21st June, 2024</b></p>
        <p style={{ fontSize: '18px' }}><b>NATIONAL SPORTS DAY will be soon conducted on 21st Aug, 2024</b></p>
      </div>
    </div>
  );
};

export default UpcomingEvents;

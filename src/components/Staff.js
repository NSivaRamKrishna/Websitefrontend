import React from 'react';
import backgroundImage from './sportsbg4.jpg'; // Correct import path to the background image

const Staff = () => {
  const containerStyle = {
    position: 'relative',
    color: 'black',
    padding: '20px',
    borderRadius: '5px',
    fontFamily: 'Arial, sans-serif',
  };

  const blurOverlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white to create a blur effect
    backdropFilter: 'blur(10px)', // Blur filter applied only to the background image
    zIndex: 0, // Ensure the blur overlay covers the background image
    borderRadius: '5px',
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    position: 'relative', // Added position relative to prevent the background image from being obscured
    borderRadius: '5px',
  };

  return (
    <div style={containerStyle}>
      <div style={blurOverlayStyle}></div>
      <div style={backgroundStyle}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px', zIndex: 1 }}>List of Faculty Members</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px', color: 'black', zIndex: 1 }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '8px', fontSize: '16px', fontWeight: 'bold' }}>S.no</th>
              <th style={{ border: '1px solid black', padding: '8px', fontSize: '16px', fontWeight: 'bold' }}>Name</th>
              <th style={{ border: '1px solid black', padding: '8px', fontSize: '16px', fontWeight: 'bold' }}>Designation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>1</td>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>Prof.N.Vijay Mohan</td>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>University Sports Council Secretary</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>2</td>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>Dr.A.V.PapaRao</td>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>Sports Coordinator</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>3</td>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>Dr.Nagarjuna</td>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>Physical Director</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>4</td>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>Smt.M.Yellareswari</td>
              <td style={{ border: '1px solid black', padding: '8px', fontSize: '14px' }}>Women Physical Director</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
        <p style={{ marginTop: '20px', fontSize: '16px', lineHeight: '1.5', zIndex: 1 }}>
          Staff members in sports play a pivotal role in the success and development of athletes and teams. Coaches provide strategic guidance and mentorship, helping athletes reach their full potential and excel in competitions. Trainers and medical staff ensure the physical well-being of athletes through injury prevention strategies, rehabilitation programs, and health monitoring. Support personnel, such as nutritionists and psychologists, contribute to overall performance by optimizing athletes' diets and mental resilience. Effective collaboration and communication among staff members are essential for creating a cohesive and productive environment. Despite challenges like managing conflicts and balancing workloads, dedicated staff members often contribute significantly to the success of sports teams, fostering a culture of excellence and achieving remarkable results.
        </p>
      </div>
    </div>
  );
};

export default Staff;

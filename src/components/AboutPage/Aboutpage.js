import React from 'react';
import './Aboutpage.css'; // Import AboutPage.css for styling

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About the Department of Physical Education</h1>
      <div className="about-content">
        <h2 className="section-title">Introduction</h2>
        <p className="content-text" style={{ fontSize: '16px' }}> {/* Set font size to 16px */}
          The Department of Physical Education at [Institute Name] is dedicated to providing top-notch training facilities for students and staff alike. Our infrastructure supports a wide range of outdoor and indoor games, fostering a culture of physical fitness and sportsmanship within the institute.
        </p>

        <h2 className="section-title">Outdoor Facilities</h2>
        <div className="table-container">
          <table className="facilities-table">
            <thead>
              <tr>
                <th>Facility</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Badminton</td></tr>
              <tr><td>Ball Badminton</td></tr>
              <tr><td>Basketball</td></tr>
              <tr><td>Cricket</td></tr>
              <tr><td>Football</td></tr>
              <tr><td>Kabaddi</td></tr>
              <tr><td>Kho-Kho</td></tr>
              <tr><td>Handball</td></tr>
              <tr><td>Hockey</td></tr>
              <tr><td>TenniCoit</td></tr>
              <tr><td>Throwball</td></tr>
              <tr><td>Tennis</td></tr>
              <tr><td>Volleyball</td></tr>
            </tbody>
          </table>
        </div>
        <p className="content-text">
          Additionally, floodlight facilities are available for evening games, ensuring continuous access to sports activities.
        </p>

        <h2 className="section-title">Sports Ground</h2>
        <p className="content-text">
          The sports ground boasts a 200-meter standard track, a well-equipped pavilion, and facilities for all athletic events, providing an ideal setting for training and competitions.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;

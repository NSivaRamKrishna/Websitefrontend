import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'; // Import your CSS file

const Navigation = ({ handleNavigation }) => {
  const handleClick = (page) => {
    handleNavigation(page);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" onClick={() => handleClick('slideshow')}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => handleClick('about')}>
            About
          </Link>
        </li>
        <li>
          <Link to="/playfields" onClick={() => handleClick('playfields')}>
            Playfields
          </Link>
        </li>
        <li>
          <Link to="/gallery" onClick={() => handleClick('gallery')}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/news" onClick={() => handleClick('news')}>
            News & Updates
          </Link>
        </li>
        <li>
          <Link to="/events" onClick={() => handleClick('events')}>
            Upcoming Events
          </Link>
        </li>
        <li>
          <Link to="/staff" onClick={() => handleClick('staff')}>
            Staff
          </Link>
        </li>
        <li>
          <Link to="/achievements" onClick={() => handleClick('achievements')}>
            Achievements
          </Link>
        </li>
        <li>
          <Link to="/gymnasium" onClick={() => handleClick('gymnasium')}>
            Gymnasium
          </Link>
        </li>
        <li>
        <Link to="/notifications" onClick={() => handleClick('notifications')}>
            Notifications
          </Link>
        </li>
        <li>
        <Link to="/login" onClick={() => handleClick('login')}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
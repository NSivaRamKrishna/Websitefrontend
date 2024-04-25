import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter, Routes, and Route
import Header from './components/Header';
import Navigation from './components/Navigation/Navigation';
import AboutPage from './components/AboutPage/Aboutpage';
import Playfields from './components/Playfields/Playfields';
import Gallery from './components/Gallery/Gallery';
import NewsUpdates from './components/NewsUpdates/NewsUpdates';
import UpcomingEvents from './components/UpcomingEvents/UpcomingEvents';
import DepartmentInfo from './components/DepartmentInfo';
import Staff from './components/Staff';
import Achievements from './components/Achievements';
import Gymnasium from './components/Gymnasium';
import Slideshow from './components/Slideshow';
import Notifications from './components/Notifications/Notifications'; 
import Footer from './components/Footer'; // Import the Footer component
import sportsimg1 from './images/sportsimg1.jpg';
import sportsimg3 from './images/sportsimg3.jpg';
import sportimg4 from './images/sportimg4.jpg';
import Login from './components/login/Login';
import FormPage from './components/login/Formpage';

import './App.css';

const SlideshowComponent = ({ images }) => {
  return (
    <div className="slideshow-container">
      <Slideshow images={images} />
    </div>
  );
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('slideshow'); // Default to slideshow
  const images = [sportsimg1, sportsimg3, sportimg4];

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Navigation handleNavigation={handleNavigation} />
        <div className="content">
          <div className="main-content">
            <Routes> {/* Wrap your routes in the Routes component */}
              <Route path="/formpage" element={<FormPage />} /> {/* Use the element prop for Route */}
              <Route path="/" element={ // Use the element prop for Route
                <>
                  <div className="slideshow-row">
                    <SlideshowComponent images={images}></SlideshowComponent>
                  </div>
                  <div className="departmentinfo-row">
                    <DepartmentInfo />
                  </div>
                </>
              } />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/playfields" element={<Playfields />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/news" element={<NewsUpdates />} />
              <Route path="/events" element={<UpcomingEvents />} />
              <Route path="/staff" element={<Staff />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/gymnasium" element={<Gymnasium />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
        </div>
        <Footer /> {/* Include the Footer component */}
      </div>
    </Router>
  );
};

export default App;

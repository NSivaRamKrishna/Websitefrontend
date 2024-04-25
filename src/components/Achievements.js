// Achievements.js
import React, { useState } from 'react';
import './Achievements.css'; // Import CSS file

const Achievements = () => {
  const [activeYear, setActiveYear] = useState(null);

  // Function to handle tab click
  const handleTabClick = (year) => {
    setActiveYear(year);
  };

  // Table data for each year
  const tableData = {
    '2013-14': [
      { id: 1, studentName: 'JNTUK UCEV', MedalPlace: 'Winners', gameEvent: 'KABADDI (M)', tournamentLevel: 'JNTUK Zone “A” Inter-Collegiate Tournament', organizingCollege: 'GMRIT', venue: 'Rajam' },
      { id: 2, studentName: 'JNTUK UCEV', medalPlace: 'Runners', gameEvent: 'KHO-KHO (M)', tournamentLevel: 'JNTUK Zone “A” Inter-Collegiate Tournament', organizingCollege: 'GMRIT', venue: 'Rajam' },
      { id: 3, studentName: 'JNTUK UCEV', MedalPlace: 'Winners', gameEvent: 'T.T (M)', tournamentLevel: 'JNTUK Zone “A” Inter-Collegiate Tournament', organizingCollege: 'GMRIT', venue: 'Rajam' },
      { id: 4, studentName: 'JNTUK UCEV', MedalPlace: 'Winners', gameEvent: 'CRICKET (M)', tournamentLevel: 'JNTUK Zone “A” Inter-Collegiate Tournament', organizingCollege: 'JNTUK-UCEV', venue: 'JNTUK-UCEV' },
      { id: 5, studentName: 'JNTUK UCEV', MedalPlace: 'Third Place', gameEvent: 'KABADDI (M)', tournamentLevel: 'JNTUK CENTERAL ZONE Inter-Collegiate Tournament	', organizingCollege: 'JNTUK-UCEK', venue: '	Kakinada' },

      // Add more empty entries for the year 2013-14 as needed
    ],
    '2014-15': [
      { id: 1, studentName: 'JNTUK UCEV', MedalPlace: 'Winners', gameEvent: 'KHO-KHO (M)', tournamentLevel: 'JNTUK Zone “A” Inter-Collegiate Tournament', organizingCollege: 'Avanthi Institute of Engineering & Technology', venue: 'Vizianagaram' },
      { id: 2, studentName: 'JNTUK UCEV', medalPlace: 'Third Place', gameEvent: 'Chess  (M)', tournamentLevel: 'JNTUK  CENTERAL ZONE Inter-Collegiate Tournament', organizingCollege: 'JNTUK UCEK', venue: 'Kakinada' },
      { id: 3, studentName: 'JNTUK UCEV', MedalPlace: 'Runners	', gameEvent: 'Volleyball (w)', tournamentLevel: 'JNTUK SINGLE ZONE Inter-Collegiate Tournament', organizingCollege: 'Gudlavalleru Engineering College', venue: 'Gudlavalleru' },
      { id: 4, studentName: 'JNTUK UCEV', MedalPlace: 'Runners', gameEvent: 'Kabaddi  (w)', tournamentLevel: 'JNTUK SINGLE ZONE Inter-Collegiate Tournament', organizingCollege: 'Gudlavalleru Engineering College', venue: 'Gudlavalleru' },
      { id: 5, studentName: 'JNTUK UCEV', MedalPlace: 'Runners', gameEvent: 'Cricket (M)', tournamentLevel: '8th EENADU-MASTER MINDS CHAMPION CRICKET CUP-2014', organizingCollege: 'Eenadu Telugu Daily', venue: '	Vizianagaram' },

      // Data for 2014-15 year
    ],
    '2015-16': [
      { id: 1, studentName: 'D.L.Keerthi',MedalPlace: '2 Gold 1 Silver Medals', gameEvent: '4X100 Mts Relay, 200 Mts,100 Mts', tournamentLevel: '  JNTUK Inter Collegiate Athletics  Champion Ship', organizingCollege: ' JNTUK UCEK', venue: ' Kakinada' },
      { id: 2, studentName: 'B.Santoshi',MedalPlace: '1 Gold 1 Bronze Medals', gameEvent: '4x400 Mts Relay, 100 MTS' },
      { id: 3, studentName: 'G.Dhana Lakshmi',MedalPlace: '1 Gold Medal', gameEvent: 'Javelin Throw' },
      { id: 4, studentName: 'L.Bhargavi',MedalPlace: '1 Gold 1 Bronze Medals', gameEvent: '4x400 Mts Relay,1500 Mts' },
      { id: 5, studentName: 'G.Harika Lakshmi',MedalPlace: '1 Gold Medal', gameEvent: '4x100 Mts Relay' },
      { id: 6, studentName: 'Y.Sankara Rao',MedalPlace: '1 Bronze Medal	', gameEvent: '800 Mts' },



      // Data for 2015-16 year
    ],
    '2016-17': [
      { id: 1, studentName: 'Aditya', branch: 'Computer Science', gameEvent: 'Basketball', tournamentLevel: 'State Level', organizingCollege: 'ABC College', venue: 'City Hall' },
      { id: 1, studentName: 'Geet', branch: 'Computer Science', gameEvent: 'Basketball', tournamentLevel: 'State Level', organizingCollege: 'ABC College', venue: 'City Hall' },

      // Data for 2015-16 year
    ],
    '2017-18': [
      { id: 1, studentName: 'Rahul', branch: 'Computer Science', gameEvent: 'Basketball', tournamentLevel: 'State Level', organizingCollege: 'ABC College', venue: 'City Hall' },
      { id: 1, studentName: 'Geetanjali', branch: 'Computer Science', gameEvent: 'Basketball', tournamentLevel: 'State Level', organizingCollege: 'ABC College', venue: 'City Hall' },

      // Data for 2015-16 year
    ],
    '2018-19': [
      { id: 1, studentName: 'Varun', branch: 'Computer Science', gameEvent: 'Basketball', tournamentLevel: 'State Level', organizingCollege: 'ABC College', venue: 'City Hall' },
      { id: 1, studentName: 'Vikas', branch: 'Computer Science', gameEvent: 'Basketball', tournamentLevel: 'State Level', organizingCollege: 'ABC College', venue: 'City Hall' },

      // Data for 2015-16 year
    ],
    '2019-20': [
      { id: 1, studentName: 'Kishore', branch: 'Computer Science', gameEvent: 'Basketball', tournamentLevel: 'State Level', organizingCollege: 'ABC College', venue: 'City Hall' },
      { id: 1, studentName: 'Avinash', branch: 'Computer Science', gameEvent: 'Basketball', tournamentLevel: 'State Level', organizingCollege: 'ABC College', venue: 'City Hall' },

      // Data for 2015-16 year
    ],
    // Add data for other years as needed
  };

  const columns = [
    'S.No',
    'Name of the Student',
    'Branch',
    'Name of the Game/Event',
    'Level of the Tournament',
    'Organizing College',
    'Venue'
  ];

  return (
    <div className="achievements-container">
      <h2>Achievements Component</h2>
      <div className="tabs-container">
        {Object.keys(tableData).map((year) => (
          <div
            key={year}
            className={`tab ${activeYear === year ? 'active' : ''}`}
            onClick={() => handleTabClick(year)}
          >
            {year}
          </div>
        ))}
      </div>
      {activeYear && (
        <div className="table-container">
          <table>
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{column}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableData[activeYear].map((row, index) => (
                <tr key={row.id}>
                  <td>{index + 1}</td>
                  <td>{row.studentName}</td>
                  <td>{row.branch}</td>
                  <td>{row.gameEvent}</td>
                  <td>{row.tournamentLevel}</td>
                  <td>{row.organizingCollege}</td>
                  <td>{row.venue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Achievements;

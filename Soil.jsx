import React from 'react';
import './Soil.css';
import soilData from './SoilData'; // Import the soil data

const Soil = () => {
  return (
    <div className="soil-container">
      <h2>Soil Types and Suitable Plants</h2>
      <div className="soil-list">
        {soilData.map((soil, index) => (
          <div key={index} className="soil-item">
            <h3>{soil.type}</h3>
            <p>{soil.description}</p>
            <h4>Suitable Plants:</h4>
            <ul>
              {soil.suitablePlants.map((plant, i) => (
                <li key={i}>{plant}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soil;

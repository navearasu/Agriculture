import React from 'react';
import './Mission.css';

const Mission = () => {
  return (
    <div className="mission-container">
      <h1 className="mission-title">Our Mission</h1>
      <p className="mission-text">
        At <span className="brand-name">Harvest Haven</span>, our mission is to empower budding farmers with comprehensive knowledge and tools to thrive in modern agriculture. We aim to provide detailed information on plant cultivation, optimal usage of pesticides and fertilizers, and seamless connectivity with agricultural experts.
      </p>
      <ul className="mission-list">
        <li>
          <h3>In-depth Plant Details</h3>
          <p>Delivering extensive information on various crops, including:</p>
          <ul>
            <li>Growth stages</li>
            <li>Soil requirements</li>
            <li>Seasonal best practices</li>
            <li>Pest and disease management</li>
            <li>Harvesting techniques</li>
          </ul>
        </li>
        <li>
          <h3>Guidance on Pesticides and Fertilizers</h3>
          <p>Offering expert advice on the safe and effective use of pesticides and fertilizers to protect crops and enhance yields, while maintaining environmental sustainability. This includes:</p>
          <ul>
            <li>Proper application methods</li>
            <li>Dosage recommendations</li>
            <li>Timing and frequency</li>
            <li>Safety precautions</li>
            <li>Alternative organic options</li>
          </ul>
        </li>
        <li>
          <h3>Expert Connectivity</h3>
          <p>Facilitating direct contact with a wide network of agricultural experts, including:</p>
          <ul>
            <li>Agronomists</li>
            <li>Soil scientists</li>
            <li>Pest management specialists</li>
            <li>Crop consultants</li>
            <li>Market analysts</li>
          </ul>
          <p>Our platform enables farmers to receive personalized support and solutions, ensuring they have the right guidance at every step of their agricultural journey.</p>
        </li>
      </ul>
      <p className="mission-text">
        By integrating cutting-edge technology with agricultural expertise, <span className="brand-name">Harvest Haven</span> is committed to transforming farming practices and improving the livelihoods of farmers worldwide. We believe in a sustainable and productive farming community where every farmer has the resources and knowledge to succeed.
      </p>
    </div>
  );
};

export default Mission;

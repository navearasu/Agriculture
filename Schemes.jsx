import React, { useState } from 'react';
import './Schemes.css';

const schemesData = [
  {
    title: 'Pradhan Mantri Fasal Bima Yojana',
    description: 'A government-sponsored crop insurance scheme to support farmers in case of crop failure due to unforeseen events.',
    details: 'This scheme provides comprehensive crop insurance against non-preventable natural risks at an affordable rate. It aims to stabilize the income of farmers, encourage them to adopt innovative and modern agricultural practices, and ensure the flow of credit to the agriculture sector.'
  },
  {
    title: 'Soil Health Card Scheme',
    description: 'This scheme aims to provide soil cards to farmers that carry crop-wise recommendations for nutrients and fertilizers.',
    details: 'The Soil Health Card Scheme is aimed at promoting soil test-based and balanced use of fertilizers to enable farmers to realize higher yields at lower cost. It provides farmers with information about the nutrient status of their soil along with advice on the appropriate dosage of nutrients for improving soil health and fertility.'
  },
  {
    title: 'Pradhan Mantri Krishi Sinchai Yojana',
    description: 'A scheme to improve farm productivity and ensure better utilization of resources in the irrigation sector.',
    details: 'This scheme focuses on creating sources for assured irrigation, integrating water sources, distribution and efficient use of water. It also emphasizes on micro-irrigation to ensure `more crop per drop` and extending the coverage of irrigation to every field in the country.'
  },
  {
    title: 'National Agriculture Market (e-NAM)',
    description: 'A pan-India electronic trading portal which networks the existing APMC mandis to create a unified national market for agricultural commodities.',
    details: 'e-NAM aims to improve the price discovery mechanism and help farmers get better prices for their produce. It provides a single window service for all APMC related information and services, including commodity arrivals and prices, buy and sell trade offers, and provision to respond to trade offers.'
  },
  {
    title: 'Kisan Credit Card (KCC)',
    description: 'Provides farmers with adequate and timely credit support from the banking system under a single window.',
    details: 'The KCC scheme aims to provide timely and adequate credit to farmers to meet their agricultural needs. It simplifies the process of sanctioning and disbursing credit, thereby providing flexible and hassle-free credit support to farmers for their short-term and long-term needs.'
  },
  {
    title: 'Paramparagat Krishi Vikas Yojana (PKVY)',
    description: 'Encourages organic farming practices and provides incentives to farmers for sustainable agriculture.',
    details: 'PKVY aims to promote organic farming practices and the adoption of eco-friendly sustainable farming methods. It provides financial assistance and training to farmers to produce organic products and develop market linkages for selling their organic produce at a premium price.'
  },
  {
    title: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    description: 'Provides financial assistance to small and marginal farmers to help them meet their agricultural expenses.',
    details: 'Under the PM-KISAN scheme, the government provides financial assistance of Rs. 6000 per year to small and marginal farmers. The amount is transferred directly into their bank accounts in three equal installments to help them meet their agricultural and household needs.'
  },
  {
    title: 'Rashtriya Krishi Vikas Yojana (RKVY)',
    description: 'Provides incentives to states for increasing public investment in agriculture and allied sectors.',
    details: 'RKVY aims to incentivize states to increase public investment in agriculture and allied sectors. It provides funds for various agricultural development activities and infrastructure projects to enhance the productivity and sustainability of the agriculture sector.'
  },
  {
    title: 'Gramin Bhandaran Yojana',
    description: 'Supports the construction and renovation of rural godowns to improve storage infrastructure.',
    details: 'This scheme provides financial support for the construction and renovation of rural godowns to improve the storage infrastructure. It aims to reduce post-harvest losses and ensure the availability of scientific storage facilities for farmers to store their produce safely.'
  },
  {
    title: 'Dairy Entrepreneurship Development Scheme',
    description: 'Provides financial support for dairy development and encourages entrepreneurship in the dairy sector.',
    details: 'The Dairy Entrepreneurship Development Scheme aims to promote dairy farming and encourage entrepreneurship in the dairy sector. It provides financial assistance for various dairy development activities, including the establishment of modern dairy farms, procurement of milking machines, and development of cold chain infrastructure.'
  },
];

const SchemesPage = () => {
  const [visibleSchemes, setVisibleSchemes] = useState(5);
  const [selectedScheme, setSelectedScheme] = useState(null);

  const loadMoreSchemes = () => {
    setVisibleSchemes((prev) => prev + 5);
  };

  const handleSchemeClick = (scheme) => {
    setSelectedScheme(scheme);
  };

  const handleCloseModal = () => {
    setSelectedScheme(null);
  };

  return (
    <div className="schemes-page">
      <h1 className="page-title">Government Schemes</h1>
      <div className="schemes-list">
        {schemesData.slice(0, visibleSchemes).map((scheme, index) => (
          <div className="scheme-card" key={index} onClick={() => handleSchemeClick(scheme)}>
            <h2 className="scheme-title">{scheme.title}</h2>
            <p className="scheme-description">{scheme.description}</p>
          </div>
        ))}
      </div>
      {visibleSchemes < schemesData.length && (
        <button className="load-more-button" onClick={loadMoreSchemes}>
          Load More
        </button>
      )}

      {selectedScheme && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={handleCloseModal}>Back</button>
            <h2>{selectedScheme.title}</h2>
            <p>{selectedScheme.details}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchemesPage;

import React from 'react';
import ContentLoader from 'react-content-loader';

const LazyLoadPage = () => (
  <ContentLoader
    speed={2}
    style={{ width: '100%', backgroundColor: '#fff', borderRadius: '4px' }}
    height={1000}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="120" cy="80" r="60" />
    <rect x="200" y="60" rx="3" ry="3" width="75" height="8" />
    <rect x="200" y="90" rx="3" ry="3" width="95" height="8" />
    <rect x="200" y="110" rx="3" ry="3" width="90" height="8" />
    <rect x="600" y="30" rx="2" ry="2" width="450" height="160" />
    <rect x="85" y="250" rx="3" ry="3" width="950" height="1" />
    <rect x="85" y="300" rx="3" ry="3" width="950" height="500" />
    <rect x="85" y="830" rx="3" ry="3" width="950" height="100" />
  </ContentLoader>
);

export default LazyLoadPage;

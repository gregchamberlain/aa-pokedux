import React from 'react';

const ToyDetail = ({ toy }) => (
  <section>
    <ul>
      <img src={toy.image_url} alt={toy.name} />
      <li><h4>{toy.name}</h4></li>
      <li>Happiness: {toy.happiness}</li>
    </ul>
  </section>
);

export default ToyDetail;

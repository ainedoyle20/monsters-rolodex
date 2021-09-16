import React from 'react';
import './card.styles.css';

const Card = ({ name, email }) => {
  return (
    <div className="card">
      <img alt="" src={`https://robohash.org/set_set2/bgset_bg1/${name}?size=180x180`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
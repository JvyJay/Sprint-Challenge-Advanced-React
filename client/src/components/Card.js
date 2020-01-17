import React from 'react';

const Card = props => {
  return (
    <div style={{ width: '25%' }}>
      <h2>{props.name}</h2>
      <p>{props.country}</p>
      <p>{props.search}</p>
    </div>
  );
};

export default Card;

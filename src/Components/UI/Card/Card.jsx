import React from 'react';
import './Card.css';

export const Card = ({urlImageCard,titleCard}) => {
  return (
    <div className='card'>
      <img src={urlImageCard} alt={titleCard} />
      <p>{titleCard}</p>
    </div>
  )
}

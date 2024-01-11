import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Valoracion = ({ rating, setRating }) => {
  const [valoracion, setValoracion] = useState(rating);

  const handleStarClick = (value) => {
    if (valoracion === value) {
      setValoracion(0); // Quits the rating if clicked on the same star
      setRating(0);
    } else {
      setValoracion(value);
      setRating(value);
    }
  };

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;

        return (
          <span key={i}>
            <label
              role='img'
              aria-label='star'
              onClick={() => handleStarClick(ratingValue)}
              style={{ cursor: 'pointer' }}>
              {ratingValue <= valoracion ? '⭐️' : '☆'}
            </label>
          </span>
        );
      })}
    </div>
  );
};

Valoracion.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};

export default Valoracion;

import React from 'react';
import { ArrowCircleRightOutlined } from '@mui/icons-material';
import PropTypes from 'prop-types';
import './animalCard.css';

const animalCard = ({
  name, img, onclick, weight, pos,
}) => (
  <div
    style={{ backgroundImage: `url(${img})` }}
    onClick={onclick}
    onKeyDown={onclick}
    aria-hidden="true"
    className="fishcard"
  >
    <ArrowCircleRightOutlined className="pointer" />
    <div className="fishname">
      <h3>{name}</h3>
      <small>{`${weight}kgs`}</small>
    </div>
    <div className={pos === 1 || pos === 2 || pos === 5 || pos === 6 || pos === 9
      ? 'ovarlay lightblue' : 'overlay darkblue'}
    />
  </div>
);

animalCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onclick: PropTypes.func.isRequired,
  weight: PropTypes.isRequired,
  pos: PropTypes.number.isRequired,
};

export default animalCard;

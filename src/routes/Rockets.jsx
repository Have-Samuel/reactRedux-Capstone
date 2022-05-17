/* eslint-disable no-undef */
import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../components/rockets/Rocket';
import styles from './rockets.module.scss';

const {
  rocketsContainer,
} = styles;

function Rockets() {
  const rockets = useSelector((state) => state.rocketReducer);
  return (
    <div className={rocketsContainer}>
      {rockets && rockets.map((rocket) => (
        <Rocket key={rocket.rocketId} rocket={rocket} />
      ))}
    </div>
  );
}

export default Rockets;

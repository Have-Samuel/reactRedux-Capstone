import React from 'react';
import { useSelector } from 'react-redux';

function RocketProfile({ list }) {
  const rockets = useSelector((state) => state.rocketReducer);

  return (
    rockets && rockets.map(
      (rocket) => rocket.status && (
        <li key={rocket.rocketId} className={list}>
          {rocket.rocketName}
        </li>
      ),
    )
  );
}

export default RocketProfile;

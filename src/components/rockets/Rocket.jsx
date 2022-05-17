/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateRocketStatus } from '../../redux/rockets/activities';
import StatusRes from './StatusRes';
import styles from '../../routes/rockets.module.scss';

function Rocket({ rocket }) {
  const dispatch = useDispatch();
  const {
    rocketsImg, rocketName, rocketId, description, status,
  } = rocket;

  const handleStatus = () => dispatch(updateRocketStatus(rocketId, !status));
  return (
    <div key={rocketId} className={styles.rocketsItems}>
      <img className={styles.rocketsImg} src={rocketsImg} alt="Rocket setoff" />
      <div>
        <span className={styles.rocketsTitle}>
          {rocketName}
        </span>
        <StatusRes description={description} status={status} handleStatus={handleStatus} />
      </div>
    </div>
  );
}

export default Rocket;

/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import styles from './StatusRes.module.scss';

function Status({ status, handleStatus, description }) {
  const {
    btnRocket, btnLeave, statusActive, rocketsDescr,
  } = styles;

  if (status) {
    return (
      <>
        <span>
          <span className={statusActive}>Reserved</span>
          <span className={styles.rocketsDescr}>
            {description}
          </span>
        </span>
        <div>
          <button type="button" className={`${btnRocket} ${btnLeave}`} onClick={handleStatus}>
            Cancel Reservation
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <span className={rocketsDescr}>
          {description}
        </span>
      </div>
      <div>
        <button type="button" className={btnRocket} onClick={handleStatus}>
          Reservation
        </button>
      </div>
    </>
  );
}

export default Status;

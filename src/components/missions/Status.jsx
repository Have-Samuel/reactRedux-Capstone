/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Status.module.scss';

function Status({ status, handleStatus }) {
  const {
    btnMission, statusBg, btnLeave, statusActive,
  } = styles;

  if (status) {
    return (
      <>
        <td><span className={statusActive}>Active Member</span></td>
        <td>
          <button type="button" className={`${btnMission} ${btnLeave}`} onClick={handleStatus}>
            Leave Mission
          </button>
        </td>
      </>
    );
  }

  return (
    <>
      <td><span className={statusBg}>NOT A MEMBER</span></td>
      <td>
        <button type="button" className={btnMission} onClick={handleStatus}>
          Join Mission
        </button>
      </td>
    </>
  );
}

export default Status;

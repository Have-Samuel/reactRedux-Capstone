/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateMissionStatus } from '../../redux/missions/actions';
import Status from './Status';

function Mission({ mission }) {
  const dispatch = useDispatch();
  const {
    missionId, missionName, description, status,
  } = mission;

  const handleStatus = () => dispatch(updateMissionStatus(missionId, !status));

  return (
    <tr>
      <td>{missionName}</td>
      <td>{description}</td>
      <Status status={status} handleStatus={handleStatus} />
    </tr>
  );
}

export default Mission;

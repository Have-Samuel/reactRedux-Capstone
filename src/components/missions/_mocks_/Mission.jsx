/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { updateMissionStatus } from '../../../redux/missions/actions';
import Status from '../Status';

function Mission() {
  const mission = {
    missionId: '1',
    missionName: 'Teshome',
    description: 'adfasdf as fads f',
    status: true,
  };
  const dispatch = useDispatch();

  const handleStatus = () => dispatch(updateMissionStatus(mission.missionId, !mission.status));

  return (
    <tr>
      <td>{mission.missionName}</td>
      <td>{mission.description}</td>
      <Status status={mission.status} handleStatus={handleStatus} />
    </tr>
  );
}

export default Mission;

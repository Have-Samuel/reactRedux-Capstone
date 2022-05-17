import React from 'react';
import { useSelector } from 'react-redux';

function MissionProfile({ list }) {
  const missions = useSelector((state) => state.missionReducer);

  return (
    missions
    && missions.map(
      (mission) => mission.status && (
      <li key={mission.missionId} className={list}>
        {mission.missionName}
      </li>
      ),
    )
  );
}

export default MissionProfile;

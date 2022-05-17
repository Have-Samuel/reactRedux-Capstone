import React from 'react';
import { useSelector } from 'react-redux';
import Mission from '../components/missions/Mission';
import Thead from '../components/missions/Thead';
import styles from './Missions.module.scss';

function Missions() {
  const missions = useSelector((state) => state.missionReducer);

  const { table } = styles;

  return (
    <table className={table}>
      <thead>
        <Thead />
      </thead>
      <tbody>
        {missions && missions.map((mission) => (
          <Mission key={mission.mission_id} mission={mission} />
        ))}
      </tbody>
      <tfoot />
    </table>
  );
}

export default Missions;

import React from 'react';
import MissionProfile from './MissionProfile';
import RocketProfile from './RocketProfile';
import styles from './Myprofile.module.scss';

function Myprofile() {
  const {
    profileContainer, profiles, profile, list,
  } = styles;
  return (
    <div className={profileContainer}>
      <div className={profiles}>
        <h1>My Missions</h1>
        <ul className={profile}>
          <MissionProfile list={list} />
        </ul>
      </div>
      <div className={profiles}>
        <h1>My Rockets</h1>
        <ul className={profile}>
          <RocketProfile list={list} />
        </ul>
      </div>
    </div>
  );
}

export default Myprofile;

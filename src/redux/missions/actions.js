/* eslint-disable camelcase */
import { getMissions } from '../../API/services';
import { CHANGE_MISSION_STATUS, RETRIEVE_MISSIONS } from './types';

const retrieveMissions = () => async (dispatch) => {
  // Get missions from API
  const response = await getMissions();

  // Organizing Missions
  const missions = response.data.map((data) => ({
    missionId: data.mission_id,
    missionName: data.mission_name,
    description: data.description,
  }));

  // Add mission to the store
  dispatch({ type: RETRIEVE_MISSIONS, missions });
};

const updateMissionStatus = (id, status) => ({
  type: CHANGE_MISSION_STATUS,
  payload: { id, status },
});

export { retrieveMissions, updateMissionStatus };

/* eslint-disable default-param-last */
import { CHANGE_MISSION_STATUS, RETRIEVE_MISSIONS } from './types';

const missionReducer = (state = [], action) => {
  switch (action.type) {
    case RETRIEVE_MISSIONS:
      return action.missions;
    case CHANGE_MISSION_STATUS: {
      const { id, status } = action.payload;
      const newState = state.map((mission) => {
        if (mission.missionId !== id) {
          return mission;
        }
        return { ...mission, status };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionReducer;

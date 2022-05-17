/* eslint-disable default-param-last */
import { RETRIEVE_ROCKETS, CHANGE_ROCKET_STATUS } from './types';

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case RETRIEVE_ROCKETS:
      return action.rockets;
    case CHANGE_ROCKET_STATUS: {
      const { id, status } = action.payload;
      const newState = state.map((rocket) => {
        if (rocket.rocketId !== id) {
          return rocket;
        }
        return { ...rocket, status };
      });
      return newState;
    }
    default:
      return state;
  }
};

export default rocketReducer;

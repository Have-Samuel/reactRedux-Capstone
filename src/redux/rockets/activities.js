import { getRockets } from '../../API/services';
import { RETRIEVE_ROCKETS, CHANGE_ROCKET_STATUS } from './types';

const retrieveRockets = () => async (dispatch) => {
  // fetch rockets from the API
  const response = await getRockets();

  // organise Rockets
  const rockets = response.data.map((data) => ({
    rocketId: data.rocket_id,
    rocketName: data.rocket_name,
    description: data.description,
    rocketsImg: data.flickr_images[0],
  }));

  // combine data to the store
  dispatch({ type: RETRIEVE_ROCKETS, rockets });
};

const updateRocketStatus = (id, status) => ({
  type: CHANGE_ROCKET_STATUS,
  payload: { id, status },
});

export { updateRocketStatus, retrieveRockets };

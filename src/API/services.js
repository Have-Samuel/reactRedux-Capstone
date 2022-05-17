import { missionsAPI, rocketsAPI } from './APIs';

const getRockets = () => rocketsAPI.get();
const getMissions = () => missionsAPI.get();

export { getRockets, getMissions };

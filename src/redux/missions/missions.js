/* eslint-disable no-case-declarations */
import axios from 'axios';

const MISSIONS_RETRIEVED = 'app/missions/MISSIONS_RETRIEVED ';
const MISSION_JOINED = 'app/missions/MISSION_JOINED';
const MISSION_LEFT = 'app/missions/MISSION_LEFT';

const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case MISSIONS_RETRIEVED:
      return [...payload];

    case MISSION_JOINED:
      const newMissions = state.map((mission) => {
        if (mission.id !== payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return [...newMissions];
    case MISSION_LEFT:
      const updatedMissions = state.map((mission) => {
        if (mission.id !== payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      return [...updatedMissions];

    default:
      return state;
  }
};
export const leaveMissionActionCreator = (id) => ({
  type: MISSION_LEFT,
  payload: id,
});
export const leaveMission = (id) => (dispatch) => {
  try {
    dispatch(leaveMissionActionCreator(id));
    return Promise.resolve(id);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const joinMissionActionCreator = (id) => ({
  type: MISSION_JOINED,
  payload: id,
});
export const joinMission = (id) => (dispatch) => {
  try {
    dispatch(joinMissionActionCreator(id));
    return Promise.resolve(id);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const getMissionsActionCreator = (missions) => ({
  type: MISSIONS_RETRIEVED,
  payload: missions,
});
export const getMissions = () => async (dispatch) => {
  try {
    const res = await axios.get('https://api.spacexdata.com/v3/missions');
    const missions = [];
    res.data.forEach((element) => {
      missions.push({
        id: element.mission_id,
        name: element.mission_name,
        description: element.description,
      });
    });

    dispatch(getMissionsActionCreator(missions));
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};
export default reducer;

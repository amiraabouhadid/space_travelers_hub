/* eslint-disable no-case-declarations */
import axios from 'axios';

const GETMISSIONS = 'app/missions/GET_MISSIONS';
const JOINMISSION = 'app/missions/JOIN_MISSION';
const LEAVEMISSION = 'app/missions/LEAVE_MISSION';

const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GETMISSIONS:
      return [...payload];

    case JOINMISSION:
      const newMissions = state.map((mission) => {
        if (mission.id !== payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      return [...newMissions];
    case LEAVEMISSION:
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
  type: LEAVEMISSION,
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
  type: JOINMISSION,
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
  type: GETMISSIONS,
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

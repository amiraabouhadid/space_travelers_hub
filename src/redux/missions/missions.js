/* eslint-disable no-case-declarations */
import axios from 'axios';

const GETMISSIONS = 'app/missions/MISSIONS_RETRIEVED';
const JOINMISSION = 'app/missions/MISSION_JOINED';
const LEAVEMISSION = 'app/missions/MISSION_LEFT';

const reducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GETMISSIONS:
      let missionsSaved;
      if (localStorage.getItem('missions')) {
        missionsSaved = JSON.parse(localStorage.getItem('missions'));
        return [...missionsSaved];
      }
      localStorage.setItem('missions', JSON.stringify(payload));
      return [...payload];

    case JOINMISSION:
      const newMissions = state.map((mission) => {
        if (mission.id !== payload) {
          return mission;
        }
        return { ...mission, reserved: true };
      });
      localStorage.setItem('missions', JSON.stringify(newMissions));
      return [...newMissions];
    case LEAVEMISSION:
      const updatedMissions = state.map((mission) => {
        if (mission.id !== payload) {
          return mission;
        }
        return { ...mission, reserved: false };
      });
      localStorage.setItem('missions', JSON.stringify(updatedMissions));
      return [...updatedMissions];

    default:
      return state;
  }
};
export const leaveMission = (id) => (dispatch) => {
  try {
    dispatch({
      type: LEAVEMISSION,
      payload: id,
    });
    return Promise.resolve(id);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const joinMission = (id) => (dispatch) => {
  try {
    dispatch({
      type: JOINMISSION,
      payload: id,
    });
    return Promise.resolve(id);
  } catch (err) {
    return Promise.reject(err);
  }
};

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

    dispatch({
      type: GETMISSIONS,
      payload: missions,
    });
    return Promise.resolve(res);
  } catch (err) {
    return Promise.reject(err);
  }
};
export default reducer;

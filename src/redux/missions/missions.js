import axios from 'axios';

const GETMISSIONS = 'app/missions/MISSIONS_RETRIEVED';

const reducer = (missions = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GETMISSIONS:
      return [...payload];
    default:
      return missions;
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

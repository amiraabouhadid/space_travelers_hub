const ROCKETS_FETCHED = 'app/rockets/ROCKETS_FETCHED';

const fetchRockets = (rockets) => ({ type: ROCKETS_FETCHED, payload: rockets });

const reducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ROCKETS_FETCHED:
      return [...payload];
    default:
      return state;
  }
};

const getRockets = () => async (dispatch) => {
  await fetch('https://api.spacexdata.com/v3/rockets')
    .then((data) => data.json())
    .then((data) => {
      const rockets = [];
      data.forEach((rocket) => {
        rockets.push({
          id: rocket.id,
          name: rocket.rocket_name,
          description: rocket.description,
          image: rocket.flickr_images[0],
        });
      });

      dispatch(fetchRockets(rockets));
    });
};

export { getRockets };
export default reducer;

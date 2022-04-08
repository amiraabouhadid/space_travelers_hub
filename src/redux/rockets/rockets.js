const ROCKETS_FETCHED = 'app/rockets/ROCKETS_FETCHED';
const ROCKET_RESERVED = 'app/rockets/ROCKET_RESERVED';
const ROCKET_UNRESERVED = 'app/rockets/ROCKET_UNRESERVED';

const fetchRockets = (rockets) => ({ type: ROCKETS_FETCHED, payload: rockets });
const addReservation = (id) => ({ type: ROCKET_RESERVED, payload: id });
const removeReservation = (id) => ({ type: ROCKET_UNRESERVED, payload: id });

const reducer = (state = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case ROCKETS_FETCHED:
      return [...payload];
    case ROCKET_RESERVED:
      return [
        ...state.map((rocket) => {
          if (rocket.id !== payload) return rocket;
          return {
            ...rocket,
            reserved: true,
          };
        }),
      ];
    case ROCKET_UNRESERVED:
      return [
        ...state.map((rocket) => {
          if (rocket.id !== payload) return rocket;
          return {
            ...rocket,
            reserved: false,
          };
        }),
      ];
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
          wikipedia: rocket.wikipedia,
        });
      });

      dispatch(fetchRockets(rockets));
    });
};

export { getRockets, addReservation, removeReservation };
export default reducer;

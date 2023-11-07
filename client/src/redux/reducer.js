import { GET_DETAILS, GET_DRIVERS, GET_TEAMS } from "./actions/action-types";

let initialState = {
  allDrivers: [],
  allTeams: [],
  driverDetail: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload,
      };

    case GET_TEAMS:
      return {
        ...state,
        allTeams: action.payload,
      };

    case GET_DETAILS:
      return {
        ...state,
        driverDetail: { ...action.payload },
      };
    default:
      return state;
  }
}

export default rootReducer;

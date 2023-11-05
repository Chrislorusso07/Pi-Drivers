import { GET_DRIVERS } from "./actions/action-types";

let initialState = {
  allDrivers: [],
  allTeams: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;

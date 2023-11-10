import {
  GET_DETAILS,
  GET_DRIVERS,
  GET_TEAMS,
  PAGINATION,
  ALPHABETIC_ORDER,
  BIRTHDATE_ORDER,
  ORDER_FROM,
  SEARCH_DRIVERS,
  RESTORE_INITIAL_DRIVERS,
  FILTER_BY_TEAM,
} from "./actions/action-types";

let initialState = {
  allDrivers: [],
  allTeams: [],
  driverDetail: [],
  allDriversBackUp: [],
  currentPage: 1,
};

function rootReducer(state = initialState, action) {
  const ITEMS_PER_PAGE = 9;

  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        allDrivers: [...action.payload].slice(0, 9),
        allDriversBackUp: action.payload,
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

    case PAGINATION:
      const next_page = state.currentPage + 1;
      const prev_page = state.currentPage - 1;
      const firstIndex =
        action.payload === "next"
          ? next_page * ITEMS_PER_PAGE
          : prev_page * ITEMS_PER_PAGE;

      if (
        action.payload === "next" &&
        firstIndex >= state.allDriversBackUp.length
      )
        return state;
      if (action.payload === "prev" && prev_page < 0) return state;

      return {
        ...state,
        allDrivers: [...state.allDriversBackUp].splice(
          firstIndex,
          ITEMS_PER_PAGE
        ),
        currentPage: action.payload === "next" ? next_page : prev_page,
      };

    case ALPHABETIC_ORDER:
      const copy3 = [...state.allDrivers];
      const sortedDrivers = copy3.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (action.payload === "A-Z") {
          return nameA.localeCompare(nameB);
        } else if (action.payload === "Z-A") {
          return nameB.localeCompare(nameA);
        } else {
          return 0;
        }
      });

      return {
        ...state,
        allDrivers: sortedDrivers,
      };

    case BIRTHDATE_ORDER:
      const copy4 = [...state.allDrivers];
      const sortedDriversByBirthdate = copy4.sort((a, b) => {
        const dateA = new Date(a.date_of_birth);
        const dateB = new Date(b.date_of_birth);
        if (action.payload === "asc") {
          return dateA - dateB;
        } else if (action.payload === "desc") {
          return dateB - dateA;
        } else {
          return 0;
        }
      });

      return {
        ...state,
        allDrivers: sortedDriversByBirthdate,
      };

    case ORDER_FROM:
      const copy5 = [...state.allDriversBackUp];
      if (action.payload === "DB") {
        const driversFilteredDB = copy5.filter((dr) => isNaN(dr.id));

        if (driversFilteredDB.length === 0) {
          alert("No se encontraron conductores creados.");
          return state;
        }

        return {
          ...state,
          allDrivers: driversFilteredDB,
        };
      } else {
        const copy6 = [...state.allDriversBackUp];
        const driversFilteredAPI = copy6.filter((dr) => !isNaN(dr.id));

        return {
          ...state,
          allDrivers: driversFilteredAPI.slice(0, 9),
        };
      }

    case SEARCH_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload,
      };

    case RESTORE_INITIAL_DRIVERS:
      return {
        ...state,
        allDrivers: [...state.allDriversBackUp].slice(0, 9),
      };

    case FILTER_BY_TEAM:
      const filter15 = state.allDriversBackUp.filter((driver) =>
        driver.teams.includes(action.payload)
      );

      return {
        ...state,
        allDrivers: filter15,
      };

    default:
      return state;
  }
}

export default rootReducer;

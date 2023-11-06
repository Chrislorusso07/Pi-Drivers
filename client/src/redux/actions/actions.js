import axios from "axios";
import { GET_DRIVERS, GET_TEAMS } from "./action-types";

export function getDrivers() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/drivers");
      dispatch({
        type: GET_DRIVERS,
        payload: response.data,
      });
    } catch (error) {}
  };
}

export function getTeams() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/teams");
      dispatch({
        type: GET_TEAMS,
        payload: response.data,
      });
    } catch (error) {}
  };
}

export function postDriver(state) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/drivers", state);
    } catch (error) {}
  };
}

import axios from "axios";
import { GET_DRIVERS, GET_TEAMS, GET_DETAILS } from "./action-types";

export function getDrivers() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/drivers");
      const drivers = response.data;
      console.log(drivers, "DE ACA VIENE LA ACTION");
      dispatch({
        type: GET_DRIVERS,
        payload: drivers,
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

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const driverDetail = await axios.get(
        `http://localhost:3001/drivers/${id}`
      );
      console.log(driverDetail, "ACTIONS DETAIL ACA");
      if (driverDetail.data) {
        const driverData = {
          ...driverDetail.data,
        };
        dispatch({
          type: GET_DETAILS,
          payload: driverData,
        });
      } else {
        console.error("Conductor no encontrado con ID:", id);
      }
    } catch (error) {
      console.error("Error al obtener los detalles del conductor:", error);
    }
  };
};

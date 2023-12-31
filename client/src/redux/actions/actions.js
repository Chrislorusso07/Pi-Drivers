import axios from "axios";
import {
  GET_DRIVERS,
  GET_TEAMS,
  GET_DETAILS,
  PAGINATION,
  ALPHABETIC_ORDER,
  BIRTHDATE_ORDER,
  ORDER_FROM,
  SEARCH_DRIVERS,
  RESTORE_INITIAL_DRIVERS,
  FILTER_BY_TEAM,
} from "./action-types";

export function getDrivers() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/drivers");
      const drivers = response.data;
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

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      const driverDetail = await axios.get(
        `http://localhost:3001/drivers/${id}`
      );
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

export function changePage(order) {
  return async function (dispatch) {
    try {
      dispatch({
        type: PAGINATION,
        payload: order,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}

export const alphabeticOrder = (value) => ({
  type: ALPHABETIC_ORDER,
  payload: value,
});

export const birthdateOrder = (order) => {
  return {
    type: BIRTHDATE_ORDER,
    payload: order,
  };
};

export const orderFrom = (value) => ({
  type: ORDER_FROM,
  payload: value,
});

export const searchDrivers = (searchResults) => ({
  type: SEARCH_DRIVERS,
  payload: searchResults,
});

export const restoreInitialDrivers = (initialDrivers) => ({
  type: RESTORE_INITIAL_DRIVERS,
  payload: initialDrivers,
});

export function postDriver(state) {
  return async function (dispatch) {
    try {
      await axios.post("http://localhost:3001/drivers", state);
      alert("Conductor creado exitosamente!");
    } catch (error) {
      alert("El conductor no fue creado.");
    }
  };
}

export const filterByTeam = (selectedTeam) => ({
  type: FILTER_BY_TEAM,
  payload: selectedTeam,
});

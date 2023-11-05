import axios from "axios";
import { GET_DRIVERS } from "./action-types";

export function getDrivers() {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/drivers");
      dispatch({
        type: GET_DRIVERS,
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
}

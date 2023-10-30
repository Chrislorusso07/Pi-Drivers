const axios = require("axios");
const { Teams } = require("../db");

const getTeams = async (req, res) => {
  const teamsInDB = await Teams.findAll();

  if (teamsInDB.length === 0) {
    const response = await axios.get("http://localhost:5000/drivers");

    if (response.status === 200) {
      const teams = response.data
        .filter((driver) => driver.teams) // Filtrar los conductores que tienen la propiedad 'teams'
        .map((driver) => driver.teams.split(", "))
        .flat();

      // Remove duplicates from the array of teams
      const uniqueTeams = [...new Set(teams)];

      return res.json(uniqueTeams);
    } else {
      throw new Error("Error al obtener equipos desde la API");
    }
  } else {
    return res.json(teamsInDB);
  }
};
module.exports = getTeams;

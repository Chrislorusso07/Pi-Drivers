const { Teams } = require("../db");
const axios = require("axios");
const URL = "http://localhost:5000/drivers";

function cleanTeams(drivers) {
  const uniqueTeams = new Set();

  for (let i = 0; i < drivers.length; i++) {
    const driver = drivers[i];
    if (driver.teams) {
      const teamsArray = driver.teams.split(",");
      for (let j = 0; j < teamsArray.length; j++) {
        const team = teamsArray[j].trim();
        if (team.length > 0) {
          uniqueTeams.add(team);
        }
      }
    }
  }

  return Array.from(uniqueTeams);
}

const getAllTeams = async () => {
  const response = await axios(URL);
  const teams = cleanTeams(response.data);

  const teamsInDB = await Teams.findAll();

  if (teamsInDB.length === 0) {
    await Promise.all(
      teams.map(async (team) => {
        try {
          const [newTeam, created] = await Teams.findOrCreate({
            where: { name: team },
            defaults: { name: team },
          });

          if (created) {
            console.log(`Equipo creado: ${team}`);
          } else {
            console.log(`Equipo ya existente: ${team}`);
          }
        } catch (error) {
          console.error(`Error al crear el equipo ${team}:`, error);
        }
      })
    );
  }

  return teams;
};

const getTeams = async (req, res) => {
  try {
    const response = await getAllTeams();
    res.status(203).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getTeams };

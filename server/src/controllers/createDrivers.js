const { Op } = require("sequelize");
const { Driver, Teams } = require("../db");

const createDrivers = async (req, res) => {
  const {
    name,
    last_name,
    description,
    nationality,
    date_of_birth,
    teams,
    img,
  } = req.body;
  if (
    !name ||
    !last_name ||
    !description ||
    !teams ||
    !date_of_birth ||
    !nationality
  ) {
    throw Error("Missing data. Por favor complete los campos");
  }

  try {
    const postDriver = await Driver.create({
      name,
      last_name,
      description,
      nationality,
      date_of_birth,
      teams,
      img,
    });
    teams.forEach(async (el) => {
      let teams = await Teams.findOne({ where: { name: el } });
      await postDriver.addTeams(teams);
    });
    if (!teams.length)
      throw Error(`Could not find the country named: ${teams}`);

    res.status(201).send("Driver created successfully");
  } catch (error) {
    console.error(error);
    throw Error("Could not create driver");
  }
};

module.exports = createDrivers;

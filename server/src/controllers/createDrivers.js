const { Driver, Teams } = require("../db");

const createDriver = async (req, res) => {
  const {
    name,
    last_name,
    description,
    img,
    date_of_birth,
    nationality,
    teams,
  } = req.body;
  if (
    !name ||
    !description ||
    !date_of_birth ||
    !nationality ||
    !last_name ||
    !teams
  ) {
    throw Error("Missing data. Por favor complete los campos requeridos");
  }

  try {
    const postDriver = await Driver.create({
      name,
      description,
      img,
      nationality,
      date_of_birth,
      last_name,
    });
    teams.forEach(async (el) => {
      let team = await Teams.findOne({ where: { name: el } });
      if (team) {
        await postDriver.addTeam(team);
      }
    });

    res
      .status(201)
      .json({ message: "Driver created successfully", driver: postDriver });
  } catch (error) {
    console.error(error);
    throw Error("Could not create driver");
  }
};

module.exports = createDriver;

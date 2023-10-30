const axios = require("axios");
const { Driver } = require("../db");

async function getDrivers(req, res) {
  try {
    const { data } = await axios.get("http://localhost:5000/drivers");
    const driversItem = data?.map((d) => ({
      name: d.name.forename,
      last_name: d.name.surname,
      description: d.description,
      nationality: d.nationality,
      teams: d.teams,
      date_of_birth: d.dob,
      img: d.image.url,
    }));

    for (let i = 0; i < driversItem.length; i++) {
      const d = driversItem[i];

      const newDriver = await Driver.findOrCreate({
        where: { name: d.name, last_name: d.last_name },
        defaults: {
          description: d.description,
          img: d.img,
          nationality: d.nationality,
          date_of_birth: d.date_of_birth,
        },
      });
    }
    res.status(200).json(driversItem);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
}

module.exports = getDrivers;

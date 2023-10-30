const axios = require("axios");
const { Driver, Teams } = require("../db");

const getIdDrivers = async (id) => {
  if (id.length < 5) {
    const response = await axios.get(`http://localhost:5000/drivers/${id}`);
    const data = response.data;

    const idData = {
      id: data.id,
      name: data.name.forename,
      lastname: data.name.surname,
      description: data.description,
      image: data.image.url,
      nationality: data.nationality,
      date_of_birth: data.dob,
      teams: data.teams,
    };

    return idData;
  } else {
    const searchById = await Driver?.findByPk(id, {
      include: {
        model: Teams,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });
    return searchById;
  }
};

module.exports = getIdDrivers;

const { Driver, Teams } = require("../db");

const getIdDrivers = async (req, res) => {
  try {
    const { idDriver } = req.params;

    const response = await Driver.findByPk(idDriver, {
      include: {
        model: Teams,
        attributes: ["name"],
      },
    });

    if (!response) {
      return res.status(404).json({ error: "Could not find Driver" });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getIdDrivers;

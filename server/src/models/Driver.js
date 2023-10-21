const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Driver", {
    ID: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    img: {
      type: DataTypes.STRING,
    },
    nacionality: {
      type: DataTypes.STRING,
    },
    date_of_birth: {
      type: DataTypes.DATE,
    },
    create: { type: DataTypes.BOOLEAN, defaultValue: false },
  });
};

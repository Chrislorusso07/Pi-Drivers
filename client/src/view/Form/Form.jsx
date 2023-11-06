import React, { useEffect, useState } from "react";
import { getTeams } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";

function Form() {
  const [driverData, setDriverData] = useState({
    name: "",
    last_name: "",
    nationality: "",
    img: "",
    date_of_birth: "",
    description: "",
    teams: [],
  });

  const dispatch = useDispatch();

  const allTeams = useSelector((state) => state.allTeams);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverData({ ...driverData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(driverData);
  };

  return (
    <div>
      <h1>Crea tu conductor!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          name="name"
          value={driverData.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="last_name">Apellido:</label>
        <input
          type="text"
          name="last_name"
          value={driverData.last_name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="nationality">Nacionalidad:</label>
        <input
          type="text"
          name="nationality"
          value={driverData.nationality}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="img">Imagen:</label>
        <input
          type="text"
          name="img"
          value={driverData.img}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="date_of_birth">Fecha de Nacimiento:</label>
        <input
          type="text"
          name="date_of_birth"
          value={driverData.date_of_birth}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="description">Descripción:</label>
        <textarea
          name="description"
          value={driverData.description}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="teams">Escuderías:</label>
        <select name="teams" onChange={handleChange}>
          {allTeams.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>

        <br />
        <button type="submit">Crear Conductor</button>
      </form>
    </div>
  );
}

export default Form;

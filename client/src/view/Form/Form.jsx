import React, { useState } from "react";

function Form() {
  const [driverData, setDriverData] = useState({
    nombre: "",
    apellido: "",
    nacionalidad: "",
    imagen: "",
    fechaNacimiento: "",
    descripcion: "",
    escuderias: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDriverData({ ...driverData, [name]: value });
  };

  const handleEscuderiasChange = (e) => {
    const { value } = e.target;
    setDriverData({
      ...driverData,
      escuderias: [...driverData.escuderias, value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(driverData);
  };

  return (
    <div>
      <h1>Crea tu conductor!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          name="nombre"
          value={driverData.nombre}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="apellido">Apellido:</label>
        <input
          type="text"
          name="apellido"
          value={driverData.apellido}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="nacionalidad">Nacionalidad:</label>
        <input
          type="text"
          name="nacionalidad"
          value={driverData.nacionalidad}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="imagen">Imagen:</label>
        <input
          type="text"
          name="imagen"
          value={driverData.imagen}
          onChange={handleChange}
        />
        <br />´<label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
        <input
          type="text"
          name="fechaNacimiento"
          value={driverData.fechaNacimiento}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="descripcion">Descripción:</label>
        <textarea
          name="descripcion"
          value={driverData.descripcion}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="escuderias">Escuderías:</label>
        <select name="escuderias" onChange={handleEscuderiasChange}>
          <option value="">Seleccionar</option>
          <option value="Ferrari">Ferrari</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Red Bull">Red Bull</option>
          {/* Agrega más opciones aquí */}
        </select>
        <ul>
          {driverData.escuderias.map((escuderia, index) => (
            <li key={index}>{escuderia}</li>
          ))}
        </ul>
        <br />
        <button type="submit">Crear Conductor</button>
      </form>
    </div>
  );
}

export default Form;

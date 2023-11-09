import React, { useEffect, useState } from "react";
import { getTeams, postDriver } from "../../redux/actions/actions";
import { useSelector, useDispatch } from "react-redux";
import "./Form.css";

function Form() {
  const [state, setState] = useState({
    name: "",
    last_name: "",
    nationality: "",
    img: "",
    date_of_birth: "",
    description: "",
    teams: [],
  });

  const urlPattern = /^(https?:\/\/)?([\w\d.-]+)\.([a-z.]{2,6})([/\w\d.-]*)*/;

  const dispatch = useDispatch();

  const allTeams = useSelector((state) => state.allTeams);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  const handleChange = (event) => {
    if (event.target.name === "teams") {
      setState({
        ...state,
        [event.target.name]: [...state.teams, event.target.value],
      });
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }

    validate(event.target.name, {
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const [errors, setErrors] = useState({
    name: "Campo requerido.",
    last_name: "Campo requerido.",
    nationality: "Campo requerido.",
    img: "",
    date_of_birth: "Campo requerido.",
    description: "Campo requerido.",
    teams: "",
  });

  const validate = (name, state) => {
    switch (name) {
      case "name":
        if (state.name === "") {
          setErrors({ ...errors, name: "Campo requerido." });
        } else if (state.name.length > 20) {
          setErrors({ ...errors, name: "Nombre demasiado largo." });
        } else if (!/^[a-zA-Z\s]*$/.test(state.name)) {
          setErrors({
            ...errors,
            name: "El nombre debe contener solo letras y espacios.",
          });
        } else {
          setErrors({ ...errors, name: "" });
        }
        break;

      case "last_name":
        if (state.last_name === "") {
          setErrors({ ...errors, last_name: "Campo requerido." });
        } else if (state.last_name.length > 20) {
          setErrors({ ...errors, last_name: "Apellido demasiado largo." });
        } else if (!/^[a-zA-Z\s]*$/.test(state.last_name)) {
          setErrors({
            ...errors,
            last_name: "El apellido debe contener solo letras y espacios.",
          });
        } else {
          setErrors({ ...errors, last_name: "" });
        }
        break;

      ///
      case "nationality":
        if (state.nationality === "") {
          setErrors({ ...errors, nationality: "Campo requerido." });
        } else if (state.nationality.length > 20) {
          setErrors({
            ...errors,
            nationality: "Nacionalidad demasiada largo.",
          });
        } else if (!/^[a-zA-Z\s]*$/.test(state.nationality)) {
          setErrors({
            ...errors,
            nationality:
              "La nacionalidad debe contener solo letras y espacios.",
          });
        } else {
          setErrors({ ...errors, nationality: "" });
        }
        break;

      case "description":
        if (state.description === "")
          setErrors({ ...errors, description: "Campo requerido." });
        else setErrors({ ...errors, description: "" });
        break;

      case "date_of_birth":
        if (state.date_of_birth === "") {
          setErrors({ ...errors, date_of_birth: "Campo requerido." });
        } else {
          const datePattern = /^\d{4}-\d{2}-\d{2}$/;
          if (!datePattern.test(state.date_of_birth)) {
            setErrors({
              ...errors,
              date_of_birth: "El formato debe ser YYYY-MM-DD",
            });
          } else {
            setErrors({ ...errors, date_of_birth: "" });
          }
        }
        break;

      case "img":
        if (!urlPattern.test(state.img)) {
          setErrors({ ...errors, img: "Ingrese una URL válida." });
        } else {
          setErrors({ ...errors, img: "" });
        }
        break;

      case "teams":
      default:
        break;
    }
  };

  ///////
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDriver(state));
  };

  return (
    <div className="form-container">
      <h1>Crea tu conductor!</h1>
      {console.log(state)}
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" name="name" onChange={handleChange} />
        <label className="form-errors">{errors.name}</label>
        <br />
        <label htmlFor="last_name">Apellido:</label>
        <input type="text" name="last_name" onChange={handleChange} />
        <label className="form-errors">{errors.last_name}</label>
        <br />
        <label htmlFor="nationality">Nacionalidad:</label>
        <input type="text" name="nationality" onChange={handleChange} />
        <label className="form-errors">{errors.nationality}</label>
        <br />
        <label htmlFor="img">Imagen:</label>
        <input type="text" name="img" onChange={handleChange} />
        <label className="form-errors">{errors.img}</label>
        <br />
        <label htmlFor="date_of_birth">Fecha de Nacimiento: (YYYY-MM-DD)</label>
        <input type="text" name="date_of_birth" onChange={handleChange} />
        <label className="form-errors">{errors.date_of_birth}</label>
        <br />
        <label className="descripcion" htmlFor="description">
          Descripción:
        </label>
        <textarea name="description" onChange={handleChange} />
        <label className="form-errors">{errors.description}</label>
        <br />
        <label htmlFor="teams">Escuderías:</label>
        <select name="teams" onChange={handleChange}>
          {allTeams.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
        <label className="form-errors">{errors.teams}</label>
        <br />
        <button type="submit">Crear Conductor</button>
      </form>
    </div>
  );
}

export default Form;

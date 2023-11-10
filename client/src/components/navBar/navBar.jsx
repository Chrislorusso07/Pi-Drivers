import { Link } from "react-router-dom";
import "./navBar.css";
import {
  alphabeticOrder,
  birthdateOrder,
  orderFrom,
  restoreInitialDrivers,
  filterByTeam,
  getTeams,
} from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../searchBar/searchBars";
import { useEffect } from "react";

const NavBar = () => {
  const dispatch = useDispatch();
  const alphabeticOrderr = (event) => {
    const value = event.target.value;
    if (value === "A-Z") {
      dispatch(alphabeticOrder("A-Z"));
    } else {
      dispatch(alphabeticOrder("Z-A"));
    }
  };

  const allTeams = useSelector((state) => state.allTeams);

  useEffect(() => {
    dispatch(getTeams());
  }, [dispatch]);

  const birthdateOrderr = (event) => {
    const value = event.target.value;
    if (value === "asc") {
      dispatch(birthdateOrder("asc"));
    } else {
      dispatch(birthdateOrder("desc"));
    }
  };

  const resetFilters = () => {
    dispatch(restoreInitialDrivers());
  };

  const orderFromm = (event) => {
    const value = event.target.value;
    dispatch(orderFrom(value));
  };

  const filterTeam = (event) => {
    dispatch(filterByTeam(event.target.value));
  };

  return (
    <div className="navbar">
      <select onChange={alphabeticOrderr}>
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </select>
      <SearchBar></SearchBar>
      <div className="edad">
        <label htmlFor="date">EDAD</label>
        <select id="date" onChange={birthdateOrderr}>
          <option value="asc">Mayor a menor</option>
          <option value="desc">Menor a mayor</option>
        </select>
      </div>

      <select onChange={orderFromm}>
        <option value="API">Originales</option>
        <option value="DB">Creados</option>
      </select>

      <select name="filterTeam" onChange={filterTeam}>
        <option value="">Selecciona un equipo</option>{" "}
        {allTeams.map((team) => (
          <option key={team} value={team}>
            {team}
          </option>
        ))}
      </select>

      <Link to={"/home"} className="home">
        HOME
      </Link>
      <Link to={"/create"} className="crear">
        CREAR
      </Link>
      <button onClick={resetFilters}>Restablecer Filtros</button>
      <Link to={"/"} className="salir">
        SALIR
      </Link>
    </div>
  );
};

export default NavBar;

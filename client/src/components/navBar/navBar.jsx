import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={"/home"} className="home">
        HOME
      </Link>
      <Link to={"/create"} className="crear">
        CREAR
      </Link>
      <Link to={"/"} className="salir">
        SALIR
      </Link>
    </div>
  );
};

export default NavBar;

import { Link } from "react-router-dom";
import "./landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1>Bienvenidos a la Formula 1!</h1>
        <Link to={"/home"} className="enter-link">
          <button className="entrar"> Entrar </button>
        </Link>
      </div>
      <footer className="footer">
        <p>Todos los derechos reservados &copy; 2023</p>
      </footer>
    </div>
  );
};

export default Landing;

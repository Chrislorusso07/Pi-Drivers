import "./card.css";
import { NavLink } from "react-router-dom";

const Card = ({ name, image, teams, id, last_name }) => {
  return (
    <NavLink to={`/drivers/${id}`} className="cardlink">
      <div className="card-container">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-apellido">{last_name}</h2>
        <h3 className="card-subtitle">{teams}</h3>
        <img className="card-image" src={image} alt={name} />
      </div>
    </NavLink>
  );
};

export default Card;

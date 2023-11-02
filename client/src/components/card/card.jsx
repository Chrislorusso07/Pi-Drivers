import "./card.css";
import { NavLink } from "react-router-dom";

const Card = ({ name, image, teams, id }) => {
  return (
    <NavLink to={`/drivers/${id}`} className="cardlink">
      <div className="card-container">
        <h1 className="card-title">{name}</h1>
        <h3 className="card-subtitle">{teams}</h3>
        <img className="card-image" src={image} alt={name} />
      </div>
    </NavLink>
  );
};

export default Card;

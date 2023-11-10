import "./card.css";
import { NavLink } from "react-router-dom";

const Card = ({ name, nationality, image, teams, id, last_name }) => {
  return (
    <NavLink to={`/drivers/${id}`} className="cardlink">
      <div className="card-container">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-apellido">{last_name}</h2>
        <h3 className="card-subtitle">{teams.join(", ")}</h3>
        <h3>{nationality}</h3>
        {image ? (
          <img className="card-image" src={image} alt={name} />
        ) : (
          <img
            className="card-image"
            src={
              "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2020/8/1/uav3tfc0rc3jj6mvpqmh/max-verstappen-casco"
            }
            alt={name}
          />
        )}
      </div>
    </NavLink>
  );
};

export default Card;

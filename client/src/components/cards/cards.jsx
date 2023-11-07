import Card from "../card/card";
import "./cards.css";

const Cards = ({ drivers }) => {
  return (
    <div className="Container">
      {drivers.map((driver) => (
        <Card
          name={driver.name}
          last_name={driver.last_name}
          image={driver.img}
          teams={driver.teams}
          key={driver.id}
          id={driver.id}
          nationality={driver.nationality}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;

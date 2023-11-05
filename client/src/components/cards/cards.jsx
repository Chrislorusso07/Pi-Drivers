import Card from "../card/card";

const Cards = ({ allDrivers }) => {
  return (
    <div className="Container">
      {allDrivers.map((c) => (
        <Card
          name={c.name}
          last_name={c.last_name}
          image={c.img}
          teams={c.teams}
          key={c.id}
          id={c.id}
        ></Card>
      ))}
    </div>
  );
};

export default Cards;

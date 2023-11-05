import { useEffect } from "react";
import Cards from "../../components/cards/cards";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions/actions";
import React from "react";

const Home = () => {
  const dispatch = useDispatch();

  const allDrivers = useSelector((state) => state.allDrivers);

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  return (
    <div>
      <Cards allDrivers={allDrivers}></Cards>
    </div>
  );
};
export default Home;

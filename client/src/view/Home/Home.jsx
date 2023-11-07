import { useEffect } from "react";
import Cards from "../../components/cards/cards";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers } from "../../redux/actions/actions";
import React from "react";
import "./home.css";

const Home = () => {
  const allDrivers = useSelector((state) => state.allDrivers);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrivers());
  }, []);

  return (
    <div>
      <Cards drivers={allDrivers}></Cards>
    </div>
  );
};
export default Home;

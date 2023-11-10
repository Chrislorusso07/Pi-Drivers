import { useEffect } from "react";
import Cards from "../../components/cards/cards";
import { useDispatch, useSelector } from "react-redux";
import { changePage, getDrivers } from "../../redux/actions/actions";
import React from "react";

import "./home.css";

const Home = () => {
  const allDrivers = useSelector((state) => state.allDrivers);

  const currentPage = useSelector((state) => state.currentPage);

  const dispatch = useDispatch();

  useEffect(() => {
    if (allDrivers.length === 0) {
      dispatch(getDrivers());
      dispatch(changePage("current", 0));
    }
  }, []);

  const pagination = (event) => {
    dispatch(changePage(event.target.name));
  };

  return allDrivers.length === 0 ? (
    <h1>Cargando datos</h1>
  ) : (
    <div>
      <div className="paginacion">
        <button onClick={pagination} name="prev">
          {"<<"}
        </button>
        <div>
          <h3>{currentPage + 1}</h3>
        </div>
        <button onClick={pagination} name="next">
          {">>"}
        </button>
      </div>
      <Cards drivers={allDrivers}></Cards>
    </div>
  );
};
export default Home;

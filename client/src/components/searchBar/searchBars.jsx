import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  searchDrivers,
  restoreInitialDrivers,
} from "../../redux/actions/actions";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const allDrivers = useSelector((state) => state.allDrivers);
  const allDriversInitial = useSelector((state) => state.allDriversBackUp);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === "") {
      // Si el término de búsqueda está vacío, restaura la lista inicial de conductores
      dispatch(restoreInitialDrivers(allDriversInitial));
    } else {
      // Filtra los conductores basados en el término de búsqueda en name o last_name
      const filteredDrivers = allDrivers.filter(
        (driver) =>
          driver.name.toLowerCase().includes(value.toLowerCase()) ||
          driver.last_name.toLowerCase().includes(value.toLowerCase())
      );
      dispatch(searchDrivers(filteredDrivers));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar conductores"
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./view/Home";
import Landing from "./view/Landing";
import Form from "./view/Form";
import Detail from "./view/Detail";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/" ? <NavBar></NavBar> : null}
      <Routes>
        <Route
          path="/"
          element={<AcitividadDetalle></AcitividadDetalle>}
        ></Route>
        <Route path="/countries/:id" element={<Detail></Detail>}></Route>
        <Route path="/create" element={<Form />}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
    </div>
  );
}

export default App;

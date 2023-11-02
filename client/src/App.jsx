import { Routes, Route } from "react-router-dom";
import Home from "./view/Home/Home";
import Form from "./view/Form/Form";
import Landing from "./view/Landing/Landing";
import Detail from "./view/Detail/Detail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/drivers/:id" element={<Detail></Detail>}></Route>
        <Route path="/create" element={<Form />}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/" element={<Landing></Landing>}></Route>
      </Routes>
    </div>
  );
}

export default App;

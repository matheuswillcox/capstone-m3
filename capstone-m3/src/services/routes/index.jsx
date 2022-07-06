import { Routes, Route } from "react-router-dom";
import Dashboard from "../../pages/dashboard";
import Home from "../../pages/home";
import Register from "../../pages/register";
import Login from "../../pages/login";
import Store from "../../pages/store";

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/store" element={<Store></Store>}></Route>
    </Routes>
  );
}

export default Rotas;

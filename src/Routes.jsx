import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/LoginPage";
import Registration from "./pages/Registration";
import Layout from "./Layout";

const Routers = () => {
   return (
      <Routes>
         <Route element={<Layout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
         </Route>
      </Routes>
   );
};

export default Routers
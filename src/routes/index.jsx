import { Routes, Route } from "react-router-dom";
import Home from "../components/pages/Home/Home";
import Login from "../components/pages/Login/Login";

const MainRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    );
};

export default MainRoutes;
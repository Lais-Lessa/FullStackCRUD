import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login/login";
import { RegisterForm } from "../pages/RegisterPage/RegisterForm";
import { HomePage } from "../pages/HomePage/HomePage";


const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<HomePage />} />
    </Routes>
  );
};

export default RoutesMain;
// import React from "react";
import { Routes, Route } from "react-router-dom";
// import Loader from "./components/loader";
import Home from "./pages/home";
import Tratamento from "./pages/tratamento";
import ComoFunciona from "./pages/comoFunciona";
import QuemSomos from "./pages/quemSomos";
import NotFound from "./pages/notFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/QuemSomos" element={<QuemSomos />} />
      <Route path="/Tratamento" element={<Tratamento />} />
      <Route path="/ComoFunciona" element={<ComoFunciona />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;

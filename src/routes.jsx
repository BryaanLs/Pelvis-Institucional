// import React from "react";
import { Routes, Route } from "react-router-dom";
// import Loader from "./components/loader";
import Home from "./pages/home";
import Tratamento from "./pages/tratamento";
import ComoFunciona from "./pages/comoFunciona";
import QuemSomos from "./pages/quemSomos";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="https://demo-pelvis.netlify.apphttps://demo-pelvis.netlify.app/QuemSomos"
        element={<QuemSomos />}
      />
      <Route
        path="https://demo-pelvis.netlify.app/Tratamento"
        element={<Tratamento />}
      />
      <Route
        path="https://demo-pelvis.netlify.app/ComoFunciona"
        element={<ComoFunciona />}
      />
    </Routes>
  );
};

export default AppRoutes;

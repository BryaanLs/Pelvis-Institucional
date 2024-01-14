// import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Tratamento from "./pages/tratamento";
import ComoFunciona from "./pages/comoFunciona";
import QuemSomos from "./pages/quemSomos";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";
const NotFound = lazy(() => import("./pages/notFound"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/QuemSomos" element={<QuemSomos />} />
      <Route path="/Tratamento" element={<Tratamento />} />
      <Route path="/ComoFunciona" element={<ComoFunciona />} />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default AppRoutes;

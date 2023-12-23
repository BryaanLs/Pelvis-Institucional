import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// eslint-disable-next-line react-refresh/only-export-components
const App = React.lazy(() => import("./App.jsx"));
import AppRoutes from "./routes.jsx";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/loader/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback={<Loader />}>
      <BrowserRouter>
        <AppRoutes />
        <App />
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);

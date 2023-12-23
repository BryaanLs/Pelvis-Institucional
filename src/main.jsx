import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
// eslint-disable-next-line react-refresh/only-export-components
const App = React.lazy(() => import("./App.jsx"));

import { BrowserRouter } from "react-router-dom";
import Loader from "./components/loader/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        <App />
      </React.Suspense>
    </BrowserRouter>
  </React.StrictMode>
);

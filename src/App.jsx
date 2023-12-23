import { BrowserRouter } from "react-router-dom";
import FixedButton from "./components/fixedButton";
import Footer from "./components/footer";
import Header from "./components/header";
import AppRoutes from "./routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <Header />
        <Footer />
        <FixedButton />
      </BrowserRouter>
    </>
  );
};

export default App;

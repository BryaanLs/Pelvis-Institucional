import FixedButton from "./components/fixedButton";
import Footer from "./components/footer";
import Header from "./components/header";
import AppRoutes from "./routes";

const App = () => {
  return (
    <>
      <AppRoutes />
      <Header />
      <Footer />
      <FixedButton />
    </>
  );
};

export default App;

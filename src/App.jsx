import FixedButton from "./components/fixedButton";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Footer />
      <FixedButton />
    </>
  );
};

export default App;

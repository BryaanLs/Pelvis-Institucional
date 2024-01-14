import { lazy, Suspense } from "react";
const FixedButton = lazy(() => import("./components/fixedButton"));
// import FixedButton from "./components/fixedButton";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scrollToTop";
import Loader from "./components/loader";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Footer />
      <Suspense fallback={<Loader />}>
        <FixedButton />
      </Suspense>
    </>
  );
};

export default App;

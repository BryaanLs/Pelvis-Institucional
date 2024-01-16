import { lazy, Suspense } from "react";
const FixedButton = lazy(() => import("./components/fixedButton"));
// import FixedButton from "./components/fixedButton";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/scrollToTop";
import ScrollToTarget from "./components/scrollToTarget";
import Loader from "./components/loader";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <ScrollToTarget />
      <Header />
      <Footer />
      <Suspense fallback={<Loader />}>
        <FixedButton />
      </Suspense>
    </>
  );
};

export default App;

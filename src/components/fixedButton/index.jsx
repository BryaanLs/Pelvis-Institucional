import "./styles.css";
import { lazy, Suspense } from "react";
const Lottie = lazy(() => import("lottie-react"));
import Loader from "../loader";
import animationData from "../../lottie/whatsapp.json";

const FixedButton = () => {
  return (
    <a className="whatsBtn" href="#">
      <Suspense fallback={<Loader />}>
        <Lottie animationData={animationData} />
      </Suspense>
    </a>
  );
};

export default FixedButton;

/* eslint-disable react/jsx-no-target-blank */
import "./styles.css";
import { lazy, Suspense } from "react";
const Lottie = lazy(() => import("lottie-react"));
import Loader from "../loader";
import animationData from "../../lottie/whatsapp.json";

const FixedButton = () => {
  return (
    <a
      className="whatsBtn"
      href="https://wa.me/+5511913112992?text=Olá! Gostaria de mais informações. Estou buscando a clínica porque…"
      target="_blank"
    >
      <Suspense fallback={<Loader />}>
        <Lottie animationData={animationData} />
      </Suspense>
    </a>
  );
};

export default FixedButton;

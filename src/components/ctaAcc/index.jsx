/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import "./styles.css";

const CtaAcc = ({ href, aText, img }) => {
  return (
    <div className="ctaAcc">
      <a href={href} target="_blank">
        {aText}
        <img
          src={img}
          alt="Logo do whatsapp"
          width="29"
          height="29"
          loading="lazy"
        />
      </a>
    </div>
  );
};

export default CtaAcc;

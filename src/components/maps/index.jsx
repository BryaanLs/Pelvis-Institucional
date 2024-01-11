import "./styles.css";

const Maps = () => {
  return (
    <div className="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.7811035078316!2d-46.69689742384501!3d-23.612182163462876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce573422e3ce3f%3A0xf18457c7bf00ec3f!2sPELVIE%20-%20Fisioterapia%20P%C3%A9lvica%20Funcional!5e0!3m2!1spt-BR!2sbr!4v1699669415813!5m2!1spt-BR!2sbr"
        width="600"
        height="400"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="localização da PELVIE em São Paulo"
      ></iframe>
    </div>
  );
};

export default Maps;

import React from "react";
import "./Nosotros.css";
import imgfisiocinco from "../../Assets/imgfisiocinco.webp";

const Nosotros = () => {
  return (
    <section>
      <div className="container">
        <div className="row p-lg-5 p-xl-5 p-4 align-items-center">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <h3 className="text-dark fw-bolder">Quienes somos</h3>
            <p className="m-0 mt-2 w-100">
              Todo el equipo de fisioterapeutas de FISIO-ROQUE es personal
              titulado, lo que garantiza que todos los servicios ofrecidos en
              nuestras clínicas se desarrollen con altos conocimientos, calidad
              y por supuesto una atención personalizada. El único centro
              especializado en Terapia física y terapia Cardio-Respiratoria en
              la Ciudad de Chimbote.
            </p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 pt-3 pt-xl-0 pt-lg-0">
            <img src={imgfisiocinco} alt="" className="d-block mx-auto rounded img-fluid shadow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;

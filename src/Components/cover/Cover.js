import React from 'react';
import "./Cover.css";
import videodefisioterapia from "../../Assets/videodefisioterapia.mp4";
import audiohtml from'../../Assets/audiohtml.mp3';

const Cover = () => {
  return (
    <div className='cover-container' id="hola">

<video className='video' src={videodefisioterapia} autoPlay loop muted/>


<h1>Fisio-Roque</h1>
<p>Terapia Fisica | Terapia Respiratoria | Terapia de Rehabilitacion </p>

<button className="btn btn-outline-primary" type="submit">SEPARA TU CITA</button>


    </div>
  )
}

export default Cover
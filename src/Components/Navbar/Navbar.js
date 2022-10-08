import React from 'react';
import "./Navbar.css" ;
import logocuatro from '../../Assets/logocuatro.png'


const Navbar = ({isScrolling}) => {

    const toTheTop =()=> {
        window.scrollTo({
            top: 0,
            left:0,
            behavior: "smooth"});}

  return (
<nav className={`navbar ${ isScrolling > 20 ? "scrolling": null}`}>

    <div className='navbar-logo' onClick={toTheTop}>

  <nav className="navbar navbar-expand-lg .bg-dark">
  <div className="container-fluid"> 
   <img  src={logocuatro} alt="logotipo" width={200}/> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
      <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active text-white" aria-current="page" href="#">Nosotros</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Servicios</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">Testimonios </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
 
     </div>
  </nav>
    )
}
export default Navbar
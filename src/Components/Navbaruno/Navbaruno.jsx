import React, { useState, useEffect } from 'react';
import BurguerButton from './BurguerButton.jsx';
import './Navbaruno.css';
import { useAuth0 } from '@auth0/auth0-react';
import useObserver from '../../hooks/useObserver.js';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbaruno() {

  const [observe, setElements, entries] = useObserver({
    threshold: 0.100,
    root: null
  })


  const [prueba, setPrueba] = useState(true)

  useEffect(() => {
    const intersector = document.querySelectorAll("#hola")
    console.log(intersector)
    setElements(intersector)
  }, [setElements])

  useEffect(() => {
    entries.forEach(element => {
      setPrueba(element.isIntersecting)
    });
  }, [entries, observe])




  const { loginWithRedirect } = useAuth0();

  const [estado, setEstado] = useState(false)
  const [clicked, setClicked] = useState(false)
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked)
  }

  const abrirHamburguesa = () => {
    setEstado(!estado)
  }
  return (
    <>
      <Navbar className={` ${!prueba ? 'bg-danger': "bg-transparent"} position-fixed w-100`} expand="lg" style={{zIndex: "10000"}}>
        <Container fluid>
          <Navbar.Brand href="#"><img src="https://ca.aceaperu.com/wp-content/uploads/2022/10/logoblanco.png" alt="" width={200} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto centrar-nav">
              <Nav.Link href="#action1" className='fw-bolder text-white fs-5'>Tienda</Nav.Link>
              <Nav.Link href="#action2" className='fw-bolder text-white fs-5'>Servicios</Nav.Link>
              <Nav.Link href="#action2" className='fw-bolder text-white fs-5'>Nosotros</Nav.Link>
              <Nav.Link href="#action2" className='fw-bolder text-white fs-5'>Contactanos</Nav.Link>
              <Nav.Link href="#action2" className='fw-bolder text-white fs-5'>Testimonios</Nav.Link>
            </Nav>
            <button className='loginauth fw-bolder text-white fs-5' onClick={() => loginWithRedirect()}> <i class="bi bi-door-open"></i> Hola, Iniciar Sesion</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  )
}
// mensaje de prueba
export default Navbaruno;



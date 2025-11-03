import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar as BSNavbar,
  Nav,
  NavDropdown,
  Container,
} from "react-bootstrap";
import "./Navbar.scss";
import logo from "../../assets/img/logo.png";
import fbIcon from "../../assets/img/fb-icon--blue.svg";
import igIcon from "../../assets/img/ig-icon--blue.svg";

const Navbar = () => {
  return (
    <BSNavbar expand="lg" className="customNavbar bg-body-tertiary">
      <Container fluid>
        <BSNavbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo Escuela Normal" />
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbarNav" />
        <BSNavbar.Collapse id="navbarNav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/" className="active">
              Inicio
            </Nav.Link>

            <NavDropdown title="Institución" id="institucion-dropdown">
              <NavDropdown.Item as={Link} to="/nosotros">
                Nosotros
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/organizacion-escolar">
                Organización escolar
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/normatividad">
                Normatividad
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Oferta Educativa" id="oferta-dropdown">
              <NavDropdown.Item as={Link} to="/maestria">
                Maestría
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/licenciatura">
                Licenciatura
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/cursos">
                Formación Continua
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Vida institucional" id="vida-dropdown">
              <NavDropdown.Item as={Link} to="/eventos">
                Eventos
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/publicaciones">
                Publicaciones
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/">
              Seguimiento escolar
            </Nav.Link>

            <Nav.Item className="contact">
              <Nav.Link as={Link} to="/Contacto">
                Contacto
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="customNavbar__social">
            <a
              className="d-inline-block me-2 me-xl-3"
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={fbIcon} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src={igIcon} alt="Instagram" />
            </a>
          </div>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;

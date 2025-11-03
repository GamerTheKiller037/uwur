import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./Footer.styles.scss";
import logo from "../../assets/img/logo.png";
import fbIcon from "../../assets/img/fb-icon--white.svg";
import igIcon from "../../assets/img/ig-icon--white.svg";
import footerFigure from "../../assets/img/footer-figure.png";

import NavDropdown from "react-bootstrap/NavDropdown";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main">
        <Container>
          <Row className="py-5">
            <Col lg={4} md={6} sm={12} className="mb-4 mb-lg-0">
              <div className="footer__brand">
                <div className="footer__logo-wrapper">
                  <img
                    src={logo}
                    alt="Logo Escuela Normal"
                    className="footer__logo mb-3"
                  />
                </div>
                <p className="footer__description">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae
                </p>
              </div>
            </Col>

            <Col lg={2} md={3} sm={6} className="mb-4 mb-lg-0">
              <h5 className="footer__title">Mapa del sitio</h5>
              <Nav className="flex-column footer__nav">
                <Nav.Link to="/">Inicio</Nav.Link>

                <NavDropdown id="nav-dropdown-dark-example" title="Institución">
                  <NavDropdown.Item href="/Nosotros">Nosotros</NavDropdown.Item>
                  <NavDropdown.Item href="/organizacion-escolar">
                    Organización escolar
                  </NavDropdown.Item>
                  <NavDropdown.Item href="Normatividad">
                    Normatividad
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Oferta educativa"
                >
                  <NavDropdown.Item href="/Maestria">Maestría</NavDropdown.Item>
                  <NavDropdown.Item href="/Licenciatura">
                    Licenciatura
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Cursos">
                    Formación Continua
                  </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Vida institucional"
                >
                  <NavDropdown.Item href="/Eventos">Eventos</NavDropdown.Item>
                  <NavDropdown.Item href="/Publicaciones">
                    Publicaciones
                  </NavDropdown.Item>
                </NavDropdown>

                <Nav.Link as={Link} to="#">
                  Seguimiento escolar
                </Nav.Link>
                <Nav.Link as={Link} to="/contacto">
                  Contacto
                </Nav.Link>
              </Nav>
            </Col>

            <Col lg={3} md={3} sm={6} className="mb-4 mb-lg-0">
              <h5 className="footer__title">Enlaces rápidos</h5>
              <Nav className="flex-column footer__nav">
                <Nav.Link as={Link} to="/eventos">
                  Eventos
                </Nav.Link>
                <Nav.Link as={Link} to="#">
                  Documentos
                </Nav.Link>
                <Nav.Link as={Link} to="#">
                  Oferta educativa
                </Nav.Link>
                <Nav.Link as={Link} to="#">
                  Vida institucional
                </Nav.Link>
                <Nav.Link as={Link} to="#">
                  Seguimiento escolar
                </Nav.Link>
                <Nav.Link as={Link} to="#">
                  Contacto
                </Nav.Link>
              </Nav>
            </Col>

            <Col lg={3} md={6} sm={12} className="mb-4 mb-lg-0">
              <h5 className="footer__title">Contacto</h5>
              <div className="footer__contact">
                <p className="mb-2">
                  <a
                    href="mailto:contacto@enrjsm.edu.mx"
                    className="footer__link"
                  >
                    contacto@enrjsm.edu.mx
                  </a>
                </p>
                <div className="footer__social mt-3">
                  <h5 className="footer__title">Siguenos</h5>
                  <div className="d-flex gap-3 mt-2">
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Facebook"
                      className="footer__social-link"
                    >
                      <img src={fbIcon} alt="Facebook" />
                    </a>

                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="footer__social-link"
                    >
                      <img src={igIcon} alt="Instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <div className="footer__figure">
          <img src={footerFigure} alt="Footer decoration" />
        </div>
      </div>

      <div className="footer__bottom">
        <Container>
          <div className="py-3 text-center">
            <p className="footer__copyright mb-0">
              2025. Todos los derechos reservados
            </p>
            <p className="footer__credits mb-0">
              Diseñado y desarrollado por QuinTech
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;

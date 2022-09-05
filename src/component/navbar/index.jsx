import "./index.css";
import { React, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import download from "../../assets/images/download.png";
import logo from "../../assets/images/logo.png";
import { NeedHelp } from "../needHelp";

export function Navigation() {
  const [modalShow,setModalShow]=useState(false)
  return (
    <>
      <NeedHelp  show={modalShow} onHide={() => setModalShow(false)} />
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ height: "103px", background: "white" }}
      >
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} className="navbarLogo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link onClick={()=>setModalShow(true)} className="link">
                Need Help
              </Nav.Link>
              <Nav.Link eventKey={2} href="/signin" className="link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16.969"
                  height="16.971"
                  viewBox="0 0 16.969 16.971"
                >
                  <g
                    id="Group_3879"
                    data-name="Group 3879"
                    transform="translate(-1003.11 -25)"
                  >
                    <g
                      id="Group_638"
                      data-name="Group 638"
                      transform="translate(362.277 -389.089)"
                    >
                      <path
                        id="Path"
                        d="M642.228,434.769a1.384,1.384,0,0,1-1.372-1.622,8.615,8.615,0,0,1,16.922,0,1.384,1.384,0,0,1-1.371,1.622Z"
                        transform="translate(0 -3.71)"
                        fill="#8d88bd"
                      />
                      <circle
                        id="Ellipse_46"
                        data-name="Ellipse 46"
                        cx="3.5"
                        cy="3.5"
                        r="3.5"
                        transform="translate(645.723 414.089)"
                        fill="#8d88bd"
                      />
                    </g>
                  </g>
                </svg>{" "}
                &nbsp; Sign In
              </Nav.Link>
              <Nav.Link href="#deets">
                <img
                  src={download}
                  style={{ height: "31px", width: "134px" }}
                  alt="download"
                />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
}

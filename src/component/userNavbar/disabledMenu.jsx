import "./index.css";
import { React } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import download from "../../assets/images/download.png";
import logo from "../../assets/images/logo.png";

export function UserNavigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      style={{ height: "103px", background: "white" }}
    >
      <Container className="text-center">
        <Navbar.Brand href="/" className="nopmenuBrand">
          <img src={logo} className="navbarLogo" alt="logo" />
        </Navbar.Brand>
       
      </Container>
    </Navbar>
  );
}

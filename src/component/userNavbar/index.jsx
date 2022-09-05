import "./index.css";
import { React, useEffect,useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {userLogout} from "../../redux/actions"
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import download from "../../assets/images/download.png";
import logo from "../../assets/images/logo.png";
import { NeedHelp } from "../needHelp";

export function UserNavigation() {
  const [modalShow,setModalShow]=useState(false)
 
  const { orders } = useSelector((state) => state.orderReducer);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const logout = async()=>{
    await dispatch({
      type:'RESET_STORE'
    });
    navigate("/");
  }

  return (
    <>
      <NeedHelp  show={modalShow} onHide={() => setModalShow(false)} />
      
      <Navbar
        collapseOnSelect
        expand="lg"
        style={{ height: "103px", background: "white" }}
      >
        <Container fluid className="userNavbar">
          <Navbar.Brand href="/">
            <img src={logo} className="navbarLogo" alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Link to="user/shop" className="link">
                <NavLink to="/user/shop">Shop</NavLink>
              </Nav.Link>
              <Nav.Link className="link">
                <NavLink to="/user/order">My Orders</NavLink>
              </Nav.Link>
              <Nav.Link  onClick={()=>setModalShow(true)}  className="link">
                Need Help
              </Nav.Link>
              <Nav.Link eventKey={2}  className="link" style={{marginRight:'-6%'}}>
                <Dropdown>
                  <Dropdown.Toggle  >
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
                    &nbsp;{" "}
                    <span style={{ textTransform: "capitalize",color:'black',opacity:'0.6' }}>
                      {orders?.user?.first_name}
                      {/* Safyan */}
                    </span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>navigate("/user/profile")}>Profile</Dropdown.Item>
                    <Dropdown.Item onClick={()=>navigate("/user/payment")}>Payment Method</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>


                <NavLink to="/user/profile">
                  
                </NavLink>
              </Nav.Link>

              <Nav.Link href="#deets" className="link"  style={{marginRight:'-6%'}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="23"
                  viewBox="0 0 21 23"
                >
                  <g id="Notification" transform="translate(-1395 -20)">
                    <path
                      id="Notification_Icon"
                      data-name="Notification Icon"
                      d="M-1371,81h4a2.006,2.006,0,0,1-2,2A2.006,2.006,0,0,1-1371,81Zm-5-1a.945.945,0,0,1-1-1,.945.945,0,0,1,1-1h.5a4.354,4.354,0,0,0,1.5-3V72a4.952,4.952,0,0,1,5-5,4.951,4.951,0,0,1,5,5v3a4.351,4.351,0,0,0,1.5,3h.5a.945.945,0,0,1,1,1,.945.945,0,0,1-1,1Z"
                      transform="translate(2772 -40)"
                      fill="#1b127b"
                    />
                    <g
                      id="Notification_Badge"
                      data-name="Notification Badge"
                      transform="translate(1406 22)"
                      fill="#ffc06a"
                      stroke="#fff"
                      strokeWidth="2"
                    >
                      <circle cx="4" cy="4" r="4" stroke="none" />
                      <circle cx="4" cy="4" r="5" fill="none" />
                    </g>
                  </g>
                </svg>
              </Nav.Link>

              <Nav.Link href="#deets"  style={{marginRight:'-6%'}}>
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

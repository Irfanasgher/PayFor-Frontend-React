import "./index.css";
import { React, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Navigation } from "../../component/navbar";
// import {Link} from 'react-router-dom';
import { Footer } from "../../component/footer";
import { useNavigate } from "react-router-dom";

export function IdentityReceive() {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/signin")
    },5000);
  });

  return (
    <div className="bodySegment">
      <Navigation />

      <Container fluid>
        <Row>
          <Col style={{ textAlign: "center", paddingTop: "80px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70.835"
              height="82.516"
              viewBox="0 0 70.835 82.516"
            >
              <g
                id="Group_4180"
                data-name="Group 4180"
                transform="translate(-684.79 -182.949)"
              >
                <path
                  id="Path_16044"
                  data-name="Path 16044"
                  d="M0,0H44.416l8.6,8.107L62,17.172V78H0Z"
                  transform="translate(687 185)"
                  fill="#fff"
                />
                <g
                  id="Group_4179"
                  data-name="Group 4179"
                  transform="translate(175.79 16.949)"
                >
                  <path
                    id="Path_16042"
                    data-name="Path 16042"
                    d="M568.8,247.1H510V167h45.057l18.357,18.357v46.259"
                    transform="translate(0)"
                    fill="none"
                    stroke="#0202d0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                  />
                  <path
                    id="Path_16043"
                    data-name="Path 16043"
                    d="M537,167v18.357h18.357"
                    transform="translate(18.057)"
                    fill="none"
                    stroke="#0202d0"
                    stroke-linejoin="round"
                    strokeWidth="2"
                  />
                  <line
                    id="Line_715"
                    data-name="Line 715"
                    x1="19.71"
                    y1="19.551"
                    transform="translate(558.71 227.551)"
                    fill="none"
                    stroke="#0202d0"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                  />
                  <circle
                    id="Ellipse_357"
                    data-name="Ellipse 357"
                    cx="18.435"
                    cy="18.435"
                    r="18.435"
                    transform="translate(526.855 195.484)"
                    fill="none"
                    stroke="#0202d0"
                    stroke-miterlimit="10"
                    strokeWidth="2"
                  />
                  <line
                    id="Line_716"
                    data-name="Line 716"
                    x2="9.888"
                    transform="translate(540.038 205.382)"
                    fill="none"
                    stroke="#f100aa"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                  />
                  <line
                    id="Line_717"
                    data-name="Line 717"
                    x2="9.888"
                    transform="translate(540.038 222.07)"
                    fill="none"
                    stroke="#f100aa"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                  />
                  <line
                    id="Line_718"
                    data-name="Line 718"
                    x2="16.813"
                    transform="translate(536.576 213.726)"
                    fill="none"
                    stroke="#f100aa"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    strokeWidth="2"
                  />
                </g>
              </g>
            </svg>

            <div className="idtitle">Proof of Indentity Document received.</div>
            <div className="idSubtitle">
              We will send you a confirmation email once your <br />{" "}
              identification is verified.
            </div>

            <Button className="simplebtn mt-3 " style={{ width: "295px" }}>
              Need Help?
            </Button>

            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

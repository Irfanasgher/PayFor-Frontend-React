import { React } from "react";
import { Row, Col } from "react-bootstrap";
import footer from "../../assets/images/footer.png";
import { Link } from "react-router-dom";
export function UserDashboardFooter() {
  return (
    <Row style={{ padding: "32px 0px" }} className="userDashboardFooter">
      <Col>
        <Link to="/">
          <img src={footer} alt="footer" />
        </Link>
      </Col>
      <Col>
        <div style={{ fontSize: "11px", color: "#658CC5", textAlign: "end" }}>
          © Copyright Payfor 2022 |<Link to="#">Terms & Conditions </Link>|{" "}
          <Link to="#">Privacy Policy</Link>
        </div>
      </Col>
    </Row>
  );
}

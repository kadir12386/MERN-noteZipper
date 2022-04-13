import React, { useEffect } from "react";
import "./LandingPage.css";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const LandingPage = ({ history }) => {
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      history.push("/mynotes");
    }
  }, [history]);

  // //whenever it changes it going to call or trigger the useEffect function
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Welcome to Note Zipper</h1>
              <p className="subtitle">One safe place for all your notes.</p>
            </div>
            {/* button */}
            <div className="buttonContainer">
              <Link to="/login">
                <Button size="lg" className="landingbutton">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button
                  size="lg"
                  className="landingbutton "
                  variant="outline-primary"
                >
                  Signup
                </Button>
              </Link>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

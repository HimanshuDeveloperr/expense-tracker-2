import React, { Fragment, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import OtherLogins from "../Logins.js/OtherLogins";

import "../Routes/Common.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(`Username: ${username}, Password: ${password}`);
  };

  const location = useLocation();

  return (
    <Fragment>
      <p style={{ marginTop: "70px" }}>
        Every new client is a new beginning, a chance to create something
        special and forge a lasting relationship.
      </p>
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <span className="text-center mb-4">
            <NavLink
              to={"/"}
              className="m-4"
              style={{
                textDecoration: "none",
                borderBottom: `2px solid ${
                  location.pathname === "/" ? "#F81894" : "transparent"
                }`,
                paddingBottom: "5px",
                color: "black",
              }}
              // exact={true}
            >
              Login
            </NavLink>
            <NavLink
              to={"/signUp"}
              className="m-4"
              style={{
                textDecoration: "none",
                borderBottom: `2px solid ${
                  location.pathname === "/signUp" ? "#F81894" : "transparent"
                }`,
                paddingBottom: "5px",
                color: "black",
              }}
              // exact={true}
            >
              Sign Up
            </NavLink>
          </span>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Control
                type="text"
                style={{ marginTop: "15px", borderRadius: "30px" }}
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control
                type="password"
                style={{ marginTop: "15px", borderRadius: "30px" }}
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button
              style={{
                backgroundColor: "	#F81894",
                borderRadius: "30px",
                borderColor: "lightpink",
              }}
              type="submit"
              className="w-100 mt-3"
            >
              Login
            </Button>
            <div>
              <Link
                style={{
                  textDecoration: "none",
                  color: "#F81894",
                  marginLeft: "270px",
                  marginTop: "200px",
                }}
              >
                Forgot Password?
              </Link>
            </div>
            <div>
              <OtherLogins></OtherLogins>
            </div>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
};

export default LoginPage;
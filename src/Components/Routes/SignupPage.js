import axios from "axios";
import React, { Fragment, useState,useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import TokenContext from "../Store/TokenContext";

import { NavLink, useNavigate, useLocation } from "react-router-dom";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const nav = useNavigate();
  const authctx = useContext(TokenContext);

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBbbWhkFyupe0V-FKdHL-ieJmYuExSBufo`,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        console.log(response.data);
        const token = response.data.idToken;
        console.log(token);
        localStorage.setItem("email", response.data.email);
        authctx.login(token);
        nav("/verifyemail");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
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
          </span>{" "}
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Control
                style={{ marginTop: "15px", borderRadius: "30px" }}
                type="text"
                placeholder="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Control
                type="email"
                style={{ marginTop: "15px", borderRadius: "30px" }}
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Control
                style={{ marginTop: "15px", borderRadius: "30px" }}
                type="password"
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group controlId="formConfirmPassword">
              <Form.Control
                style={{ marginTop: "15px", borderRadius: "30px" }}
                type="password"
                placeholder="confirm password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
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
              Sign Up
            </Button>
          </Form>
        </div>
      </Container>
    </Fragment>
  );
};

export default SignupPage;

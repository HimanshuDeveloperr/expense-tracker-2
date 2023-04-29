import React, { Fragment, useState,useContext } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import OtherLogins from "../Logins.js/OtherLogins";
import TokenContext from "../Store/TokenContext";

import "../Routes/Common.css";
import axios from "axios";

const LoginPage = () => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const authctx=useContext(TokenContext)

  const navigate=useNavigate()

  const handleUsernameChange = (event) => {
    setMail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBbbWhkFyupe0V-FKdHL-ieJmYuExSBufo`,
        {
          email: mail,
          password: password,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        console.log(response.data);
        // alert("welcome");
        localStorage.setItem("email",response.data.email)
        authctx.login(response.data.idToken)
        navigate('/home')   
      })
      .catch((err) => {
        console.log(err.response.data);
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
          </span>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Control
                type="email"
                style={{ marginTop: "15px", borderRadius: "30px" }}
                placeholder="e-mail"
                value={mail}
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

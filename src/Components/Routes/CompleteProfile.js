import React, { useContext, useEffect,useState } from "react";
import { useRef } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import axios from "axios";
import TokenContext from "../Store/TokenContext";

const CompleteProfile = () => {
  const fullname = useRef();
  const photo = useRef();

  const authctx = useContext(TokenContext);
  const [userProfile, setUserProfile] = useState({});

  useEffect(()=>{
    const fetchUserProfile= async ()=>{

      const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBbbWhkFyupe0V-FKdHL-ieJmYuExSBufo`,{
        idToken: authctx.token
      })

      console.log(response.data)
      const userProfileData = response.data.users[0];
      setUserProfile(userProfileData)
    }
    fetchUserProfile()
  },[authctx.token])
  const SubmitHandler = (e) => {
    e.preventDefault();

    const yourname = fullname.current.value;
    const photoURL = photo.current.value;

    const token = authctx.token;
    console.log(token);


    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBbbWhkFyupe0V-FKdHL-ieJmYuExSBufo`,
        {
          idToken: token,
          displayName: yourname,
          photoUrl: photoURL,
        }
      )
      .then((res) => {
        console.log(res.data);
        alert("updates successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div> <Navbar style={{ backgroundColor: "#2b2d42", color: "#fff" }}>
    <Container>
      <Navbar.Brand href="#home">
        winners never quit, quitters never win
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <span style={{ marginRight: "1rem" }}>
            {userProfile.displayName ? (
              `Welcome, ${userProfile.displayName}`
            ) : (
              "Your profile is incomplete"
            )}
          </span>
          
          <NavLink
            to="/complete"
            style={{
              color: "#fff",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            {userProfile.displayName ? "completed" : "Complete now"}
          </NavLink>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
      </Navbar>
      <hr style={{ margin: "2rem 0", borderColor: "#2b2d42" }} />
      <div style={{ textAlign: "left" }}>
        <h3>Contact Details</h3>
        <Button variant="danger" style={{ float: "right" }}>
          Cancel
        </Button>
        <Form onSubmit={SubmitHandler}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: "2rem 0",
            }}
          >
            <InputGroup
              style={{
                width: "40%",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              <Form.Control
                aria-label="First name"
                placeholder="your name"
                ref={fullname}
                defaultValue={userProfile.displayName}
                type="text"
                style={{ width: "60%", display: "inline-block" }}
              />
            </InputGroup>
            <InputGroup
              style={{
                width: "40%",
                display: "inline-block",
                textAlign: "center",
              }}
            >
              <Form.Control
                aria-label="First name"
                placeholder="profile photo URL"
                ref={photo}
                defaultValue={userProfile.photoUrl}
                type="url"
                style={{ width: "60%", display: "inline-block" }}
              />
            </InputGroup>
          </div>
          <InputGroup
            style={{
              width: "40%",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <Button variant="secondary" type="submit">
              Update
            </Button>
          </InputGroup>
        </Form>
      </div>
      <hr style={{ margin: "2rem 0", borderColor: "#2b2d42" }} />
    </div>
  );
};

export default CompleteProfile;

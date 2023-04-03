import React from "react";
import google from "../Assets/v.o.i.d_.png";
import facebook from "../Assets/v.o.i.d.png";
import twitter from "../Assets/v.o.i.dd.png";
import "./OtherLogins.css";
import { Link } from "react-router-dom";

const OtherLogins = () => {
  return (
    <div>
      <p>or login with</p>
      <div className="login-icons">
        <span>
          <img src={google} alt="google" className="login-icon" />
        </span>
        <span>
          <img src={facebook} alt="facebook" className="login-icon" />
        </span>
        <span>
          <img src={twitter} alt="twitter" className="login-icon" />
        </span>
      </div>
      <p>
        Don't have an account?
        <Link
          style={{
            color: "#F81894",
            marginLeft: "1px",
            textDecoration: "none",
          }}
        >
          create new one!
        </Link>
      </p>
      <div>
        <p>
          By signing up, you are agree with our
          <Link style={{ color: "#F81894" }}>Terms & conditions </Link>
        </p>
      </div>
    </div>
  );
};

export default OtherLogins;
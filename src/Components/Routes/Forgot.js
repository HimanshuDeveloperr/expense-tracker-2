import React, { useState, useRef } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import classes from './Forgot.module.css';

const Forgot = () => {
  const emailInputRef = useRef();
  const history = useNavigate('');

  const [sendingLink, setSendingLink] = useState(false);
  const passwordResetHandler = async () => {
    setSendingLink(true);
    const email = emailInputRef.current.value;

    try {
      const res = await axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBbbWhkFyupe0V-FKdHL-ieJmYuExSBufo',
        {
          requestType: 'PASSWORD_RESET',
          email: email,
        }
      );
      alert('Link sent successfully');
      alert('Check your email inbox and reset password');
      history('/');
    } catch (e) {
      alert(e.response.data.error.message);
    }
    setSendingLink(false);
  };
  return (
    <div className={classes.forgotContainer}>
      <div className={classes.main}>
        <h1 className={classes.title}>Forgot Password?</h1>
        <div className={classes.form}>
          <label className={classes.label}>Enter the email with which you have registered</label>
          <input className={classes.input} type="email" ref={emailInputRef} />
          {!sendingLink && (
            <Button className={classes.button} variant="info" type="submit" onClick={passwordResetHandler}>
              Send Link
            </Button>
          )}
          {sendingLink && <p className={classes.sending}>Sending request...</p>}
          <NavLink className={classes.link} to="/">
            Login Page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Forgot;

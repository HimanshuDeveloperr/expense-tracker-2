// import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import styles from './Home.module.css'
import { Button } from 'react-bootstrap';
// import TokenContext from '../Store/TokenContext';
import { useDispatch } from 'react-redux';
import { AuthActions } from '../ReduxStore/AuthReducer';

const Home = () => {

  // const ctx=useContext(TokenContext)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const logoutHandler=()=>{
    dispatch(AuthActions.logout())
    navigate('/')
  }
  return (
    <div>
      <Navbar className={styles.mynavbar}>
        <Container>
          <Navbar.Brand href="#home">welcome to expense tracker !!!</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              your profile is incomplete{' '}
              <NavLink className={styles.mynavlink} to="/complete">
                complete now
              </NavLink>
            </Navbar.Text>
            <Button className='m-2' variant='danger' onClick={logoutHandler}>logout</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      
    </div>
  );
};

export default Home;

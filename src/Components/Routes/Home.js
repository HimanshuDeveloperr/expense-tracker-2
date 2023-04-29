import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css'

const Home = () => {
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
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  );
};

export default Home;

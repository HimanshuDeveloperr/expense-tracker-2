import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Home = () => {
  return (
    <div>
        <Navbar bg="light">
        <Container>
          <Navbar.Brand href="#home">welcome To Expense Tracker !!!</Navbar.Brand>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Home
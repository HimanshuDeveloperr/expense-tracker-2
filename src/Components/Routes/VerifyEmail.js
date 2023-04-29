import axios from 'axios';
import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import TokenContext from '../Store/TokenContext';
import { useNavigate } from 'react-router-dom';
const VerifyEmail = () => {
    const token=useContext(TokenContext)
    const navigate=useNavigate()
    const emailConfirmationHandler=()=>{

        axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBbbWhkFyupe0V-FKdHL-ieJmYuExSBufo`,{
            requestType:"VERIFY_EMAIL",
            idToken:token.token
        }).then((res)=>{
            console.log(res.data)
            alert('Please Check your Inbox and Verify email adress')
            navigate('/')
        }).catch((err)=>{
            console.log(err.response.data.error.message)
        })
    }
  return (
    <div>
        <Container className=''>
           <h2>EMAIL CONFIRMATION</h2> 
           <Button className="me-2" variant='info' onClick={emailConfirmationHandler}> Verify </Button>

        </Container>
    </div>
  )
}

export default VerifyEmail
import React from 'react';
import { Button, Container } from 'react-bootstrap';
import yt from '../assets/yt.jpg';
import insta from '../assets/insta (1).jpg';
import fb from '../assets/fb.png';
import cont from '../assets/insta (2).png';
import {Card} from 'react-bootstrap';

const Contact = () => {
  return (
   <>
    <h3 className='text-center fw-bold text-dark mt-4'>- - -  ~ CONTACT ~    - - -</h3>
   <Container className='d-block d-lg-flex  align-item-center ms-0'>
   <Container className=' mt-5'>
      <Card  className='d-block border-light text-center ' style={{width:'350px'}}>
        <Card.Img variant="top" src={cont} className='img rounded-circle ' style={{height:'300px', width:'280px'}}/>
        <Card.Body>
         <Card.Title>CONTACT</Card.Title>
         <Card.Text>
          044-34554736674
        </Card.Text>
        <Button variant="primary">Check Out</Button>
       </Card.Body>
      </Card>

      </Container> 
   <Container className='d-block d-flex mt-5'>
      <Card  className='d-block border-light text-center ' style={{width:'350px'}}>
        <Card.Img variant="top" src={yt} className='img rounded-circle ' style={{height:'300px', width:'280px'}} />
        <Card.Body>
         <Card.Title>YT : Lonelydevil Creations</Card.Title>
         <Card.Text>
          500 Subscribers
        </Card.Text>
        <Button variant="primary">Check Out</Button>
       </Card.Body>
      </Card>

      </Container> 
      <Container className='d-block d-flex mt-5'>
      <Card  className='d-block border-light text-center ' style={{width:'350px'}}>
        <Card.Img variant="top" src={insta} className='img rounded-circle ' style={{height:'300px', width:'280px'}} />
        <Card.Body>
         <Card.Title>INSTA ID : @lordlonelydevil</Card.Title>
         <Card.Text>
          17k followers

        </Card.Text>
        <Button variant="primary">Check Out</Button>
       </Card.Body>
      </Card>

      </Container> 
      
      

   </Container>
   
   </>
  )
}

export default Contact
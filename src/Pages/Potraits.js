import React from 'react';
import { Container } from 'react-bootstrap';
import { Row,Col,Card,Button } from 'react-bootstrap';
import pot1 from '../assets/mn.jpg';
import pot2 from '../assets/sl.jpg';
import pot3 from '../assets/ps.jpg';
import pot4 from '../assets/sg.jpg';





const Potraits = () => {
  return (
    <>
    <body >
    <Container>
        <h3 className='text-center fw-bold text-dark mt-4'>---  MY POTRAIT MODELS     ---</h3>
        <Container className='align-item-center'>
   
      
      <Row  className='mt-5 ms-3'>
      
        <Col >
        <Container >
      <Card  className='d-block border-light text-center ' style={{width:'350px'}}>
        <Card.Img variant="top" src={pot1} className=' border border-5 border-dark' style={{height:'450px', width:'300px'}}/>
        <Card.Body>
        <Card.Title> Rs.999.00 </Card.Title>
        
        <Button variant="primary" className='w-100 fw-bold '>ORDER NOW</Button>
       </Card.Body>
      </Card>

      </Container> 
        
        </Col>
        <Col >  <Container >
      <Card  className='d-block border-light text-center ' style={{width:'350px'}}>
        <Card.Img variant="top" src={pot2} className=' border border-5 border-dark' style={{height:'450px', width:'300px'}}/>
        <Card.Body>
        <Card.Title> Rs.800.00 </Card.Title>
        
        <Button variant="primary" className='w-100 fw-bold '>ORDER NOW</Button>
       </Card.Body>
      </Card>

      </Container> </Col> 
      </Row>
    
      
      
      <Row className='mt-5 ms-3'>
      
        <Col  >  <Container >
      <Card  className='d-block border-light text-center ' style={{width:'350px'}}>
        <Card.Img variant="top" src={pot3} className=' border border-5 border-dark' style={{height:'430px', width:'300px'}}/>
        <Card.Body>
        
        <Card.Title> Rs.700.00 </Card.Title>
        <Button variant="primary" className='w-100 fw-bold '>ORDER NOW</Button>
       </Card.Body>
      </Card>

      </Container> </Col>
        <Col >  <Container >
      <Card  className='d-block border-light text-center ' style={{width:'350px'}}>
        <Card.Img variant="top" src={pot4} className=' border border-5 border-dark' style={{height:'430px', width:'300px'}}/>
        
        <Card.Body>
        
        <Card.Title> Rs.600.00 </Card.Title>
        <Button variant="primary" className='w-100 fw-bold '>ORDER NOW</Button>
       </Card.Body>
      </Card>

      </Container> </Col>
      </Row >  
    
    </Container>
        

    </Container>

    </body>
    
    </>
    
  )
}

export default Potraits

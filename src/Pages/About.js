import React from 'react';
import { Container } from 'react-bootstrap';
import cont1 from '../assets/dr.jpg';
import cont2 from '../assets/IMG_20220516_144514.jpg';
import { Row,Col } from 'react-bootstrap';
import cont3 from '../assets/d.jpg';

const About = () => {
  return (
    <Container>
    <h2 className='text-center fw-bold mt-3'>---  ABOUT ---</h2>

    <Row >
  
  <Col ><img  src={cont3} style={{height:'350px',width:'280px'}} className=' border border-5 border-dark ms-5'></img></Col>
  <Col ><h3 className='text-center text-dark fw-bold lead'>PENCIL ART</h3>
  <p style={{height:'340px',overflow:'hidden'}}>connecting to a network, such as the internet or a local area network , using communication teca netw are technologies. These use wireless connecta netw are technologies. These use wireless connections to transmit and receive data, enabling a netw are technologies. These use wireless connections to transmit and receive data, enabling a netw are technologies. These use wireless connections to transmit and receive data, enabling ions to transmit and receive data, enabling hnologies. These use wireless connections to transmit and receive data, enabling them to interact with other devices, access online resources, and perform various functions without the need for physic connection</p></Col>
</Row>
    <Row >
  
    <Col ><img  src={cont1} style={{height:'350px',width:'280px'}} className=' border border-5 border-dark ms-5'></img></Col>
    <Col ><h3 className='text-center text-dark fw-bold lead'>TATTOO ART</h3>
    <p style={{height:'340px',overflow:'hidden'}}>connecting to a network, such as the internet or a local area network , using communication teca netw are technologies. These use wireless connecta netw are technologies. These use wireless connections to transmit and receive data, enabling a netw are technologies. These use wireless connections to transmit and receive data, enabling a netw are technologies. These use wireless connections to transmit and receive data, enabling ions to transmit and receive data, enabling hnologies. These use wireless connections to transmit and receive data, enabling them to interact with other devices, access online resources, and perform various functions without the need for physic connection</p></Col>
  </Row>
  <Row >
  
    <Col ><img  src={cont2} style={{height:'350px',width:'280px'}} className=' border border-5 border-dark ms-5'></img></Col>
    <Col ><h3 className='text-center text-dark fw-bold lead'>BORD ART</h3>
    <p style={{height:'340px',overflow:'hidden'}}>connecting to a network, such as the internet or a local area network , using communication teca netw are technologies. These use wireless connecta netw are technologies. These use wireless connections to transmit and receive data, enabling a netw are technologies. These use wireless connections to transmit and receive data, enabling a netw are technologies. These use wireless connections to transmit and receive data, enabling ions to transmit and receive data, enabling hnologies. These use wireless connections to transmit and receive data, enabling them to interact with other devices, access online resources, and perform various functions without the need for physic connection</p></Col>
  </Row>
 
  
    
</Container>
  )
}

export default About
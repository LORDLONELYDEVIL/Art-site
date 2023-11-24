import React from 'react'; 
import Carousel from 'react-bootstrap/Carousel';
import car0 from './assets/car0.jpg';
import car1 from './assets/car1.webp';
import car2 from './assets/car2.jpg';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
    <Container><h4 className='text-center border-primary fw-bold mt-4'> <span className=' p-2 text-dark'>LONELYDEVIL-ARTS</span></h4></Container>
    

<Container  className='mt-3'>
          <Carousel>
       <Carousel.Item>
        <img
        style={{height:'400px',border:'15px solid black'}}
        className='d-block w-100'
        src={car0}
         text="First slide" />
        <Carousel.Caption>
          <h3>Potrait Arts</h3>
          <p>Lets Watchout  our page now.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={{height:'400px',border:'15px solid black'}}
        className='d-block w-100 '
        src={car1}
         text="First slide" />
        <Carousel.Caption>
        <h3>Tattoo Arts</h3>
          <p>Lets Watchout our page now.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
        style={{height:'400px',border:'15px solid black'}}
        className='d-block w-100'
        src={car2}
         text="First slide" />
      
        <Carousel.Caption>
        <h3>Bord Arts</h3>
          <p>Lets Watchout our page now.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    

      </Container>
      
    </>
    
      
    
  )
}

export default Home 
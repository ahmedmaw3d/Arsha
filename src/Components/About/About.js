import React from 'react'
import { Container } from 'react-bootstrap';
import { BsCheck2All } from "react-icons/bs";
const About = () => {
    return (
        <>
    <div className='about'>ABOUT US</div>
      <Container>
        <div className='d-flex justify-content-center lineContainer'>
          <div className='line ' />
          <div className='line' />
          <div className='line' />
        </div>
     
        <div className='row my-5  '>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h6 className='lorems'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus</h6>
            <div className='d-flex text my-3 '>
              <BsCheck2All color='#07A7F1' size={25} />
              <h3 className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing</h3>
            </div>
            <div className='d-flex text my-3'>
              <BsCheck2All color='#07A7F1' size={25} />
              <h3 className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing</h3>
            </div>
            <div className='d-flex text my-3'>
              <BsCheck2All color='#07A7F1' size={25} />
              <h3 className='lorem'>Lorem ipsum dolor sit amet consectetur adipisicing</h3>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <h6 className='lorems'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
              quaerat ducimus</h6>
            <button className="more my-5">Learn More</button>
          </div>

        </div>
      </Container>
      </>
    )
}

export default About

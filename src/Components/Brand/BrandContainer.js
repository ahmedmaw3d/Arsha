import React from 'react'
import BrandCard from '../../Components/Brand/BrandCard';
import brand1 from "../../image/amazon.webp";
import brand2 from "../../image/brand2.png";
import brand3 from "../../image/brand3.png";
import brand4 from "../../image/brand1.png";
import brand5 from "../../image/adidas.webp";
import brand6 from "../../image/google.webp";
import { Container } from 'react-bootstrap';

const BrandContainer = () => {
  const images = [
    {
      id: 1,
      image: brand1
    },
    {
      id: 2,
      image: brand2
    },
    {
      id: 3,
      image: brand3
    },
    {
      id: 4,
      image: brand4
    },
    {
      id: 5,
      image: brand5
    },
    {
      id: 6,
      image: brand6
    },
  ]
  return (
    <>
      <div className='bg-secondary-subtle'>
        <Container>
          <div className=' row '>
            {
              images.map((item) => {
                return (<BrandCard img={item.image} key={item.id} />)
              })
            }
          </div>
        </Container>
      </div>
    </>
  )
}

export default BrandContainer

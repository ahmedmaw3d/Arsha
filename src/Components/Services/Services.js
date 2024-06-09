import React from 'react'
import { IoIosGlobe } from "react-icons/io";
import { FaFile } from "react-icons/fa";
import { SlSpeedometer } from "react-icons/sl";
import { ImStack } from "react-icons/im";
import { Container } from 'react-bootstrap';
import ServicesCard from './ServicesCard';
const Services = () => {
    const services = [
        {
            id:1,
            image: <IoIosGlobe size={40} color='#46B2E4' />,
            title: "Lorem ipsum ",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id:2,
            image: <FaFile size={40} color='#46B2E4' />,
            title: "Sed ut perspici ",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id:3,
            image: <SlSpeedometer size={40} color='#46B2E4' />,
            title: "Magni Dolores",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
        {
            id:4,
            image: <ImStack size={40} color='#46B2E4' />,
            title: "Nemo Enim",
            text: "Some quick example text to build on the card title and make up the bulk of the card's content."
        },
    ]
    return (
        <div className='serv'>
            <div className='about'>SERVICES</div>
            <Container>
                <div className='d-flex justify-content-center lineContainer'>
                    <div className='line ' />
                    <div className='line' />
                    <div className='line' />
                </div>
                <p className='d-flex justify-content-center mt-5'>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                    tincidunt.
                </p>
                <div className='row mt-5'>
                    {
                        services.map((item) => {
                            return (<ServicesCard item={item} key={item.id}/>)
                        })
                    }
                </div>
            </Container>

        </div>
    )
}

export default Services

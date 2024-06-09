import React from 'react'
import avatar1 from "../../image/avatar-01.png"
import avatar2 from "../../image/avatar-02.png"
import avatar3 from "../../image/avatar-03.png"
import avatar4 from "../../image/avatar-04.png"

import { Container } from 'react-bootstrap'
import TeamCard from './TeamCard'
const Team = () => {

    const team = [
        {
            id: 1,
            image: avatar1,
            title: "Walter White",
            text: "Choef Eexcutive offcer",
            desc: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            id: 2,
            image: avatar2,
            title: "Sara Jhonson",
            text: "Product Manager",
            desc: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            id: 3,
            image: avatar3,
            title: "William Anderson",
            text: "CTO",
            desc: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
        {
            id: 4,
            image: avatar4,
            title: "Amand Jepson",
            text: "Accountant",
            desc: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        },
    ]

    return (
        <div className='p-3 subtle my-5'>
            <div className='about'>TEAM</div>
            <div className=' mt-5 d-flex justify-content-center lineContainer'>
                <div className='line' />
                <div className='line' />
                <div className='line' />
            </div>
            <Container>
                <p className='d-flex justify-content-center mt-5'>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                    tincidunt.
                </p>
                <div className='row'>

                    {
                        team.map((item) => {
                            return (
                                <TeamCard item={item} key={item.id}/>
                            )
                        }
                        )
                    }
                </div >

            </Container >
        </div >
    )
}

export default Team

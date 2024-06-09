import React from 'react'
import { Container } from 'react-bootstrap';
import { BiChevronRight } from "react-icons/bi";
import { TiSocialFacebook, TiSocialTwitter } from 'react-icons/ti';
import { FaInstagramSquare } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io';
import { TiSocialSkypeOutline } from "react-icons/ti";
const Footer = () => {
    const footer = [
        {
            id: 1,
            icons: <TiSocialTwitter color='white' size={25} />
        },
        {
            id: 2,
            icons: <TiSocialFacebook color='white' size={25} />
        },
        {
            id: 3,
            icons: <FaInstagramSquare color='white' size={25} />
        },
        {
            id: 4,
            icons: <TiSocialSkypeOutline color='white' size={25} />
        },
        {
            id: 5,
            icons: <IoLogoLinkedin color='white' size={25} />
        },
    ]

    return (
        <div>
            <Container>

                <div className='row d-flex justify-content-between mt-5'>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h3 className='arsha '>ARSHA</h3>
                        <h6 className='my-3 text-secondary'>A108 Adam Street</h6>
                        <h6 className='my-3 text-secondary'>New Your,NY 53522</h6>
                        <h6 className='my-3 text-secondary'>Untnited Ststes</h6>

                        <div className='d-flex  mt-5'>
                            <h6 className='arsha '>Phone:</h6>
                            <h6 className='mt-1 text-secondary ms-2'>+1 5589 55488 55</h6>
                        </div>
                        <div className='d-flex text-center my-4'>
                            <h6 className='arsha '>Email:</h6>
                            <h6 className='mt-1 text-secondary ms-2'>info@example.com</h6>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h3 className='arsha '>Useful Link</h3>
                        <div className='d-flex text my-3'>
                            <BiChevronRight size={30} color='#0DCAF0' />
                            <h6>Home</h6>
                        </div>
                        <div className='d-flex text my-3'>
                            <BiChevronRight size={30} color='#0DCAF0' />
                            <h6 className='text-secondary'>About US</h6>
                        </div>
                        <div className='d-flex text my-3'>
                            <BiChevronRight size={30} color='#0DCAF0' />
                            <h6 className='text-secondary'>Services</h6>
                        </div>
                        <div className='d-flex text my-3'>
                            <BiChevronRight size={30} color='#0DCAF0' />
                            <h6 className='text-secondary'>Terms of Services</h6>
                        </div>
                        <div className='d-flex text my-3'>
                            <BiChevronRight size={30} color='#0DCAF0' />
                            <h6 className='text-secondary'>Privacy Policy</h6>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-6 col-sm-12'>

                        <h3 className='arsha'>Our Services</h3>
                        <div className='d-flex text my-3'>
                            <BiChevronRight size={30} color='#0DCAF0' />
                            <h6 className='text-secondary '>web Design</h6>
                        </div>
                        <div className='d-flex text my-3'>
                            <BiChevronRight size={30} color='#0DCAF0' />
                            <h6 className='text-secondary'>web Development</h6>
                        </div>
                        <div className='d-flex text my-3'>
                            <BiChevronRight size={30} color='#0DCAF0' />
                            <h6 className='text-secondary'>Product managemant</h6>
                        </div>
                        <div className='d-flex text my-3'>
                            <BiChevronRight size={30} color='#0DCAF0' />
                            <h6 className='text-secondary'>Marketing</h6>
                        </div>
                        <div className='d-flex text my-3'>
                            <BiChevronRight size={30} color='#0DCAF0' />
                            <h6 className='text-secondary'>Graphic Design</h6>
                        </div>

                    </div>

                    <div className='col-lg-3 col-md-6 col-sm-12'>
                        <h3 className='arsha'>Our Social Network</h3>
                        <h6 className='text-secondary'>Cras fermentum odio eu feuglat lide</h6>
                        <h6 className='text-secondary'>par naso tierra video magna derita</h6>
                        <h6 className='text-secondary'>valles</h6>


                        <div className='d-flex mt-4'>
                            {
                                footer.map((item) => {
                                    return (<div className="circle bg-info" key={item.id}>
                                        <div className='icon'>
                                            {item.icons}
                                        </div>
                                    </div>)
                                })
                            }
                        </div>

                    </div>
                </div>

            </Container>
        </div>
    )
}

export default Footer

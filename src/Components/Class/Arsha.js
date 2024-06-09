import React from 'react'
import { Container } from 'react-bootstrap'
import { AiOutlineCopyright } from "react-icons/ai";
const Arsha = () => {
    return (
        <div>
            <div className='class'>
                <Container>
                    <div className='d-flex justify-content-between mt-5'>
                        <div className='mt-5'>
                            <AiOutlineCopyright color='white'/>
                            <span className='text-white ms-2'>
                                Copyright
                                <span className='fw-bold ms-2 me-2'>
                                    Arsha.
                                </span>
                                All Rights Reserved
                            </span>
                        </div>
                        <div className='d-flex mt-5'><h6 className='text-white me-2'>Designed by</h6>
                            <h6 className='prim'>BootstrapMade</h6>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Arsha

import React from 'react'
import { Container, Accordion } from 'react-bootstrap'
import a01 from '../../image/01.jpg'
const Accordions = () => {
    const AccordionData = [
        {
            id:1,
            eventKey: "0",
            title: " 01 Lorem ipsum dolor sit",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id:2,
            eventKey: "1",
            title: " 01 Lorem ipsum dolor sit",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        {
            id:3,
            eventKey: "2",
            title: " 01 Lorem ipsum dolor sit",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    ]
    return (
        <div className='p-5 subtle'>
            <Container>
                <div className=' row mt-5'>
                    <div className='col-lg-8 col-md-8 col-sm-12'>
                        <span className='eum '>Eum ipsam laborum delniti <span className='fw-bold'>Velit Pariatur architecto aut nihil</span></span>
                        <h6 className='h'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                            01 quaerat ducimus</h6>
                        <Accordion>
                            <div className='mt-5'>
                                {

                                    AccordionData.map((item) =>
                                    (
                                        <Accordion.Item eventKey={item.eventKey} 
                                        className='accordion border border-0 my-3' 
                                        style={{ border: "1px solid white !important" }}
                                        key={item.id}
                                        >
                                            <Accordion.Header >
                                                <div className='text-info'>
                                                    {item.title}
                                                </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {item.desc}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    )
                                    )
                                }
                            </div>
                        </Accordion>
                    </div>
                    <div className=' col-lg-4 col-md-6 col-sm-12'>
                        <img src={a01} className='a01' alt='a01' />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Accordions

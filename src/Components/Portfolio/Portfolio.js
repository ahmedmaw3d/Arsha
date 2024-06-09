import React from 'react'
import a01 from '../../image/01.jpg'
import a02 from '../../image/02.jpg'
import a03 from '../../image/03.jpg'
import a04 from '../../image/04.jpg'
import a05 from '../../image/05.jpg'
import a06 from '../../image/06.jpg'
import a07 from '../../image/07.jpg'
import a08 from '../../image/08.jpg'
import { Container, Nav, Tab } from 'react-bootstrap'
const Portfolio = () => {
    return (
        <div>
            <div className='about'>PORTFOLIO</div>
            <Container>
                <div className='d-flex justify-content-center lineContainer'>
                    <div className='line' />
                    <div className='line' />
                    <div className='line' />

                </div>
                <p className='d-flex justify-content-center mt-5'>
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                    tincidunt.
                </p>
                <Tab.Container
                    id="left-tabs-example" defaultActiveKey="first">
                    <div className="row">
                        <Nav variant="pills" className="text-center d-flex justify-content-center mb-3">
                            <Nav.Item>
                                <Nav.Link eventKey="All" className='me-5 text-body fw-bold'>All</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="App" className='me-5 text-body fw-bold'>App</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Card" className='me-5 text-body fw-bold'>Card</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="Wed" className='me-5 text-body fw-bold'>Wed</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <Tab.Content>
                        <Tab.Pane eventKey="All"><div className='row'>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image">
                                    <img src={a01} className='rounded-4' alt='a01' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image">
                                    <img src={a02} className='rounded-4' alt='a02' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image ">
                                    <img src={a03} className='rounded-4' alt='a03' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image">
                                    <img src={a04} className='rounded-4' alt='a04' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image">
                                    <img src={a05} className='rounded-4' alt='a05' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image">
                                    <img src={a06} className='rounded-4' alt='a06' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image">
                                    <img src={a07} className='rounded-4' alt='a07' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image">
                                    <img src={a08} className='rounded-4' alt='a08' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image ">
                                    <img src={a03} className='rounded-4' alt='a03' />
                                </div>
                            </div>
                        </div></Tab.Pane>
                        <Tab.Pane eventKey="App"><div className='row'>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image">
                                    <img src={a01} className='rounded-4' alt='a01' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image">
                                    <img src={a02} className='rounded-4' alt='a02' />
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="me-5 my-3 image">
                                    <img src={a03} className='rounded-4' alt='a03' />
                                </div>
                            </div>
                        </div></Tab.Pane>
                        <Tab.Pane eventKey="Card">
                            <div className='row'>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="me-5 my-3 image ">
                                        <img src={a04} className='rounded-4' alt='a04' />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="me-5 my-3 image">
                                        <img src={a05} className='rounded-4' alt='a05' />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="me-5 my-3 image ">
                                        <img src={a06} className='rounded-4' alt='a06' />
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Wed">
                            <div className='row'>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="me-5 my-3 image ">
                                        <img src={a07} className='rounded-4' alt='a07' />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="me-5 my-3 image">
                                        <img src={a08} className='rounded-4' alt='a08' />
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="me-5 my-3 image">
                                        <img src={a03} className='rounded-4' alt='a03' />
                                    </div>
                                </div>
                            </div>
                        </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </Container >
        </div>
    )
}

export default Portfolio

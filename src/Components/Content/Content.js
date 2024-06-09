import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdCall } from "react-icons/md";
import map from '../../image/amap.jpg'
import { Container } from 'react-bootstrap';
const Content = () => {
    return (
        <div>
            <div className='about'>CONTENT</div>
            <Container>
                <div className='d-flex justify-content-center lineContainer'>
                    <div className='line' />
                    <div className='line' />
                    <div className='line' />
                </div>
                <p className="section-description text-center my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. lvoluptatem.
                </p>
                <div className='mb-5 d-flex justify-content-evenly'>
                    <div className='row'>
                        <div className=' col-lg-6 col-md-6 col-sm-12'>
                            <div className="card shadow border-0" >
                                <div className="card-body bot">
                                    <div className='d-flex text mt-3'>
                                        <div className="p-4 bg-secondary-subtle rounded-circle bg-info-subtle">
                                            <CiLocationOn color='#0DCAF0' size={25} />
                                        </div>
                                        <div className=" ms-3 plan fw-bold fs-4">
                                            <p className="card-text">Location:</p>
                                            <h6>A108 Adam Street,New York,NY 535022</h6>
                                        </div>
                                    </div>
                                    <div className='d-flex text mt-3'>
                                        <div className="p-4 bg-secondary-subtle rounded-circle bg-info-subtle">
                                            <MdOutlineMailOutline color='#0DCAF0' size={25} />
                                        </div>
                                        <div className=" ms-3 plan fw-bold fs-4">
                                            <p className="card-text">Email:</p>
                                            <h6>info @examiple.com</h6>
                                        </div>
                                    </div>
                                    <div className='d-flex text mt-3'>
                                        <div className="p-4 bg-secondary-subtle rounded-circle bg-info-subtle">
                                            <MdCall color='#0DCAF0' size={25} />
                                        </div>
                                        <div className=" ms-3 plan fw-bold fs-4">
                                            <p className="card-text">Call:</p>
                                            <h6>+1 5589 55488 55s</h6>
                                        </div>
                                    </div>
                                    <img src={map} className="img-fluid my-4 rounded-3" alt="map" />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <div className="card shadow border-0" >
                                <div className="card-body bot">
                                    <div className='d-flex text mt-3'>
                                        <div className='d-flex justify-content-between'>
                                            <div className="mb-3">
                                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                                <input type="email" className="form-control" />
                                            </div>
                                            <div className=" ms-2">
                                                <label htmlFor="exampleInputPassword1" className="form-label ">Password</label>
                                                <input type="password" className="form-control" id="exampleInputPassword1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <label htmlFor="exampleInputPassword1" className="form-label">Subject</label>
                                        <input type="email" className="form-control" />
                                        <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                                        <input type="email" className="form-control p-5" />
                                    </div>
                                    <div className="d-grid gap-2 col-6 mx-auto mt-5">
                                        <button type="submit" className="card-button my-4  bg-info text-white border border-0">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container >
        </div >
    )
}

export default Content

import React from 'react'
import { Container } from 'react-bootstrap';
import { GoCheck } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import PricingCard from './PricingCard';

const Pricing = () => {
    const pricing = [
        {
            id: 1,
            title: "Free Plan",
            num: 0,
            icon: <BsCurrencyDollar />,
            text: "per month",
            get: "Get Started",
            marks: [
                {
                    id: 1,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
                {
                    id: 2,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
                {
                    id: 3,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
                {
                    id: 4,
                    desc: "Quam adipiscing vitae proin",
                    check: <IoClose color='lightgrey' size={25} />,
                    isMarks: true,
                },
                {
                    id: 5,
                    desc: "Quam adipiscing vitae proin",
                    check: <IoClose color='lightgrey' size={25} />,
                    isMarks: true,
                },
            ]
        },
        {
            id: 2,
            title: "Business Plan",
            num: 29,
            icon: <BsCurrencyDollar />,
            text: "per month",
            buttonBg: "red",
            get: "Get Started",
            blueButtonBg: true,
            marks: [
                {
                    id: 1,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
                {
                    id: 2,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
                {
                    id: 3,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
                {
                    id: 4,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
                {
                    id: 5,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
            ]
        },
        {
            id: 3,
            title: "Developer Plan",
            num: 49,
            icon: <BsCurrencyDollar />,
            text: "per month",
            get: "Get Started",
            // buttonBg:"#fff",
            marks: [
                {
                    id: 1,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
                {
                    id: 2,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
                {
                    id: 3,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
                {
                    id: 4,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
                {
                    id: 5,
                    desc: "Quam adipiscing vitae proin",
                    check: <GoCheck color='green' size={25} />,
                },
            ]
        },
    ]
    return (
        <div>
            <div className='about'>PRICING</div>
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
                <div className="row">

                    {pricing.map((item) => {
                        return (<PricingCard item={item} key={item.id}/>

                        )
                    })}
                    {/* {
                        marks.map((row) => {
                            return (<PricingCard row={row} />)
                        })
                    } */}

                    {/* <div className="col-md-6 col-lg-4">

                        <div className="card bg-white shadow mt-3 border-0">
                            <div className="card-body bor">
                                <h4 className="plan">Business Plan</h4>
                                <div className='d-flex'>
                                    <p className="card-text fs-5 colr fw-bold"><BsCurrencyDollar /></p>
                                    <p className="card-text fs-2 colr fw-bold">29</p>
                                </div>
                                <h6 className='per'>per month</h6>
                                <div>
                                    <div className='d-flex text my-3'>
                                        <GoCheck color='green' size={25} />
                                        <div className="my-3 ms-2 text-body-tertiary">{item.desc}</div>
                                    </div>
                                    <div className='d-flex text my-3'>
                                        <GoCheck color='green' size={25} />
                                        <div className="my-3 ms-2 text-body-tertiary">Nec feugiat nisl pretium</div>
                                    </div>
                                    <div className='d-flex text my-3'>
                                        <GoCheck color='green' size={25} />
                                        <div className="my-3 ms-2 text-body-tertiary">Nulla at volutpat diam uteera</div>
                                    </div>
                                    <div className='d-flex text my-3'>
                                        <GoCheck color='green' size={25} />
                                        <div className="my-3 ms-2 text-body-tertiary">pharetra massa massa ultricies</div>
                                    </div>
                                    <div className='d-flex text my-3'>
                                        <GoCheck color='green' size={25} />
                                        <div className="my-3 ms-2 text-body-tertiary">Massa ultricies mi quis hendrerit</div>
                                    </div>
                                </div>
                                <button className="card-button my-4  bg-info text-white border border-0">Get Started</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="card bg-white shadow mt-3 border-0">
                            <div className="card-body">
                                <h4 className="plan">Developer Plan</h4>
                                <div className='d-flex'>
                                    <p className="card-text fs-5 colr fw-bold"><BsCurrencyDollar /></p>
                                    <p className="card-text fs-2 colr fw-bold">49</p>
                                </div>
                                <h6 className='per'>per month</h6>
                                <div>
                                    <div className='d-flex text my-3'>
                                        <GoCheck color='green' size={25} />
                                        <div className="my-3 ms-2 text-body-tertiary">Quam adipiscing vitae proin</div>
                                    </div>
                                    <div className='d-flex text my-3'>
                                        <GoCheck color='green' size={25} />
                                        <div className="my-3 ms-2 text-body-tertiary">Nec feugiat nisl pretium</div>
                                    </div>
                                    <div className='d-flex text my-3'>
                                        <GoCheck color='green' size={25} />
                                        <div className="my-3 ms-2 text-body-tertiary">Nulla at volutpat diam uteera</div>
                                    </div>
                                    <div className='d-flex text my-3'>
                                        <GoCheck color='green' size={25} />
                                        <div className="my-3 ms-2 text-body-tertiary">pharetra massa massa ultricies</div>
                                    </div>
                                    <div className='d-flex text my-3'>
                                        <GoCheck color='green' size={25} />
                                        <div className="my-3 ms-2 text-body-tertiary">Massa ultricies mi quis hendrerit</div>
                                    </div>
                                </div>
                                <button className="card-button my-4">Get Started</button>
                            </div>
                        </div>
                    </div> */}

                </div>

            </Container>
        </div>
    )
}

export default Pricing

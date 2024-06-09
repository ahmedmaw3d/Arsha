import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
const TeamCard = ({item:TeamCardItem}) => {
     
//    const TeamCardItem= props.item;
    
    return (
        <div className="col-lg-6 col-md-6 col-sm-12">
            <div className='d-flex justify-content-between' >
                <div className="card m-3  shadow-lg p-3 mb-5 bg-body-tertiary rounded border-0" >
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 p-3 avatar">
                            <img src={TeamCardItem.image} width={150} className="rounded-circle " alt={TeamCardItem.title} />
                        </div>
                        <div className="col-lg-8 col-md-8">
                            <div className="card-body">
                                <h5 className="title fw-bold">{TeamCardItem.title}</h5>
                                <p className="card-text">{TeamCardItem.text}</p>
                                <div className='lines' />
                                <p className="card-text">{TeamCardItem.desc}</p>
                                <div className='d-flex '>
                                    <div className="circle">
                                        <div className='icon'>
                                            <TiSocialTwitter color='#012150' />
                                        </div>
                                    </div>
                                    <div className="circle">
                                        <div className='icon'>
                                            <TiSocialFacebook color='#012150' />
                                        </div>
                                    </div>
                                    <div className="circle">
                                        <div className='icon'>
                                            <FaInstagramSquare color='#012150' />
                                        </div>
                                    </div>
                                    <div className="circle">
                                        <div className='icon'>
                                            <IoLogoLinkedin color='#012150' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamCard

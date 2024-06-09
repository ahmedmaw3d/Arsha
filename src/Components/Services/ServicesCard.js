import React from 'react'

const ServicesCard = ({item}) => {
    return (
        <div className=' col-lg-3 col-md- col-sm-12' >
            <div className="card bg-white mb-3 shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                <div className=" p-4 pb-0">{item.image}</div>
                <div className="card-body">
                    <h5 className="card-title" style={{ color: "#2F4365" }}>{item.title}</h5>
                    <p className="card-text">{item.text}</p>
                </div>
            </div>
        </div>
    )
}

export default ServicesCard

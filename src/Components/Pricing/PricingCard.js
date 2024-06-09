import React from 'react'

const PricingCard = ({ item }) => {
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card shadow  border-0 bg-white mt-3 mb-5">
                <div className="card-body">
                    <h4 className="plan">{item.title}</h4>
                    <div className='d-flex'>
                        <p className="card-text fs-5 colr ">{item.icon}</p>
                        <p className="card-text fs-2 colr fw-bold">{item.num}</p>
                    </div>
                    <h6 className='per'>{item.text}</h6>
                    <div>
                        {item.marks.map((item) => (
                            <div className='d-flex text my-3' key={item.id}>
                                {item.check}
                                <div className={item.isMarks ? "text-decoration-line-through my-3 text-body-tertiary" : "my-3 ms-2 text-body-tertiary"}>{item.desc}</div>
                            </div>
                        ))}
                    </div>

                    <button className={item.blueButtonBg ? "card-button my-5" : "card-button blackCardButton my-5"}>{item.get}</button>

                </div>
            </div>
        </div>
    )
}
// style={{ backgroundColor:item.blueButtonBg ? "red":"black" }}

export default PricingCard

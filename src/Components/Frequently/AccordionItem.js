import React from 'react'
import { Accordion } from 'react-bootstrap'

const AccordionItem = ({ item }) => {
    return (
        <div className=' d-flex justify-content-center my-3'>
            <Accordion.Item eventKey={item.eventKey} className='accordion border-0'>
                <Accordion.Header >
                    <div className='text-info'>
                        {item.icon}
                        {item.title}
                    </div>
                </Accordion.Header>
                <Accordion.Body>
                    {item.desc}
                </Accordion.Body>
            </Accordion.Item>
        </div>
    )
}

export default AccordionItem

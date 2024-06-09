import React from 'react'
import { Accordion, Container } from 'react-bootstrap';
import { RxQuestionMarkCircled } from "react-icons/rx";
 import AccordionItem from './AccordionItem';
const Asked = () => {
    const AccordionData = [
        {
            id: 1,
            eventKey: "0",
            icon: <RxQuestionMarkCircled size={20} className='me-3' />,
            title: " Non consectetur a erat nam at lectus duis?",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."

        },
        {
            id: 2,
            eventKey: "1",
            icon: <RxQuestionMarkCircled size={20} className='me-3' />,
            title: "Lorem ipsum dolor sit",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."

        },
        {
            id: 3,
            eventKey: "2",
            icon: <RxQuestionMarkCircled size={20} className='me-3' />,
            title: "Lorem ipsum dolor sit",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."

        },
        {
            id: 4,
            eventKey: "3",
            icon: <RxQuestionMarkCircled size={20} className='me-3' />,
            title: "Lorem ipsum dolor sit",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."

        },
        {
            id: 5,
            eventKey: "4",
            icon: <RxQuestionMarkCircled size={20} className='me-3' />,
            title: "Lorem ipsum dolor sit",
            desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi utaliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt inculpa qui officia deserunt mollit anim id est laborum."

        },
    ]
    return (
        <div className='subtle'>
            <div className='about'>FREQUENTLY ASKED QUESTIONS</div>
            <Container>
                <div className='d-flex justify-content-center lineContainer'>
                    <div className='line' />
                    <div className='line' />
                    <div className='line' />

                </div>
                <div className='row mb-5'>
                    <p className="section-description text-center my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. lvoluptatem.
                    </p>
                    <Accordion>
                        {
                            AccordionData.map((item) =>
                            (<AccordionItem item={item} key={item.id}/>)
                            )
                        }
                    </Accordion>
                </div>
            </Container >
        </div>
    )
}

export default Asked

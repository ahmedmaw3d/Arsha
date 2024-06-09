import React from 'react'
import { Container } from 'react-bootstrap'
import a02 from '../../image/02.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';
const Skills = () => {
    const SkillsData = [
        {
            id: 1,
            title: "Html",
            count: "100"
        },
        {
            id: 2,
            title: "Css",
            count: "90"
        },
        {
            id: 3,
            title: "JavaScript",
            count: "75"
        },
        {
            id: 4,
            title: "PHOTOSHOP",
            count: "55"
        }
    ]
    return (
        <div>
            <Container>
                <div className='row mt-5'>
                    <div className='col-lg-6 col-md-6 sm-12 col-xs-12'>
                        <img src={a02} width={500} height={450} className='a02 rounded-3' alt='a02' />
                    </div>
                    <div className="skills col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <p className='fs-5 fw-bold colr a02'>
                            Voluptatem dignissimos
                        </p>
                        <p className='fs-5 fw-bold colr a02'>
                            provident quasi corporis
                        </p>
                        <p className='fs-5 fw-bold colr a02'>
                            voluptates.
                        </p>
                        <p className='fst-italic'>

                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores et reiciendis voluptatum, amet est natus
                            01 quaerat ducimus
                        </p>
                        {
                            SkillsData.map(item => {


                                return (
                                    <div className='my-3'key={item.id}>
                                        <h4 className='colr'>{item.title}</h4>
                                        <div className="">
                                            <ProgressBar now={item.count} label={`${item.count}%`} />
                                        </div>
                                    </div>
                                )

                            })
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Skills

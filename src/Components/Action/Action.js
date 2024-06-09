import React from 'react'
import { Container } from 'react-bootstrap'

const Action = () => {
  return (
    <div>
      <div className='div '>
      <div className='overlay'></div>
        <Container>
          <div className='position-relative z-3'>
            <div className="d-flex justify-content-between mt-5 z-3">
              <div className='my-5'>
                <div className='test'>
                  Call To Action
                </div>
                <p className='text-white'>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget
                  tincidunt.
                </p>
              </div>
              <div className='myl'>
                <button className='but' type="button">Call To Action</button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Action

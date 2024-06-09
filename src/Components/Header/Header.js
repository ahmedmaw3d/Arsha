import React from 'react'
import logo from "../../image/computer.jpg";
import { Container} from 'react-bootstrap';
import UnopDropdown from "unop-react-dropdown";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
const Header = () => {
  const handler = () => {

  }
  return (
    <div className="cat-header">
      <Container>

        <div className='row py-2'>
          <div className=' col-lg-6 col-md-2 col-sm-12 '>
            <div className="cat-text">ARSHA</div>
          </div>
          <div className="d-flex justify-content-end home col-lg-6 col-md-10 col-sm-12">
            <div className="cat-text-header text-info">Home</div>
            <div className="cat-text-header">About</div>
            <div className="cat-text-header"> Serices</div>
            <div className="cat-text-header">Portfollo</div>
            <div className="cat-text-header">Team</div>
          
          <div className="cat-text-header ">
            <UnopDropdown
              onAppear={handler}
              onDisappearStart={handler}
              trigger={
                <p className="mx-1">
                  Drop Down
                </p>
              }
              delay={0}
              align="CENTER"
              hover>
            </UnopDropdown>
            <GoChevronDown />
          </div>
          <div className="cat-text-header me-3">Contact</div>
          <button className='get'>Get Started</button>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-8 col-md-6 col-sm-12 text-white fs-1 fw-bold">
            <div>
              Better Solutions For
            </div>
            <div>
              Your Business
            </div>
            <div className="team">
              We are team of talented designers making
            </div>
            <div className="team">
              websites with Bootstrap
            </div>
            <div className="d-flex text-center align-self-center">
              <button className="start ">Get Started</button>
              <MdOutlineSlowMotionVideo size={30} className='my' />
              <h4 className="text-white ms-3 my fs-5">Watch Video</h4>

            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-12">
            <img src={logo} width={300} className="ms-5 mt-2 log rounded-3" alt="logo" />
          </div>
        </div>

      </Container>
    </div>
  )
}

export default Header

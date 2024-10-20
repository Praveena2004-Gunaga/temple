import React from 'react'
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <div>
      {/* <div className='row'>
        <div className='col'>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Temple Architecture</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/events">Click here</Link></button>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Daily Schedule</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/events">Click here</Link></button>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Deity Information</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/events">Click here</Link></button>
            </div>
          </div>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col'>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Festival Calendar</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/events">Click here</Link></button>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Spritiual Resources</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/events">Click here</Link></button>
            </div>
          </div>
        </div>
        <div className='col'>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/events">Click here</Link></button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="row">
      <div className="col-md-4 my-3">
          <div className="card card-inverse card-primary text-center">
            {/* <img className="card-img-top" src="./images/pic1.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Temple Architecture</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/architecture">Click here</Link></button>
            </div>
          </div>
        </div>

        <div className="col-md-4 my-3">
          <div className="card card-inverse card-primary text-center">
            {/* <img className="card-img-top" src="./images/pic2.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Daily Schedule</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/schedule">Click here</Link></button>
            </div>
          </div>
        </div>


        <div className="col-md-4 my-3">
          <div className="card card-inverse card-success text-center">
            {/* <img className="card-img-top" src="./images/pic3.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Deity Information</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/deity">Click here</Link></button>
            </div>
          </div>
        </div>



      </div>
      <div className="row my-3">
      <div className="col-md-4 my-3">
          <div className="card card-inverse card-primary text-center">
            {/* <img className="card-img-top" src="./images/pic4.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Festival Calendar</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/events">Click here</Link></button>
            </div>
          </div>
        </div>


        <div className="col-md-4 my-3">
          <div className="card card-inverse card-primary text-center">
            {/* <img className="card-img-top" src="./images/pic5.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Contact Information</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/contact">Click here</Link></button>
            </div>
          </div>
        </div>


        <div className="col-md-4 my-3">
          <div className="card card-inverse card-success text-center">
            {/* <img className="card-img-top" src="./images/pic6.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Spritiual Resources</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/spritiual">Click here</Link></button>
            </div>
          </div>
        </div>



      </div>
    </div>

  )
}

export default Card

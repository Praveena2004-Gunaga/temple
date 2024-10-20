import React from 'react'
import { Link } from 'react-router-dom'
const Events = () => {
  return (
    <div className='container'>
      <div className="row my-3">
      <div className="col-md-4 my-3">
          <div className="card card-inverse card-primary text-center">
            {/* <img className="card-img-top" src="./images/pic4.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Navratri</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/navratri">Know more</Link></button>
            </div>
          </div>
        </div>


        <div className="col-md-4 my-3">
          <div className="card card-inverse card-primary text-center">
            {/* <img className="card-img-top" src="./images/pic5.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Bandihabba</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/bandi">Know more</Link></button>
            </div>
          </div>
        </div>


        <div className="col-md-4 my-3">
          <div className="card card-inverse card-success text-center">
            {/* <img className="card-img-top" src="./images/pic6.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Annual Varadhanti Utsav</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/navchandi">Know more</Link></button>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3">
          <div className="card card-inverse card-success text-center">
            {/* <img className="card-img-top" src="./images/pic6.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Gadi Habba(Boundry festival)</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/gadi">Know more</Link></button>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3">
          <div className="card card-inverse card-success text-center">
            {/* <img className="card-img-top" src="./images/pic6.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Sahasara Kumkumarchanana Pooja </h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/kumkumarchane">Know more</Link></button>
            </div>
          </div>
        </div>
        <div className="col-md-4 my-3">
          <div className="card card-inverse card-success text-center">
            {/* <img className="card-img-top" src="./images/pic6.jpg" alt="Card image cap" /> */}
            <div className="card-block">
              <h4 className="card-title">Anant Chaturdasi</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <button type="button" className='btn btn-primary'><Link className="nav-link" to="/nopi">Know more</Link></button>
            </div>
          </div>
        </div>
            {/* <button className='btn btn-primary'><Link className="nav-link" to="/navratri">Navratri</Link></button> */}
            </div>  
    </div>
  )
}

export default Events

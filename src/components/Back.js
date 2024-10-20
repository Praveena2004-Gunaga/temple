import React from 'react'
import Card from './Card'
import './Back.css';
import {Link} from 'react-router-dom'
function Back() {
  return (
    <div>
      <div className='container my-4'>
      <div className="card mb-3" style={{maxwidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="./images/pic5.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">About Us</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
      </div>
      <div className='container my-5'>
        <div className="card text-center">
          <div className="card-header">
            <h2>History</h2>
          </div>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

          </div>
          <div className="card-footer text-body-secondary">
          <button type="button" className='btn btn-primary'><Link className="nav-link" to="/history">Know More</Link></button>
          </div>
        </div>
        <div className='container my-5'>
          <Card />
        </div>

      </div>

    </div>


  );
}

export default Back

import React from 'react'
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
  <div className="card-body">
    <h5 className="card-title">Events</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    
             <button type="button" className='btn btn-primary'><Link className="nav-link" to="/events">Click here</Link></button>   
             
  </div>
</div>
    </div>
  )
}

export default Card

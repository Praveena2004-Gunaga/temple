import React from 'react'
import { Link } from 'react-router-dom';
const Card = () => {
  return (
    <div>
      <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <li className="nav-item">
             <button><Link className="nav-link" to="/events">Events</Link></button>   
              </li>
  </div>
</div>
    </div>
  )
}

export default Card

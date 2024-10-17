import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary " style={{color:"$red-900"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src= "./images/om.jpg" width="40" height="40"  className="rounded-circle"/><b style={{color:"brown"}}><t/>  Shree Shantika Parameshwari Devi</b></a>
    
   
      <ul className="navbar-nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
     
    </div>
 
</nav>
    </div>
  )
}

export default Navbar

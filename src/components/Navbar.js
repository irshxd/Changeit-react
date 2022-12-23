import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
<div className="container-fluid">
<b><a className="navbar-brand" href="/">{props.title} </a></b>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
<ul className="navbar-nav me-auto mb-2 mb-lg-0">
  <li className="nav-item">
    <Link className="nav-link active" to="/">Home</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="/About">About Us</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link active" to="/Theme">Theme</Link>
  </li>

<li>
  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} my-2 mx-2`}>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
</div>
</li>

  <li className="nav-item">

  </li>
</ul>

<form className="d-flex" role="search">
  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
  <button className="btn btn-success" type="submit">Search</button>
</form>
</div>
</div>
</nav> 
    </div>
  )
}

export default Navbar

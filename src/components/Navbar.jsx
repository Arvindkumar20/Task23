// import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid col-8">
    <Link className="navbar-brand text-white" to="/">
    <img src="../home.webp" alt="logo" style={{
      width: "40px",
      height: "40px",
      borderRadius:"50%"
    }}/>
    </Link>
    <div className="collapse navbar-collapse ms-5" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="/home">Home</Link>
        </li>
       
     
      </ul>
   </div>
   
      <span className="navbar-text d-flex ">
      <button type="button" className="btn btn-outline-primary bg-success text-white me-2" >
      <Link className="nav-link  text-white"  to="/login">Login</Link>
      </button>
      <button type="button" className="btn btn-outline-primary bg-success text-white " >
        
      <Link className="nav-link  text-white"  to="/signup">SignUp</Link>

      </button>
      </span>
    </div>
 
</nav>
    </div>
  )
}

// import React from 'react'
export default function SignUp() {
  return (
    <div className='container-sm w-50 bg-dark text-light mt-5 p-5 rounded mx-auto' style={{
        boxShadow: '0 0 10px 10px rgba(0,0,0,0.5)',
        border: '1px solid rgba(255,255,255,0.5)',
    }}>
      <h1 className="fw-bold text-center">Sign Up</h1>
      <form className="d-flex flex-column justify-content-center" >
  <div className="mb-3">
  <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
  <input type="text" className="form-control" id="exampleInputEmail1" />
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text text-light">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" className="btn btn-primary">Sign Up</button>
</form>
    </div>
  )
}

import React from 'react'

const Login = () => {
    return (
        <>
    <form action="" >
      <div className="container mt-5">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
          />
          <label htmlFor="email">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className='text-center'>
            <button type="button" className="btn btn-outline-primary mt-2" style={{width:'fit-content' ,margin:'auto'}}>Login</button>
        </div>
      </div>
    </form>
    </>
    )
}

export default Login

import React from 'react'

const Login = () => {
    return (
        <>
    <form action="" >
      <div className="container mt-5">
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder="name@example.com"
          />
          <label for="email">Email address</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            placeholder="Password"
          />
          <label for="password">Password</label>
        </div>
        <div className='text-center'>
            <button type="button" class="btn btn-outline-primary mt-2" style={{width:'fit-content' ,margin:'auto'}}>Login</button>
        </div>
      </div>
    </form>
    </>
    )
}

export default Login

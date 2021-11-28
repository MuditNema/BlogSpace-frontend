import React from "react";

const Signup = () => {
  return (
    <>
    <form action="" >
      <div className="container mt-3">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="fname"
            name="fname"
            placeholder="name@example.com"
          />
          <label htmlFor="fname">First Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="lname"
            name="lname"
            placeholder="name@example.com"
          />
          <label htmlFor="lname">Last Name</label>
        </div>
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
            <button type="button" className="btn btn-outline-primary mt-2" style={{width:'fit-content' ,margin:'auto'}}>SignUp</button>
        </div>
      </div>
    </form>
    </>
  );
};

export default Signup;

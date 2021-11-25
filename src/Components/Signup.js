import React from "react";

const Signup = () => {
  return (
    <>
    <form action="" >
      <div className="container mt-3">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="fname"
            name="fname"
            placeholder="name@example.com"
          />
          <label for="fname">First Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="lname"
            name="lname"
            placeholder="name@example.com"
          />
          <label for="lname">Last Name</label>
        </div>
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
            <button type="button" class="btn btn-outline-primary mt-2" style={{width:'fit-content' ,margin:'auto'}}>SignUp</button>
        </div>
      </div>
    </form>
    </>
  );
};

export default Signup;

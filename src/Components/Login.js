import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import UserContext from "../UserContext/Usercontext";
import AlertContext from "../AlertContext/Alertcontext";
const Login = () => {
  const history = useHistory();
  const [UserCreds, setUserCreds] = useState({ email: "", password: "" });
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const usercontext = useContext(UserContext);
  const { LoginUser } = usercontext;
  const alertcontext = useContext(AlertContext);
  const {ShowAlert} = alertcontext;
  const KeyChange = async (e) => {
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
    if (e.target.name === "password") {
      setPassword(e.target.value);
    }
    setUserCreds({ ...UserCreds, [e.target.name]: e.target.value });
  };
  const SubmitClick = async (e) => {
    e.preventDefault();
    let ans = await LoginUser(UserCreds.email, UserCreds.password);
    if (ans) {
      await ShowAlert('success','Login Successful !!! Welcome')
      history.push("/myblogs");
    }
    else{
      await ShowAlert('danger','Login failed !!! Please try again')
    }
  };
  return (
    <>
      <form action="" onSubmit={SubmitClick}>
        <div className="container mt-5">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="name@example.com"
              onChange={KeyChange}
              value={Email}
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
              onChange={KeyChange}
              value={Password}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={Email.length === 0 || Password.length === 0}
              className="btn btn-outline-primary mt-2"
              style={{ width: "fit-content", margin: "auto" }}
            >
              Login
            </button>
          </div>
        </div>
      </form>
      <div className='container text-center mt-5'>
        Don't have an account ? <Link to='/signup'>Create an account</Link>
      </div>
    </>
  );
};

export default Login;

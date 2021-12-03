import React from "react";
import UserContext from "../UserContext/Usercontext";
import { useContext ,useState } from "react";
import { useHistory } from "react-router-dom";
import AlertContext from "../AlertContext/Alertcontext";
const Signup = () => {
  const history = useHistory();
  const [UserCreds, setUserCreds] = useState({fname:'',lname:'',email:'',password:''});
  const [Fname, setFname] = useState('')
  const [Lname, setLname] = useState('')
  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const usercontext = useContext(UserContext);
  const alertcontext = useContext(AlertContext);
  const {ShowAlert} = alertcontext;
  const {CreateUser} = usercontext;
  const KeyChange = async (e) => {
    if(e.target.name === 'fname') {setFname(e.target.value)}
    if(e.target.name === 'lname') {setLname(e.target.value)}
    if(e.target.name === 'email') {setEmail(e.target.value)}
    if(e.target.name === 'password') {setPassword(e.target.value)}
    setUserCreds({...UserCreds,[e.target.name] : e.target.value})
  }
  const SubmitClick = async (e) => {
    e.preventDefault();
    let ans = await CreateUser(UserCreds.fname,UserCreds.lname,UserCreds.email,UserCreds.password);
    if(ans){
      await ShowAlert('success','SignUp Successful !!! User Registered')
      history.push('/login');
    }
    else{
      await ShowAlert('danger','SignUp Fail !!! User Cannot be registered')
    }
  }
  return (
    <>
    <form onSubmit={SubmitClick}>
      <div className="container mt-3">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="fname"
            name="fname"
            placeholder="name@example.com"
            onChange={KeyChange}
            value={Fname}
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
            onChange={KeyChange}
            value={Lname}
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
        <div className='text-center'>
            <button type="submit" disabled={(Fname.length===0 || Lname.length===0 || Email.length===0 || Password.length===0)}className="btn btn-outline-primary mt-2" style={{width:'fit-content' ,margin:'auto'}}>SignUp</button>
        </div>
      </div>
    </form>
    </>
  );
};

export default Signup;

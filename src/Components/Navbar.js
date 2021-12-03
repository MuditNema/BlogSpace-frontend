import React from "react";
import { useState , useEffect , useContext} from "react";
import { useLocation , Link , useHistory} from "react-router-dom";
import UserContext from "../UserContext/Usercontext";
import Alert from "./Alert";
const Navbar = () => {
  const location = useLocation();
  const [LoggedIN, setLoggedIN] = useState(true);
  const usercontext = useContext(UserContext)
  const {authtoken,setauthtoken,setSuccess} = usercontext;
  useEffect(() => {
    setLoggedIN(!LoggedIN);
  }, [authtoken])
  return (
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            BlogSpace
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname==='/'?'active':''}`} aria-current="page" to="/">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link  ${location.pathname==='/myblogs'?'active':''}`}  to="/myblogs">
                  My Blogs
                </Link>
              </li>
            </ul>
            <form className="d-flex navform">
              <Link className={` ${LoggedIN?'':'d-none'}  btn btn-outline-success mx-2 navform-btn`} to="/login" role="button" onClick={()=>{
                setauthtoken('')
                setSuccess(false);
              }}>LogOut</Link>
              <Link className={` ${!LoggedIN?'':'d-none'}  btn btn-outline-success mx-2 navform-btn`} to="/login" role="button">LogIn</Link>
              <Link className={` ${!LoggedIN?'':'d-none'}  btn btn-outline-success mx-2 navform-btn`} to="/signup" role="button">SignUp</Link>
            </form>
          </div>
        </div>
      </nav>
    </div>
    <Alert/>
    </>
  );
};

export default Navbar;

import React from "react";
import { useState ,useEffect} from "react";
const Navbar = () => {
  const [LoggedIN, setLoggedIN] = useState(true);
  useEffect(() => {
    setLoggedIN(!LoggedIN);
  }, [])
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            BlogSpace
          </a>
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
                <a className="nav-link active" aria-current="page" href="#">
                  Explore
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  My Blogs
                </a>
              </li>
            </ul>
            <form className="d-flex navform">
              <button className={`${LoggedIN?'':'d-none'} btn btn-outline-success mx-2 navform-btn`}type="submit">
                LogOut
              </button>
              <button className={` ${!LoggedIN?'':'d-none'} btn btn-outline-success mx-2 navform-btn`} type="submit">
                LogIn
              </button>
              <button className={` ${!LoggedIN?'':'d-none'} btn btn-outline-success mx-2 navform-btn`}type="submit">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { useState, useEffect ,useContext} from "react";
import BlogItem from "./BlogItem";
import BlogContext from "../BlogContext/Blogcontext";


const Explore = () => {
  const blogcontext  = useContext(BlogContext);
  const {AllBlogs,GetAllBlogs} = blogcontext;
  useEffect(() => {
    GetAllBlogs();
    // eslint-disable-next-line
  }, []);
  return (
    <>

      {/* Paste the modal here */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                What's on your mind ?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp"/>
              </div>
              <div className="mb-3">
                <label htmlFor="content" className="form-label">Content</label>
                <textarea style={{height:`28vw`}} type="text" name='content' className="form-control" id="content"/>
              </div>
          
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                Save changes
              </button>
            </div>
            </form>
            </div>

          </div>
        </div>
      </div>
      {/* End of modal */}



      <div className="container mx-6">
        <div
          className="card text-black bg-muted my-3 mx-3"
          style={{ width: "100%" }}
        >
          <a
            className="btn btn-outline-secondary my-2 mx-3"
            href="#"
            role="button"
            style={{ width: "fit-content" }}
          >
            View Profile
          </a>
          <div className="card-body">
            <h5 className="card-title">
              Write Blog
              <i
                className="fas fa-plus mx-1"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              ></i>
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className=" row">
          {AllBlogs.map((e, i) => {
            return <BlogItem element={e} index={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Explore;

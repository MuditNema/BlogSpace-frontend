import React from "react";
import { useState, useEffect, useContext } from "react";
import BlogContext from "../BlogContext/Blogcontext";
import UserContext from "../UserContext/Usercontext";
import BlogItem from "./BlogItem";
import { useHistory } from "react-router-dom";
const MyBlogs = () => {
  const history = useHistory();
  const blogcontext = useContext(BlogContext);
  const { MyBlogs, GetMyBlogs, AddaBlog } = blogcontext;
  useEffect(() => {
    GetMyBlogs();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="container mx-6">
        <div
          className="card text-black bg-muted my-3 mx-3"
          style={{ width: "100%" }}
        >
          <div className='d-flex flex-row flex-wrap justify-content-between blog-menu'>
            <div>
              <a
                className=" btn btn-outline-secondary my-2 mx-3"
                href="#"
                role="button"
                style={{ width: "fit-content" }}
              >
                View Profile
              </a>
            </div>
            <div>
              <a
                className="btn btn-outline-secondary my-2 mx-3"
                href="#"
                role="button"
                style={{ width: "fit-content" }}
              >
                Delete My All Blogs
              </a>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Write Blog
              <i
                className="fas fa-plus mx-1"
                onClick={()=>{
                  history.push('/writeblog');
                }}
              ></i>
            </h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className=" row">
          {MyBlogs.map((e, i) => {
            return <BlogItem element={e} editable={true} index={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MyBlogs;

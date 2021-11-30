import React from "react";
import { useState, useEffect, useContext } from "react";
import BlogContext from "../BlogContext/Blogcontext";
import UserContext from "../UserContext/Usercontext";
import BlogItem from "./BlogItem";
const MyBlogs = () => {
  const blogcontext = useContext(BlogContext);
  const { MyBlogs, GetMyBlogs, AddaBlog } = blogcontext;
  useEffect(() => {
    GetMyBlogs();
    // eslint-disable-next-line
  }, []);

  const [Title, setTitle] = useState("");
  const [Content, setContent] = useState("");
  const [BlogItems, setBlogItems] = useState({ title: "", content: "" });
  const OnKeyChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "content") {
      setContent(e.target.value);
    }
    setBlogItems({ ...BlogItems, [e.target.name]: e.target.value });
  };

  const CreateABlog = (e) => {
    e.preventDefault();
    AddaBlog(BlogItems.title, BlogItems.content);
  };

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
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    aria-describedby="emailHelp"
                    value={Title}
                    onChange={OnKeyChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="content" className="form-label">
                    Content
                  </label>
                  <textarea
                    style={{ height: `28vw` }}
                    type="text"
                    name="content"
                    className="form-control"
                    id="content"
                    value={Content}
                    onChange={OnKeyChange}
                  />
                </div>

                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={CreateABlog}
                  >
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
          {MyBlogs.map((e, i) => {
            return <BlogItem element={e} editable={true} index={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MyBlogs;

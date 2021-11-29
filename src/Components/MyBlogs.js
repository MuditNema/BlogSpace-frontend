import React from "react";
import { useState, useEffect, useContext } from "react";
import BlogContext from "../BlogContext/Blogcontext";
import BlogItem from "./BlogItem";
const MyBlogs = () => {
  const blogcontext = useContext(BlogContext);
  const { MyBlogs, GetMyBlogs } = blogcontext;
  useEffect(() => {
    GetMyBlogs();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {/* Paste the modal here */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                What's on your mind ?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="title" class="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    name="title"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">
                    Content
                  </label>
                  <textarea
                    style={{ height: `28vw` }}
                    type="text"
                    name="content"
                    class="form-control"
                    id="content"
                  />
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-dismiss="modal"
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
      <div className=" container mx-6">
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
          {MyBlogs.map((e, i) => {
            return <BlogItem element={e} index={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MyBlogs;

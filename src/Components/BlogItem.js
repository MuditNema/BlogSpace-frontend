import React, { useContext, useEffect, useState } from "react";
import BlogContext from "../BlogContext/Blogcontext";
import UserContext from "../UserContext/Usercontext";
const BlogItem = (props) => {
  const usercontext = useContext(UserContext);
  const blogcontext = useContext(BlogContext);
  const { GetAUser } = usercontext;
  const { DeleteABlog , UpdateBlog} = blogcontext;
  const [User, setUser] = useState({})
  const [UserBlog, setUserBlog] = useState({title:props.element.title,content:props.element.content});
  useEffect(() => {
    const Run = async () => {
      let value = await GetAUser(props.element.user);
      setUser(value.GetUser);
      console.log(value.GetUser);
    };
    Run();
  }, []);
  const OnChangeKey = (e) => {
    setUserBlog({...UserBlog,[e.target.name]:e.target.value})
  }
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
                Updating your Blog
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
                    value={UserBlog.title}
                    onChange={OnChangeKey}
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
                    value={UserBlog.content}
                    onChange={OnChangeKey}
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
                    onClick={() => {
                      UpdateBlog(props.element._id,UserBlog.title,UserBlog.content)
                    }}
                  >
                    Update changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End of modal */}

      <div className="col-md- mx-3 my-3">
        <div className="card">
          <div className="card-header">
            <h5>{User.firstName + " " + User.lastName}</h5>
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.element.title}</h5>
            <p className="card-text">{props.element.content}</p>
            <div>
              <i
              
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className={`${props.editable ? "" : "d-none"} fas fa-pen mx-2`}
              ></i>
              <i
                onClick={() => {
                  DeleteABlog(props.element._id);
                }}
                className={`${
                  props.editable ? "" : "d-none"
                } fas fa-trash-alt mx-2`}
              ></i>
              <a href="#" className="btn btn-primary">
                See The Blog
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;

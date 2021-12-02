import React from "react";
import { useState, useEffect, useContext } from "react";
import BlogContext from "../BlogContext/Blogcontext";
import UserContext from "../UserContext/Usercontext";
import BlogItem from "./BlogItem";
import { useHistory } from "react-router-dom";
const MyBlogs = () => {
  const history = useHistory();
  const blogcontext = useContext(BlogContext);
  const { MyBlogs, GetMyBlogs,  UpdateBlog ,DeleteAllBlog} = blogcontext;
  const [UserBlog, setUserBlog] = useState({title:"",content:""});
  const [BlogTitle, setBlogTitle] = useState("");
  const [BlogContent, setBlogContent] = useState("");
  const [ID, setID] = useState('');
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
          <div className="d-flex flex-row flex-wrap justify-content-between blog-menu">
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
              <button
                className="btn btn-outline-secondary my-2 mx-3"
                role="button"
                style={{ width: "fit-content" }}
                onClick={async ()=>{
                  await DeleteAllBlog();
                }}
              >
                Delete My All Blogs
              </button>
            </div>
          </div>
          <div className="card-body">
            <h5 className="card-title">
              Write Blog
              <i
                className="fas fa-plus mx-1"
                onClick={() => {
                  history.push("/writeblog");
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
        {
              /* Paste the modal here */
            }
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
                    <form onSubmit={async (e)=>{
                      e.preventDefault();
                      UpdateBlog(ID,UserBlog.title,UserBlog.content)
                    }}>
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
                          value={BlogTitle}
                          onChange={(e)=>{
                            setBlogTitle(e.target.value)
                            setUserBlog({...UserBlog,[e.target.name]:e.target.value})
                          }}
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
                          value={BlogContent}
                          onChange={(e)=>{
                            setBlogContent(e.target.value)
                            setUserBlog({...UserBlog,[e.target.name]:e.target.value})
                          }}
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
                          type="submit"
                          className="btn btn-primary"
                          data-bs-dismiss="modal"
                          disabled={!(BlogContent.length !== 0 && BlogTitle.length !== 0)}
                        >
                          Update changes
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>;
            {
              /* End of modal */
            }
          {MyBlogs.map((e, i) => {
            // setBlogTitle(e.title);
            // setBlogContent(e.content);
            
            return (
              <>
                <BlogItem element={e} editable={true} index={i} Changer={{setBlogContent,setBlogTitle,setID,setUserBlog}}/>;
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MyBlogs;

import React,{useContext,useEffect,useState} from "react";
import BlogContext from "../BlogContext/Blogcontext";
import UserContext from '../UserContext/Usercontext';
const BlogItem = (props) => {
  const usercontext = useContext(UserContext);
  const blogcontext  = useContext(BlogContext);
  const {GetAUser} = usercontext;
  const {DeleteABlog} = blogcontext;
  const [User, setUser] = useState({})
  useEffect( () => {
    const Run = async () =>{
      let value = await GetAUser(props.element.user);
      setUser(value.GetUser)
      console.log(value.GetUser);
    }
    Run();
  }, [])
  const PressToDelete = async (id) => {
    const result = await DeleteABlog(props.element.id);
    console.log(result);
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

      <div className="col-md- mx-3 my-3">
        <div className="card">
          <div className="card-header">
            <h5>{User.firstName + ' ' + User.lastName}</h5>
          </div>
          <div className="card-body">
            <h5 className="card-title">{props.element.title}</h5>
            <p className="card-text">{props.element.content}</p>
            <div>
              <i
                className={`${props.editable ? "" : "d-none"} fas fa-pen mx-2`}
              ></i>
              <i className={`${props.editable ? "" : "d-none"} fas fa-trash-alt`}></i>
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

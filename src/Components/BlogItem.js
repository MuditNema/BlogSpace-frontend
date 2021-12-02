import React, { useContext, useEffect, useState } from "react";
import BlogContext from "../BlogContext/Blogcontext";
import UserContext from "../UserContext/Usercontext";
const BlogItem = (props) => {
  const usercontext = useContext(UserContext);
  const blogcontext = useContext(BlogContext);
  const { GetAUser } = usercontext;
  const { DeleteABlog } = blogcontext;
  const [User, setUser] = useState({});
  useEffect(() => {
    const Run = async() => {
      let value = await GetAUser(props.element.user);
      setUser(value.GetUser);
      console.log(value.GetUser);
    }
    Run();
  }, [])

  return (
    <>
      

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
              onClick={()=>{
                props.Changer.setUserBlog({title:props.element.title,content:props.element.content})
                props.Changer.setBlogTitle(props.element.title)
                props.Changer.setBlogContent(props.element.content);
                props.Changer.setID(props.element._id);
              }}
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

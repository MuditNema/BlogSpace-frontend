import React, { useContext, useEffect, useState } from "react";
import BlogContext from "../BlogContext/Blogcontext";
import UserContext from "../UserContext/Usercontext";
import { Link } from "react-router-dom";
import AlertContext from "../AlertContext/Alertcontext";
const BlogItem = (props) => {
  const usercontext = useContext(UserContext);
  const blogcontext = useContext(BlogContext);
  const alertcontext = useContext(AlertContext);
  const {ShowAlert} = alertcontext;
  const { GetAUser } = usercontext;
  const { DeleteABlog  , setBlogCreds} = blogcontext;
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
            <p className="card-text">{props.element.content.length > 150 ? `${props.element.content.slice(0,150)}...` :  props.element.content}</p>
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
                onClick={async() => {
                  let ans = await DeleteABlog(props.element._id);
                  if(ans){
                    await ShowAlert('success','Blog Deleted Successfully')
                  }
                  else{
                    await ShowAlert('danger','Failed to delete the blog')
                  }
                }}
                className={`${
                  props.editable ? "" : "d-none"
                } fas fa-trash-alt mx-2`}
              ></i>
              <Link onClick={()=>{
                setBlogCreds(props.element);
                console.log(props.element);
              }} to={`/${props.element._id}`} className="btn btn-primary">
                See The Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogItem;

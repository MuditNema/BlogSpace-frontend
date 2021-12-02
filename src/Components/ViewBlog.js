import React, { useContext , useState , useEffect } from "react";
import BlogContext from "../BlogContext/Blogcontext";
import UserContext from "../UserContext/Usercontext";

const ViewBlog = () => {
    const blogcontext = useContext(BlogContext);
    const usercontext = useContext(UserContext);
    const { GetAUser} = usercontext;
    const {BlogCreds} = blogcontext;
    const [MyUser, setMyUser] = useState({})
   
    useEffect(() => {
        if(!BlogCreds.user){
            return ;
        }
        const Run = async () => {
            let value = await GetAUser(BlogCreds.user);
            console.log(value);
            setMyUser(value.GetUser);
        }
        Run();
    }, [])
  return (
    <>
      {BlogCreds.user && <div className="container mt-5">
      <div className="card text-white bg-info mb-3" style={{ width : '100%'}}>
        <div className="card-header text-center"><span style={{float:'left'}}>Blog by</span>  <span > <h5>{`${MyUser.firstName} ${MyUser.lastName}`}</h5></span></div>
        
        <div className="card-body">
          <h5 className="card-title">{BlogCreds.title}</h5>
          <p className="card-text">
            {BlogCreds.content}
          </p>
        </div>
      </div>
      </div>}
    </>
  );
};

export default ViewBlog;
